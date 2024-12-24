import React, { useEffect, useState } from 'react';
import menImage from '../Images/menshirt.png';
import menImage1 from '../Images/menshirt1.png';
import menImage2 from '../Images/menshirt2.png';
import menImage3 from '../Images/menshirt3.png';
import menImage4 from '../Images/menshirt4.png';
import menImage5 from '../Images/menshirt5.png';
import menImage6 from '../Images/menshirt6.png';
import menImage7 from '../Images/menshirt7.png';
import menImage8 from '../Images/menshirt8.png';
import menImage9 from '../Images/menshirt9.png';
import Footer from '../Components/Footer';
import '../CSS/Header.css';
import bannerImage from '../Images/saree-banner.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Fullimage from '../Images/menheadimage.png'; // Ensure this import is correct
import Modal from '../Components/Modal'; // Import the Modal component

const products = [
  { img: menImage, title: "Formal Shirt", description: "Men's Collection" },
  { img: menImage1, title: "Sarvani", description: "Men's Collection" },
  { img: menImage2, title: "Wedding Coat", description: "Men's Collection" },
  { img: menImage3, title: "Gents Shawl", description: "Men's Collection" },
  { img: menImage4, title: "Safari Set", description: "Men's Collection" },
  { img: menImage5, title: "Safari Set", description: "Men's Collection" },
  { img: menImage6, title: "Silk Shirt", description: "Men's Collection" },
  { img: menImage7, title: "Casual Shirt", description: "Men's Collection" },
  { img: menImage8, title: "Pant", description: "Men's Collection" },
  { img: menImage9, title: "Denim", description: "Men's Collection" },
];

const Mencollection = () => {
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
    <div className='collectionwrapper'>

   
    <div className="men-collection">
     
      <h2 style={{ textAlign: 'center', color: 'blue',fontFamily:'cursive',fontSize:'30px' }}>Men Collections</h2>
      <div className="product-list" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {products.map((product, index) => (
          <div className="product-container" key={index} data-aos="fade-up" style={{ position: 'relative', width: 'calc(25% - 20px)', margin: '10px' }}>
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
                  fontFamily:'cursive',
                  fontSize:'20px'
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
                  fontSize:'15px'
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

export default Mencollection;