import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaShoppingCart } from "react-icons/fa";
import "./womens.css"
const MensApi = () => {

 const [WomensData, setWomensData] = useState([]); 
 
 
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 3; // Show 5 items per page
  
    // Fetch Womens Data
    const fetchWomensData = () => {
      axios.get('http://localhost:3000/Mens')
        .then((res) => {
          setWomensData(res.data);
        })
        .catch((err) => {
          console.log(err);
          alert("unable to get the data ")
        });
    };
  
    useEffect(() => {
      fetchWomensData();
    }, []);
  
    const nextSlide = () => {
      if (currentIndex + itemsPerPage < WomensData.length) {
        setCurrentIndex(currentIndex + itemsPerPage);
      }
    };
  
    const prevSlide = () => {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - itemsPerPage);
      }
    };
  
    // Add to Cart logic
    const addToCart = (womens) => {
      alert(`${womens.name} added to cart`);
    };
  
    return (
      <div className="womenslist">
        <h1>Men's Product's</h1>
        <hr />
        <div className="slider-controls">
          <button className="prev" onClick={prevSlide}>
            <FaArrowLeft />
          </button>
  
          {WomensData.length === 0 ? (
            <p>No products available</p>
          ) : (
            <div className="slider-container">
              <div className="slider">
                {WomensData.slice(currentIndex, currentIndex + itemsPerPage).map((womens, index) => (
                  <div key={index} className="product-card">
                    <img src={womens.url} alt={womens.name} className="product-image" />
                    <div className="product-info">
                      {/* <h3>{womens.name}</h3> */}
                      <p className="price">{womens.price}</p>
                      <p className="description">{womens.des}</p>
                      <p className="rating">Rating: {womens.ratings}</p>
                    </div>
                    <div className="womensbtns">
                      <button className="details-btn">View Details</button>
                      <button
                        onClick={() => addToCart(womens)}
                        className="add-to-cart-btn"
                      >
                        <FaShoppingCart /> Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
  
          <button className="next" onClick={nextSlide}>
            <FaArrowRight />
          </button>
        </div>
      </div>
    );
  };

export default MensApi