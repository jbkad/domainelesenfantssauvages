import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/TranslationButton.css";

export default function TranslationButton(){
    const { i18n } = useTranslation();

    const translateScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "instant",
            delay: 0
        });
    };    

    const toggleLanguage = () => {
        const currentLanguage = i18n.language;
        const newLanguage = currentLanguage === "fr" ? "en" : "fr";
        i18n.changeLanguage(newLanguage);
    }

    return (
        <div 
            onClick={() => {
                toggleLanguage(); 
                translateScrollToTop();
            }} 
            className='translation-button'

        > 
            {i18n.language === "fr" ? "English" : "Français"}
        </div>
    );
}