import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import "bootstrap/dist/css/bootstrap.css"
import BaseLayout from "./components/base"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Admin from "./pages/admin"
import NewDrink from "./pages/newdrink"
import NoMatch from "./pages/nomatch"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<App />} />
          <Route path="admin/new" element={<NewDrink />} />
          <Route path="admin" element={<Admin />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
