import { useState, useRef, useCallback } from "react";
import { NavMenu } from "./NavMenu";
import { useLocation } from "react-router-dom";
import { ReactComponent as MenuIcon } from '../../assets/MenuIcon.svg';
import { ReactComponent as ExitIcon } from '../../assets/ExitIcon.svg';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import '../../styles/Navbar.css';

const Navbar = () => {
    const  { t } = useTranslation('navbar');
    const location = useLocation();
    
    const navbarRef = useRef(null);
    const [showNavbar, setShowNavbar] = useState(false);

    const toggleNavbar = useCallback(() => {
        setShowNavbar(prevShowNavbar => !prevShowNavbar);
    }, []);
    
    const handleOffcanvasItemClick = useCallback(() => {
        setShowNavbar(false);
    }, []);

    const isHomePage = location.pathname === "/";

    const navScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
            delay: 0
        });
    };

    const NavHeader = ({ t }) => (
        <Link 
            to="/" 
            className="heading" 
            onClick={navScrollToTop}
        >
            <div className="title">
                <img
                    src={require("../../assets/logo.webp")}
                    alt="Logo"
                    className="logo"
                    loading="lazy"  
                />
                <div>
                    <h1>
                        Domaine Les Enfants Sauvages
                    </h1>
                    <h3
                        className="subheading"
                    >
                        {t("navbar.subheading")}
                    </h3>
                </div>
            </div>
        </Link>
    );
    

    return (
        <div className="navbar" ref={navbarRef}>
            <div className="container">
                <div className="contents">
                    <NavHeader t={t} />
                </div>

                <div 
                    className="menu-icon" 
                    onClick={toggleNavbar}
                >
                    <MenuIcon />
                </div>

                <div className={`nav-elements ${showNavbar && 'active'}`}>
                    <div 
                        className="exit-btn" 
                        onClick={toggleNavbar}
                    >
                        <ExitIcon />
                    </div>
                    <NavMenu 
                        t={t}
                        isHomePage={isHomePage}
                        handleOffcanvasItemClick={handleOffcanvasItemClick}
                    />
                </div>
            </div>
        </div>
    );
}

export default Navbar;