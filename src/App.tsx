import React from "react"
import { Home } from "./Components/Home"
import { Login } from "./Components/Login"
import { SignIn } from "./Components/SignIn"
import { About } from "./Components/About"
import { Contact } from "./Components/Contact"
import { Profile } from "./Components/Profile"
import { Subjects } from "./Components/Subjects"
import { SubjectContent } from "./Components/SubjectContent"
import { Gallery } from "./Components/Gallery"
import { FanArea } from "./Components/FanArea"
import { BrowserRouter as Router, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />}/>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/subjects" element={<Subjects />} />
      <Route path="/subjectcontent" element={<SubjectContent />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/fanarea" element={<FanArea />} />
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