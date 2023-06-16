import React from "react";
import { mail_footer_icon, phone_footer_icon, instagram_footer_icon, location_footer_icon } from '../styles/utils/Constants';
import { Link } from "react-router-dom";
import { Element } from "react-scroll";
import '../styles/Footer.css';


export default function Footer(){
    return (
        <Element name="/contact" id="footer">
            {/* the '/contact' name refers to the...(finish explaination)   */}
            <div className="footer-container">
                <div className="footer-top-row">
                    <div className="footer-top-row-title-items">
                        <h1 className="footer-top-row-name">Domaine Les Enfants Sauvages</h1>
                        <br/>
                        <h3 className="footer-top-row-location">Southern France, Côtes Catalanes</h3>
                    </div>
                    <ul className="footer-social-icons">
                        <li>
                            <a href="mailto:carolinbantlin@gmx.de">
                                {mail_footer_icon}
                            </a>
                        </li>
                        <li>
                            <a href="tel: +33 624918925">
                                {phone_footer_icon}
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/domaine.les.enfants.sauvages/" target="blank">
                                {instagram_footer_icon}
                            </a>
                        </li>
                        <li>
                            <a href="https://goo.gl/maps/3JdH89y7KxqeiMmf8" target="blank">
                                {location_footer_icon}
                            </a>
                        </li>
                    </ul>
                </div>
                
                <div className="footer-bottom-row">
                    <div className="footer-bottom-row-links">
                        <Link to="/legalnotice" className='footer-link'>Legal Notice</Link>
                        <Link to="/privacypolicy" className='footer-link'>Privacy Policy</Link>
                        {/* <Link to="/login" className="footer-link">Log In</Link> */}
                    </div>
                    {/* <div className="footer-names"> */}
                        <div className="footer-names">Carolin, Nikolaus Bantlin  |  Juri, Falk Bantlin</div>
                    {/* </div> */}
                </div>
            </div>
        </Element>
    );
}
