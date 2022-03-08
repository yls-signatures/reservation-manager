import { setDoc, doc, updateDoc, increment } from "firebase/firestore"
import { useState, useEffect } from "react"
import { drinkDb, orderDb } from "../firebase/firebaseApp"
import { firestore } from "../firebase/firebaseApp"

export default function Flipcard({ docs }) {
  const [isActive, setIsActive] = useState([])

  // Intialize an array that keep track of flipped card
  useEffect(() => {
    let initArray = new Array(docs.length).fill(false)
    setIsActive(initArray)
  }, [docs])

  // Toggle active for corresponding card
  const toggleActive = (index) => {
    let newArray = []
    for (let i = 0; i < isActive.length; i++) {
      if (index === i) {
        newArray.push(!isActive[i])
      } else {
        newArray.push(false)
      }
    }
    setIsActive(newArray)
  }

  const handleOrder = async (id) => {
    const drinkRef = doc(firestore, drinkDb, id)
    await updateDoc(drinkRef, {
      quantity: increment(1),
    })
  }

  return (
    <div className="d-flex flex-lg-row flex-column gap-3 align-items-center justify-content-center">
      {docs &&
        docs?.map(({ id, data }, index) => (
          <div className="flip-card-container" key={id}>
            <div
              className={isActive[index] ? "flip-card flipped" : "flip-card"}
              onClick={() => toggleActive(index)}
            >
              <div className="front">
                <img src={data?.filepath} />
              </div>
              <div className="back">
                <button
                  className="text-capitalize btn btn-outline-dark order-btn"
                  onClick={() => handleOrder(id)}
                >{`order ${data?.name}`}</button>
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}
