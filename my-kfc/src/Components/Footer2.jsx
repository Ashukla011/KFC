import React, { useState } from 'react'
import "../styles/Footer2.css"
export const Footer2 = () => {
    const [toggle1,setToggle1]=useState(false)
    const [toggle2,setToggle2]=useState(false)
    const [toggle3,setToggle3]=useState(false)
    const [toggle4,setToggle4]=useState(false)
  return (
    <div>
        <footer >
           
            
            <div className='footer'>
            <img src='https://images.ctfassets.net/wtodlh47qxpt/25FSYFuEtGct8NSrtpKe6d/b602f6fe0bf294e6a6dff5d7648bf594/KFC_Logo.svg' alt=''/>
                <ul className={toggle1?'descktop':"mobile"}>
                    <button  onClick={()=>setToggle1(!toggle1)}>Leagal</button>
                    <li>Terms and Conditions</li>
                    <li>Privacy Policy</li>
                    <li>Privacy Policy</li>
                    <li>Disclaimer</li>
                    <li>Caution Notice</li>
                </ul>
                <ul className={toggle2?'descktop':"mobile"} >
                <button  onClick={()=>setToggle2(!toggle2)}>KFC India</button>
                    <li>About KFC</li>
                    <li>KFC Care</li>
                    <li>KFC Care</li>
                    <li>Careers</li>
                    <li>Our Golden Past</li>
                </ul>
                <ul className={toggle3?'descktop':"mobile"}>
                <button  onClick={()=>setToggle3(!toggle3)}>KFC Food</button>
                    <li>Menu</li>
                    <li>Order Lookup</li>
                    <li>Gift Card</li>
                    <li>Nutrition & Allergen</li>
                </ul>
                <ul className={toggle4?'descktop':"mobile"}>
                <button  onClick={()=>setToggle4(!toggle4)}>Support</button>
                    <li>Get Help</li>
                    <li>Contact Usi</li>
                    <li>KFC Feedback</li>
                    <li>Privacy Policy</li>
                </ul>
                <ul >
                    
                    <li>FIND a KFC</li>
                 
                </ul>
                <img src='https://images.ctfassets.net/wtodlh47qxpt/6BdZsyjLn64c06uCIE73d1/fb530f5d5231533b049463f6c7e8a2b1/google_play.svg' alt=''/>
                <img src='https://images.ctfassets.net/wtodlh47qxpt/em3mcMuAdXWlgucSJiTbS/d3ae7e51ed101d829e459355e255c47f/apple.svg' alt=''/>
            </div>
        </footer>
    </div>
  )
}
