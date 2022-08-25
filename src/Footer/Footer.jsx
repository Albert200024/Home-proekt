import React from 'react'
import './footer.css'
import logo from '../img/logo_footer.png'

const Footer = () => {
    return (
      <div className='footer'>
        <div className='footer_block1'>
             <div className='footer_top'>
                   <div className='footer_text'>
                     <h1>Do You Have Questions ?</h1>
                     <p>We'll help you to grow your career and growth.</p>
                   </div>
                  <button>Contact Us Today</button>
             </div>
       </div>
        <div className='footer_bottom'>
              <div className='botom_cont'>
                     <div className='footer_box'>
                         <div className='log_text'>
                              <img src={logo} alt="logo"/>
                              <h2>Do You Need Help With Anything?</h2>
                              <p>Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month</p>
                         </div>
                         <div className='input'>
                           <input type="text" placeholder='Email-Andress'/>
                           <button>Subscribe</button>
                         </div>
                     </div>
                     <div className='footer_box'>
                         <h3>LAYOUTS</h3>
                         <ul>
                            <li>Home Page</li>
                            <li>About Page</li>
                            <li>Service Page</li>
                            <li>Property Page</li>
                            <li>Contact Page</li>
                            <li>Single Blog</li>
                         </ul>
                     </div>
                     <div className='footer_box'>
                         <h3>ALL SECTIONS</h3>
                          <ul>
                             <li>Headers</li>
                             <li>Features</li>
                             <li>Attractive</li>
                             <li>Testimonials</li>
                             <li>Videos</li>
                             <li>Footers</li>
                          </ul>
                     </div>
                     <div className='footer_box'>
                         <h3>COMPANY</h3>
                         <ul>
                            <li>About</li>
                            <li>Blog</li>
                            <li>Pricing</li>
                            <li>Affiliate</li>
                            <li>Login</li>
                            <li>Changelog</li>
                         </ul> 
                     </div>
              </div>
        </div>
        <div className='footer_end'>
            <p>© 2021 RentUP. Designd By GorkCoder.</p>
        </div>
      </div>
    )
  }
  
  export default Footer
  