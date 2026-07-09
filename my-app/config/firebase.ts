// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpWVRVIZhTVjIqmwCBF-Omlo-tjIuxaIw",
  authDomain: "react-native-login-2ee6e.firebaseapp.com",
  projectId: "react-native-login-2ee6e",
  storageBucket: "react-native-login-2ee6e.firebasestorage.app",
  messagingSenderId: "342893661916",
  appId: "1:342893661916:web:4553b2377fd92bdfe06e19"
};


const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const db = getFirestore(app);