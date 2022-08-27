import React from 'react'
import './awards.css'
import './awardsMedia.css'
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

const Awards = () => {
  return (
    <div className='awards'>
        <div className='title_awards'>
           <p>Our Awards</p>
           <h1>Over 1,24,000+ Happy User Bieng With Us Still They Love Our Services</h1>
        </div>
         <div className='awards_services'>
            <div className='services'>
                <div className='icon'><SearchIcon style={{fontSize:"35px"}}/></div>
                <h1>32 M</h1>
                <p>Blue Burman Award</p>
            </div>
            <div className='services'>
                <div className='icon'><BusinessCenterIcon style={{fontSize:"35px"}}/></div>
                <h1>32 M</h1>
                <p>Blue Burman Award</p>
            </div>
            <div className='services'>
                 <div className='icon'><LightbulbIcon style={{fontSize:"35px"}}/></div>
                <h1>32 M</h1>
                <p>Blue Burman Award</p> 
            </div>
            <div className='services'>
            <div className='icon'><FavoriteIcon style={{fontSize:"35px"}}/></div>
                <h1>32 M</h1>
                <p>Blue Burman Award</p>
            </div>
         </div>
    </div>
  )
}

export default Awards