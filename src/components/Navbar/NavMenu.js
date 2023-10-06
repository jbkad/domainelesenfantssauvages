import React from "react"
import { Link as ScrollLink } from "react-scroll"

export const NavMenu = ({ t, isHomePage, handleOffcanvasItemClick}) => (
    <ul className="menu-items">
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
)