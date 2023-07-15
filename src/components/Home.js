import React from "react";
import '../styles/Home.css';
import Gallery, { GalleryItem } from "./Gallery";
import OurStory from "./OurStory";
import OurWines from "./OurWines";

export default function Home(){
    return (
        <div id="home">
            <Gallery>
                <GalleryItem image="/assets/gallery-1.png" />
                <GalleryItem image="/assets/gallery-2.png" />
                <GalleryItem image="/assets/gallery-3.png" />
                <GalleryItem image="/assets/gallery-4.png" />
                <GalleryItem image="/assets/gallery-5.png" />
                <GalleryItem image="/assets/gallery-6.png" />
            </Gallery>
            <br />
            <OurStory />
            <br />
            <OurWines />
            <br />
        </div>
    );
}


