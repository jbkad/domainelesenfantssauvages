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
        <Element name="/ourwines" id="our-wines">
            <h2 className="our-wines-heading">
                {t("ourwines.heading")}
            </h2> 
            <h3 className="our-story-subheading">
                {t("ourwines.subheading")}
            </h3>
            <div className="our-wines-container">
                {Array.from({ length: 6}, (_, index) => (
                    <div
                        key={index}
                        className={`our-wines-img-container ${
                            hoveredImg === index ? "hovered" : ""
                        }`}
                        onMouseEnter={() => handleImageHover(index)}
                        onMouseLeave={handleImageLeave}
                    >
                        <img 
                            src={require(`../assets/wine-${index + 1}.webp`)}
                            alt="Wine" 
                            className="our-wines-img"
                        />
                        {hoveredImg === index && (
                            <div className="img-overlay">
                                <div className="img-caption">{captions[index]}</div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </Element>
    );
}