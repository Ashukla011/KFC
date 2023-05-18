import React, { useEffect, useState } from 'react'
import {Link } from 'react-scroll'
import '../styles/MenuComponents.css'
import { PeriPeri } from './PeriPeri'
import { MasterComponents } from '../Copments2/MasterComponents'
import { ChickenRolls } from './ChickenRolls'
import { ChieckenBucket } from './ChieckenBucket'
import { BiryaniBuckets } from './BiryaniBuckets'
import { BoxMeals } from './BoxMeals'
import { Burgers } from './Burgers'
import { Snacks } from './Snacks'
import { Beverages } from './Beverages'
export const MenuComponents = () => {
    

  return (
    <>
    <div className='orderHeading'>
      <h1>LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN</h1>
    </div>
    <div className='Menubox'>
        <div className='AllLinks'>

            <img  className="img" src='https://online.kfc.co.in/static/media/Stripes_Small_OffersIcon.87fc6256.svg' alt=''/>
            
            <h1 className='kfcmenu'>KFC MENU</h1>
            <br/>
            <br/>
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
         <div id='PERI_PERI_MATCH_SPECIALS'><PeriPeri/></div>
            <br/>
            <br/>
            <br/>
         <div id="CHICKEN_ROLLS"><ChickenRolls/></div>
         
            <br/>
            <br/>
            <br/>
         <div id="CHICKEN_BUCKETS"><ChieckenBucket/></div>
            <br/>
            <br/>
            <br/>
        <div id="BIRYANI_BUCKETS"><BiryaniBuckets/></div>
             <br/>
            <br/>
            <br/>
        <div id='BOX_MEALS'><BoxMeals/></div>
            <br/>
            <br/>
            <br/>
        <div id="BURGERS"><Burgers/></div>
            <br/>
            <br/>
            <br/>
        <div id='SNACKS'><Snacks/></div>
            <br/>
            <br/>
            <br/>
        <div id='BEVERAGES'><Beverages/> </div>
        </div>
    </div>
    </>
  )
}
