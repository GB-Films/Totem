import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
import { getFirestore, type Firestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ?? "AIzaSyAG-EzaM7MsycKSwARHtFQpAjs9JWZ2Ywo",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN ?? "elgabinete-4c48c.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID ?? "elgabinete-4c48c",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET ?? "elgabinete-4c48c.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID ?? "535095251057",
  appId: import.meta.env.VITE_FIREBASE_APP_ID ?? "1:535095251057:web:7229179dd3a2b652db4bd0",
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
