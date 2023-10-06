import React from "react";
import { ReactComponent as MailIcon } from '../assets/svgs/MailIcon.svg';
import { ReactComponent as InstagramIcon } from '../assets/svgs/InstagramIcon.svg';
import { ReactComponent as PhoneIcon } from '../assets/svgs/PhoneIcon.svg';
import { ReactComponent as LocationIcon } from '../assets/svgs/LocationIcon.svg';
import { Link } from "react-router-dom";
import { Element } from "react-scroll";
import TranslationButton from "./TranslationButton";
import { useTranslation } from "react-i18next";
import ScrollButton from "./ScrollButton";
import '../styles/Footer.css';

export default function Footer(){
    const { t } = useTranslation('footer');

    return (
        <Element name="/contact" className="footer" id="footer">
            <div className="container">
                <div className="top-row">
                    <div className="items">
                        <h2 className="name">Domaine Les Enfants Sauvages</h2>
                        <h3 className="location">{t("footer.location")}</h3>
                    </div>
                    <div className="social-icons">
                        <a 
                            href="mailto:info@les-enfants-sauvages.com" 
                            className="icon-spacing"
                        >
                            <MailIcon />
                        </a>
                        <a 
                            href="tel: +33 624918925" 
                            className="icon-spacing"
                        >
                            <PhoneIcon />
                        </a>
                        <a 
                            href="https://www.instagram.com/domaine.les.enfants.sauvages/" 
                            target="blank" 
                            className="icon-spacing"
                        >
                            <InstagramIcon />
                        </a>
                        <a 
                            href="https://goo.gl/maps/3JdH89y7KxqeiMmf8" 
                            target="blank"
                        >
                            <LocationIcon />
                        </a>
                    </div>
                </div>
                
                <div className="bottom-row">
                    <div className="links">
                        <Link 
                            to="/legalnotice" 
                            className='link' 
                            preventScrollReset={true}
                        >
                            {t("footer.legalnotice")}
                        </Link>
                        <Link 
                            to="/privacypolicy" 
                            className='link'
                        >
                            {t("footer.privacypolicy")}
                        </Link>
                        <TranslationButton />
                    </div>
                    <div className="names">
                        Carolin, Nikolaus Bantlin | Juri, Falk Bantlin
                    </div>

                    <ScrollButton />
                    
                </div>
            </div>
        </Element>
    );
}