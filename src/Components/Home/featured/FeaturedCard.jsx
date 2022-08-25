import React from 'react'
import './featured.css'
import { featured } from '../../../data/data_featured'

const FeaturedCard = () => {
  return (
    <>
      <div className='content grid5'>
           {featured.map((item, index) => (
             <div className="featured_box" key={index}>
                <img src={item.cover} alt=""/>
                <h4>{item.name}</h4>
                <label>{item.total}</label>
             </div>
           ))}
      </div>
    </>
  )
}

export default FeaturedCard
