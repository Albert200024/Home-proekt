import React from 'react'
import {data_info_people} from '../../../data/data_info_people'
import './people.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import EmailIcon from '@mui/icons-material/Email';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';

const People = () => {
    return (
    <section className='people'>
       <div className='people_container'>
          <div className='people_header'>
              <h1>Our Featured Agents</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
          </div>
          <div className='people-item_block'>
              {data_info_people.map((elem, i) => (
                 <div className='people_box m-top' key={i}>
                   <button className='people_box_btn'>{elem.lisen}</button>
                   <div className='detalis'>
                      <div className="img">
                         <img src = {elem.img} alt=""/>
                         <CheckCircleIcon className='chek'/>
                      </div>
                      <LocationOnIcon className='loc'/>
                      <label htmlFor=''>{elem.location}</label>
                      <h4>{elem.name}</h4>

                      <ul>
                         <li><FacebookIcon style={{color:'gray', fontSize:"18px"}}/></li>
                         <li><LinkedInIcon style={{color:'gray', fontSize:"18px"}}/></li>
                         <li><TwitterIcon style={{color:'gray', fontSize:"18px"}}/></li>
                         <li><InstagramIcon style={{color:'gray', fontSize:"18px"}}/></li>
                      </ul>
                      <div className="button">
                          <button className="message"><EmailIcon className="iqonBtn"/>Message</button>
                           <button className='cal'><PhoneEnabledIcon className='iqonBtn'/></button>
                      </div>
                   </div> 
                 </div>
              ))}
          </div>
       </div>
    </section>
  )
}

export default People