import React from "react"
import { BrowserRouter, Routes,Route } from "react-router-dom"
import Signup from "./pages/Signup"
import Projects from "./pages/Projects"
import Signin from "./pages/Signin"
import Dashboard from "./pages/Dashboard"
import Home from "./pages/Hom"
import About from "./pages/Abut"



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/home" element = {<Home />}/> 
        <Route path = "/about" element = {<About />}/>
        <Route path ="/sign-in" element = {<Signin />} />
        <Route path ="/sign-up" element = {<Signup />} />
        <Route path ="/dashboard" element = {<Dashboard />} />
        <Route path ="/project" element = {<Projects />} />
      </Routes>
    
    
    </BrowserRouter>
  )
}
