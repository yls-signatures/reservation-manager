import { useState, useEffect } from "react"

export default function Flipcard({ docs }) {
  const [isActive, setIsActive] = useState([])

  // Intialize an array that keep track of flipped card
  useEffect(() => {
    let initArray = new Array(docs.length).fill(false)
    setIsActive(initArray)
    console.log(initArray)
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
    console.log(newArray)
  }

  return (
    <div className="d-flex flex-lg-row flex-column gap-3 align-items-center justify-content-center">
      {docs &&
        docs?.map(({ name, filepath }, index) => (
          <div className="flip-card-container" key={`${name}_${index}`}>
            <div
              className={isActive[index] ? "flip-card flipped" : "flip-card"}
              onClick={() => toggleActive(index)}
            >
              <div className="front">
                <img src={filepath} />
              </div>
              <div className="back">
                <button
                  className="text-capitalize btn btn-outline-dark"
                  style={{ fontSize: "2rem" }}
                >{`order ${name}`}</button>
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}
