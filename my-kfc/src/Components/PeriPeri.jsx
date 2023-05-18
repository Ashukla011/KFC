import React, { useEffect, useState } from 'react'
import '../styles/Periperi.css'
export const PeriPeri = () => {
    const [data,setData]=useState([])

    const getData=()=>{
     let res=fetch('https://vast-jade-giraffe-sock.cyclic.app/Menu')
     .then((res)=>res.json())
     .then((res)=>{
        setData(res)
     })
    }
    useEffect(()=>{
        getData()
    },[])

// let KFCProduct=JSON.parse(localStorage.getItem('KFC'))||[]
    const StoreData=(el)=>{
        let KFCProduct=JSON.parse(localStorage.getItem('KFC'))||[]
        KFCProduct.push(el)
     localStorage.setItem("KFC",JSON.stringify(KFCProduct))

    }

  return (
    <div>
        <div className='box1'>
        <h1 style={{fontFamily:"Helvetica",fontSize:"30px"}}>PERI PERI MATCH SPECIALS</h1>
        <div className='box2'>
            {
            data.map((el)=>(
                <div key={el.id} className='box3'>
                    <img src={el.image} alt='' style={{width:"100%"}}/>
                    <br/>
                    <div className='Name'>{el.name}</div>
                    <div className='icon_type_quantity'>
                        <img src={el.icon} alt=''/>
                        <p> {el.type}</p>
                        <p>Serve {el.quantity}</p>
                    </div>
                    <div className='Name'>{`₹${el.price}`}</div>
                  
                   
                 
                    <p>{el.description}</p>
                    <br></br>
                    <br></br>
                    <button className='btn' onClick={()=>StoreData(el)}>Add to Cart</button>
                </div>
            ))
            }
            </div>
            </div>
    </div>
  )
}
