import { collection, query, getDocs, where } from "firebase/firestore"
import { firestore } from "./firebase/firebaseApp"
import { useState, useEffect } from "react"
import { drinkDb } from "./firebase/firebaseApp"
import Flipcard from "./components/flipcard"
import Hero from "./components/hero"
import Loader from "./components/loader"
import { Link } from "react-router-dom"

function App() {
  const [docs, setDocs] = useState([])
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  // Fetch all drinks
  useEffect(() => {
    const queryForDocuments = async () => {
      let newDocs = []
      try {
        setLoading(true)
        const querySnapshot = await getDocs(collection(firestore, drinkDb))
        querySnapshot.forEach((doc) => {
          newDocs.push({
            id: doc.id,
            data: doc.data(),
          })
        })
        setDocs(newDocs)
        console.log(newDocs)
      } catch (error) {
        console.error(error)
        setError(error)
      } finally {
        setLoading(false)
      }
    }
    queryForDocuments()
  }, [])

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {/* <Link to="/admin">admin</Link> */}
          <Hero />
          <Flipcard docs={docs} />
          <h6 className="text-center" style={{ marginTop: 200, marginBottom: 30 }}>
            ENJOY
          </h6>
        </>
      )}
    </>
  )
}

export default App
