import React, { useState } from "react";
import { mail_footer_icon, phone_footer_icon, instagram_footer_icon, location_footer_icon } from '../styles/utils/Constants';
import { Link } from "react-router-dom";
import { Element } from "react-scroll";
import TranslationButton from "./TranslationButton";
import { useTranslation } from "react-i18next";
import '../styles/Footer.css';
import ScrollButton from "./ScrollButton";

export default function Footer(){
    const { t } = useTranslation('footer');

    const footerScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
            delay: 0
        });
    };

    return (
        <Element name="/contact" id="footer">
            <div className="footer-container">
                <div className="footer-top-row">
                    <div className="footer-top-row-title-items">
                        <h1 className="footer-top-row-name">Domaine Les Enfants Sauvages</h1>
                        <br/>
                        <h3 className="footer-top-row-location">
                            {t("footer.location")}
                        </h3>
                    </div>
                    <div className="footer-social-icons">
                        <a href="mailto:info@les-enfants-sauvages.com" className="footer-icons-spacing">
                            {mail_footer_icon}
                        </a>
                        <a href="tel: +33 624918925" className="footer-icons-spacing">
                            {phone_footer_icon}
                        </a>
                        <a href="https://www.instagram.com/domaine.les.enfants.sauvages/" target="blank" className="footer-icons-spacing">
                            {instagram_footer_icon}
                        </a>
                        <a href="https://goo.gl/maps/3JdH89y7KxqeiMmf8" target="blank">
                            {location_footer_icon}
                        </a>
                    </div>
                </div>
                
                <div className="footer-bottom-row">
                    <div className="footer-bottom-row-links">
                        <Link to="/legalnotice" className='footer-link' preventScrollReset={true}>
                            {t("footer.legalnotice")}
                        </Link>
                        <Link to="/privacypolicy" className='footer-link'>
                            {t("footer.privacypolicy")}
                        </Link>
                        <TranslationButton />
                    </div>
                    <div className="footer-names">
                        Carolin, Nikolaus Bantlin | Juri, Falk Bantlin
                    </div>

                    <ScrollButton />
                    
                </div>
            </div>
        </Element>
    );
}
