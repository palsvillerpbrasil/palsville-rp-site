import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyByM0TF6UZevEf8Xk0swZsRJZp6JF-UaKk",
  authDomain: "palsville-rp.firebaseapp.com",
  projectId: "palsville-rp",
  storageBucket: "palsville-rp.firebasestorage.app",
  messagingSenderId: "955740604256",
  appId: "1:955740604256:web:f4735d79c66f5a66d68005"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db, doc, getDoc, setDoc };
