import React from 'react'
 import img from './../../img/contactImg.jpg'
import './contact.css'

const Contact = () => {
  return (
    <div className = "contact">
       <div className='back'>
            <div className='serviceInfo'>
                <span>Service</span>
                <h1>Services -All Services</h1>
            </div>
            <img src={img} alt=''/>
         </div>
         <div className='contact_cont'>
             <form>
                <h4>Fillup The Form</h4>
                <div className='contactInfo'>
                   <input type="text"  placeholder='Name'/>
                   <input type="e-mail" placeholder='Email'/>
                </div>
                <input type="text" placeholder="Subject"/>
                <textarea placeholder='Send Message'/>
                <button>Submit Request</button>
             </form>
         </div>
    </div>
  )
}

export default Contact