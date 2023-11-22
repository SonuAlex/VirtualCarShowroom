import React from 'react'
import './Navbar.css'

import logo from '../../Assets/logo.png'
import {IoIosCloseCircle} from 'react-icons/io'
import {TbGridDots} from 'react-icons/tb'

const Navbar = () => {
  return (
    <div className='header'>
        <div className="logoDiv">
          <img src={logo} alt="" className="logo" />
        </div>

        <div className="navbar">
          <ul className="menu">
            <li className="listItem">
              <a href="/" className="link">Used Cars</a>
            </li>
            <li className="listItem">
              <a href="/" className="link">New Cars</a>
            </li>
            <li className="listItem">
              <a href="/" className="link">Auctions</a>
            </li>
            <li className="listItem">
              <a href="/" className="link">Sellers</a>
            </li>
          </ul>

          {/* Icon to close the menu when the screen is smaller */}
          <IoIosCloseCircle className='icon closeIcon'/>
        </div>

        <div className="signup flex">
          <div className="text">Sign Up</div>
          {/* Icon to open the menu when the screen is smaller */}
          <TbGridDots className='icon'/>
        </div>
    </div>
  )
}

export default Navbar