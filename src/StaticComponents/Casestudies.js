import Cards from "../DynamicComponents/CaseStudies/Card";
import React, { useRef,useState,useEffect } from "react";
import {Casestudieslist} from "../constants/commonConstatnts";
import { Arrow } from "../constants/svglocations";

const Casestudies = () => {
    const carouselRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
  
  
    const handleTouchStart = (e) => {
        setIsDragging(true);
        setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
        setScrollLeft(carouselRef.current.scrollLeft);
      };
    
      const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - carouselRef.current.offsetLeft);
        setScrollLeft(carouselRef.current.scrollLeft);
        carouselRef.current.style.cursor = "grabbing"; // Change cursor when dragging
      };
    
      // Handle the swipe movement
      const handleTouchMove = (e) => {
        if (!isDragging) return; // Do nothing if not dragging
        const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
        const walk = (x - startX) * 1.5; // Adjust the multiplier for sensitivity
        carouselRef.current.scrollLeft = scrollLeft - walk;
      };
    
      const handleMouseMove = (e) => {
        if (!isDragging) return; // Do nothing if not dragging
        const x = e.pageX - carouselRef.current.offsetLeft;
        const walk = (x - startX) * 1.5; // Adjust the multiplier for sensitivity
        carouselRef.current.scrollLeft = scrollLeft - walk;
      };
    
      // End the swipe
      const handleTouchEnd = () => {
        setIsDragging(false);
      };
    
      const handleMouseUp = () => {
        setIsDragging(false);
        carouselRef.current.style.cursor = "grab"; // Reset cursor when dragging ends
      };
    
      const handleMouseLeave = () => {
        if (isDragging) {
          handleMouseUp(); // Ensure dragging stops when mouse leaves
        }
      };
    
      useEffect(() => {
        // Initialize cursor style
        if (carouselRef.current) {
          carouselRef.current.style.cursor = "grab";
        }
      }, []);

    

    return (
        <div className="py-5">
            <div className="text-center">
            <p className="case-title">
            Case Studies
                </p>
                <p className="service-title">
                Real Results, Real Impact
                </p>
            </div>
            <div className="row justify-content-center mt-4 mx-2 mx-lg-5 px-lg-5 service">
            <div className="carousel-container">
     
      <div className="carousel" ref={carouselRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave} 
      >

               
                {
                    Casestudieslist.map((card,index)=>(
                        <Cards image={card.image} title={card.title} text={card.text} col={card.col} Challenge={card.Challenge} Solution={card.Solution} Outcome={card.Outcome}/>
                    ))
                }
               
               
    </div>
                </div>
            </div>
           
        </div>
    )
} 

export default Casestudies;