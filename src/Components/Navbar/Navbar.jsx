import React from 'react'
import './Navbar.css'
import full_nobg from '../../assets/full_nobg.png'

const Navbar = () => {
  return (

    <>
      <nav className='navContainer'>
        <img src={full_nobg} alt='' className='logo' />

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
