import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function SignUpPage() {
    const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
    const handleClosePrivacyPolicy = () => setShowPrivacyPolicy(false);
    const handleShowPrivacyPolicy = () => setShowPrivacyPolicy(true);

    const [showTOS, setShowTOS] = useState(false);

    const handleCloseTOS = () => setShowTOS(false);
    const handleShowTOS = () => setShowTOS(true);

    return (
        <div className="mainContentPage">
            <div className="authenticationDiv">
                <div className="authenticationContent">
                    <h1>Sign Up</h1>
                    <form>
                        <div class="form-group">
                            <label for="createInputEmail">Email address</label>
                            <input type="email" class="form-control" id="createInputEmail" aria-describedby="emailHelp" placeholder="Enter email"></input>
                        </div>
                        <div class="form-group">
                            <label for="usernameInput">Username</label>
                            <input type="username" class="form-control" id="usernameInput" placeholder="Enter username"></input>
                        </div>
                        <div class="form-group">
                            <label for="createInputPassword">Password</label>
                            <input type="password" class="form-control" id="createInputPassword" placeholder="Enter password"></input>
                        </div>
                        <div class="form-group">
                            <label for="confirmInputPassword">Confirm Password</label>
                            <input type="password" class="form-control" id="confirmInputPassword" placeholder="Confirm password"></input>
                        </div>
                        <div class="form-group">
                            <label for="createInputCollege">College of Attendance</label>
                            <input type="dropdown" class="form-control" id="createInputCollege" placeholder="Select your current college"></input>
                        </div>
                        <button type="submit" class="btn btn-primary authenticationBtn">Submit</button>
                    </form>
                </div>
                <p className="smallTextAuthentication">Already have an account? <Link to="/login">Sign In</Link></p>
                <p className="evenSmallTextAuthentication">By signing up, you agree to <button class="link" onClick={handleShowTOS}>Terms of Service</button> and <button class="link" onClick={handleShowPrivacyPolicy}>Privacy Policy</button></p>
            </div>
            <Modal show={showPrivacyPolicy} onHide={handleClosePrivacyPolicy}>
                <Modal.Header closeButton>
                    <Modal.Title>Privacy Policy</Modal.Title>
                </Modal.Header>
                <Modal.Body><PrivacyPolicyText /></Modal.Body>
            </Modal>
            <Modal show={showTOS} onHide={handleCloseTOS}>
                <Modal.Header closeButton>
                    <Modal.Title>Terms of Services</Modal.Title>
                </Modal.Header>
                <Modal.Body><TOSText /></Modal.Body>
            </Modal>
        </div>
    )
}

function PrivacyPolicyText() {
    return (
        <p>Last updated November 21, 2021
            <br />
            <br />
            Thank you for choosing to be  part of our community at SafeSpace (“Company”, “we”, “us”, or “our”). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice or our practices with regard to your personal information, please contact us at contactsafespaceinfo@gmail.com
            <br />
            <br />
            This privacy notice describes how we might use your information if you:
            Visit our website at [INSERT URL HERE]
            Engage with us in other related ways -- including any sales, marketing, or events
            <br />
            <br />
            In this privacy notice, if we refer to:
            “Website,” we are referring to any website of our that references or links to this policy
            “Services,” we are referring to our Website, and other related services, including any sales, marketing, or events
            <br />
            <br />
            More to come........
        </p>
    )
}

function TOSText() {
    return (
        <p>
            EXAMPLE TERMS OF SERVICES
        </p>
    )
}

export default SignUpPage;
