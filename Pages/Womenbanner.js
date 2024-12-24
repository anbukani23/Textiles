import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import image1 from '../Images/bg women image.png'; // Update with your actual image path

const Womenbanner = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration
  }, []);

  return (
    <div style={{ width: '100%', overflow: 'hidden' }}>
      <div 
        style={{ width: '100%' }} 
        data-aos="fade-right"
      >
        <img 
          src={image1} 
          alt="Image 1" 
          style={{ 
            width: '100%', 
            height: 'auto', 
            display: 'block' 
          }} 
        />
      </div>
    </div>
  );
};

export default Womenbanner;

