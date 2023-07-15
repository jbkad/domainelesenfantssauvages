import React from "react";
import { Element } from 'react-scroll';
import { useTranslation } from "react-i18next";
import '../styles/OurStory.css';

export default function OurStory(){
    const { t } = useTranslation('ourstory');

    return (
        <Element name="/ourstory" id="our-story">
            <div className="our-story-text">
                <h2 className="our-story-heading">
                    {t("ourstory.heading")}
                </h2>   
                <h3 className="our-story-subheading">
                    {t("ourstory.subheading")}
                </h3>
                <div className="our-story-body">
                    {t("ourstory.body")}
                </div>
            </div>
        </Element>
    );
}