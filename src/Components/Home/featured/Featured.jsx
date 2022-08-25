import React from 'react'
import './../featured/featured.css'
import FeaturedCard from './FeaturedCard'

const Featured = () => {
  return (
    <div className='featured'>
      <div className='container'>
        <h1>Featured Property Types</h1>
        <p>Find All Type of Property.</p>
        <FeaturedCard/>
      </div>
    </div>
  )
}

export default Featured