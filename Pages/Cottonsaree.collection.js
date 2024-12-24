import React from 'react';
import sareeImage from '../Images/sareecotton.png';
import sareeImage1 from '../Images/sareepoonam.png';
import sareeImage2 from '../Images/sareesilk.png';
import sareeImage3 from '../Images/sareeswamy.png';
import sareeImage4 from '../Images/sareeturkey.png';
import '../CSS/Header.css';


const products = [
  { img: sareeImage, title: "Cotton Saree", description: "Saree's Collection" },
  { img: sareeImage1, title: "Poonam Saree", description: "Saree's Collection" },
  { img: sareeImage2, title: "Silk Saree", description: "Saree's Collection" },
  { img: sareeImage3, title: "Swamy Saree", description: "Saree's Collection" },
  { img: sareeImage4, title: "Turkey Saree", description: "Saree's Collection" },
];

const Cottonsaree = () => {
  return (
    <section className="cottonsaree-collection">
      <h2 style={{ textAlign: 'center',color: 'blue' }}>Cotton&Saree's Collection</h2>
      <br/>
      <div className="product-list">
        {products.map((product, index) => (
          <div className="product-container" key={product.title}>
            <div className="Cottonimage">
              <img src={product.img} alt={`${product.title} - ${product.description}`} />
              <div className="product__badge">
                <span>Sale</span>
              </div>
              <p>{product.description}</p>
              <h3>{product.title}</h3>
            </div>
            <ul className="rating product__rating d-flex">
              {Array.from({ length: 5 }).map((_, idx) => (
                <li className="rating__list" key={idx}>
                  <span className="rating__list--icon">
                    <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                      <path data-name="star - Copy" d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" transform="translate(0 -0.018)" fill="currentColor" />
                    </svg>
                  </span>
                </li>
              ))}
            </ul>
            <ul className="product__items--action d-flex">
              <li className="product__items--action__list">
                  <i className="fa-solid fa-magnifying-glass"></i>
                  <span className="quickview" style={{marginLeft:'10px'}}>Quick View</span>
                
              </li>
              <li className="product__items--action__list">
                <a className="product__items--action__btn" href="#">
                  <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="25.51" height="23.443" viewBox="0 0 512 512">
                    <path d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
                  </svg>
                  <span className="visually-hidden"></span>
                </a>
              </li>
              <li className="product__items--action__list">
                
                <circle cx="256" cy="256" r="80" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32" />
            
          </li>
            </ul>
          </div>
        ))}
      </div>
      
      <div className='btn' style={{ textAlign: 'center', marginTop: '20px' }}>
        <button onClick={() => alert('More collections coming soon!')}>More Collections</button>
      </div>
      <br/>
     
    </section>
    
    
  );
}

export default Cottonsaree;
