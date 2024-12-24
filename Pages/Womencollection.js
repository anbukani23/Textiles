import React, { useEffect, useState } from 'react';
import womenImage from '../Images/kurti.png';
import womenImage1 from '../Images/salwar wear.png';
import womenImage2 from '../Images/inner wear.png';
import womenImage3 from '../Images/crop top.png';
import womenImage4 from '../Images/leganta wear.png'; 
import womenImage5 from '../Images/womensaree.png';
import womenImage6 from '../Images/womensaree1.png';
import womenImage7 from '../Images/womensaree2.png';
import womenImage8 from '../Images/womensaree3.png';
import womenImage9 from '../Images/womensaree4.png';
import Modal from '../Components/Modal'; // Import the Modal component
import Footer from '../Components/Footer'; // Import the Footer component

import AOS from 'aos';
import 'aos/dist/aos.css';
import '../CSS/Header.css';

const products = [
  { img: womenImage, title: "Kurti", description: "Women's Collection" },
  { img: womenImage1, title: "Salwar", description: "Women's Collection" },
  { img: womenImage2, title: "Inner Wear", description: "Women's Collection" },
  { img: womenImage3, title: "Crop Top", description: "Women's Collection" },
  { img: womenImage4, title: "Leganta", description: "Women's Collection" },
  { img: womenImage5, title: "Art Silk Saree", description: "Women's Collection" },
  { img: womenImage6, title: "Pure Silk Saree", description: "Women's Collection" },
  { img: womenImage7, title: "Cotton Saree", description: "Women's Collection" },
  { img: womenImage8, title: "Stone Saree", description: "Women's Collection" },
  { img: womenImage9, title: "Soft Silk", description: "Women's Collection" },
];

const Womencollection = () => {
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
      <div className="women-collection">
        <h2 style={{ textAlign: 'center', color: 'blue', fontFamily: 'cursive', fontSize: '30px' }}>Women's Collections</h2>
        <div className="product-list" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {products.map((product, index) => (
            <div className="product-container" key={index} data-aos="fade-up" style={{ position: 'relative', width: 'calc(25% - 20px)', margin: '10px' }}>
              <div 
                className="womenimage" 
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

export default Womencollection;
