import React from 'react'
import './blog.css'
import './blogMedia.css'
import {dataHome} from '../../../data/dataHome'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Blog = () => {
  return (
    <div className='blog'>
       <div className='blog_cont'>
            <div className='heading'>
                <h1>Recent Property Listed</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
            </div>
            <div className='buildingsItem'>
                 {dataHome.map((item, index) => (
                    <div key={index} className="blog_box">
                         <div className='img'>
                             <img src={item.img}/>
                         </div>
                         <div className='text'>
                             <div className='rent_or_sale'>
                               <span style={item.rentOrSale === "For Rent" ? 
                                            {background:"rgba(255, 152, 0, 0.1)", color:"rgb(255, 152, 0)"} : 
                                            {background:"rgba(37, 181, 121, 0.1)", color:"rgb(37, 181, 121)"}}>{item.rentOrSale}
                               </span>
                               <FavoriteIcon style={{color:"#bec7d8"}}/>
                             </div>
                             <h4>{item.name}</h4>
                             <div>
                               <span><LocationOnIcon style={{color:"#72809d", fontSize:"14px"}}/></span>
                               <p>{item.location}</p>
                             </div>
                         </div>
                         <div className='btn_block'>
                              <button>{item.price}</button>
                              <span>{item.buildsName}</span>
                         </div>
                    </div>
                 ))}
            </div>
       </div>
    </div>
  )
}

export default Blog
