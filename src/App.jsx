import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Tech from './Components/Tech/Tech'
import Programs from './Components/Programs/Programs'


const App = () => {
  return (
    <div>
      <Navbar />
      <Tech />
      <div className='navContainer'>
      <Programs/>

      </div>
      

    </div>
  )
}

export default App
