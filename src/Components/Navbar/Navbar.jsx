import React, {useState} from 'react'
import './Navbar.css'

import logo from '../../Assets/logo.png'
import {IoIosCloseCircle} from 'react-icons/io'
import {TbGridDots} from 'react-icons/tb'

const Navbar = () => {
  const [navbar, setNavbar] = useState('navbar')

  // To show the Navbar on small screens
  const showNavbar = () => {
    setNavbar('navbar showNavbar')
  }

  // To hide the Navbar on small screens
  const removeNavbar = () => {
    setNavbar('navbar')
  }

  // Background change of the menu
  const [header, setHeader] = useState('header')
  const addBg = () => {
    if(window.scrollY >= 20){
      setHeader('header addBg')
    }
  }
  window.addEventListener('scroll', addBg)

  return (
    <div className= {header}>
        <div className="logoDiv">
          <img src={logo} alt="logo" className="logo" />
        </div>

        <div className={navbar}>
          <ul className="menu">
            <li onClick={removeNavbar} className="listItem">
              <a href="/" className="link">Used Cars</a>
            </li>
            <li onClick={removeNavbar} className="listItem">
              <a href="/" className="link">New Cars</a>
            </li>
            <li onClick={removeNavbar} className="listItem">
              <a href="/" className="link">Auctions</a>
            </li>
            <li onClick={removeNavbar} className="listItem">
              <a href="/" className="link">Sellers</a>
            </li>
          </ul>

          {/* Icon to close the menu when the screen is smaller */}
          <IoIosCloseCircle className='icon closeIcon' onClick={removeNavbar}/>
        </div>

        <div className="signup flex">
          <div className="text">Sign Up</div>
          {/* Icon to open the menu when the screen is smaller */}
          <TbGridDots className='icon toggleNavbarIcon' onClick={showNavbar}/>
        </div>
    </div>
  )
}

export default Navbar