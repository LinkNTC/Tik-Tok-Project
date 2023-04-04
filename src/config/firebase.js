import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDaD1vNd0lgzxZ97X-FCNRXqBNaQ4CMs7s",
  authDomain: "tiktok---jornada-9f10f.firebaseapp.com",
  projectId: "tiktok---jornada-9f10f",
  storageBucket: "tiktok---jornada-9f10f.appspot.com",
  messagingSenderId: "830775592768",
  appId: "1:830775592768:web:4582258a816b4e76235ca5",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
