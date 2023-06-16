import React from "react";
import '../styles/Home.css';
import Gallery, { GalleryItem } from "./Gallery";
import OurStory from "./OurStory";
import OurWines from "./OurWines";
// import { Element } from 'react-scroll';


export default function Home(){
    return (
        <div id="home">
            <Gallery>
                <GalleryItem image="/assets/sauvages-6.png" />
                <GalleryItem image="/assets/sauvages-5.png" />
                <GalleryItem image="/assets/sauvages-3.png" />
                <GalleryItem image="/assets/sauvages-4.png" />
            </Gallery>
            <br />
            <OurStory />
            <br />
            <OurWines />
        </div>
    );
}


