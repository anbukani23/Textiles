import React, { useState } from 'react';
import poonamsareeImage from '../Images/poonamsaree1.png';
import poonamsareeImage1 from '../Images/poonamsaree2.png';
import poonamsareeImage2 from '../Images/poonamsaree3.png';
import poonamsareeImage3 from '../Images/poonamsaree4.png';
import poonamsareeImage4 from '../Images/poonamsaree5.png'; 
import poonamsareeImage5 from '../Images/poonamsaree6.png';
import poonamsareeImage6 from '../Images/poonamsaree7.png';
import poonamsareeImage7 from '../Images/poonamsaree8.png';
import poonamsareeImage8 from '../Images/poonamsaree9.png';
import '../CSS/Header.css';
import Modal from '../Components/Modal';
import Footer from '../Components/Footer';

const products = [
  { img: poonamsareeImage, title: "Poonam Saree 1", description: "Poonam Collection" },
  { img: poonamsareeImage1, title: "Poonam Saree 2", description: "Poonam Collection" },
  { img: poonamsareeImage2, title: "Poonam Saree 3", description: "Poonam Collection" },
  { img: poonamsareeImage3, title: "Poonam Saree 4", description: "Poonam Collection" },
  { img: poonamsareeImage4, title: "Poonam Saree 5", description: "Poonam Collection" },
  { img: poonamsareeImage5, title: "Poonam Saree 6", description: "Poonam Collection" },
  { img: poonamsareeImage6, title: "Poonam Saree 7", description: "Poonam Collection" },
  { img: poonamsareeImage7, title: "Poonam Saree 8", description: "Poonam Collection" },
  { img: poonamsareeImage8, title: "Poonam Saree 9", description: "Poonam Collection" },
];

const Poonamsaree = () => {
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
    <div className="poonamsaree-collection">
      <h2 style={{ textAlign: 'center', color: 'blue',fontFamily:'cursive' }}>Poonamsaree Collection</h2>
      <div className="product-list" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {products.map((product, index) => (
          <div className="product-container" key={index} data-aos="fade-up" style={{ position: 'relative', width: 'calc(25% - 20px)', margin: '10px' }}>
            <div 
              className="poonamimage" 
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
                  fontFamily:'cursive'
                }}
              >
                Sale
              </div>
              <img 
                src={product.img} 
                alt={product.title} 
                style={{ width: '80%', borderRadius: '5px' }} 
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

export default Poonamsaree;
