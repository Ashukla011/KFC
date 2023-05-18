import React, { useEffect, useState } from 'react'
import { MasterComponents } from '../Copments2/MasterComponents'
import styles from "../styles/Mastercomponents.module.css"

export const BoxMeals = () => {
    let [data,setData]=useState([])

    const getDdata=()=>{
      let res=fetch("https://vast-jade-giraffe-sock.cyclic.app/BOXMEALS")
      .then((res)=>res.json())
      .then((res)=>{
        setData(res)
        console.log(res)
      })
    }
    useEffect(()=>{
      getDdata()
    },[])

    const StoreData=(el)=>{
      let KFCProduct=JSON.parse(localStorage.getItem('KFC'))||[]
      KFCProduct.push(el)
   localStorage.setItem("KFC",JSON.stringify(KFCProduct))
  
  }
    return (
      <div>
          <h1 style={{fontFamily:"Helvetica",fontSize:"30px"}}>BOX MEALS</h1>
          <br/>
          <br/>
          <br/>
          <br/>
          <div className={styles. MainBox}>
            {data.map((el)=>(
              <MasterComponents
              id={el.id}
              image={el.image}
              Name={el.name}
              icon={el.icon}
              type={el.type}
              price={el.price}
              quantity={el.quantity}
              Description={el.description}
              Button={()=>StoreData(el)}
              />
            ))}
          </div>
      </div>
    )
}
