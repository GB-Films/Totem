import { createContext, PropsWithChildren, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, type User } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { firebaseEnabled, getFirebaseApp, getFirebaseDb } from "../services/firebase";

interface AuthContextValue {
  user: User | null;
  isAdmin: boolean;
  checkingAuth: boolean;
  checkingAdmin: boolean;
  authError: string;
  loginWithGoogle: () => Promise<User | null>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

function getFirebaseErrorMessage(error: unknown) {
  const firebaseError = error as { code?: string; message?: string };
  return `No se pudo abrir el login de Google (${firebaseError.code ?? "error desconocido"}). ${
    firebaseError.message ?? "Revisá que el dominio esté autorizado en Firebase Auth."
  }`;
}

export function AuthProvider({ children }: PropsWithChildren) {
  const app = getFirebaseApp();
  const auth = app ? getAuth(app) : null;
  const db = getFirebaseDb();
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(firebaseEnabled);
  const [checkingAdmin, setCheckingAdmin] = useState(false);
  const [authError, setAuthError] = useState("");

  useEffect(() => {
    if (!auth || !db) {
      setCheckingAuth(false);
      setCheckingAdmin(false);
      return;
    }

    return onAuthStateChanged(auth, async (nextUser) => {
      setCheckingAuth(false);
      setUser(nextUser);
      setIsAdmin(false);
      setAuthError("");

      if (!nextUser?.email) {
        setCheckingAdmin(false);
        return;
      }

      setCheckingAdmin(true);
      try {
        const adminDoc = await getDoc(doc(db, "adminEmails", nextUser.email));
        setIsAdmin(Boolean(adminDoc.exists() && adminDoc.data().active === true));
      } catch (error) {
        console.error(error);
        setIsAdmin(false);
        setAuthError("No se pudieron verificar permisos de administrador.");
      } finally {
        setCheckingAdmin(false);
      }
    });
  }, [auth, db]);

  const loginWithGoogle = useCallback(async () => {
    if (!auth) {
      setAuthError("Firebase no está configurado.");
      return null;
    }

    try {
      setAuthError("");
      const credential = await signInWithPopup(auth, new GoogleAuthProvider());
      return credential.user;
    } catch (error) {
      console.error(error);
      setAuthError(getFirebaseErrorMessage(error));
      return null;
    }
  }, [auth]);

  const logout = useCallback(async () => {
    if (!auth) {
      return;
    }
    await signOut(auth);
  }, [auth]);

  const value = useMemo(
    () => ({
      user,
      isAdmin,
      checkingAuth,
      checkingAdmin,
      authError,
      loginWithGoogle,
      logout,
    }),
    [authError, checkingAdmin, checkingAuth, isAdmin, loginWithGoogle, logout, user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe usarse dentro de AuthProvider");
  }
  return context;
}
