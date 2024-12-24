import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/Header.css'; // Import the CSS file for styles

const Shopnow = () => {
    const navigate = useNavigate();

    const handleShopNowClick = () => {
        navigate('/card-page');
    };

    return (
        <div className="shopnow">
            <h2>Shopping Category</h2>
            <br/>
            <br/>

            <div className="image-background">
                <button 
                    onClick={handleShopNowClick} 
                    className="shop-now-button">
                    Shop Now
                </button>
            </div>

            <div className="image-background1">
                <button 
                    onClick={handleShopNowClick} 
                    className="shop-now-button">
                    Shop Now
                </button>
            </div>

            <div className="image-background2">
                <button 
                    onClick={handleShopNowClick} 
                    className="shop-now-button">
                    Shop Now
                </button>
            </div>
        </div>
    );
};

export default Shopnow;
