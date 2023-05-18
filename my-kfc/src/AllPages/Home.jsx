import React, { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

import {HashLink } from 'react-router-hash-link'
import { StartOrder } from '../Copments2/StartOrder'
import Footer from '../Footer/Footer'
export const Home = () => {
const [currentIndex,setCurrentIndex]=useState(0)
  const PosterImage=[
   
    {url:"https://images.ctfassets.net/wtodlh47qxpt/4ULlwqQyreV9ucCfCp1WRa/c1765f75f7fd7f5aba24aeed2348872a/Periperi_match_specials_Banner_1440x396px.jpg?w=1366&fit=fill&fm=webp"},
    {url:"https://images.ctfassets.net/wtodlh47qxpt/bwwtSv4zmZZm42c5wSg8Z/bd28ca73bbefa15b45f14c994e72ed03/Matchday_Banner_1440x396px.jpg?w=1536&fit=fill&fm=webp"},
    {url:"https://images.ctfassets.net/wtodlh47qxpt/HHzMPrlG7UbcZ2TFNbphE/465096abeae924f6795dd8fbe9fcf8df/variety_bucket_banner_1440x396px.jpg?w=1366&fit=fill&fm=webp"},
    {url:"https://images.ctfassets.net/wtodlh47qxpt/2rnIb74o6eFKAmcPfwg65g/8b3005e0e9cf9a1cc9c2039678cf245e/Leg_Piece_Bucket_1440x396px.jpg?w=1366&fit=fill&fm=webp"},
    {url:"https://images.ctfassets.net/wtodlh47qxpt/4wzmNLWjqVZZl95Fcf48r2/90bd1294b970f903545d8f0f5278b28a/Allu_Arjun_Combo_Meal__1440x396px.jpg?w=1366&fit=fill&fm=webp"},
  ]

  useEffect(()=>{
   let timer=setTimeout(()=>{
    if(currentIndex===4){
      setCurrentIndex(0)
    }else{
      setCurrentIndex(currentIndex+1)
    }
   },5000)

   return ()=>clearTimeout(timer)
  },[currentIndex])

  return (
    <div className='Home'>
      {/* <div > */}
       {/* <div className={styles.OrderHeading}>  <h2 >
        LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN
        </h2>
        <button>start order</button>
        </div> */}
        <StartOrder/>
       
      {/* </div> */}
      <div className={styles.poster}>
        <img src={PosterImage[currentIndex].url} alt=''/>
      </div>
     

      <div className={styles.Logo}>
        <img src='https://online.kfc.co.in/static/media/Stripes_Small_OffersIcon.87fc6256.svg' alt=''/>
        <h2>
      WELCOME TO KFC
        </h2>
      </div>
      <div className={styles.browser_category}>
      <h2>BROWSE CATEGORIES</h2>
      <div></div> 
      </div>
      <br/>
      <br/>
      <br/>
        <div className={styles.AllCategory}>
          <div className={styles.subCategory}>
            <HashLink to='/Menu#PERI_PERI_MATCH_SPECIALS' className={styles.CategoryName}>
              <img src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT233.jpg?ver=28.85" alt=""/>
              <br></br>
              <br></br>
              <h4 >PERI PERI MATCH SPECIALS</h4>
            </HashLink>
          </div>
       
          <div className={styles.subCategory}>
            <HashLink to='/Menu#CHICKEN_ROLLS' className={styles.CategoryName}>
              <img src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT170.jpg?ver=28.85" alt=""/>
              <br></br>
              <br></br>
              <h4 >CHECKIN ROLLS</h4>
            </HashLink>
          </div>

          <div className={styles.subCategory}>
            <HashLink to='/Menu#CHICKEN_BUCKETS' className={styles.CategoryName}>
              <img src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT86.jpg?ver=28.85" alt=""/>
              <br></br>
              <br></br>
              <h4 >CHICKEN BUCKETS</h4>
            </HashLink>
          </div>

          <div className={styles.subCategory}>
            <HashLink to='/Menu#BIRYANI_BUCKETS' className={styles.CategoryName}>
              <img src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT190.jpg?ver=28.85" alt=""/>
              <br></br>
              <br></br>
              <h4 >BIRYANI BUCKETS</h4>
            </HashLink>
            </div>

          <div className={styles.subCategory}>
            <HashLink to='/Menu#BOX_MEALS' className={styles.CategoryName}>
              <img src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT158.jpg?ver=28.85" alt=""/>
              <br></br>
              <br></br>
              <h4 >BOX MEALS</h4>
            </HashLink>
          </div>

          <div className={styles.subCategory}>
            <HashLink to='/Menu#BURGERS' className={styles.CategoryName}>
              <img src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT99.jpg?ver=28.85" alt=""/>
              <br></br>
              <br></br>
              <h4 >BURGERS</h4>
            </HashLink>
          </div>

          <div className={styles.subCategory}>
            <HashLink to='/Menu#SNACKS' className={styles.CategoryName}>
              <img src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT89.jpg?ver=28.85" alt=""/>
              <br></br>
              <br></br>
              <h4 >SNACKS</h4>
            </HashLink>
          </div>

          <div className={styles.subCategory}>
            <HashLink to='/Menu' className={styles.CategoryName}>
              <img src="https://online.kfc.co.in/static/media/finger_lickin.fc21c805.svg" alt=""/>
              <br></br>
              <br></br>
              <h4 >View All Menu→</h4>
            </HashLink>
          </div>
          
        </div>

        <Footer/>
   
    </div>
  )
}
