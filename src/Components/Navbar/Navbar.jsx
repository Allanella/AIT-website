import React from 'react'
import './Navbar.css'
import Logo from '../../assets/Logo.jpg'

const Navbar = () => {
  return (

    <>
      <nav className='navContainer'>
        <img src={Logo} alt='' className='logo' />

        <ul>
          <li>Home</li>
          <li>Programs</li>
          <li>Products</li>
          <li>Services</li>
          <li><button className='myButton'> Contact us</button></li> {/* Created a button for the Contact us*/}



        </ul>
      </nav>


    </>
  )

}

export default Navbar
