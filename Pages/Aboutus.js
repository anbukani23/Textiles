// import React from 'react'

// const Aboutus = () => {
//   return (
//     <div>
//       helllllllllllllllllllllo
//     </div>
//   )
// }
import React, { useEffect } from 'react';
import '../CSS/Header.css'; // Import the CSS file
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import img1 from '../Images/sabarish about.jpg';
import img2 from '../Images/sabarish about 1.jpg';
import Footer from '../Components/Footer';

const Aboutus = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations
      easing: 'ease-in-out', // Easing function
    });
  }, []);

  return (
    <>
      

      <section className="about__section section--padding mb-95">
        <div className="container">
          <div className="about__content">
            <span className="about__content--subtitle text__secondary mb-20" data-aos="fade-up">About Us</span>
            <br/>
            <br/>
            <p className="about__content--desc mb-20" data-aos="fade-up" data-aos-delay="300">
              Discover the Sabarish Textiles difference for yourself. Choose Sabarish Textiles for unparalleled quality, style, and service. Experience excellence, every time.
              The term textile industry describes the industry in which the production, processing, manufacture, and distribution of fabrics occurs. Fabrics are made using raw materials that are transformed into yarns and then knit or woven together. </p>
            <br />
            <p className="about__content--desc mb-25" data-aos="fade-up" data-aos-delay="400">
              Sabarish Pattu Mahal in Tenkasi is one of the leading businesses in the Baby Readymade Garment Retailers. Also known for Readymade Garment Retailers, Men Readymade Garment Retailers, Fabric Retailers, Saree Retailers, Shirt Retailers, Silk Saree Retailers, Undergarment Retailers, Apurva Silk Saree Retailers and much more.
            </p>
          </div>
          <br />

          <div className="about__thumb-container">
            <div className="about__thumb d-flex">
              <div className="about__thumb--items" data-aos="fade-right">
                <img
                  className="about__thumb--img border-radius-5 display-block"
                  src={img1}
                  alt="about-thumb"
                  style={{ width: '100%', height: 'auto', cursor: 'pointer', borderRadius: '20px' }} // Use consistent styles
                />
              </div>
              <div className="about__thumb--items position__relative" data-aos="fade-left">
                <img
                  className="about__thumb--img border-radius-5 display-block"
                  src={img2}
                  alt="about-thumb"
                  style={{ width: '100%', height: '690px', cursor: 'pointer', borderRadius: '20px' }} // Use consistent styles
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Aboutus;
