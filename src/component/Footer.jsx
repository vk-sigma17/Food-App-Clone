import React from 'react'
import { RxCaretDown } from "react-icons/rx";

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-parts'>
        <h2 className='footer-align'>Swiggy<img className='footer-img' src='./images/small.jpg'/>
        </h2>
        <span>© 2024 Bundl Technologies Pvt. Ltd</span>
      </div>
      <div className='footer-parts'>
        <h2>Company</h2>
        <span>About</span>
        <span>Careers</span>
        <span>Team</span>
        <span>Swiggy One</span>
        <span>Swiggy Instant</span>
        <span>Swiggy Genie</span>
      </div>
      <div className='footer-parts'>
        <div className='footer-part'>
          <h2>Contact us</h2>
          <span>Help & Support</span>
          <span>Partner With Us</span>
          <span>Ride With Us</span>
        </div>
        <div className='footer-part'>
          <h2>Legal</h2>
          <span>Terms & Conditions</span>
          <span>Cookie Policy</span>
          <span>Privacy Policy</span>
          <span>Investor Relations</span>
        </div>
        
        
      </div>
      <div className='footer-parts'>
        <h2>We Deliver To :</h2>
        <span>Bangalore</span>
        <span>Gurgoan</span>
        <span>Hyderabad</span>
        <span>Delhi</span>
        <span>Mumbai</span>
        <span>Pune</span>
        <span className='footer-special'>858 Cities <RxCaretDown /></span>
      </div>
    </div>
  )
}

export default Footer