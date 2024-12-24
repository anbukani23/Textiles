import React from 'react';
import '../CSS/Header.css'; // Ensure to import your CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <div className="footer-container">
      <div className="boxer1">
        <h1>Sabarimithra Textiles</h1>
        <p>
          The intangible part of Textiles, a part that might not be immediately apparent until the textiles says something about the cloth, either orally or through writing.
        </p>
        <br/>
        <i className="fa-solid fa-location-dot"></i> 123 Street, Chennai, Tamil Nadu.
        <br />
        <br/>
        <i className="fa-solid fa-phone"></i> +0123456789
        <br /> <br/>
        <i className="fa-solid fa-envelope"></i> info@example.com
        <br />
        <div className="social-icons">
  <FontAwesomeIcon icon={faTwitter} />
  <FontAwesomeIcon icon={faFacebook} />
  <FontAwesomeIcon icon={faLinkedin} />
</div>

      </div>
      <hr/>
      
      <div className="boxer2">
        <br/>
        <h2>Quick Links</h2>
        <p>&gt; About Us</p>
        <p>&gt; Contact Us</p>
        <p>&gt; Our Services</p>
        <p>&gt; Terms & Conditions</p>
        <p>&gt; Support</p>
      </div>
    <hr/>
      <div className="boxer3">
        <br/>
        <h2>Popular Links</h2>
        <p>&gt; About Us</p>
        <p>&gt; Contact Us</p>
        <p>&gt; Our Services</p>
        <p>&gt; Terms & Conditions</p>
        <p>&gt; Support</p>
      </div>
    </div>
    
  );
};

export default Footer;