import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// const firebaseConfig = {
//   apiKey: "AIzaSyAC7OoJFH6uDjIH-C_k67Vo-tn1o5N_pvU",
//   authDomain: "vp-menu.firebaseapp.com",
//   projectId: "vp-menu",
//   storageBucket: "vp-menu.appspot.com",
//   messagingSenderId: "1017422918212",
//   appId: "1:1017422918212:web:1d894ae6708cfaf2eb8211",
//   measurementId: "G-93D4MZHNMZ",
// }

const firebaseConfig = {
  apiKey: "AIzaSyB6iOWRlSdjyHyoRmksj-nUpqky9Ck169M",
  authDomain: "vp-menu-c6cf0.firebaseapp.com",
  projectId: "vp-menu-c6cf0",
  storageBucket: "vp-menu-c6cf0.appspot.com",
  messagingSenderId: "92844760903",
  appId: "1:92844760903:web:32bbfae45d1b6081fd7662",
  measurementId: "G-4B862FNPE6",
}

export const firebaseApp = initializeApp(firebaseConfig)
export const firestore = getFirestore()
export const drinkDb = "drink"
