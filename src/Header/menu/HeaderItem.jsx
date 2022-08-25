import React from 'react'
import './headerItem.css'
import CustomLink from '../../CustomLink'

const HeaderItem = () => {
  return (
    <div className='menu_container'>
         <ul>
           <li><CustomLink className="link" to={'/'}>Home</CustomLink></li>
           <li><CustomLink className="link" to={"/about"}>About</CustomLink></li>
           <li><CustomLink className="link" to={'/service'}>Service</CustomLink></li>
           <li><CustomLink className="link" to={'/blog'}>Blog</CustomLink></li>
           <li><CustomLink className="link" to={'/price'}>Pricing</CustomLink></li>
           <li><CustomLink className="link" to={'/contact'}>Contact</CustomLink></li>
        </ul> 
    </div>
  )
}

export default HeaderItem