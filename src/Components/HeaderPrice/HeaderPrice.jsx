import React from 'react'
import img from "../../img/contactImg.jpg"
import {price} from '../../data/price_data'
import './headerPrice.css'

const HeaderPrice = () => {
  return (
    <div>
      <div className="header_about">
        <div className="about_text">
          <span>About Us</span>
          <h1>About Us - Who We Are?</h1>
        </div>
        <img src={img} alt="" />
      </div>
      <div className='content mtop flex mtop1'>
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
    </div>
  )
}

export default HeaderPrice
