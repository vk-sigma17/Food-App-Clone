import React from "react";
import { RestaurantData } from "../RestaurantData";
import { VscListFilter } from "react-icons/vsc";
import { RxCaretDown } from "react-icons/rx";

function RestaurantDelivery() {
  const [data, setData] = React.useState(RestaurantData); // Initialize with RestaurantData

  return (
    <div className="rest-card">
      <div className="rest-heading">Restaurants with online food delivery in Jaipur</div>
      <div className="rest--cat">
        <span>Filter <VscListFilter /></span>
        <span>Sort By <RxCaretDown /></span>
        <span>Fast delivery</span>
        <span>New On Swiggy</span>
        <span>Rating 4.0+</span>
        <span>Pure Veg</span>
        <span>Offers</span>
        <span>Rs.300-Rs.699</span>
        <span>Less Than Rs.400</span>
      </div>
      <div className="rest-lists">
        {data.map((item, index) => {
          return (
            <div key={index} className="rest-list">
              <div className="rest-card">
                <img className="rest-img" src={`./images2/${item.image}`} alt={item.title} />
               
                <div className="rest-info">
                  <h3>{item.title}</h3>
                  <div className="rest-line">
                    <img src="./star.png" alt="Rating" />
                    <span className="rest-rating">({item.rating})</span>
                    <span>{item.minTime}-{item.maxTime} mins</span>
                  </div>
                  <p>{item.name}</p>
                  <p>{item.place}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <hr style={{ border: "1px solid #e9e9eb", width: "100%", margin: "5px 0px" }} />
    </div>
  );
}

export default RestaurantDelivery;
