import React from 'react'
import  './nav.css'
import { CgProfile } from 'react-icons/cg'
import { IoSearchOutline } from 'react-icons/io5'
import { FaOpencart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Manor</h1>
      </div>
      <div className="pageslist">
        <Link to={'/'}>Home</Link>
        <Link to={'/Womens'}>Women's</Link>
        <Link to={'/Mens'}>Men's</Link>
        <Link to={'/Shop'}>Shop</Link>
        <Link to={'/Contact'}>Contact</Link>


      </div>
      <div className="icons">
      <Link to={"/Login"}><CgProfile /> </Link>|
      <IoSearchOutline />|
      <FaOpencart />


      </div>
    </nav>
  )
}

export default Navbar