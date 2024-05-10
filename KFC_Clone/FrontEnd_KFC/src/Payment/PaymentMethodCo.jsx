

import React, { useState } from "react";
import styles from "./paymentCom.module.css";

export const PaymentMethodCo = (props) => {
  const [radioval,setradioval] = useState("")

  const handlechange=(e)=>{
console.log(e.target.value);
props.setpayType(e.target.value)
  }
  return (
    <div id={styles.model}>
      <div id={styles.payMHead}>
        <h2>SELECT YOUR PAYMENT</h2>
        <button onClick={() => props.setpayMth(false)}>X</button>
      </div>
      <div className={styles.centerdiv}>
        <div className={styles.paymentOption}>
          <input type="radio" name="pmt_Method" value="credit_debit_card" onChange={handlechange}/>
          <span>Credit/Debit card</span>
        </div>
        <div className={styles.paymentOption}>
          <input type="radio" name="pmt_Method" value="gift_card" onChange={handlechange}/>
          <span>Gift card</span>
        </div>
        <div className={styles.paymentOption}>
          <input type="radio" name="pmt_Method" value="Net_Banking" onChange={handlechange}/>
          <span>Net Banking</span>
        </div>
        <div className={styles.paymentOption}>
          <input type="radio" name="pmt_Method" value="wallet" onChange={handlechange}/>
          <span>Other wallets</span>
        </div>
        <div className={styles.paymentOption}>
          <input type="radio" name="pmt_Method" value="cash" onChange={handlechange}/>
          <span>Cash</span>
        </div>
      </div>
      <div id={styles.paybtndiv}>
        <button id={styles.payMbtn} onClick={() => props.setpayMth(false)}>
          Submit
        </button>
      </div>
    </div>
  );
};