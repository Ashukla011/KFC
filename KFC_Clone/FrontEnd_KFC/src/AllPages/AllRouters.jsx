import React from 'react'
import {Routes,Route} from 'react-router-dom'
import { Home } from './Home'
import {Deals} from './Deals'
import {RestaurentMune} from './RestaurentMune'
import { NotFound } from './NotFound'
import { Payment } from './Payment'
import {Sign} from './Sign'
import {Cart} from './Cart' 
import {SinglePage} from './SinglePage'
import { OrderSummery } from './OrderSummery'
import { Adress } from './Adress'
import { Otp } from './Otp'
export const AllRouters = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/RestaurentMune'element={<RestaurentMune/>}></Route>
            <Route path='/Deals'element={<Deals/>}></Route>
            <Route path='/Payment' element={<Payment/>}></Route>
            <Route path='/Sign' element={<Sign/>} ></Route>
            <Route path='/Cart' element={<Cart/>}></Route>
            <Route path='/SinglePage' element={<SinglePage/>}></Route>
            <Route path='/OrderSummery' element={<OrderSummery/>}></Route>
            <Route path="Adress" element={<Adress/>}></Route>
            <Route path='/Otp' element={<Otp/>}></Route>
            <Route path='*' element={<NotFound/>}></Route>
        </Routes>
    </div>
  )
}
