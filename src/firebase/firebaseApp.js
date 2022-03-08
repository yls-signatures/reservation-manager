import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAC7OoJFH6uDjIH-C_k67Vo-tn1o5N_pvU",
  authDomain: "vp-menu.firebaseapp.com",
  projectId: "vp-menu",
  storageBucket: "vp-menu.appspot.com",
  messagingSenderId: "1017422918212",
  appId: "1:1017422918212:web:1d894ae6708cfaf2eb8211",
  measurementId: "G-93D4MZHNMZ",
}

export const firebaseApp = initializeApp(firebaseConfig)
export const firestore = getFirestore()
export const drinkDb = "drink"
export const orderDb = "orders"
