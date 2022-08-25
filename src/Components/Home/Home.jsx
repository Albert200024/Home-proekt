import React from 'react'
import './home.css'
import SearchIcon from '@mui/icons-material/Search';
import Featured from './featured/Featured';
import Blog from './blog/Blog';
import Awards from './awards/Awards';
import CityComp from './city/City';
import People from './people/People';
import Price from './price/Price'

const Home = () => {
  return (
   <>
    <div className='home'>
       <div className='home_page_cont'>
          <div className='home_page_header'>
             <h1>Search Your Next Home</h1>
             <p>Find new & featured property located in your local city.</p> 
          </div>
          <div className='home_page_form'>
                <form>
                    <div className='box'>
                         <span>City/Street</span>
                         <input type="text" name="city/street" placeholder='Location'/>
                    </div>
                    <div className='box'>
                         <span>Property Type</span>
                         <input type="text" name="propertyType" placeholder='Property Type'/>
                    </div>
                    <div className='box'>
                         <span>Price Range</span>
                         <input type="text" name="priceRange" placeholder='Price Range'/>
                    </div>
                    <div className='box'>
                        <h4>Advance Filter</h4>
                    </div>
                    <button className="btn1"><SearchIcon style={{color:"white"}}/></button>
                </form>
          </div>
       </div>  
    </div>
    <Featured/> 
    <Blog/>
    <Awards/>
    <CityComp/>
     <People/>
     <Price/>
   </>
  )
}

export default Home
