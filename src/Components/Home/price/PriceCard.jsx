import React from 'react'
import {price} from '../../../data/price_data'
import './price.css'


const PriceCard = () => {
  return (
    <>
      <div className='content mtop flex'>
         {price.map((item, index) => (
            <div className='box_price shadow' key={index}>
              <button className="btn_prcie" style={item.best === "Best Value" ? {display:"inline-block"} : {display:"none"}}>{item.best}</button>
               <h3>{item.plan}</h3>
               <h1>
                 <span>$</span>
                 {item.price}
                </h1>
                <p>{item.ptext}</p>
                <ul>
              {item.list.map((val) => {
                const { icon, text, change } = val
                return (
                  <li>
                    <label
                      style={{
                        background: change === "color" ? "#dc35451f" : "#27ae601f",
                        color: change === "color" ? "#dc3848" : "#27ae60",
                      }}
                    >
                      {icon}
                    </label>
                    <p>{text}</p>
                  </li>
                )
              })}
            </ul>
            <button
              className='price_box_btn'
              style={{
                background: item.plan === "Standard" ? "#27ae60" : "#fff",
                color: item.plan === "Standard" ? "#fff" : "#27ae60",
                border:item.plan === "Standard" ? "none" : "5px solid #27ae601f"
              }}
            >
              Start {item.plan}
            </button>
            </div>
         ))}
      </div>
    </>
  )
}

export default PriceCard
