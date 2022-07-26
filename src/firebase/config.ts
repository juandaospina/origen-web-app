import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDuXGKHZD6K0VRQ4CLLF2-XYji5fsSlt1I",
  authDomain: "origen-app-118de.firebaseapp.com",
  projectId: "origen-app-118de",
  storageBucket: "origen-app-118de.appspot.com",
  messagingSenderId: "787192623397",
  appId: "1:787192623397:web:7a836248858fe46c15aacc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);