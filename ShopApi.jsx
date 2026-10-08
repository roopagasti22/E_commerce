import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaShoppingCart } from "react-icons/fa";
import "./womens.css"

const ShopApi = () => {
  
   const [ElectronicsData, setElectronicsData] = useState([]); 
   const [GroceryData, setGroceryData] = useState([]); 

   
   
      const [currentIndex, setCurrentIndex] = useState(0);
      const itemsPerPage = 3; // Show 5 items per page
    
      // Fetch Womens Data
      const fetchWomensData = () => {
        axios.get('http://localhost:3000/Electronics')
          .then((res) => {
            setElectronicsData(res.data);
          })
          .catch((err) => {
            console.log(err);
            alert("unable to get the data ")
          });
      };
    
      const groceryData = () => {
        axios.get('http://localhost:3000/grocery')
          .then((res) => {
            setGroceryData(res.data);
          })
          .catch((err) => {
            console.log(err);
            alert("unable to get the data ")
          });
      };
    
      useEffect(() => {
        fetchWomensData();
        groceryData();
      }, []);
    
      const nextSlide = () => {
        if (currentIndex + itemsPerPage < ElectronicsData.length) {
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
          <h1>Electronic's Product's</h1>
          <hr />
          <div className="slider-controls">
            <button className="prev" onClick={prevSlide}>
              <FaArrowLeft />
            </button>
    
            {ElectronicsData.length === 0 ? (
              <p>No products available</p>
            ) : (
              <div className="slider-container">
                <div className="slider">
                  {ElectronicsData.slice(currentIndex, currentIndex + itemsPerPage).map((womens, index) => (
                    <div key={index} className="product-card">
                      <img src={womens.image} alt={womens.name} className="product-image" />
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

          <h1>Grocery's Product's</h1>
          <hr />
          <div className="slider-controls">
            <button className="prev" onClick={prevSlide}>
              <FaArrowLeft />
            </button>
    
            {GroceryData.length === 0 ? (
              <p>No products available</p>
            ) : (
              <div className="slider-container">
                <div className="slider">
                  {GroceryData.slice(currentIndex, currentIndex + itemsPerPage).map((womens, index) => (
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
  
export default ShopApi