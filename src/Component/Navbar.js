import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import './Navbar.css'

const Navbar = () => {
  return (
    <>
        <ul className='Nav'>
            <li>AddToBug</li>
            <li><FaCartShopping /></li>
        </ul>
    </>
  )
}

export default Navbar