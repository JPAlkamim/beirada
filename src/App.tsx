import React from "react"
import { Home } from "./Components/Home"
import { Login } from "./Components/Login"
import { SignIn } from "./Components/SignIn"
import { BrowserRouter as Router, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />}/>
      <Route path="/signin" element={<SignIn />} />
    </>
  )
)

function App() {
  return (

    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
