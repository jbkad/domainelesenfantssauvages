import React from "react";
import { mail_footer_icon, phone_footer_icon, instagram_footer_icon, location_footer_icon, scroll_icon, scrollToTop } from '../styles/utils/Constants';
import { Link } from "react-router-dom";
import { Element } from "react-scroll";
import TranslationButton from "./TranslationButton";
import { useTranslation } from "react-i18next";
import '../styles/Footer.css';

export default function Footer(){
    const { t } = useTranslation('footer');

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
                        <Link to="/legalnotice" className='footer-link' preventScrollReset={true} onClick={scrollToTop}>
                            {t("footer.legalnotice")}
                        </Link>
                        <Link to="/privacypolicy" className='footer-link' onClick={scrollToTop}>
                            {t("footer.privacypolicy")}
                        </Link>
                        <TranslationButton />
                    </div>
                    <div className="footer-names">
                        Carolin, Nikolaus Bantlin | Juri, Falk Bantlin
                    </div>
                    <div 
                        className='footer__scroll-btn'
                        data-testid='footer__scroll-btn'
                        onClick={scrollToTop}
                    >
                        {scroll_icon}
                    </div>
                </div>
            </div>
        </Element>
    );
}
