import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { DataCat } from '../DataCat';

export default function Category(){
    const [categories, setCategories] = React.useState(DataCat);
    const [slide, setSlide] = React.useState(0);

    function prevSlide(){
        if(slide === 0){
            return false;
        }
        setSlide(slide - 6)

    }
    function nextSlide(){
        if(categories.length - 2 === slide) return false;
        setSlide(slide + 6)
    }

    return(
        <div className='cat'>
            <div className='cat-upper'>
                <div>What's on your mind?</div>
                <div className='cat-arrows'>
                    <div className='cat-arrow' onClick={prevSlide}><FaArrowLeft /></div>
                    <div className='cat-arrow' onClick={nextSlide}><FaArrowRight /></div>
                </div>
            </div>
            <div className='cat-items'>
                {
                    categories.map((catt, index) => {
                        return (
                            <div style={{ transform: `translateX(-${slide * 100}%)`,
                            transitionDuration: "500ms"}} key={index} className='cat-item'>
                                <img  src={`./images1/${catt.image}`}/>
                            </div>
                        )
                    })
                }
            </div>
            <hr style={{border: "1px solid #e9e9eb"}} />

        </div>
        
    )
}