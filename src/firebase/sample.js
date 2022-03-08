import { getAuth, onAuthStateChanged } from "firebase/auth"
import { firebaseApp, firestore } from "./firebaseApp"
import { doc, collection, getDoc, setDoc, query, getDocs } from "firebase/firestore"

export default function Sample() {
  const auth = getAuth(firebaseApp)
  const handleClick = () => {
    onAuthStateChanged(auth, (user) => {
      if (user != null) {
        console.log("Logged in")
      } else {
        console.log("No user")
      }
    })
  }

  const myDoc = doc(firestore, "drink/1")
  const writeDoc = () => {
    const docData = {
      alcoholPercentage: 66,
      calories: 240,
      name: "mojito",
      taste: "refreshing",
    }
    console.log(docData)
    setDoc(myDoc, docData)
  }
  const readDoc = async () => {
    const mySnapshot = await getDoc(myDoc)
    if (mySnapshot.exists()) {
      const docData = mySnapshot.data()
      console.log(docData)
    }
  }

  const queryForDocuments = async () => {
    const orderQuery = query(collection(firestore, "drink"))
    const querySnapshot = await getDocs(orderQuery)
    const allDocs = querySnapshot.forEach((doc) => console.log(doc.data()))
  }

  return (
    <div>
      <button onClick={handleClick}>check state</button>
    </div>
  )
}
