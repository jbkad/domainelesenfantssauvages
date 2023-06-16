import React from "react";
import { Element } from "react-scroll";
import '../styles/OurWines.css';

export default function OurWines() {
    return (
        <Element name="/ourwines" id="our-wines">
            <h2>Our Wines</h2>
            <br />

            {/* <div className="our-wines-img-container"> */}
                <img 
                    src="/assets/domaine-wine-1.png"
                    alt="Domaine Les Enfants Sauvages wine" 
                    className="our-wines-img"
                    // data-text="Hello World"
                />
                {/* <div className="our-wines-img-text-overlay">
                    Domaine Les Enfants Sauvages
                </div> */}
            {/* </div> */}
            
            {/* <div className="our-wines-img-container"> */}
                <img 
                    src="/assets/domaine-wine-2.png"
                    alt="Domaine Les Enfants Sauvages wine" 
                    className="our-wines-img"
                    data-text="Hello World 2" 
                />
                {/* <div className="hover-text">Hello World 2</div> */}
            {/* </div> */}
            <img 
                src="/assets/domaine-wine-3.png"
                alt="Domaine Les Enfants Sauvages wine" 
                className="our-wines-img"
                data-text="Hello World 3"
            />
            <img 
                src="/assets/domaine-wine-4.png"
                alt="Domaine Les Enfants Sauvages wine" 
                className="our-wines-img"
                data-text="Hello World 4"
            />
            <img 
                src="/assets/domaine-wine-5.png"
                alt="Domaine Les Enfants Sauvages wine" 
                className="our-wines-img"
                data-text="Hello World 5" 
            />
            <img 
                src="/assets/domaine-wine-6.png"
                alt="Domaine Les Enfants Sauvages wine" 
                className="our-wines-img"
                data-text="Hello World 6"
            />
            <img 
                src="/assets/domaine-wine-7.png"
                alt="Domaine Les Enfants Sauvages wine" 
                className="our-wines-img"
                data-text="Hello World 7"
            />
        </Element>


    );
}