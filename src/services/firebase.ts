import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
import { getFirestore, type Firestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

export const firebaseEnabled = Object.values(firebaseConfig).every(Boolean);
export const publicFirebaseConfig = firebaseConfig;

let app: FirebaseApp | null = null;
let db: Firestore | null = null;

export function getFirebaseApp() {
  if (!firebaseEnabled) {
    return null;
  }

  if (!app) {
    app = getApps()[0] ?? initializeApp(firebaseConfig);
  }

  return app;
}

export function getFirebaseDb() {
  const app = getFirebaseApp();
  if (!app) {
    return null;
  }

  if (!db) {
    db = getFirestore(app);
  }

  return db;
}
