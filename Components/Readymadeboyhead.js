import React, { useEffect } from 'react';
import '../CSS/Header.css';
import aboutImage from '../Images/boyhead.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Readymadeboyhead = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with desired duration
  }, []);

  return (
    <div className="container4" style={{ textAlign: 'center', padding: '20px' }}>
      <div className="service" data-aos="fade-up" style={{ marginBottom: '20px' }}>
        <h1 style={{ fontSize: '40px', color: '#333' }}>Ready Made</h1>
        <p style={{ fontSize: '18px', color: '#777' }}>
          <span className="highlight">Home</span>/
          <span className="highlight">Boy's Collection</span>/
        </p>
      </div>
      <div className="imager" data-aos="fade-up">
        <img
          src={aboutImage}
          alt="Service Image 1"
          style={{
            width: '90%',
            height: 'auto',
            margin: '0 auto',
            display: 'block',
            borderRadius: '8px', // Add some styling if desired
          }}
        />
      </div>
    </div>
  );
};

export default Readymadeboyhead;
