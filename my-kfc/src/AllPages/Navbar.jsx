import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from "../styles/Navbar.module.css"
import {NavbarComponents} from '../Components/NavbarComponents'
export const Navbar = () => {
  const [isMobile,setIsMobile]=useState(false)
  let kfcProduct =JSON.parse(localStorage.getItem('KFC'))||[]

   let total=kfcProduct.reduce((sum,el)=>{
      return  sum+el.price;
   },0)
  return (
    <>
   
    <div className={styles.Navbar}>
      <button className={styles.mobile_munu_icon} onClick={()=>setIsMobile(!isMobile)}>
        {isMobile? (<li className='fas fa-times'></li>):(<i className="fa-solid fa-bars"></i>)}
      </button>
         <Link to='/' className={styles.logo}> <img src='https://online.kfc.co.in/static/media/kfcLogo.492728c6.svg' alt=''/></Link>
         
         <ul className={styles.nav_link}>
          <Link to='/Menu' className={styles.Menu}> <li >Menu</li> </Link>
          <Link to='/Deals' className={styles.Deals}> <li >Deals</li></Link>
          <Link to='/Sign' className={styles.Sign}> <li >Sign In</li></Link>
          
          </ul>
      
        
         <Link to='/cart' className={styles.cart}>
          <p>{`₹${total.toFixed(2)}`}</p>
        
            <img src="https://images.ctfassets.net/wtodlh47qxpt/7FHdvAK9N6x9Ed6H6tsvzo/b14cb9909f2cff2d96c747d479a7ffa5/Cart_icon_animation_120-_icon.svg" alt=""/>
          
          </Link>
       
        

       </div>      

    
   </>
  )
}
// 