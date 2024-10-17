import React from "react"
import { BrowserRouter, Routes,Route } from "react-router-dom"
import Signup from "./pages/Signup"
import Projects from "./pages/Projects"
import Signin from "./pages/Signin"
import Dashboard from "./pages/Dashboard"
import Home from "./pages/Hom"
import About from "./pages/Abut"
import Header from "./components/Header"
import Footer from "./components/Footer"


export default function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path = "/" element = {<Home />}/> 
        <Route path = "/about" element = {<About />}/>
        <Route path ="/sign-in" element = {<Signin />} />
        <Route path ="/sign-up" element = {<Signup />} />
        <Route path ="/dashboard" element = {<Dashboard />} />
        <Route path ="/project" element = {<Projects />} />
      </Routes>
    <Footer />
    </BrowserRouter>
  )
}
