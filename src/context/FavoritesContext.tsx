import { createContext, PropsWithChildren, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { useAuth } from "./AuthContext";

interface FavoritesContextValue {
  favoriteIds: string[];
  isFavorite: (productId: string) => boolean;
  toggleFavorite: (productId: string) => void;
  removeFavorite: (productId: string) => void;
}

const STORAGE_KEY = "el-gabinete-favorites";
const FavoritesContext = createContext<FavoritesContextValue | undefined>(undefined);

function getStorageKey(uid?: string) {
  return uid ? `${STORAGE_KEY}-${uid}` : `${STORAGE_KEY}-guest`;
}

function readFavorites(uid?: string) {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const stored = window.localStorage.getItem(getStorageKey(uid));
    const parsed = stored ? JSON.parse(stored) : [];
    return Array.isArray(parsed) ? parsed.filter((id): id is string => typeof id === "string") : [];
  } catch {
    return [];
  }
}

export function FavoritesProvider({ children }: PropsWithChildren) {
  const { user } = useAuth();
  const [favoriteIds, setFavoriteIds] = useState<string[]>(() => readFavorites(user?.uid));

  useEffect(() => {
    setFavoriteIds(readFavorites(user?.uid));
  }, [user?.uid]);

  useEffect(() => {
    window.localStorage.setItem(getStorageKey(user?.uid), JSON.stringify(favoriteIds));
  }, [favoriteIds, user?.uid]);

  const isFavorite = useCallback(
    (productId: string) => favoriteIds.includes(productId),
    [favoriteIds],
  );

  const toggleFavorite = useCallback((productId: string) => {
    setFavoriteIds((current) =>
      current.includes(productId)
        ? current.filter((id) => id !== productId)
        : [...current, productId],
    );
  }, []);

  const removeFavorite = useCallback((productId: string) => {
    setFavoriteIds((current) => current.filter((id) => id !== productId));
  }, []);

  const value = useMemo(
    () => ({
      favoriteIds,
      isFavorite,
      toggleFavorite,
      removeFavorite,
    }),
    [favoriteIds, isFavorite, removeFavorite, toggleFavorite],
  );

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites debe usarse dentro de FavoritesProvider");
  }
  return context;
}
