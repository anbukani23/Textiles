import React, { useEffect } from 'react';
import '../CSS/Header.css';
import blouseImage from '../Images/blouse1.png';
import blouseImage1 from '../Images/blouse2.png';
import blouseImage2 from '../Images/blouse3.png';
import blouseImage3 from '../Images/blouse4.png';
import blouseImage4 from '../Images/blouse5.png';
import inskirtImage from '../Images/inskirt1.png';
import inskirtImage2 from '../Images/inskirt2.png';
import inskirtImage3 from '../Images/inskirt3.png';
import inskirtImage4 from '../Images/inskirt4.png';
import inskirtImage5 from '../Images/inskirt5.png';
import bgImage from '../Images/blousebg.jpg'; // Corrected import
import Footer from '../Components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const blouseProducts = [
    { img: blouseImage, title: "Blouse 1", description: "Blouse Collection" },
    { img: blouseImage1, title: "Blouse 2", description: "Blouse Collection" },
    { img: blouseImage2, title: "Blouse 3", description: "Blouse Collection" },
    { img: blouseImage3, title: "Blouse 4", description: "Blouse Collection" },
    { img: blouseImage4, title: "Blouse 5", description: "Blouse Collection" },
];

const inskirtProducts = [
    { img: inskirtImage, title: "Inskirt 1", description: "Inskirt Collection" },
    { img: inskirtImage2, title: "Inskirt 2", description: "Inskirt Collection" },
    { img: inskirtImage3, title: "Inskirt 3", description: "Inskirt Collection" },
    { img: inskirtImage4, title: "Inskirt 4", description: "Inskirt Collection" },
    { img: inskirtImage5, title: "Inskirt 5", description: "Inskirt Collection" },
];

const BlouseInSkirt = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div>
            <div
                className="service"
                style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    padding: '50px',
                    color: 'white',
                    textAlign: 'center',
                    height: '500px'
                }}
                data-aos="fade-in" // Add AOS animation here
            >
                <h1 style={{ fontSize: '40px', color: 'orange' }}>Pattu Mahal</h1>
                <p style={{ fontSize: '30px' }}>
                    <span className="highlight" style={{ color: 'red' }}>Home /</span> <br />
                    <span className="highlight" style={{ color: 'pink' }}>Blouse & Inskirt Collection</span>
                </p>
            </div>

            <section className="blouse-collection">
                <h2 style={{ textAlign: 'center', color: 'blue' }}>Blouse Collection</h2>
                <div className="product-list">
                    {blouseProducts.map((product, index) => (
                        <article className="product-container" key={index} data-aos="zoom-in"> {/* Different AOS animation */}
                            <img src={product.img} alt={product.title} />
                            <div className="product__badge">
                                <span>Sale</span>
                            </div>
                            <h3>{product.title}</h3>
                            <p>{product.description}</p>
                            <ul className="rating product__rating d-flex">
                                {Array.from({ length: 5 }).map((_, idx) => (
                                    <li className="rating__list" key={idx}>
                                        <span className="rating__list--icon">
                                            <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                                <path d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" fill="currentColor" />
                                            </svg>
                                        </span>
                                    </li>
                                ))}
                            </ul>
                            <ul className="product__items--action d-flex">
                                <li className="product__items--action__list">
                                    <span className="quickview" style={{ cursor: 'pointer' }}>Quick View</span>
                                </li>
                                <li className="product__items--action__list">
                                    <a className="product__items--action__btn" href="#">
                                        <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="25.51" height="23.443" viewBox="0 0 512 512">
                                            <path d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </article>
                    ))}
                </div>
            </section>

            <section className="inskirt-collection">
                <h2 style={{ textAlign: 'center', color: 'blue' }}>Inskirt Collection</h2>
                <div className="product-list">
                    {inskirtProducts.map((product, index) => (
                        <article className="product-container" key={index} data-aos="fade-up"> {/* Different AOS animation */}
                            <img src={product.img} alt={product.title} />
                            <h3>{product.title}</h3>
                            <p>{product.description}</p>
                            <ul className="rating product__rating d-flex">
                                {Array.from({ length: 5 }).map((_, idx) => (
                                    <li className="rating__list" key={idx}>
                                        <span className="rating__list--icon">
                                            <svg className="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                                <path d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z" fill="currentColor" />
                                            </svg>
                                        </span>
                                    </li>
                                ))}
                            </ul>
                            <ul className="product__items--action d-flex">
                                <li className="product__items--action__list">
                                    <span className="quickview" style={{ cursor: 'pointer' }}>Quick View</span>
                                </li>
                                <li className="product__items--action__list">
                                    <a className="product__items--action__btn" href="#">
                                        <svg className="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg" width="25.51" height="23.443" viewBox="0 0 512 512">
                                            <path d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </article>
                    ))}
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default BlouseInSkirt;
