import React, { useEffect, useState } from "react";
import '../styles/Gallery.css';
    const image = require('../assets/domaine-logo.png');

// gallery item - renders the gallery items
export const GalleryItem = ({ children, width, image }) => {
    

    return (
        <div className="gallery-item" style={{ width: width }}>
            <img src={image} alt="Gallery Item" />
            {children}
        </div>
    );
}

// gallery - the controls for the gallery items
const Gallery = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = React.Children.count(children) - 1;
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = 0;
        }

        setActiveIndex(newIndex);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (!paused) {
                updateIndex(activeIndex + 1 );
            }
        }, 4000);

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    });

    return (
        <div className="gallery"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <div className="inner-gallery" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, { width: "100%" });
                })}
            </div>
        </div>
    );
}

export default Gallery;