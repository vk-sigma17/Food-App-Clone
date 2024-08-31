import React from "react";
import { RxCaretDown } from "react-icons/rx";

import { IoSearchSharp } from "react-icons/io5";
import { RiDiscountPercentLine } from "react-icons/ri";
import { LuBadgeHelp } from "react-icons/lu";

import { RiAccountBoxLine } from "react-icons/ri";
// import { Link } from "react-router-dom";

export default function Navbar(){
    // <Link to="/">Home</Link>
    // <Link to="/Cart">Cart</Link>
    return (
        <div className="navbar">
           <div className="navbar-main">
                <div className="navbar-image">
                    <img src="./images/swiggy2.png" />
                </div>
                <div className="nav-line">
                    <span className="nav-span">Jagatpura</span> Jaipur, Rajasthan, India <RxCaretDown className="logo" />

                </div>
                <div className="nav--list">
                    <li className="nav--li"><IoSearchSharp /> Search</li>
                    <li className="nav--li"><RiDiscountPercentLine  /> Offers<span className="new-badge">NEW</span></li>
                    <li className="nav--li"><LuBadgeHelp />Help</li>
                    <li className="nav--li"><RiAccountBoxLine  /> Sign In</li>
                    <li className="nav--li">Cart <span style={{color:"#ff5200"}}>(0)</span> </li>
                </div>
           </div>
        </div>

    )
}