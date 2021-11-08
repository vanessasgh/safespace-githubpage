import React, { useState } from 'react';
import videoPlaceholder from './videoPlaceholder.jpg';

function AboutUsPage() {
    return (
        <div className="mainContentDiv">
            <div className="mainHeaderDiv">
                <h1 className="mainTitleText">About Us</h1>
            </div>
            <div className="contentDiv">
                <h2 className="secondaryTitleText">Our Mission</h2>
                <p>A World Health Organization article on suicide mentions ‘The prevention of suicide has not been adequately addressed due to a lack of awareness of suicide as a major public health problem and the taboo in many societies to openly discuss it.’ This ‘stigma’, as some may call it, seems to be a major contributing factor to suicide as it increases the difficulty in identifying suicidal thinkers. Our mission with this web application is to help dismantle the stigma around suicidal discussion and provide a unique support system to victims of suicidal thoughts and tendencies in colleges/universities.</p>
                <h2 className="secondaryTitleText">Our Team</h2>
                <ul className="ourTeamList">
                    <li>Juliane De Los Santos (he/him) - Project Manager</li>
                    <li>Angela Yun (she/her) - Product Designer</li>
                    <li>Matthew Putra (he/him) - Developer</li>
                    <li>Vanessa Sugiharto (she/her) - Developer</li>
                </ul>
            </div>
        </div>
    )
}

export default AboutUsPage;
