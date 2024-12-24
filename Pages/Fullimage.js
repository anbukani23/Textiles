import React, { useEffect, useState } from 'react';
import bgImage from '../Images/bg image.png';
import bgImage1 from '../Images/bg image1.png';
import bgImage2 from '../Images/bg image2.png';
import bgImage3 from '../Images/bg image kids.png';
import bgImage4 from '../Images/bg image boys.png';
import '../CSS/Header.css'; // Ensure the CSS file is imported

const images = [
  bgImage,
  bgImage1,
  bgImage2,
  bgImage3,
  bgImage4,
];

const Fullimage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="image-container1">
        <br/>
              <img src={bgImage} alt="Test" style={{ width: '80%', height:'10%' }} />

      {images.map((image, index) => (
        <img 
          key={index}
          src={image}
          className="scroll-image"
          alt={`Background ${index + 1}`}
          style={{ opacity: currentIndex === index ? 1 : 0, transition: 'opacity 0.5s ease' }} // Control visibility with transition
        />
      ))}
    </div>
  );
};

export default Fullimage;
