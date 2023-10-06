import React from "react";
import { Element } from 'react-scroll';
import { useTranslation } from "react-i18next";
import '../styles/OurStory.css';

export default function OurStory(){
    const { t } = useTranslation('ourstory');

    return (
        <Element name="/ourstory" className="our-story" id="our-story">
            <div className="text">
                <h2 className="heading">
                    {t("ourstory.heading")}
                </h2>   
                <h3 className="subheading">
                    {t("ourstory.subheading")}
                </h3>
                <div className="body">
                    {t("ourstory.body")}
                </div>
            </div>
        </Element>
    );
}