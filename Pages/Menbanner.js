import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import image1 from '../Images/menupimage.png'; // Update with your actual image path
import image2 from '../Images/menupimage1.png'; // Update with your actual image path

const Menbanner = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration
  }, []);

  return (
    <div className="grid-containers">
      <div className="image-wrappers left" data-aos="fade-right">
        <img src={image1} alt="Image 1" />
      </div>
      <div className="image-wrappers right" data-aos="fade-left">
        <img src={image2} alt="Image 2" />
      </div>
      <div className="contenttexts" data-aos="fade-up">
        
        <p>Wrap Yourself in Elegance with Sabarish Textiles</p>
      </div>
    </div>
  );
};

export default Menbanner;
