import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB0Hlwmgjb_9Q-wFlNLI1TT_4XMbN60k1I",
  authDomain: "netflix-clone-react-js-13c9e.firebaseapp.com",
  projectId: "netflix-clone-react-js-13c9e",
  storageBucket: "netflix-clone-react-js-13c9e.appspot.com",
  messagingSenderId: "81166203411",
  appId: "1:81166203411:web:6005c21ffe053902ef1de6",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
