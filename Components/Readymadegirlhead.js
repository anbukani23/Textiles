import React, { useEffect } from 'react';
import '../CSS/Header.css';
import aboutImage from '../Images/readymadegirl.jpg';
import babyImage from '../Images/readymadegirl1.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Readymadegirlhead = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container4" style={{ textAlign: 'center', padding: '20px' }}>
      <div className="service" data-aos="fade-down" style={{ marginBottom: '20px' }}>
        <h1 style={{ fontSize: '50px', color: '#333' }}>Ready Made</h1>
        <p style={{ fontSize: '18px', color: '#777' }}>
          <span className="highlight">Home</span>/
          <span className="highlight">Girl's Collection</span>/
        </p>
      </div>
      <div className="imager" style={{ display: 'flex', justifyContent: 'center',marginLeft:'150px' }}>
        <img src={aboutImage} alt="Service Image 1" data-aos="fade-up" style={{ margin: '10px', maxWidth: '300px', borderRadius: '8px' }} />
        <img src={babyImage} alt="Service Image 2" data-aos="fade-up" style={{ margin: '10px', maxWidth: '300px', borderRadius: '8px' }} />
        <img src={aboutImage} alt="Service Image 1" data-aos="fade-up" style={{ margin: '10px', maxWidth: '300px', borderRadius: '8px' }} />

      </div>
    </div>
  );
};

export default Readymadegirlhead;
