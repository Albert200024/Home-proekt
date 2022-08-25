import React from 'react'
import './price.css'
import PriceCard from './PriceCard'

const Price = () => {
  return (
    <>
    <section className="price">
        <div className='price_container'>
          <div className="price_header">
             <h1>Select Your Package</h1>
             <p>
               At vero eos et accusamus et iusto odio dignissimos ducimus qui 
               blanditiis praesentium voluptatum deleniti atque corrupti quos dolor
             </p>
          </div>
          <PriceCard/>
        </div>
    </section>
    </>
  )
}

export default Price
