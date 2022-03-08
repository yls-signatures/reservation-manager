import { useEffect, useState } from "react"
import { collection, query, getDocs } from "firebase/firestore"
import { firestore, orderDb } from "../firebase/firebaseApp"
import { Link } from "react-router-dom"

export default function Admin() {
  const [docs, setDocs] = useState([])
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const queryForDocuments = async () => {
      let newDocs = []
      try {
        setLoading(true)
        const orderQuery = query(collection(firestore, orderDb))
        const querySnapshot = await getDocs(orderQuery)
        if (!querySnapshot.empty) {
          querySnapshot.forEach((doc) => {
            newDocs.push(doc.data())
          })
          setDocs(newDocs)
        }
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
      <h1>Admin page</h1>
      <Link to="/">Home</Link>
      <br />
      <Link to="/admin/new">New Drink</Link>
      <h2>Order list</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Time</th>
            <th scope="col">Name</th>
            <th scope="col">Drink</th>
            <th scope="col">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {docs &&
            docs?.map(({ quantity, name, drink, time }, index) => (
              <tr key={index}>
                <td>{time.seconds}</td>
                <td>{name}</td>
                <td>{drink}</td>
                <td>{quantity}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  )
}
