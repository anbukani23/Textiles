import React from 'react';
import Headertop from '../Components/Headertop';
import Headerlogo from '../Components/Headerlogo';
import Header from '../Components/Header';
import Roundimage from './Roundimage';
import Fullimage from './Fullimage';
import Menhomecollection from './Menhomecollection';
import Boyshomecollection from '../Pages/Boyshomecolletion';
import Womenhomecollection from './Womenhomecollection'; // Assuming this is the correct import
import Girlhomecollection from './Girlhomecollection';
import Contactus from './Contactus'; 
import Footer from '../Components/Footer';
import Shopnow from '../Components/Shopnow';
import Menbanner from './Menbanner';
import Womenbanner from './Womenbanner';
import Girlbanner from './Girlbanner';
import Boybanner from './Boybanner';

const Home = () => {
    return (
      <div>
        {/* <Headertop />
        <Headerlogo />
        <Header /> */}
        <Roundimage />
        <Fullimage />
        <Shopnow />
        <Menbanner/>
        <Menhomecollection />
        <Womenbanner />
        <Womenhomecollection />
        <Boybanner />
        <Boyshomecollection />
        <Girlbanner />
        <Girlhomecollection />
        {/* <Contactus /> */}
        <Footer />
      </div>
    );
}

export default Home;
