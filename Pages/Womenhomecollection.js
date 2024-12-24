import React, { useEffect, useState } from 'react'; // Import useState
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
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../CSS/Header.css';
import Modal from '../Components/Modal'; // Import Modal
// Uncomment if you plan to use it
// import Readymadewomenhd from '../Components/Readymadewomenhd';

const products = [
  { img: womenImage, title: "Silk Saree", description: "Women's Collection" },
  { img: womenImage1, title: "Plain Sraee", description: "Women's Collection" },
  // { img: womenImage2, title: "Inner Wear", description: "Women's Collection" },
  { img: womenImage3, title: "Cotton Saree", description: "Women's Collection" },
  { img: womenImage4, title: "Poonam Saree", description: "Women's Collection" },
];

const WomenHomeCollection = () => {
  const navigate = useNavigate(); // Use useNavigate

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

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
    <div className="womens-collection">
      <br />
      <h2 style={{ textAlign: 'center', color: 'blue', fontFamily: 'cursive' }}>Women Collection</h2>
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
                  fontFamily: 'cursive'
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
      <div className='btn' style={{ textAlign: 'center', marginTop: '20px' }}>
        <button onClick={() => navigate('/mens-collection')}>More Collections</button>
      </div>
      <br />
      {/* Uncomment if you're using Footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default WomenHomeCollection; // Ensure consistent naming
