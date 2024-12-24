import React, { useEffect, useState } from 'react'; // Import useState
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Make sure these images exist in the specified path
import girlImage from '../Images/girlpattiyala.jpg';
import girlImage1 from '../Images/girlpetticoat.jpg';
import girlImage2 from '../Images/girlpattupavadai.jpg';
import girlImage3 from '../Images/girlchudithar.jpg';
import girlImage4 from '../Images/girlhalfsaree.jpg';
import girlImage5 from '../Images/girl1.png';
import girlImage6 from '../Images/girl2.png';
import girlImage7 from '../Images/girl3.png';
import girlImage8 from '../Images/girl4.png'; // Ensure this file exists
import girlImage9 from '../Images/girl5.png';
import Modal from '../Components/Modal'; // Import Modal
import '../CSS/Header.css';

const products = [
  { img: girlImage, title: "Pattiyala", description: "Girl's Collection" },
  { img: girlImage1, title: "Petticoat", description: "Girl's Collection" },
  { img: girlImage2, title: "Pattupavadai", description: "Girl's Collection" },
  { img: girlImage3, title: "Chudithar", description: "Girl's Collection" },
  // { img: girlImage4, title: "Gown", description: "Girl's Collection" },
  // { img: girlImage5, title: "Lehanga", description: "Girl's Collection" },
  // { img: girlImage6, title: "Choli", description: "Girl's Collection" },
  // { img: girlImage7, title: "Pavadai", description: "Girl's Collection" },
  // { img: girlImage8, title: "Dupatta", description: "Girl's Collection" },
  // { img: girlImage9, title: "Pants", description: "Girl's Collection" },
];

const Girlhomecollection = () => {
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
    <div className="girls-collection">
      <br />
      <h2 style={{ textAlign: 'center', color: 'blue', fontFamily: 'cursive' }}>Girl's Collection</h2>
      <div className="product-list" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {products.map((product, index) => (
          <div className="product-container" key={index} data-aos="fade-up" style={{ position: 'relative', width: 'calc(25% - 20px)', margin: '10px' }}>
            <div 
              className="girlimage" 
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
        <button onClick={() => navigate('/girls-collection')}>More Collections</button>
      </div>
      <br />
      {/* Uncomment if you're using Footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default Girlhomecollection;
