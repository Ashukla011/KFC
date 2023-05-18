import React from 'react'
import styles from '../styles/Mastercomponents.module.css'
export const MasterComponents = ({image,Name,icon,type,price,quantity,Description,id,Button}) => {
  return (
    <div className={styles.first} key={id}>
    <img src={image} alt="" className={styles.img2}/>
    <br/>
    <p className={styles.Name}>{Name}</p>
    <br/>
    <div className={styles.icon_type_quantity}>
        <img src={icon} alt=""/>
        <p>{type}</p>
        <p>Serve {quantity}</p>
    </div>
    <br/>
    <p className={styles.Name}>{`₹${price}`}</p>
    <br/>
    <p className={styles.dis}>{Description}</p>
    <br/>
    <button className={styles.btn} onClick={Button}>Add to Cart</button>
     {/* <br/> */}
</div>
  )
}
