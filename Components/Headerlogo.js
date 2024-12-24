import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoImage from '../Images/Sabarish.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const categories = [
  { value: '0', label: "All Categories" },
  { value: '1', label: "Men's Collection" },
  { value: '2', label: "Women's Collection" },
  { value: '3', label: "Boy's Collection" },
  { value: '4', label: "Girl's Collection" },
  { value: '5', label: "Blouse & Inskirt" },
  { value: '6', label: "Poonam Sarees" },
  { value: '7', label: "Cotton & Fancy Sarees" },
  { value: '9', label: "Pattu Pavadai Section" },
];

const HeaderLogo = () => {
  const [category, setCategory] = useState('0');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (category !== '0') {
      navigate(`/category/${category}`);
    }
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <>
      <header>
        <div className="logo">
          <img src={logoImage} alt="Company Logo" />
        </div>
        <div className="header__search--widget">
          <form className="d-flex header__search--form" onSubmit={handleSearch}>
            <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
              <select
                name="categories"
                id="categories"
                value={category}
                onChange={handleCategoryChange}
                aria-label="Select Category"
                style={{
                  padding: '10px',
                  fontSize: '16px',
                  // borderRadius: '5px',
                  flex: '1',
                  marginRight: '10px', // Space between dropdown and button
                }}
              >
                {categories.map(({ value, label }) => (
                  <option key={value} value={value}>{label}</option>
                ))}
              </select>
              <button
                type="submit"
                style={{
                  padding: '10px 20px', // Match padding with dropdown
                  fontSize: '16px',
                  color: 'black', // Change text color if needed
                  cursor: 'pointer',
                  height: '40px', // Match height with dropdown
                  marginLeft: '-10px', // Adjust margin to align better
                  background: 'transparent', // No background color
                }}
                aria-label="Search Button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                    fill="none"
                    stroke="currentColor"
                    strokeMiterlimit="10"
                    strokeWidth="32"
                  />
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="32"
                    d="M338.29 338.29L448 448"
                  />
                </svg>
              </button>
            </div>
            <div className="social-icons">
              <FontAwesomeIcon icon={faFacebook} aria-label="Facebook" />
              <FontAwesomeIcon icon={faInstagram} aria-label="Instagram" />
              <FontAwesomeIcon icon={faTwitter} aria-label="Twitter" />
              <FontAwesomeIcon icon={faYoutube} aria-label="YouTube" />
            </div>
          </form>
        </div>
      </header>
      <hr />
    </>
  );
};

export default HeaderLogo;
