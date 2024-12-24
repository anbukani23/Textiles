import React, { useState } from 'react';
import pattupavadaiImage from '../Images/pattupavadai10.png';
import pattupavadaiImage1 from '../Images/pattupavadai9.png';
import pattupavadaiImage2 from '../Images/pattupavadai1.png';
import pattupavadaiImage3 from '../Images/pattupavadai2.png';
import pattupavadaiImage4 from '../Images/pattupavadai3.png';
import pattupavadaiImage5 from '../Images/pattupavadai4.png';
import pattupavadaiImage6 from '../Images/pattupavadai5.png';
import pattupavadaiImage7 from '../Images/pattupavadai6.png';
import pattupavadaiImage8 from '../Images/pattupavadai7.png';
import pattupavadaiImage9 from '../Images/pattupavadai8.png';
import '../CSS/Header.css';
import Modal from '../Components/Modal';
import Footer from '../Components/Footer';

const products = [
  { img: pattupavadaiImage, title: "Pattu Pavadai 1", description: "Pattu's Collection" },
  { img: pattupavadaiImage1, title: "Pattu Pavadai 2", description: "Pattu's Collection" },
  { img: pattupavadaiImage2, title: "Pattu Pavadai 3", description: "Pattu's Collection" },
  { img: pattupavadaiImage3, title: "Pattu Pavadai 4", description: "Pattu's Collection" },
  { img: pattupavadaiImage4, title: "Pattu Pavadai 5", description: "Pattu's Collection" },
  { img: pattupavadaiImage5, title: "Pattu Pavadai 6", description: "Pattu's Collection" },
  { img: pattupavadaiImage6, title: "Pattu Pavadai 7", description: "Pattu's Collection" },
  { img: pattupavadaiImage7, title: "Pattu Pavadai 8", description: "Pattu's Collection" },
  { img: pattupavadaiImage8, title: "Pattu Pavadai 9", description: "Pattu's Collection" },
  { img: pattupavadaiImage9, title: "Pattu Pavadai 10", description: "Pattu's Collection" },
];

const Pattupavadaisection = () => {
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

  return (
    <div className="pattupavadai-collection">
      <h2 style={{ textAlign: 'center', color: 'blue' }}>Pattupavadai Collection</h2>
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
                  cursor:'pointer'
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

export default Pattupavadaisection;
