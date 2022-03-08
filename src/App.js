import { collection, getDocs } from "firebase/firestore"
import { firestore } from "./firebase/firebaseApp"
import { useState, useEffect } from "react"
import { drinkDb } from "./firebase/firebaseApp"
import Flipcard from "./components/flipcard"
import Hero from "./components/hero"
import Loader from "./components/loader"
import { useSpring, animated } from "react-spring"

function App() {
  const [docs, setDocs] = useState([])
  const [loading, setLoading] = useState(false)
  const props = useSpring({
    to: { opacity: 1, y: 0 },
    from: { opacity: 0, y: 20 },
    config: { duration: 550 },
  })

  const props2 = useSpring({
    to: { opacity: 1, y: 0 },
    from: { opacity: 0, y: 15 },
    config: { duration: 500 },
    delay: 600,
  })

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
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    queryForDocuments()
  }, [])

  return (
    <main>
      {loading ? (
        <Loader />
      ) : (
        <>
          {/* <Link to="/admin">admin</Link> */}
          <animated.div style={props}>
            <Hero />
          </animated.div>

          <animated.div style={props2}>
            <Flipcard docs={docs} />
          </animated.div>

          <h6 className="text-center" style={{ marginTop: 50, marginBottom: 30 }}>
            Enjoy.
          </h6>
        </>
      )}
    </main>
  )
}

export default App
