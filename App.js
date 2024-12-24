import './CSS/Header.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Aboutus from './Pages/Aboutus'; 
import Readymade from './Pages/Readymade'; 
import Pattumahal from './Pages/Pattumahal'; 
import Contactus from './Pages/Contactus';
import Headertop from './Components/Headertop';
import Headerlogo from './Components/Headerlogo';
import Header from './Components/Header';
import Mencollection from './Pages/Mencollection';
import WomenCollection from './Pages/Womencollection'; // Ensure this matches the filename
import Boyscollection from './Pages/Boyscollection';
import Girlcollection from './Pages/Girlcollection';
import Blouseinskirt from './Pages/Blouseinskirt';
import Pattupavadaisection from './Pages/Pattupavadaisection';
import Poonamsaree from './Pages/Poonamsaree';
import Shirtsuit from './Pages/Shirtsuit';
import Shopnow from './Components/Shopnow';
import CardPage from './Components/Cardpage';

function App() {
  return (
    <Router>
      <Headertop />
      <Headerlogo />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/readymade" element={<Readymade />} />
        <Route path="/pattumahal" element={<Pattumahal />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/mens-collection" element={<Mencollection />} />
        <Route path="/womens-collection" element={<WomenCollection />} />
        <Route path="/boys-collection" element={<Boyscollection />} />
        <Route path="/girls-collection" element={<Girlcollection />} />
        <Route path="/blouse-and-skirt-collection" element={<Blouseinskirt />} />
        <Route path="/pattupavadai-collection" element={<Pattupavadaisection />} />
        <Route path="/poonamsaree-collection" element={<Poonamsaree />} />
        <Route path="/shirtsuit-collection" element={<Shirtsuit />} />
        <Route path="/shopnow" element={<Shopnow />} />
        <Route path="/card-page" element={<CardPage />} />
        <Route path="/category/1" element={<Mencollection />} />
        <Route path="/category/2" element={<WomenCollection />} />
        <Route path="/category/3" element={<Boyscollection />} />
        <Route path="/category/4" element={<Girlcollection />} />
        <Route path="/category/5" element={<Blouseinskirt />} />
        <Route path="/category/6" element={<Poonamsaree />} />
        <Route path="/category/7" element={<Shirtsuit />} />
        <Route path="/category/9" element={<Pattupavadaisection />} />
      </Routes>
    </Router>
  );
}

export default App;
