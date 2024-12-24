// Modal.js
import '../CSS/Header.css';
import React, { useState } from 'react';

const Modal = ({ isOpen, onClose, imageSrc }) => {
  // Move useState to the top level
  const [isZoomed, setIsZoomed] = useState(false);

  // Return null if not open
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose}>&times;</span>
        <div className="image-container">
          <img 
            src={imageSrc} 
            alt="Quick View" 
            className={`zoom-image ${isZoomed ? 'zoomed' : ''}`} 
            onClick={() => setIsZoomed(!isZoomed)} // Toggle zoom on click
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
