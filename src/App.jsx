import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Category from './component/category';
import Restaurant from './component/Restaurant';
import RestautantDelivery from './component/RestautantDelivery';
import Boxes from './component/Boxes';
import Download from './component/Download';
import Footer from './component/Footer';
import Cart from './pages/Cart'


export default function App(){
  return(
    <div>
      <BrowserRouter>
        <Navbar />
        <Category />
        <Restaurant />
        <RestautantDelivery />
        <Boxes />
        <Download />
        <Footer />
        <Routes>
          {/* <Route path='/' element={<Home />}></Route> */}
          <Route path='/Cart' element={<Cart />}></Route>
         
        </Routes>

      </BrowserRouter>
    </div>
  )
}