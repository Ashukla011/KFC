import React from 'react'
import styles from '../styles/Order.module.css'
import { Popup } from './Popup'
import {SearchStore} from './SearchStore'
import { useEffect,useState } from 'react'

export const StartOrder = () => {
    const [activePopup,setactivePopup] = useState(false)
  const [address1, setaddress1]= useState("");

  useEffect(()=>{
let add = JSON.parse(localStorage.getItem("address"))
console.log(add)
setaddress1(add)
  },[address1])

  return (
    <div className={styles.secblackmain}>
      {!address1 ? (<>
        <h4 className={styles.secblactext}>
        LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN
      </h4>
      <button onClick={()=>setactivePopup(true) } className={styles.secblackbut}>Start Order</button>
      </>):(<h4 className={styles.secblactext}>
        {address1}
      </h4>)}
     
      <Popup trigger = {activePopup}>
        <SearchStore address1={address1} setaddress1={setaddress1} setactivePopup={setactivePopup}/>
      </Popup>
    </div>
  );
};
