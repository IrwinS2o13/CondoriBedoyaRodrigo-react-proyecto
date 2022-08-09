import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD8RaNJXdITwkFcDvqPDTDzQ5LMxNPKPIk",
  authDomain: "coderhouse-ecommerce-e951b.firebaseapp.com",
  projectId: "coderhouse-ecommerce-e951b",
  storageBucket: "coderhouse-ecommerce-e951b.appspot.com",
  messagingSenderId: "368103916519",
  appId: "1:368103916519:web:baa30770f3e407edaf7342"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase=()=>{
    return app
}
