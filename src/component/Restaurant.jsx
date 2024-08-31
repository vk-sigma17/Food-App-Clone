import React from 'react'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { RestaurantData } from '../RestaurantData';

function Restaurant() {
  const [data, setData] = React.useState(RestaurantData);
  const [slide, setSlide] = React.useState(0);

  function prevSlide(){
    if(slide === 0){
      return false;
    }
    setSlide(slide - 2)
  }
  function nextSlide(){
    if(data.length - 2 === slide) return false;
    setSlide(slide + 2);
  }

  return (
    <div className='cat'>
        <div className='cat-upper'>
            <div>Top restaurant chains in Jaipur</div>
            <div className='cat-arrows'>
                <div className='cat-arrow' onClick={prevSlide}><FaArrowLeft /></div>
                <div className='cat-arrow' onClick={nextSlide}><FaArrowRight /></div>
            </div>
        </div>
        <div className='rest-items'>
            {
              data.map((item, index) => {
                return (
                  <div className='rest-item' key={index}>

                    <div className='rest-content' style={{ transform: `translateX(-${slide * 100}%)`,
                            transitionDuration: "500ms"}}>
                      <img className='rest-img' src={`./images2/${item.image}`} />
                      <div className='overlay'></div>
                      <div className='rest-badge'>{item.offer}</div>
                      
                      <div className='rest-info'>
                        <h3>{item.title}</h3> 
                        <div className='rest-line'>
                          <img  src='./star.png'/>
                          <span className='rest-rating'>({item.rating}).</span>
                          <span>{item.minTime}-{item.maxTime} mins</span>
                        </div>
                        <p>{item.name}</p>
                        <p>{item.place}</p>
                      </div>
                    </div>
                  </div>
                )
              })
            }
        </div>
        <hr style={{ border: "1px solid #e9e9eb", width: "100%", margin: "5px 0px" }} />

    </div>
  )
}

export default Restaurant





