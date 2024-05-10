import React, { useState } from 'react'
import styles from '../styles/Sign.module.css'
import {useNavigate} from 'react-router-dom'
export const Sign = () => {
  const navigate=useNavigate()
  const [Phone,setPhoneNo]=useState('')

  const handleOTP=()=>{
    let digits='0123456789';
    let otp='';
    for( let i=0;i<6;i++){
        otp += digits[Math.floor(Math.random() * 10)]
  }
  alert(otp)
  localStorage.setItem("OTP",JSON.stringify(otp))
  navigate("/Otp")
    
  }
  return (
    <div className={styles.Sign}>
    
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
     <div className={styles.SignIN}>
     <h5 >SignIn / SignUp</h5>
     <br/>
      <br/>
      <img src="https://login.kfc.co.in/auth/resources/jdsrg/login/kfcIndiaLoginUIDev_2022_08_04/images/KFC_logo.svg" alt=""/>
      <br/>
      <br/>
      <h2 className={styles.h2}>LET’S SIGN IN OR CREATE ACCOUNT WITH YOUR PHONE NUMBER!</h2>
      <br/>
      <br/>
      <input className={styles.input} onChange={(e)=>setPhoneNo(e.target.value)} type='Phone' placeholder='Phone Number' />
      <br/>
      <br/>
      <button disabled={Phone.length==0} onClick={handleOTP} className={styles.btn1}>Send Me a Code</button>
     
      <br/>
     <p>or</p>
      <br/>

      <button  onClick={()=>navigate("/Menu")} className={styles.btn2}>skip continue as guest</button>
     </div>
    </div>
  )
}
