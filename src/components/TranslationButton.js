import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/TranslationButton.css";

export default function TranslationButton(){
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const currentLanguage = i18n.language;
        const newLanguage = currentLanguage === "fr" ? "en" : "fr";
        i18n.changeLanguage(newLanguage);
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const handleClick = () => {
        toggleLanguage();
        scrollToTop();
    };

    return (
        <div onClick={handleClick} className='translation-button'> 
            {i18n.language === "fr" ? "English" : "Français"}
        </div>
    );
}