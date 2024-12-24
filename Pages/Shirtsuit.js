import React, { useState } from 'react';
import ShirtsuitImage from '../Images/shirt&suit1.png';
import ShirtsuitImage1 from '../Images/shirt&suit2.png';
import ShirtsuitImage2 from '../Images/shirt&suit3.png';
import ShirtsuitImage3 from '../Images/shirt&suit4.png';
import ShirtsuitImage4 from '../Images/shirt&suit5.png';
import ShirtsuitImage5 from '../Images/shirt&suit6.png';
import ShirtsuitImage6 from '../Images/shirt&suit7.png';
import ShirtsuitImage7 from '../Images/shirt&suit8.png';
import ShirtsuitImage8 from '../Images/shirt&suit8.png';
import ShirtsuitImage9 from '../Images/shirt&suit9.png';
import ShirtsuitImage10 from '../Images/shirt&suit10.png';

import '../CSS/Header.css';
import Modal from '../Components/Modal';
import Footer from '../Components/Footer';

const products = [
  { img: ShirtsuitImage, title: "Shirting & Suiting", description: "Shirt & Suit Collection" },
  { img: ShirtsuitImage1, title: "Shirting & Suiting", description: "Shirt & Suit Collection" },
  { img: ShirtsuitImage2, title: "Shirting & Suiting", description: "Shirt & Suit Collection" },
  { img: ShirtsuitImage3, title: "Shirting & Suiting", description: "Shirt & Suit Collection" },
  { img: ShirtsuitImage4, title: "Shirting & Suiting", description: "Shirt & Suit Collection" },
  { img: ShirtsuitImage5, title: "Shirting & Suiting", description: "Shirt & Suit Collection" },
  { img: ShirtsuitImage6, title: "Shirting & Suiting", description: "Shirt & Suit Collection" },
  { img: ShirtsuitImage7, title: "Shirting & Suiting", description: "Shirt & Suit Collection" },
  { img: ShirtsuitImage8, title: "Shirting & Suiting", description: "Shirt & Suit Collection" },
  { img: ShirtsuitImage9, title: "Shirting & Suiting", description: "Shirt & Suit Collection" },
  { img: ShirtsuitImage10, title: "Shirting & Suiting", description: "Shirt & Suit Collection" },
];

const Shirtsuit = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const openModal = (image) => {
    setCurrentImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage('');
  };

  // Console log should be outside of the return statement
  console.log("Shirtsuit component rendered");

  return (
    <div className="Shirtsuit-collection">
      <h2 style={{ textAlign: 'center', color: 'blue',fontFamily:'cursive' }}>Shirt & Suit Collection</h2>
      <div className="product-list">
        {products.map((product, index) => (
          <div className="product-container" key={index} data-aos="fade-up" style={{ position: 'relative' }}>
            <div 
              className="menimage" 
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
                }}
              >
                Sale
              </div>
              <img 
                src={product.img} 
                alt={product.title} 
                style={{ width: '100%', borderRadius: '5px' }} 
              />
              <p>{product.description}</p>
              <h3>{product.title}</h3>
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
                  cursor: 'pointer'
                }}
              >
                Quick View
              </span>
            </div>
          </div>
        ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} imageSrc={currentImage} />
      <Footer />
    </div>
  );
};

export default Shirtsuit;
