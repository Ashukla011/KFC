import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../styles/Navbar.css"
import {NavbarComponents} from '../Components/NavbarComponents'
export const Navbar = () => {
  const [isMobile,setIsMobile]=useState(false)
  return (
    
    <div className='Navbar'>
      <button className='mobile-munu-icon' onClick={()=>setIsMobile(!isMobile)}>
        {isMobile? (<li className='fas fa-times'></li>):(<i className="fa-solid fa-bars"></i>)}
      </button>
         <Link to='/' className='logo'> <img src='https://online.kfc.co.in/static/media/kfcLogo.492728c6.svg' alt=''/></Link>
         
         <ul className={isMobile?'nav-link-mobile':"nav-link"}onClick={()=>setIsMobile(false)}>
          <Link to='/Menu' className='Menu'> <li >Menu</li> </Link>
          <Link to='/Deals' className='Deals'> <li >Deals</li></Link>
          <Link to='/Sign' className='Sign'> <li >Sign In</li></Link>
          
          </ul>
         <Link to='/cart' className='cart'><li>Cart</li></Link>

       </div>      

   
  )
}
