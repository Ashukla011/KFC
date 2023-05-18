import React, { useCallback, useState } from 'react'
import styles from '../styles/Cart.module.css'
import {Link, Navigate} from 'react-router-dom'
import { StartOrder } from '../Copments2/StartOrder'
import { useNavigate } from 'react-router-dom'
import Footer from '../Footer/Footer'
export const Cart=() => {
  let [totalprice,setTotalPrice]=useState(0)
 const navigate=useNavigate()
  let kfcProduct =JSON.parse(localStorage.getItem('KFC'))||[]

   let total=kfcProduct.reduce((sum,el)=>{
      return  sum+el.price;
   },0)
   let finalTotal=(total+2.8+37)

   localStorage.setItem("kfcTotalPrice",JSON.stringify(total))
  return (
    <div>
      <StartOrder/>
     
      
      <div className={styles.Logo}>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAeCAYAAAB5c901AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABNSURBVHgB7c9BDQAgAMPAgQ4c4F8KDvABFuBHSe+9LGmZ6SsXWkY52b3yW/M5A+kMpDOQzkA6A+kMpDOQzkA6A+kMpDOQzkA6A+kMpNu9MQhKmC+cDgAAAABJRU5ErkJggg==" alt=""/>
        <h1>MY CART</h1>
      </div>
    
    <div className={styles.cart1}>
     <div className={styles.mapData}>
     {kfcProduct.length==0?<div className={styles.empty}><img src="https://online.kfc.co.in/static/media/empty_cart.32f17a45.png" alt=""/></div>:

              kfcProduct.map((el)=>(
              <div className={styles.cart2}>
              <img src={el.image} alt=""/>
              <div> 
                <br/>
                <p className={styles.name}>{el.name}</p>
                <br/>
                <br/>
                <button className={styles.remove}>remove</button>
              </div>
            
              <div className={styles.Incri_Decri}>
                <button className={styles.Incri}>-</button>
                <button className={styles.countTotal}>1</button>
                <button className={styles.Decri}>+</button>
              </div>
              <p className={styles.price}>{`₹ ${el.price}`}</p>
              </div>
              ))}
              <br/>
              <br/>
              <div className={styles.RemoveAll}>
                <button onClick={()=>(localStorage.removeItem("KFC"))} className={styles.Btn}>Remove All</button>
             
                <button onClick={()=>navigate('/Menu')}className={styles.Btn}>Add More Menu</button>
              
              </div>
     </div>

      <div className={kfcProduct.length!=0? styles.cartTotal:styles.cartTotalNone}>
        <h1>{`${kfcProduct.length} Item`}</h1>
        <br/>
        <br/>
        <br/>
        <div className={styles.same}>
          <p>SubTotal</p>
           <p>{`₹${total.toFixed(2)}`}</p>
        </div>
        <br/>
       <div className={styles.same}>
               <p>GST</p>
              <p>{`${2.28}`}</p>
       </div>
       <br/>
        <div className={styles.same}>
          <p>Rasturante Handling (Inc.taxes)  </p>
          <p>{`₹${37}`}</p>
        </div>

        <br/>
        <br/>
        <br/>
        <br/>
        <div className={styles.btn}>
          <Link to="/Payment">
          <button >{`checkout  ₹${finalTotal.toFixed(2)}`}</button>
          </Link>
        </div>
      

      </div>
    </div>
    <br/>
    <Footer/>
    </div>
  )
}
