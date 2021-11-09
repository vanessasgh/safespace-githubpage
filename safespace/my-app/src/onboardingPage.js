import React from 'react';
import videoPlaceholder from './videoPlaceholder.jpg';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'

function OnboardingPage() {
    return (
        <div className="onboardingPage">
            <h1 className="mainTitleText">Welcome to SafeSpace</h1>
            <h2 className="mainSubtitleText">Anonymously share your feelings and experiences with suicide</h2>
            <img src={videoPlaceholder} alt="a video about suicidal ideation" className="onboardingVideo"></img>
            <h2 className="secondaryTitleText"><Link to="/signup" className="noUnderline"><Button variant="secondary" size="lg">Get Started</Button></Link></h2>
            <h3 className="secondarySubtitleText">Already have an account? <Link to="/login" className="noUnderline">Sign in</Link></h3>
        </div>
    )
}

export default OnboardingPage;
