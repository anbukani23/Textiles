import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import boysImage from '../Images/boyscollection.jpg';
import boysImage1 from '../Images/boyscollection1.jpg';
import boysImage2 from '../Images/boyscollection2.jpg';
import boysImage3 from '../Images/boyscollection3.jpg';
import boysImage4 from '../Images/boyscollection4.jpg';
import boysImage5 from '../Images/boytrouser.png';
import boysImage6 from '../Images/boypant.png';
import boysImage7 from '../Images/boyjeans.png';
import boysImage8 from '../Images/boylungi.png';
import boysImage9 from '../Images/boykurta.png';
import Readymadeboyhead from '../Components/Readymadeboyhead';
import Modal from '../Components/Modal'; // Ensure you import Modal
import Footer from '../Components/Footer'; // Ensure you import Footer

import '../CSS/Header.css';
import bannerImage from '../Images/girls-banner.jpg';

const products = [
  { img: boysImage, title: "Dhothies", description: "Boy Collection" },
  { img: boysImage1, title: "Shirt Set", description: "Boy Collection" },
  { img: boysImage2, title: "Shirt", description: "Boy Collection" },
  { img: boysImage3, title: "T-Shirt", description: "Boy Collection" },
  { img: boysImage4, title: "Banion", description: "Boy Collection" },
  { img: boysImage5, title: "Trouser", description: "Boy Collection" },
  { img: boysImage6, title: "Truk Pant", description: "Boy Collection" },
  { img: boysImage7, title: "Jeans", description: "Boy Collection" },
  { img: boysImage8, title: "Lungi", description: "Boy Collection" },
  { img: boysImage9, title: "Kurta", description: "Boy Collection" },
];

const Boyscollection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  const openModal = (image) => {
    setCurrentImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage('');
  };

  return (
    <div className='collectionwrapper'>
      <div className="boy-collection">
        <h2 style={{ textAlign: 'center', color: 'blue', fontFamily: 'cursive', fontSize: '30px' }}>Boy Collections</h2>
        <div className="product-list" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {products.map((product, index) => (
            <div className="product-container" key={index} data-aos="fade-up" style={{ position: 'relative', width: 'calc(25% - 20px)', margin: '10px' }}>
              <div 
                className="boyimage" 
                onClick={() => openModal(product.img)} 
                style={{ cursor: 'pointer', textAlign: 'center' }}
              >
                <div 
                  style={{
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    backgroundColor: 'red',
                    color: 'white',
                    padding: '3px',
                    borderRadius: '5px',
                    zIndex: 1,
                    fontFamily: 'cursive',
                    fontSize: '20px'
                  }}
                >
                  Sale
                </div>
                <img 
                  src={product.img} 
                  alt={product.title} 
                  style={{ width: '80%', borderRadius: '5px' }} 
                />
                <p style={{ fontSize: '14px' }}>{product.description}</p>
                <h3 style={{ fontSize: '16px' }}>{product.title}</h3>
                
                <span 
                  className="quick-view" 
                  onClick={(e) => { e.stopPropagation(); openModal(product.img); }} 
                  style={{
                    display: 'inline-block',
                    marginTop: '10px',
                    padding: '5px 10px',
                    border: '2px solid blue',
                    color: 'blue',
                    textDecoration: 'none',
                    borderRadius: '5px',
                    transition: 'background-color 0.3s',
                    cursor: 'pointer',
                    fontSize: '15px'
                  }}
                >
                  Quick View
                </span>
              </div>
            </div>
          ))}
        </div>
        <Modal isOpen={isModalOpen} onClose={closeModal} imageSrc={currentImage} />
      </div>
      <Footer />
    </div>
  );
};

export default Boyscollection;
