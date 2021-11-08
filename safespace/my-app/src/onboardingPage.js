import React, { useState } from 'react';
import videoPlaceholder from './videoPlaceholder.jpg';

function OnboardingPage() {
    return (
        <div className="onboardingPage">
            <h1 className="mainTitleText">Welcome to SafeSpace</h1>
            <h2 className="mainSubtitleText">Anonymously share your feelings and experiences with suicide</h2>
            <img src={videoPlaceholder} alt="a video about suicidal ideation" className="onboardingVideo"></img>
            <h2 className="secondaryTitleText">Get Started</h2>
            <h3 className="secondarySubtitleText">Already have an account? Sign in</h3>
        </div>
    )
}

export default OnboardingPage;
