import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import '../styles/MenuComponents.css'
import { PeriPeri } from './PeriPeri'
export const MenuComponents = () => {
    

  return (
    <div className='Menubox'>
        <div className='AllLinks'>
         
            <img  className="img" src='https://online.kfc.co.in/static/media/Stripes_Small_OffersIcon.87fc6256.svg' alt=''/>
            <h1 className='kfcmenu'>KFC MENU</h1>
            <Link to='PERI_PERI_MATCH_SPECIALS' smooth={true}  duration={500} className='periperi'>
                <h3 >PERI PERI MATCH SPECIALS</h3>
            </Link>
            <br/>
          
            <Link to='CHICKEN_ROLLS' smooth={true}  duration={500} className='chickenrolls'>
                <h3 >CHICKEN ROLLS</h3>
            </Link>
            <br/>
            <Link to='CHICKEN_BUCKETS' smooth={true}  duration={500} className='chickenbuckets'>
                <h3 >CHICKEN BUCKETS</h3>
            </Link>
            <br/>
            <Link to='BIRYANI_BUCKETS' smooth={true}  duration={500} className='biryanibuckets'>
                <h3 >BIRYANI BUCKETS</h3>
            </Link>
            <br/>
            <Link to='BOX_MEALS' smooth={true}  duration={500} className='boxmeals'>
                <h3 >BOX MEALS</h3>
            </Link>
            <br/>
            <Link to='BURGERS' smooth={true}  duration={500} className='burgers'>
                <h3 >BURGERS</h3>
            </Link>
            <br/>
            <Link to='SNACKS' smooth={true}  duration={500} className='snacks'>
                <h3 >SNACKS</h3>
            </Link>
            <br/>
            <Link to='BEVERAGES' smooth={true}  duration={500} className='beverages'>
                <h3 >BEVERAGES</h3>
            </Link>
        </div>
        <div className='Meals' >
         <div id='PERI_PERI_MATCH_SPECIALS'>
          <h1>PERI PERI MATCH SPECIALS</h1>
          <PeriPeri/>
         </div>
         <br/>
         <br/>
         <div id="CHICKEN_ROLLS">
          <h1>CHICKEN ROLLS</h1>
         </div>
         <br/>
         <br/>
         <div id="CHICKEN_BUCKETS">
          <h1>CHICKEN BUCKETS</h1>
          
         </div>
         <br/>
         <br/>
          <div id="BOX_MEALS">
            <h1>BOX MEALS</h1>
          </div>
          <br/>
          <br/>
        <div id='BURGERS'>
          <h1>BURGERS</h1>
        </div>
        <br/>
        <br/>
        <div id="SNACKS">
          <h1>SNACKS</h1>
        </div>
        <br/>
        <br/>
        <div id='BEVERAGES'>
          <h1>BEVERAGES</h1>
          <br/>
          <br/>
        </div>
        </div>
    </div>
  )
}
