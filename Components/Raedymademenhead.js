import React, { useEffect } from 'react';
import '../CSS/Header.css';
import aboutImage from '../Images/readymademen.jpg';
import menImage from '../Images/readymademen1.jpg';
import Mencollection from '../Pages/Menhomecollection'; // Ensure this component is correctly imported
import AOS from 'aos';
import 'aos/dist/aos.css';

const Readymademenhead = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with desired duration
  }, []);

  return (
    <div className="container4" style={{ textAlign: 'center', padding: '20px' }}>
      <div className="service" data-aos="fade-up" style={{ marginBottom: '20px' }}>
        <h1 style={{ fontSize: '50px', color: '#333' }}>Ready Made</h1>
        <p style={{ fontSize: '18px', color: '#777' }}>
          <span className="highlight">Home</span> /
          <span className="highlight">Men's Collection</span> /
        </p>
      </div>
      <div className="imager" style={{ display: 'flex', justifyContent: 'center', gap: '20px' }} data-aos="fade-up">
        <img 
          src={aboutImage} 
          alt="Service Image 1" 
          style={{ width: '45%', height: 'auto', borderRadius: '8px' }} 
        />
        <img 
          src={menImage} 
          alt="Service Image 2" 
          style={{ width: '45%', height: 'auto', borderRadius: '8px' }} 
        />
      </div>
      <Mencollection />
    </div>
  );
};

export default Readymademenhead;

