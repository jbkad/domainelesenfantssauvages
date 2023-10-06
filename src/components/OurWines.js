import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Element } from "react-scroll";
import '../styles/OurWines.css';

export default function OurWines() {
    const { t } = useTranslation('ourwines');

    const [hoveredImg, setHoveredImg] = useState(null);

    const handleImageHover = (index) => {
        setHoveredImg(index);
    };

    const handleImageLeave = () => {
        setHoveredImg(null);
    };

    const captions = [
        t("caption-1"),
        t("caption-2"),
        t("caption-3"),
        t("caption-4"),
        t("caption-5"),
        t("caption-6"),
    ];

    return (
        <Element name="/ourwines" className="our-wines"  id="our-wines">
            <h2 className="heading">
                {t("ourwines.heading")}
            </h2> 
            <h3 className="subheading">
                {t("ourwines.subheading")}
            </h3>
            <div className="container">
                {Array.from({ length: 6}, (_, index) => (
                    <div
                        key={index}
                        className={`img-container ${
                            hoveredImg === index ? "hovered" : ""
                        }`}
                        onMouseEnter={() => handleImageHover(index)}
                        onMouseLeave={handleImageLeave}
                    >
                        <img 
                            src={require(`../assets/wines/wine-${index + 1}.webp`)}
                            alt="Wine" 
                        />
                        {hoveredImg === index && (
                            <div className="img-overlay">
                                <div className="caption">{captions[index]}</div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </Element>
    );
}