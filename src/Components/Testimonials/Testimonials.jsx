import React, { useRef } from 'react'
import'./Testimonials.css'
import alien from '../../assets/alien.jpg'
import elijah from '../../assets/elijah.jpg'
import lillian from '../../assets/lillian.jpg'
import sam from '../../assets/sam.jpg'
import  allanella from '../../assets/allanella.jpg'
import  torren from '../../assets/torren.jpg'


import back from '../../assets/back.jpg'
import next from '../../assets/next.jpg'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;


const ShowPrev = ()=>{

    if(tx < 0){
        tx +=25 
    }
    slider.current.style.transform = `translateX(${tx}%)`


}

const ShowNext = ()=>{

    if(tx > -50){
        tx -=25 
    }
    slider.current.style.transform = `translateX(${tx}%)`
}




    return (

        <div className='testimonials'>
            <h2 className='team'>Our team</h2>
            <img src={back} alt=''className='back_btn' onClick={ShowPrev}/>
            <img src={next} alt='' className='next_btn' onClick={ShowNext}/>
            <div className='slider'>
                <ul ref={slider}>
                   


                    <li>
                       <div className='slide'>

                           <div className='UserInfo'>
                            <img className='Myelijah' src={elijah} alt=''/>

                           </div>
                           <div>
                            <h3>Nyombi Elijah</h3>
                            <span>Arola Institute Company</span>
                           </div>
                           <p>I am hard working and enthusiastic about learning new skills.
                             I am well organised and always meet deadlines when they have been set. I find it easy working with other people but can also work well independently. I have shown that I am a trustworthy and responsible person in school and at home.  I have got very good communication skills which I feel will be useful when working in new situations. I enjoy travelling and have travelled to many different places within the UK and abroad. These experiences will be useful within the travel industry.
                             I am keen to further develop my experiences and skills within the travel business. </p>
                       </div>

                    </li>


                    
                    <li>
                       <div className='slide'>

                           <div className='UserInfo'>
                            <img className='Mylillian' src={lillian} alt=''/>

                           </div>
                           <div>
                            <h3>Lillian</h3>
                            <span>Arola Institute Company</span>
                           </div>
                           <p>I am hard working and enthusiastic about learning new skills.
                             I am well organised and always meet deadlines when they have been set. I find it easy working with other people but can also work well independently. I have shown that I am a trustworthy and responsible person in school and at home.  I have got very good communication skills which I feel will be useful when working in new situations. I enjoy travelling and have travelled to many different places within the UK and abroad. These experiences will be useful within the travel industry.
                             I am keen to further develop my experiences and skills within the travel business. </p>
                       </div>

                    </li>


                    <li>
                       <div className='slide'>

                           <div className='UserInfo'>
                            <img className='Myallanella' src={allanella} alt=''/>

                           </div>
                           <div>
                            <h3>Baliddawa Allan</h3>
                            <span>Arola Institute Company</span>
                           </div>
                           <p>I am hard working and enthusiastic about learning new skills.
                             I am well organised and always meet deadlines when they have been set. I find it easy working with other people but can also work well independently. I have shown that I am a trustworthy and responsible person in school and at home.  I have got very good communication skills which I feel will be useful when working in new situations. I enjoy travelling and have travelled to many different places within the UK and abroad. These experiences will be useful within the travel industry.
                             I am keen to further develop my experiences and skills within the travel business. </p>
                       </div>

                    </li>

                    
                    <li>
                       <div className='slide'>

                           <div className='UserInfo'>
                            <img className='MyAlien' src={alien} alt=''/>

                           </div>
                           <div>
                            <h3>Alien</h3>
                            <span>Arola Institute Company</span>
                           </div>
                           <p>I am hard working and enthusiastic about learning new skills.
                             I am well organised and always meet deadlines when they have been set. I find it easy working with other people but can also work well independently. I have shown that I am a trustworthy and responsible person in school and at home.  I have got very good communication skills which I feel will be useful when working in new situations. I enjoy travelling and have travelled to many different places within the UK and abroad. These experiences will be useful within the travel industry.
                             I am keen to further develop my experiences and skills within the travel business. </p>
                       </div>

                    </li>


                    <li>
                       <div className='slide'>

                           <div className='UserInfo'>
                            <img className='Mysam' src={sam} alt=''/>

                           </div>
                           <div>
                            <h3>Katongole Samuel</h3>
                            <span>Arola Institute Company</span>
                           </div>
                           <p>I am hard working and enthusiastic about learning new skills.
                             I am well organised and always meet deadlines when they have been set. I find it easy working with other people but can also work well independently. I have shown that I am a trustworthy and responsible person in school and at home.  I have got very good communication skills which I feel will be useful when working in new situations. I enjoy travelling and have travelled to many different places within the UK and abroad. These experiences will be useful within the travel industry.
                             I am keen to further develop my experiences and skills within the travel business. </p>
                       </div>

                    </li>



                    <li>
                       <div className='slide'>

                           <div className='UserInfo'>
                            <img className='Mytorren' src={torren} alt=''/>

                           </div>
                           <div>
                            <h3>Torren</h3>
                            <span>Arola Institute Company</span>
                           </div>
                           <p>I am hard working and enthusiastic about learning new skills.
                             I am well organised and always meet deadlines when they have been set. I find it easy working with other people but can also work well independently. I have shown that I am a trustworthy and responsible person in school and at home.  I have got very good communication skills which I feel will be useful when working in new situations. I enjoy travelling and have travelled to many different places within the UK and abroad. These experiences will be useful within the travel industry.
                             I am keen to further develop my experiences and skills within the travel business. </p>
                       </div>

                    </li>





                </ul>



            </div>

        </div>
    )
}

export default Testimonials
