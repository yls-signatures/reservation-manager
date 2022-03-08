import { collection, addDoc } from "firebase/firestore"
import { drinkDb } from "..//firebase/firebaseApp"
import { firestore } from "../firebase/firebaseApp"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Loader from "../components/loader"

export default function NewDrink() {
  const [form, setForm] = useState({
    name: "",
    filepath: "",
  })
  const [error, setError] = useState("")
  const [feedback, setFeedback] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const handleSubmit = async (event) => {
    event.preventDefault()
    const { name, filepath } = form
    setLoading(true)
    try {
      const docRef = await addDoc(collection(firestore, drinkDb), {
        name: name,
        filepath: filepath,
      })
      setFeedback(`Added successfully. Id: ${docRef.id}`)
    } catch (error) {
      console.error(error)
      setError(error)
    } finally {
      setLoading(false)
    }
  }
  return (
    <div>
      <button onClick={() => navigate(-1)} className="btn btn-outline-dark">
        Back
      </button>
      <h1>New Drink</h1>
      {loading ? (
        <Loader />
      ) : (
        <>
          {error && <div className="alert alert-danger">{error}</div>}
          {feedback && <div className="alert alert-success">{feedback}</div>}
          <form className="w-50">
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) => setForm({ ...form, name: event.target.value })}
              />
              <div className="form-text">First 3 char will be used as Symbol.</div>
            </div>
            <div className="mb-3">
              <label className="form-label">Image Path</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) => setForm({ ...form, filepath: event.target.value })}
              />
              <div className="form-text">/mojito.png</div>
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              disabled={loading}
              className="btn btn-primary"
            >
              Submit
            </button>
          </form>
        </>
      )}
    </div>
  )
}
