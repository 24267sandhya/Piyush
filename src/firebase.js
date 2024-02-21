import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDcTXnKsUnP0x0pJp7nd5puc9YHtfSsAtA",
  authDomain: "piyush-c183d.firebaseapp.com",
  projectId: "piyush-c183d",
  storageBucket: "piyush-c183d.appspot.com",
  messagingSenderId: "618283942433",
  appId: "1:618283942433:web:8ca8b500966d3e8031d960",
  measurementId: "G-1JHTHREPMS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);