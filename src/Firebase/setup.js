import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD-rtXuLpGXTdJ0ulRBpKgiop89KnlubB0",
  authDomain: "fir-phone-auth-bb05e.firebaseapp.com",
  projectId: "fir-phone-auth-bb05e",
  storageBucket: "fir-phone-auth-bb05e.firebasestorage.app",
  messagingSenderId: "94850034410",
  appId: "1:94850034410:web:433536d5b54aca224c0593",
  measurementId: "G-1XSWRDPN2G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
