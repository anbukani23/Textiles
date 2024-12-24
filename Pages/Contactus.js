// import React from 'react';

// const Contactus = () => {
//   return (
//     <div>
//       <h1>Contact Us</h1>
//       <p>For inquiries, please reach out!</p>
//     </div>
//   );
// }

// export default Contactus;



import React, { useState } from 'react';
import '../CSS/Header.css'; 
import Footer from '../Components/Footer'

const Contactus = () => {
    const [formData, setFormData] = useState({
        name: '',
        number: '',
        email: '',
        subject: '',
        message: ''
    });
    const [successMessage, setSuccessMessage] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 
        setSuccessMessage(true); 
        setFormData({ name: '', number: '', email: '', subject: '', message: '' }); 
    };

    return (
        <div className="containers">
            <h1 className="section__heading--maintitle" style={{ color: 'black' }}>Get In Touch</h1>
            <br />
            <h2 className="contacttitle" style={{ color: 'blue', fontFamily: 'cursive' }}>Contact Me</h2>
            <br />
            <div className="contact__wrapper">
                <div className="contact__info border-radius-5" style={{ backgroundColor: 'rgb(209,32,35)', padding: '20px', color: 'white', borderRadius: '8px' }}>
                    <h3>Contact Us</h3>
                    <br />
                    <div className="contactinfo-items">
                        <div className="contactinfo-icon">
                            {/* Phone Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="31.568" height="31.128" viewBox="0 0 31.568 31.128">
                                <path d="M26.676,16.564l7.892-7.782L26.676,1V5.669H20.362v6.226h6.314Zm3.157,7a18.162,18.162,0,0,1-5.635-.887,1.627,1.627,0,0,0-1.61.374l-3.472,3.424a23.585,23.585,0,0,1-10.4-10.257l3.472-3.44a1.48,1.48,0,0,0,.395-1.556,17.457,17.457,0,0,1-.9-5.556A1.572,1.572,0,0,0,10.1,4.113H4.578A1.572,1.572,0,0,0,3,5.669,26.645,26.645,0,0,0,29.832,32.128a1.572,1.572,0,0,0,1.578-1.556V25.124A1.572,1.572,0,0,0,29.832,23.568Z" fill="currentColor" />
                            </svg>
                        </div>
                        <p>Surandai <a href="tel:18004250838" style={{ color: 'white' }}>18004250838</a></p>
                        <p>Sankarankovil <a href="tel:18004256060" style={{ color: 'white' }}>18004256060</a></p>
                    </div>
                    <br />
                    <div className="contactinfo-items">
                        <h3>Email Address</h3>
                        <div className="contactinfo-icon">
                            {/* Email Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="31.57" height="31.13" viewBox="0 0 31.57 31.13">
                                <path d="M30.413,4H5.157C3.421,4,2.016,5.751,2.016,7.891L2,31.239c0,2.14,1.421,3.891,3.157,3.891H30.413c1.736,0,3.157-1.751,3.157-3.891V7.891C33.57,5.751,32.149,4,30.413,4Zm0,7.783L17.785,21.511,5.157,11.783V7.891l12.628,9.728L30.413,7.891Z" fill="currentColor" />
                            </svg>
                        </div>
                        <p><a href="mailto:info@selvarani.com" style={{ color: 'white' }}>info@sabarish.com</a></p>
                    </div>
                    <br />
                    <div className="contactinfo-items">
                        <h3>Our Location</h3>
                        <div className="contactinfo-icon">
                            {/* Location Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="31.57" height="31.13" viewBox="0 0 31.57 31.13">
                                <path d="M5.323,14.341V24.718h4.985V14.341Zm9.969,0V24.718h4.985V14.341ZM2,32.13H33.57V27.683H2ZM25.262,14.341V24.718h4.985V14.341ZM17.785,1,2,8.412v2.965H33.57V8.412Z" fill="currentColor" />
                            </svg>
                        </div>
                        <p>10/1-3 North Street,<br /> Surandai,<br />Tamil Nadu - 627851</p>
                        <p>100 A.B,C.D,<br /> Railway Feeder Rd, Sankarankovil,<br /> Tamil Nadu - 627811</p>
                    </div>
                </div>
                
                <form className="contact__form--inner" onSubmit={handleSubmit}>
                    <div className="contactlist">
                        <label htmlFor="name">First Name <span>*</span></label>
                        <input name="name" placeholder="Your First Name" type="text" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="contactlist">
                        <label htmlFor="number">Phone Number <span>*</span></label>
                        <input name="number" placeholder="Phone number" type="text" value={formData.number} onChange={handleChange} required />
                    </div>
                    <div className="contactlist">
                        <label htmlFor="email">Email <span>*</span></label>
                        <input name="email" placeholder="Email" type="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="contactlist">
                        <label htmlFor="subject">Subject <span>*</span></label>
                        <input name="subject" placeholder="Subject" type="text" value={formData.subject} onChange={handleChange} required />
                    </div>
                    <div className="contactlist">
                        <label htmlFor="message">Write Your Message <span>*</span></label>
                        <textarea name="message" placeholder="Write Your Message" value={formData.message} onChange={handleChange} required></textarea>
                    </div>
                    <button className="contact__form--btn primary__btn" type="submit">Submit Now</button>
                </form>
            </div>

            {successMessage && (
                <div className="success-message">
                    <p>All text complete! Sent successfully.</p>
                </div>
            )}

            <Footer />
        </div>
    );
};

export default Contactus;
