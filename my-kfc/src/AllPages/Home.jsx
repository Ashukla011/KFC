import React from 'react'
import '../styles/Home.css'
import { Footer1 } from '../Components/Footer1'
import { Footer2 } from '../Components/Footer2'
export const Home = () => {
  return (
    <div>
      {/* <div className='box1'> */}
        <h2 className='box1'>
        LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN
        </h2>
      {/* </div> */}
      <div className='box2'>
        <img src='https://images.ctfassets.net/wtodlh47qxpt/4ULlwqQyreV9ucCfCp1WRa/c1765f75f7fd7f5aba24aeed2348872a/Periperi_match_specials_Banner_1440x396px.jpg?w=1366&fit=fill&fm=webp' alt=''/>
      </div>
      <div className='box3'>
        <img src='https://online.kfc.co.in/static/media/Stripes_Small_OffersIcon.87fc6256.svg' alt=''/>
        <h2>
      WELCOME TO KFC
        </h2>
      </div>
      <div className='browser-category'>
      <h2>BROWSE CATEGORIES</h2>
      <div></div> 
      </div>
        
        <div className='Footer'>
         
            <Footer1/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Footer2/>
         
        </div>
   
    </div>
  )
}
