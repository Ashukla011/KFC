import React from 'react'
import styles from './Order.module.css'
import { useNavigate } from 'react-router-dom'



   
export const Ordered = () => {
  const navigate = useNavigate()
  return (
    <div>    
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className={styles.mainDiv}>
    <div> <img src="https://c.tenor.com/0AVbKGY_MxMAAAAC/check-mark-verified.gif" alt="green tick" /></div>
    <h1>THANK YOU FOR YOUR PURCHASE</h1>
    <p>Your order id is: <span>85421369754</span></p>
    <div><button onClick={()=>navigate('/Menu')}>Order More</button></div>
</div>
</div>

  )
}
