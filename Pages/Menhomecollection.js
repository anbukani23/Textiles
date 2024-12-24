import React, { useEffect, useState } from 'react'; // Import useState
import menImage from '../Images/menshirt.png';
import menImage1 from '../Images/menshirt1.png';
import menImage2 from '../Images/menshirt2.png';
import menImage3 from '../Images/menshirt3.png';
import menImage4 from '../Images/menshirt4.png';
import '../CSS/Header.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import AOS from 'aos';
import 'aos/dist/aos.css';
import Modal from '../Components/Modal'; // Import Modal
import Footer from '../Components/Footer'; // Import Footer if necessary

const products = [
  { img: menImage, title: "Formal Shirt", description: "Men's Collection" },
  { img: menImage1, title: "Sarvani", description: "Men's Collection" },
  { img: menImage2, title: "Wedding Coat", description: "Men's Collection" },
  { img: menImage3, title: "Gents Shawl", description: "Men's Collection" },
  // { img: menImage4, title: "Safari Set", description: "Men's Collection" },
];

const MenHomeCollection = () => {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

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
    <div className="men's-collection">
      <br/>
      <br/>
      <h2 style={{ textAlign: 'center', color: 'blue', fontFamily: 'cursive',marginTop:'150px'}}>Men Collections</h2>
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
      {/* If you're using Footer, uncomment below line */}
      {/* <Footer /> */}
    </div>
  );
};

export default MenHomeCollection; // Ensure consistent naming
