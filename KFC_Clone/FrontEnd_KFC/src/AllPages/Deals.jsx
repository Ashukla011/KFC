import React from 'react'
import styles from '../styles/Deals.module.css'
import { StartOrder } from '../Copments2/StartOrder'
import Footer from '../Footer/Footer'
import { useNavigate } from 'react-router-dom'

export const Deals = () => {
  const navigate=useNavigate()
  return (
    <div>
    
      <StartOrder/>
      <div className={styles.offerImage}>

      <img className={styles.img}src="https://online.kfc.co.in/static/media/offer_deals_banner.777f20e1.svg" alt=""/>

      </div>
        <div className={styles.offerHeading}>
          <h1>DEAL & OFFERS</h1>
        </div>
         <img className={styles.img2} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAUCAYAAAAOTSQ2AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABDSURBVHgB7c4xDQAgEATBf3TgAP9ScIAPcPAkS0Ox014u2VwxdhR6zKz2l//t2+JjxlHGUcZRxlHGUcZRxlHGUcZRB8JSCDYbp9G6AAAAAElFTkSuQmCC" alt="" />

         <div className={styles.offerForYou}>
          <h1>OFFERS FOR YOU </h1>
          <h5 onClick={()=>navigate('/Sign')}>sign to see exclusive offers & deals</h5>
         </div>
    
          <div className={styles.Redeem}>
             <div className={styles.box1}>
              <h1>SIGN TO SEE EXCLUSIVE OFFERS & DEALS</h1>
              <button onClick={()=>navigate("/Sign")}>Sing</button>
             </div>
            
            <div className={styles.box2}>
              <img src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/CHKZINGER.jpg?ver=29.2"/>
              <div className={styles.OnePcFree}>
                <h1>1 Pc Free Chiicken...</h1>
                <p>1 Pc free Chicken Zinger on a cart value of 499 or above on first order. Only for...</p>
               
                <div className={styles.viewAndRedeem}>
                  <h4>View Details</h4>
                  <button>Redeem</button>
                </div>
              </div>
            </div>

            <div  className={styles.box2}>
              <img src=" https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/VEGZINGER.jpg?ver=29.2" alt="" />
              <div className={styles.OnePcFree}>
                <h1>1 Pc free Veg Zinger...</h1>
                <p>1 Pc free Chicken Zinger on a cart value of 499 or above on first order. Only for...</p>
             
                <div className={styles.viewAndRedeem}>
                  <h4>View Details</h4>
                  <button>Redeem</button>
                </div>
              </div>
            </div>

            <div  className={styles.box2}>
              <img src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/BIGSAVE.jpg?ver=29.2" alt=""/>
              <div className={styles.OnePcFree}>
                <h1>Upto Rs 100 off on...</h1>
                <p>Upto Rs 100 off on min cart value of Rs 699 or more . Applicable on 4th order...</p>
          
                <div className={styles.viewAndRedeem}>
                  <h4>View Details</h4>
                  <button>Redeem</button>
                </div>
              </div>
            </div>
          </div>
     <Footer/>
    
     </div>
   
  )
}
