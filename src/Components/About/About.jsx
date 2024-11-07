import React from 'react'
import './About.css'
import collabo from '../../assets/collabo.webp'

const About = () => {
  return (
    <div>
      
      <div className='collab'>
        <img className='cola' src={collabo} alt="" />
       
      </div>
      <div className='descrip'>
        <h2 className='abt'>About us</h2>
        <p>
          I defined them as teenage nostalgia books. Books that maybe describe how those games 
          in which you spent countless hours were made. Masters of Doom and The Making of Prince 
          of Persia are gold if you ask me. But there must be more! <p> Making it Big in Software 
          is a great set of essays about well-known software leaders who narrate their stories.</p> 
        </p>
        </div>
    </div>
  )
}

export default About
