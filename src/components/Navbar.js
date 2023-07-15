import { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';
import { menu_nav_icon, exit_button } from '../styles/utils/Constants';
import { useTranslation } from "react-i18next";
import '../styles/Navbar.css';

export default function Navbar(){
    const  { t } = useTranslation('navbar');
    const location = useLocation();

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

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const isHomePage = location.pathname === "/";
    
    const handleOffcanvasItemClick = () => {
        setShowNavbar(false);
    }

    return (
        <nav id="navbar" ref={navbarRef}>
            <div className="navbar-container">
                <div className="navbar-contents">
                    <Link to="/" className="navbar-heading" onClick={scrollToTop}>
                        <div className="navbar-title">
                            <img
                                src="/assets/domaine-logo.png"
                                alt="Domaine Les Enfants Sauvages logo"
                                className="navbar-logo"
                            />
                            <div>
                                <h1>
                                    Domaine Les Enfants Sauvages
                                </h1>
                                <h3 className="navbar-subheading">
                                    {t("navbar.subheading")}
                                </h3>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="menu-icon" onClick={handleShowNavbar}>
                    {menu_nav_icon}
                </div>

                <div className={`nav-elements ${showNavbar && 'active'}`}>
                    <div className="menu-exit-button" onClick={handleShowNavbar}>
                        {exit_button}
                    </div>
                    <ul className="navbar-menu-items" onClick={handleMenuClick}> 
                        {isHomePage && (
                            <>
                                <li>
                                    <ScrollLink 
                                        to="/ourstory" 
                                        smooth={true} 
                                        duration={300} 
                                        offset={-150}
                                        onClick={handleOffcanvasItemClick}
                                    >
                                        {t("navbar.ourstory")}
                                    </ScrollLink>
                                </li>
                                <li>
                                    <ScrollLink 
                                        to="/ourwines" 
                                        smooth={true} 
                                        duration={300} 
                                        offset={-150}
                                        onClick={handleOffcanvasItemClick}
                                    >
                                        {t("navbar.ourwines")}
                                    </ScrollLink>
                                </li>
                            </>
                        )}
                        <li>
                            <ScrollLink 
                                to="/contact" 
                                smooth={true} 
                                duration={300}
                                onClick={handleOffcanvasItemClick}
                            >
                                Contact
                            </ScrollLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}