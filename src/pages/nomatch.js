import { Link } from "react-router-dom"

export default function NoMatch() {
  return (
    <div>
      <h1>The page you are looking for doesnt exist</h1>
      <Link to="/">Click here to go back to homepage</Link>
    </div>
  )
}
