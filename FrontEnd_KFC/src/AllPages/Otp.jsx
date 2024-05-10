import React, { useState } from 'react'
import OtpInput from 'react-otp-input';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Otp.module.css'
export const Otp = () => {
  const [otp,setOtp]=useState('')
  const navigate=useNavigate()
  let OTP=JSON.parse(localStorage.getItem("OTP"))
  if(otp==OTP){
    navigate('/Menu')
  }
   
  
  return (
    <div >
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
     <div className={styles.otp}>
      <h2>Enter One-time OTP</h2>
      <div className={styles.otp2}>
      <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={6}
      renderSeparator={<span style={{margin:"0px , 40px"}}>-</span>}
      renderInput={(props) => <input {...props} className={styles.input}/>}
      inputStyle={{width:'20%'}}
     
    />
      </div>
 
     </div>
  
    </div>
  )
}
