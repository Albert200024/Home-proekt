import React from 'react'
import './header.css'
import logo from '../img/logo.png'
import HeaderItem from './menu/HeaderItem'
import LogoutIcon from '@mui/icons-material/Logout';

const Header = () => {
    return (
    <div className='div'>
      <div className='header'>
            <div className='h-left'>
                <img src={logo} alt="logo" className='logo'/>
            </div>  
            <HeaderItem/>       
            <div className='h-right'>
                  <p>My List</p>
                  <button>
                    <LogoutIcon style={{fontSize: "20px"}}/>
                    Sign In
                  </button>
            </div>
      </div>
    </div>  
    )
  }

export default Header