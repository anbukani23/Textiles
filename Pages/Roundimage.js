import React, { useEffect } from 'react';
import sareeImage from '../Images/saree.png';
import womenImage from '../Images/women.png';
import menImage from '../Images/men.png';
import kidImage from '../Images/kids.png';
import imitationjewelleryImage from '../Images/imitation jewellery.png';
import comboofferImage from '../Images/combo offer.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../CSS/Header.css'; // Import the CSS file

const Roundimage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true,     // Whether animation should happen only once while scrolling down
    });
  }, []);

  return (
    <div className="imagecontainers">
      <div className="image-wrapper" data-aos="fade-up">
        <img src={sareeImage} alt="Saree" />
        <p className='content'>Saree</p>
      </div>
      <div className="image-wrapper" data-aos="fade-up" data-aos-delay="100">
        <img src={womenImage} alt="Women" />
        <p className='content'>Women</p>
      </div>
      <div className="image-wrapper" data-aos="fade-up" data-aos-delay="200">
        <img src={menImage} alt="Men" />
        <p className='content'>Men</p>
      </div>
      <div className="image-wrapper" data-aos="fade-up" data-aos-delay="300">
        <img src={kidImage} alt="Kids" />
        <p className='content'>Kids</p>
      </div>
      <div className="image-wrapper" data-aos="fade-up" data-aos-delay="400">
        <img src={imitationjewelleryImage} alt="Imitation Jewellery" />
        <p className='content'>Imitation Jewellery</p>
      </div>
      <div className="image-wrapper" data-aos="fade-up" data-aos-delay="500">
        <img src={comboofferImage} alt="Combo Offer" />
        <p className='content'>Combo Offer</p>
      </div>
    </div>
  );
}

export default Roundimage;
