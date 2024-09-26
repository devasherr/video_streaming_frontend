import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD0GAx3eV4NSFWzvh2E1mJ_jNKqx-_2Pn8",
  authDomain: "videostreaming-1e77b.firebaseapp.com",
  projectId: "videostreaming-1e77b",
  storageBucket: "videostreaming-1e77b.appspot.com",
  messagingSenderId: "796999639811",
  appId: "1:796999639811:web:01271e0230cc166c93bf36",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export default app;
