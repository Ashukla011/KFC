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
  return (
    <div>
        <div className='periperi2'>
            {
            data.map((el)=>(
                <div key={el.id} className='box'>
                    <img src={el.image} alt='' style={{width:"100%"}}/>
                    <br/>
                    <div className='box2'>{el.name}</div>
                    <div style={{display:'flex',gap:"5px"}}>
                        <img src={el.icon}/>
                        <p> {el.type}</p>
                        <p>Serve {el.quantity}</p>
                    </div>
                    <div className='box2'>{`₹${el.price}`}</div>
                  
                   
                 
                    <p>{el.description}</p>
                    <br></br>
                    <br></br>
                    <button >Add to Cart</button>
                </div>
            ))
            }
            </div>
    </div>
  )
}
