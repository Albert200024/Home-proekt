import React from 'react'
import img from './../../img/serviceImg.jpg'
import './service.css'
import '../Home/featured/featuredMedia.css'
import {featured} from './../../data/data_featured'


const Service = () => {
  return (
    <section className='service'>
    <div className='service_cont '>
      <div className='back'>
         <div className='serviceInfo'>
            <span>Service</span>
            <h1>Services -All Services</h1>
         </div>
         <img src={img} alt=''/>
      </div>
        <div className='service_card_block grid5'>
        {featured.map((item, index) => (
             <div className="featured_box " key={index}>
                <img src={item.cover} alt=""/>
                <h4>{item.name}</h4>
                <label>{item.total}</label>
             </div>
      ))}
        </div>

    </div>
    </section>
  )
}

export default Service
