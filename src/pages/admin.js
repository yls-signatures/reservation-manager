import { useEffect, useState } from "react"
import { collection, query, where, onSnapshot, doc, updateDoc } from "firebase/firestore"
import { firestore, drinkDb } from "../firebase/firebaseApp"
import { useNavigate } from "react-router-dom"
import Loader from "../components/loader"

export default function Admin() {
  const [docs, setDocs] = useState([])
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const q = query(collection(firestore, drinkDb), where("quantity", ">=", 0))
  useEffect(() => {
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let newDocs = []
      setLoading(true)
      querySnapshot.forEach((element) => {
        if (element.data().quantity > 0) {
          newDocs.push({
            id: element.id,
            data: element.data(),
          })
        }
      })
      setDocs(newDocs)
      setLoading(false)
    })
    return unsubscribe
  }, [q])

  const handleClear = () => {
    docs.forEach(async (element) => {
      const drinkRef = doc(firestore, drinkDb, element?.id)
      await updateDoc(drinkRef, {
        quantity: 0,
      })
    })
  }

  return (
    <>
      <div className="d-flex gap-3">
        <button
          type="button"
          className="btn btn-outline-dark"
          onClick={() => navigate("/")}
        >
          Home
        </button>
        <button
          type="button"
          className="btn btn-outline-dark"
          onClick={() => navigate("/admin/new")}
        >
          Add drink
        </button>
      </div>
      <div className="d-flex justify-content-between mt-3">
        <div>
          <h1 className="my-auto">Order list</h1>
        </div>
        <button
          className="btn btn-danger"
          onClick={handleClear}
          disabled={docs.length < 1}
        >
          Clear all
        </button>
      </div>
      {loading ? (
        <Loader />
      ) : docs?.length > 0 ? (
        <table className="table table-striped table-bordered mt-3">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col" className="text-end">
                Quantity
              </th>
            </tr>
          </thead>
          <tbody>
            {docs
              ?.filter(({ data }) => data?.quantity > 0)
              .map(({ data }, index) => (
                <tr key={index}>
                  <td className="text-uppercase">{data?.name}</td>
                  <td className="text-end">{data?.quantity}</td>
                </tr>
              ))}
          </tbody>
        </table>
      ) : (
        <div className="text-center">
          <h1>
            <em>No order</em>
          </h1>
        </div>
      )}
    </>
  )
}
