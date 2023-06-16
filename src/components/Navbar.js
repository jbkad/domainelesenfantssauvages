import { useEffect, useState, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { Link as ScrollLink, Element } from 'react-scroll';
import { menu_nav_icon, english_translation_icon, exit_button } from '../styles/utils/Constants';
import '../styles/Navbar.css';

export default function Navbar(){
    const [showNavbar, setShowNavbar] = useState(false);
    const navbarRef = useRef(null);

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
    };

    const handleMenuClick = () => {
        setShowNavbar(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navbarRef.current && !navbarRef.current.contains(event.target)) {
                setShowNavbar(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    
    return (
        <nav id="navbar" ref={navbarRef}>
            <div className="navbar-container">
                    {/* <Link to="/" className="navbar-logo-container">
                        <img 
                            src="/assets/domaine-logo.png"
                            alt="Domaine Les Enfants Sauvages logo" 
                            className="navbar-logo" 
                        />
                    </Link> */}
                <div className="navbar-contents">
                    <div className="navbar-title">
                        <Link to="/" className="navbar-heading">
                            <h1>Domaine Les Enfants Sauvages</h1>
                        </Link>
                        <h3 className="navbar-subheading">
                            Handmade organic biodynamic wines
                        </h3>
                    </div>
                </div>

                <div className="menu-icon" onClick={handleShowNavbar}>
                    {menu_nav_icon}
                </div>

                <div className={`nav-elements ${showNavbar && 'active'}`}>
                    <div className="nav-hover">
                        <div className="menu-exit-button" onClick={handleShowNavbar}>
                            {exit_button}
                        </div>
                        <ul className="navbar-menu-items"> 
                            <li><ScrollLink to="/ourstory" smooth={true} duration={300} onClick={handleMenuClick}>Our Story</ScrollLink></li>
                            <li><ScrollLink to="/ourwines" smooth={true} duration={300} onClick={handleMenuClick}>Our Wines</ScrollLink></li>
                            <li><ScrollLink to="/contact" smooth={true} duration={300} onClick={handleMenuClick}>Contact</ScrollLink></li>
                            {/* <li><ScrollLink to="/fr" onClick={handleMenuClick} className="english-translation-button">{english_translation_icon}</ScrollLink></li> */}
                        </ul>

                    </div>
                </div>
            </div>
        </nav>
    );
}