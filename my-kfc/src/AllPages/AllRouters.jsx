import React from 'react'
import {Routes,Route} from 'react-router-dom'
import { Home } from './Home'
import {Deals} from './Deals'
import {Menu} from './Menu'
import { NotFound } from './NotFound'
import { Payment } from './Payment'
import {Sign} from './Sign'
import {Cart} from './Cart' 
import {SinglePage} from './SinglePage'
export const AllRouters = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/Menu'element={<Menu/>}></Route>
            <Route path='/Deals'element={<Deals/>}></Route>
            <Route path='/Payment' element={<Payment/>}></Route>
            <Route path='/Sign' element={<Sign/>} ></Route>
            <Route path='/Cart' element={<Cart/>}></Route>
            <Route path='/SinglePage' element={<SinglePage/>}></Route>
            <Route path='*' element={<NotFound/>}></Route>
        </Routes>
    </div>
  )
}
