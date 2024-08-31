import React from 'react'
import { RxCaretDown } from "react-icons/rx";

function Boxes() {
  return (
    <div className='box-container'>
      <div className='box-content'>
        <div className='box-head'>Best Places to Eat Across Cities</div>
        <div className='box-list'>
          <span>Best Restaurants in Bangalore</span>
          <span>Best Restaurants in Delhi</span>
          <span>Best Restaurants in Agra</span>
          <span>Best Restaurants in Noida</span>
          <span>Best Restaurants in Chennai</span>
          <span>Best Restaurants in Kochi</span>
          <span>Best Restaurants in Kolkata</span>
          <span>Best Restaurants in Hyderabad</span>
          <span>Best Restaurants in Mumbai</span>
          <span>show More <RxCaretDown /></span>

          
        </div>
      </div>

      <div className='box-content'>
        <div className='box-head'>
        Best Cuisines Near Me</div>
        <div className='box-list'>
          <span>Chinese Restaurants Near Me</span>
          <span>South Restaurants Near Me</span>
          <span>Indian Restaurants Near Me</span>
          <span>Kerala Restaurants Near Me</span>
          <span>Korean Restaurants Near Me</span>
          <span>NE Restaurants Near Me</span>
          <span>Bengali Restaurants Near Me</span>
          <span>Show More <RxCaretDown /></span>
        </div>
      </div>
      
    </div>
  )
}

export default Boxes;