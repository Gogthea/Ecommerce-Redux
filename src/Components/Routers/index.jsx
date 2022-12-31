import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from '../../Pages/Home';
import Products from '../../Pages/Products';
import About from '../../Pages/About';
import Contact from '../../Pages/Contact';
import SingleProduct from '../../Pages/Products/SingleProduct';

export default function Approuters() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='products/' element={<Products/>}/>
            <Route path='products/:id' element={<SingleProduct/>}/>
            <Route path='about/' element={<About/>}/>
            <Route path='contact/' element={<Contact/>}/>
        </Routes>
        
    </div>
  )
}
