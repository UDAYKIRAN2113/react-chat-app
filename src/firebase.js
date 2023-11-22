import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAWoKr9aU8jBRDQ7CPQ_BvoVeN5irzNbug",
  authDomain: "chat-de05c.firebaseapp.com",
  projectId: "chat-de05c",
  storageBucket: "chat-de05c.appspot.com",
  messagingSenderId: "1016357065818",
  appId: "1:1016357065818:web:257c8cd3cae3b016023463"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();