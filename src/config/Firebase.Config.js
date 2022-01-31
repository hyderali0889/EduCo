import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyAYdGqoTxwY7kEk-k9p-Ny2HCcpK2kZNfQ",
  authDomain: "fir-web-basics-19c28.firebaseapp.com",
  projectId: "fir-web-basics-19c28",
  storageBucket: "fir-web-basics-19c28.appspot.com",
  messagingSenderId: "699328900975",
  appId: "1:699328900975:web:44b3c13377bb4cbb3dc29a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);