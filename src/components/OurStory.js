import React from "react";
import { Element } from 'react-scroll';
import '../styles/OurStory.css';

export default function OurStory(){
    return (
        <Element name="/ourstory" id="our-story">
                {/* <div className="our-story-img">
                    <img
                        src="/assets/domaine-body-1.png" 
                        alt="img" 
                        className="our-story-img" 
                    />
                </div> */}
                <div className="our-story-text">
                        <h2>Our Story</h2>   
                        <h3>Carolin & Nikolaus Bantlin</h3>
                    <div className="break-sml" />
                    <div className="our-story-body">
                        <p>
                            After completing my architectural studies I worked for two years in the Stuttgart office of Kohlhoff & Kohlhoff as a project manager. After the birth of our first son Falk in 1996 I joined the family business of my husband Nikolaus as head of office organization and accounting.
                            Having fallen in love with the South of France after many vacations there, our original goal was to buy a second home in the South of France in order to move a part of the production of the family business and live in France. We then began our search during the nineties.
                            In autumn 1998, our second son Juri having just been born, a Bergerie with 7.5 ha of vines caught our attention and finally conquered us.
                            When we arrived at the place, we got out of the car and our first impressions were decisive, this place was so beautiful, calm and charming, that we said to ourselves "Yes, that's it". 
                        </p>
                    </div>
                </div>
        </Element>
    );
}