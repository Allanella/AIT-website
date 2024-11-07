import React from 'react'
import './Products.css'
import cust from '../../assets/cust.png'
import LightCode from '../../assets/LightCode.jpeg'
import DriverCode from '../../assets/DriverCode.jpeg'

const Products = () => {
  return (
    <div className='MyProducts'>
      <h3 className='pro'>Our products</h3>
       <img className='cus'  src= {cust} alt='' />
       <img className='light' src={LightCode} alt='' />
       <img className='driver' src={DriverCode} alt='' />


    </div>
  )
}

export default Products
