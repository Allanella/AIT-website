import React from 'react'
import './Products.css'
import cust from '../../assets/cust.png'
import LightCode from '../../assets/LightCode.jpeg'
import DriverCode from '../../assets/DriverCode.jpeg'
import arrow from '../../assets/arrow.webp'

const Products = () => {
  return (
    <div className='MyProducts'>
      <h3 className='pro'>Our products</h3>
       <img className='cus'  src= {cust} alt='' />
       <img className='light' src={LightCode} alt='' />
       <img className='driver' src={DriverCode} alt='' />
       <button className='myButton dark-btn'>see more here <img src={arrow} alt=''/> </button>


    </div>
  )
}

export default Products
