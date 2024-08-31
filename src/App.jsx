import React from 'react';

import Navbar from './component/Navbar';
import Category from './component/category';
import Restaurant from './component/Restaurant';
import RestautantDelivery from './component/RestautantDelivery';
import Boxes from './component/Boxes';
import Download from './component/Download';
import Footer from './component/Footer';



export default function App(){
  return(
    <div>

        <Navbar />
        <Category />
        <Restaurant />
        <RestautantDelivery />
        <Boxes />
        <Download />
        <Footer />
        


    </div>
  )
}
