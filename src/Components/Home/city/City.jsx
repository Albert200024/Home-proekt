import React from 'react'
import './city.css'
import {dataLocation} from '../../../data/data_location'

const CityComp = () => {
  return (
    <div className='city_location'>
       <div className='city_container'>
          <div className='city_heading'>
            <h1>Our Featured Agents</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
          </div>
          <div className='city_item'>
              {dataLocation.map((elem, i) => (
                <div className = "city_box" key={i} >
                    <img src={elem.img}/>
                    <div className='fon'>
                       <h5>{elem.name}</h5>
                       <p>
                          <label htmlFor="">12 Villas</label>
                          <label htmlFor="">07 Offices</label>
                          <label htmlFor="">10 Apartments</label>
                       </p>
                    </div>
                </div>
              ))}
          </div>
       </div>
    </div>
  )
}

export default CityComp