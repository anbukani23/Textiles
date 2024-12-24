import React, { useEffect, useState } from 'react'; // Import useState
import AOS from 'aos';
import 'aos/dist/aos.css';
import boysImage from '../Images/boyscollection.jpg';
import boysImage1 from '../Images/boyscollection1.jpg';
import boysImage2 from '../Images/boyscollection2.jpg';
import boysImage3 from '../Images/boyscollection3.jpg';
import boysImage4 from '../Images/boyscollection4.jpg';
import '../CSS/Header.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Modal from '../Components/Modal'; // Import Modal

const products = [
  { img: boysImage, title: "Dhothies", description: "Boy's Collection" },
  { img: boysImage1, title: "Shirt Set", description: "Boy's Collection" },
  { img: boysImage2, title: "Shirt", description: "Boy's Collection" },
  { img: boysImage3, title: "T-Shirt", description: "Boy's Collection" },
  // { img: boysImage4, title: "Banion", description: "Boy's Collection" },
];

const Boyshomecollection = () => {
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
    <div className="boys-collection">
      <br />
      <h2 style={{ textAlign: 'center', color: 'blue', fontFamily: 'cursive' }}>Boy's Collection</h2>
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

export default Boyshomecollection;
