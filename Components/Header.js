import React, { useState } from "react"; 
import { NavLink } from "react-router-dom"; 
import "../CSS/Header.css"; 
import { HamburgetMenuClose, HamburgetMenuOpen } from "../Components/Icon"; 

function Header() {   
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (     
        <nav className="navbar">         
            <div className="nav-container">         
                <NavLink exact to="/" className="nav-logo">             
                    <span>Sabarish Textiles</span>                        
                </NavLink>                   
                
                <ul className={click ? "nav-menu active" : "nav-menu"}>             
                    <li className="nav-item">               
                        <NavLink exact to="/" className="nav-links" onClick={handleClick}> Home </NavLink>             
                    </li>              
                    <li className="nav-item">               
                        <NavLink exact to="/about" className="nav-links" onClick={handleClick}> About </NavLink>             
                    </li>              
                    <li className="nav-item dropdown">               
                        <span className="nav-links" onClick={handleClick}> ReadyMade </span>
                        <div className="dropdown-menu"> 
                            <NavLink to="/mens-collection" className="dropdown-item">Men's Collection</NavLink>
                            <NavLink to="/womens-collection" className="dropdown-item">Women's Collection</NavLink>
                            <NavLink to="/boys-collection" className="dropdown-item">Boys's Collection</NavLink>
                            <NavLink to="/girls-collection" className="dropdown-item">Girl's Collection</NavLink>
                        </div>
                    </li>    
                    <li className="nav-item dropdown">               
                        <span className="nav-links" onClick={handleClick}> PattuMahal </span>
                        <div className="dropdown-menu"> 
                            <NavLink to="/blouse-and-skirt-collection" className="dropdown-item">Blouse & Inskirt</NavLink>
                            <NavLink to="/pattupavadai-collection" className="dropdown-item">Pattu Pavadai Collection</NavLink>
                            <NavLink to="/poonamsaree-collection" className="dropdown-item">Poonam Saree Collection</NavLink>
                            <NavLink to="/shirtsuit-collection" className="dropdown-item">Shirting & Suiting</NavLink>
                        </div>
                    </li>               
                    <li className="nav-item">               
                        <NavLink exact to="/contact" className="nav-links" onClick={handleClick}> Contact </NavLink>             
                    </li>             
                </ul>           

                <div className="nav-icon" onClick={handleClick}>
                    {click ? (
                        <span className="icon"><HamburgetMenuOpen /></span>
                    ) : (
                        <span className="icon"><HamburgetMenuClose /></span>
                    )}
                </div>
            </div>
        </nav>  
    ); 
}  

export default Header;

