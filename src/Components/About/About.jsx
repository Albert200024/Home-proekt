import React from 'react'
import './about.css'
import imgAboutHeader from '../../img/aboutImg/aboutHiderImg.jpg'
import  aboutImg from '../../img/aboutImg/aboutImg2.jpg'

const About = () => {
  return (
    <div className='container_about'>
      <div className='header_about'>
        <div className='about_text'>
          <span>About Us</span>
           <h1>About Us - Who We Are?</h1>
        </div>
       <img src={imgAboutHeader} alt=""/>
      </div>

     <div className='about_bottom'>
         <div className='bottom_left'>
           <div className='left_heading'>
               <h1>Our Agency Story</h1>
                <p>Check out our company story and work process</p>
           </div>
           <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
             aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
             aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <button>More About Us</button>
         </div>
         <div className='bottom_right'>
            <img src = {aboutImg} alt=""/>
         </div>
     </div>
    </div>
  )
}

export default About
