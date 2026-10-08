import React from 'react'
import Navbar from './components/Navbar'
import "./app.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Womens from './pages/womens'
import Mens from './pages/Mens'
import Contact from './pages/Contact'
import Shop from './pages/Shop'
import Login from './pages/Login'
import Reg from './pages/Reg'
import Home from './pages/Home'
import Footer from './components/Footer'
const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Womens" element={<Womens />} />
        <Route path="/Mens" element={<Mens />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Reg" element={<Reg />} />
      </Routes>
<Footer/>

    </BrowserRouter>
  )
}

export default App