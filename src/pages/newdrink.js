import { collection, addDoc } from "firebase/firestore"
import { drinkDb } from "..//firebase/firebaseApp"
import { firestore } from "../firebase/firebaseApp"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export default function NewDrink() {
  const [form, setForm] = useState({
    name: "",
    alcoholPercentage: "",
    calories: "",
    taste: "",
  })
  const navigate = useNavigate()
  const handleSubmit = async (event) => {
    event.preventDefault()
    const { alcoholPercentage, calories, name, taste } = form
    const docData = {
      alcoholPercentage: alcoholPercentage,
      calories: calories,
      name: name,
      taste: taste,
    }
    console.log(docData)
    const docRef = await addDoc(collection(firestore, drinkDb), docData)
    console.log(docRef.id)
  }
  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>
      <h1>New Drink</h1>
      <form>
        <label>Name</label>
        <input onChange={(event) => setForm({ ...form, name: event?.target.value })} />

        <label>Alcohol Percentage</label>
        <input
          onChange={(event) =>
            setForm({ ...form, alcoholPercentage: event.target.value })
          }
        />

        <label>Calories</label>
        <input
          onChange={(event) => setForm({ ...form, calories: event?.target.value })}
        />

        <label>Taste</label>
        <input onChange={(event) => setForm({ ...form, taste: event?.target.value })} />

        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  )
}
