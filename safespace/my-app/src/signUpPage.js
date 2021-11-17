import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { Typeahead } from 'react-bootstrap-typeahead'
import college from './us_institutions.json'
//import firebase from 'firebase/app'
import { useHistory } from "react-router-dom";

var formattedCollege = []
for (var i = 0; i < college.length; i++) {
    formattedCollege.push(college[i].institution)
}

function SignUpPage() {
    const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
    const handleClosePrivacyPolicy = () => setShowPrivacyPolicy(false);
    const handleShowPrivacyPolicy = () => setShowPrivacyPolicy(true);

    const [showTOS, setShowTOS] = useState(false);

    const handleCloseTOS = () => setShowTOS(false);
    const handleShowTOS = () => setShowTOS(true);
    const [singleSelections, setSingleSelections] = useState([]);

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [college, setCollege] = useState("");
    const history = useHistory();
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert('password is not the same with confirmeed password')
        } else {
            firebase.database().ref('users').set({
                email: email,
                username: username,
                password: password,
                college: college
            })
            history.push('/home')
        }
    }

    return (
        <div className="mainContentPage">
            <div className="authenticationDiv">
                <div className="authenticationContent">
                    <h1>Sign Up</h1>
                    <form onSubmit={handleSubmit}>
                        <div class="form-group">
                            <label for="createInputEmail">Email address</label>
                            <input 
                                type="email"
                                class="form-control" 
                                id="createInputEmail" 
                                aria-describedby="emailHelp" 
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div class="form-group">
                            <label for="usernameInput">Username</label>
                            <input 
                                type="username" 
                                class="form-control" 
                                id="usernameInput" 
                                placeholder="Enter username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div class="form-group">
                            <label for="createInputPassword">Password</label>
                            <input 
                                type="password" 
                                class="form-control" 
                                id="createInputPassword" 
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div class="form-group">
                            <label for="confirmInputPassword">Confirm Password</label>
                            <input 
                                type="password" 
                                class="form-control" 
                                id="confirmInputPassword" 
                                placeholder="Confirm password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>
                        <div class="form-group">
                            <label for="createInputCollege">College of Attendance</label>
                            <Typeahead
                                id="basic-typeahead-single"
                                labelKey="name"
                                onChange={setSingleSelections}
                                options={formattedCollege}
                                placeholder="Select your current college"
                                selected={college}
                                onChange={(e) => setCollege(e)}
                            />
                        </div>
                        <button type="submit" class="btn btn-primary authenticationBtn">Submit</button>
                    </form>
                </div>
                <p className="smallTextAuthentication">Already have an account? <Link to="/login">Sign In</Link></p>
                <p className="evenSmallTextAuthentication">By signing up, you agree to <button class="link" onClick={handleShowTOS}>Terms of Service</button> and <button class="link" onClick={handleShowPrivacyPolicy}>Privacy Policy</button></p>
            </div>
            <Modal show={showPrivacyPolicy} onHide={handleClosePrivacyPolicy}>
                <Modal.Header closeButton>
                    <Modal.Title>Privacy Notice</Modal.Title>
                </Modal.Header>
                <Modal.Body><PrivacyPolicyText /></Modal.Body>
            </Modal>
            <Modal show={showTOS} onHide={handleCloseTOS}>
                <Modal.Header closeButton>
                    <Modal.Title>Terms of Service</Modal.Title>
                </Modal.Header>
                <Modal.Body><TOSText /></Modal.Body>
            </Modal>
        </div>
    )
}

function PrivacyPolicyText() {
    return (
        <p><b>Last updated November 21, 2021</b>
            <br />
            <br />
            Thank you for choosing to be  part of our community at SafeSpace (“Company”, “we”, “us”, or “our”). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice or our practices with regard to your personal information, please contact us at <a href="mailto: contactsafespaceinfo@gmail.com" className="contactUsLink">contactsafespaceinfo@gmail.com</a>
            <br />
            <br />
            This privacy notice describes how we might use your information if you:
            <ul>
                <li>Visit our website at [INSERT URL HERE]</li>
                <li>Engage with us in other related ways -- including any sales, marketing, or events</li>
            </ul>
            In this privacy notice, if we refer to:
            <ul>
                <li>“Website,” we are referring to any website of our that references or links to this policy</li>
                <li>“Services,” we are referring to our Website, and other related services, including any sales, marketing, or events</li>
            </ul>
            The purpose of this privacy notice is to explain to you the clearest way possible what information we collect, how we use it, and what rights you have in relation to it. If there are any terms in this privacy notice that you do not agree with, please discontinue use of our Services immediately.
            <br />
            <br />
            Please read this privacy notice carefully, as it will help you understand what we do with the information that we collect;.
            <br />
            <br />
            TABLE OF CONTENTS
            <ol>
                <li>WHAT INFORMATION DO WE COLLECT?</li>
                <li>HOW DO WE USE YOUR INFORMATION?</li>
                <li>WILL YOUR INFORMATION BE SHARED WITH ANYONE?</li>
                <li>DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</li>
                <li>HOW LONG DO WE KEEP YOUR INFORMATION?</li>
                <li>HOW DO WE KEEP YOUR INFORMATION SAFE?</li>
                <li>WHAT ARE YOUR PRIVACY RIGHTS?</li>
                <li>CONTROLS FOR DO-NOT-TRACK FEATURES</li>
                <li>DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</li>
                <li>DO WE MAKE UPDATES TO THIS NOTICE?</li>
                <li>HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</li>
                <li>HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</li>
            </ol>
            1. WHAT INFORMATION DO WE COLLECT?
            <br />
            <br />
            Personal information you disclose to us
            <br />
            <br />
            In short: We collect personal information that you provide to us.
            <br />
            <br />
            We collect personal information that you voluntarily provide to us when you register on the Website, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Website or otherwise when you contact us.
            <br />
            <br />
            The personal information that we collect depends on the context of your interactions with us and the Website, the choices you make and the products and features you use. The personal information we collect may include the following:
            <br />
            <br />
            Personal Information Provided by You. We collect usernames; passwords; email addresses; attending college/university; and other similar information.
            <br />
            <br />
            All personal information that you provide to us must be true, complete,and accurate, and you must notify us of any changes to such personal information.
            <br />
            <br />
            2. HOW DO WE USE YOUR INFORMATION?
            <br />
            <br />
            In Short: We process your information for purposes based on legitimate business interests, the fulfillment of our contract with you, compliance with our legal obligations, and/or your consent.
            <br />
            <br />
            We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations. We indicate the specific processing grounds we rely on next to each purpose listed below.
            <br />
            <br />
            We use the information we collect or receive:
            <ul>
                <li>To facilitate account creation and logon process. If you choose to link your account with us to a third-party account (such as your Google or Facebook account), we use the information you allowed us to collect from those third parties to facilitate account creation and logon process for the performance of the contract.</li>
                <li>To post testimonials. We post testimonials on our Website that may contain personal information. Prior to posting a testimonial, we will obtain your consent to use your name and the content of the testimonial. If you wish to update, or delete your testimonial, please contact us at <a href="mailto: contactsafespaceinfo@gmail.com" className="contactUsLink">contactsafespaceinfo@gmail.com</a> and be sur eto include your name, testimonial location, and contact information.</li>
                <li>Request feedback. We may use your information to request feedback and to contact you about your use of our Website.</li>
                <li>To enable user-to-user communications. We may use your information in order to enable user-to-user communication with each user’s consent.</li>
                <li>To manage user accounts. We may use your information for the purposes of managing our account and keeping it in working order.</li>
            </ul>
            3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?
            <br />
            <br />
            In Short: We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.
            <br />
            <br />
            We may process or share your data that we hold based on the following legal basis:
            <ul>
                <li>Consent: We may process your data if you have given us specific consent to use your personal information for a specific purpose.</li>
                <li>Legitimate Interests: We may process your data when it is reasonably necessary to achieve our legitimate business interests.</li>
                <li>Performance of a Contract: Where we have entered into a contract with you, we may process your personal information to fulfill the terms of our contract.</li>
                <li>Legal Obligations: We may disclose your information where we are legally required to do in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process, such as in response to a court order or subpoena (including in response to public authorities to meet national security or law enforcement requirements).</li>
                <li>Vital Interests: We may disclose your information where we believe it is necessary to investigate, prevent, or take action regarding potential violations of our policies, suspected fraud, situations involving potential threats to the safety of any person and illegal activities, or as evidence in litigation in which we are involved.</li>
            </ul>
            <ul>
                <li>More specifically, we may need to process your data or share your personal information in the following situations:
                Business Transfers. We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
                <li>Google Maps Platform APIs. We may share your information with certain Google Maps Platform APIs (e.g., Google Maps API, Place API). To find out more about Google’s Privacy, please refer to <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a></li>
            </ul>
            4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
            <br />
            <br />
            In Short: We may use cookies and other tracking technologies to collect and store your information.
            <br />
            <br />
            We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set in our Cookie Notice.
            <br />
            <br />
            5. HOW LONG DO WE KEEP YOUR INFORMATION?
            <br />
            <br />
            In Short: We keep your information for as long as necessary to fulfill the purposes outlines in this privacy notice unless otherwise required by law.
            <br />
            <br />
            We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than the period of time in which users have an account with us.
            <br />
            <br />
            When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.
            <br />
            <br />
            6. HOW DO WE KEEP YOUR INFORMATION SAFE?
            <br />
            <br />
            In Short: We aim to protect your personal information through a system of organization and technical security measures.
            <br />
            <br />
            We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security, and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Website is at your own risk. You should only access the Website within a secure environment.
            <br />
            <br />
            7. WHAT ARE YOUR PRIVACY RIGHTS?
            <br />
            <br />
            In Short: You may review, change, or terminate your account at any time.
            <br />
            <br />
            If you are a resident in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority. You can find their contact details here: <a href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm</a>
            <br />
            <br />
            If you are a resident in Switzerland, the contact details for the data protection authorities are available here: <a href="https://www.edoeb.admin.ch/edoeb/en/home.html" target="_blank" rel="noopener noreferrer">https://www.edoeb.admin.ch/edoeb/en/home.html</a>.
            <br />
            <br />
            If you have questions or comments about your privacy rights, you may email us at <a href="mailto: contactsafespaceinfo@gmail.com" className="contactUsLink">contactsafespaceinfo@gmail.com</a>.
            <br />
            <br />
            Account Information
            <br />
            <br />
            If you would at any time like to review or change the information in your account or terminate your account, you can:
            <ul>
                <li>Log in to your account settings and update your user account.</li>
                <li>Contact us using the contact information provided.</li>
            </ul>
            Upon your request to terminate your account, we will deactivate or delete your account and information from our active database. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigation, enforce our Terms of Use and/or comply with applicable legal requirements.
            <br />
            <br />
            Cookies and similar technologies: Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Website. To opt-out of interest-based advertising by advertisers on our Website visit <a href="http://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">http://www.aboutads.info/choices/</a>.
            <br />
            <br />
            Opting out of email marketing: You can unsubscribe from our marketing email list at any time by clicking on the unsubscribe link in the emails that we send or by contacting us using the details provided below. You will then be removed from the marketing email list -- however, we may still communicate with you, for example to send you service-related emails that are necessary for the administration and use of your account, to respond to service requests, or for other non-marking purposes. To otherwise opt-out, you may:
            <ul>
                <li>Contact us using the contact information provided.</li>
                <li>Access your account settings and update your preferences.</li>
            </ul>
            8. CONTROLS FOR DO-NOT-TRACK FEATURES
            <br />
            <br />
            Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track (“DNT”) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and implementing DNT signals have been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.
            <br />
            <br />
            9. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
            <br />
            <br />
            In Short: Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.
            <br />
            <br />
            California Civil Code section 1798.83, also known as the “Shine The Light” law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.
            <br />
            <br />
            If you are under 18 years of age, reside in California, and have a registered account with the Website, you have the right to request removal of unwanted data that you publicly post on the Website. To request removal of such data, please contact us using the contact information provided below, and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Website, but please be aware that the data may not be completely or comprehensively removed from all our systems (e.g., backups, etc.).
            <br />
            <br />
            CCPA Privacy Notice
            <br />
            <br />
            The California Code of Regulations defines a “resident” as:
            <ol>
                <li>Every individual who is in the State of California for other than a temporary or transitory purpose and</li>
                <li>Every individual who is domiciled in the State of California who is outside the State of California for a temporary or transitory purpose</li>
            </ol>
            All other individuals are defined as “non-residents.”
            <br />
            <br />
            If this definition of “resident” applies to you, we must adhere to certain rights and obligations regarding your personal information. What categories of personal information do we collect?
            <br />
            <br />
            We have collected the following categories of personal information in the past twelve (12) months:
            <table>
                <tr>
                    <th>Category</th>
                    <th>Examples</th>
                    <th>Collected</th>
                </tr>
                <tr>     
                <td>A. Identifiers</td>
                <td>Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address and account name</td>
                <td>NO</td>
                </tr>
                <tr>
                <td>B. Personal information categories listed in the California Customer Records statues</td>
                <td>Name, contact information, education, employment, employment history and financial information</td>
                <td>YES</td>
                </tr>
                <tr>
                <td>C. Protected classification characteristics under California or federal law</td>
                <td>Gender and date of birth</td>
                <td>NO</td>
                </tr>
                <tr>
                <td>D. Commercial information</td>
                <td>Transaction information, purchase history, financial details and payment information</td>
                <td>NO</td>
                </tr>
                <tr>
                <td>E. Biometric information</td>
                <td>Fingerprints and voiceprints</td>
                <td>NO</td>
                </tr>
                <tr>
                <td>F. Internet or other similar network activity</td>
                <td>Browsing history, search history, online behavior, interest data, and interactions with our and other websites, application, systems and advertisements</td>
                <td>NO</td>
                </tr>
                <tr>
                <td>G. Geolocation data</td>
                <td>Device location</td>
                <td>NO</td>
                </tr>
                <tr>
                <td>H. Audio, electronic, visual, thermal, olfactory, or similar information</td>
                <td>Images and audio, video or call recordings created in connection with our business activities</td>
                <td>NO</td>
                </tr>
                <tr>
                <td>I. Professional or employment-related information</td>
                <td>Business contact details in order to provide you our services at a business level, job title as well as work history and professional qualification if you apply for a job with us</td>
                <td>NO</td>
                </tr>
                <tr>
                <td>J. Education Information</td>
                <td>Student records and directory information</td>
                <td>NO</td>
                </tr>
                <tr>
                <td>K. Inferences drawn from other personal information</td>
                <td>Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual’s preferences and characteristics</td>
                <td>NO</td>
                </tr>
            </table>
            <br />
            We may also collect other personal information outside of these categories instances where you interact with us in-person, online, or by phone or mail in the context of:
            <ul>
                <li>Receiving help through our customer support channels;</li>
                <li>Participation in customer surveys or contests; and</li>
                <li>Facilitation in the delivery of our Services and to respond to your inequities.</li>
            </ul>
            How do we use and share your personal information?
            <br />
            <br />
            More information about our data collection and sharing practices can be found in this privacy notice.
            <br />
            <br />
            You may contact us by email at <a href="mailto: contactsafespaceinfo@gmail.com" className="contactUsLink">contactsafespaceinfo@gmail.com</a>, by calling toll-free at <a href="tel:206-309-2073" className="contactUsLink">(206) 309-2073</a>, or by referring to the contact details at the bottom of this document.
            <br />
            <br />
            If you are using an authorized agent to exercise your right to opt-out we may deny a request if the authorized agent does not submit proof that they have been validly authorized to act on your behalf.
            <br />
            <br />
            Will your information be shared with anyone else?
            <br />
            We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Each service provider is a for-profit entity that processes the information on our behalf.
            <br />
            <br />
            We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be “selling” of your personal data. SafeSpace has not disclosed or sold any personal information to third parties for a business or commercial purpose in the preceding 12 months. SafeSpace will not sell personal information in the future belonging to website visitors, users and other consumers.
            <br />
            <br />
            Your rights with respect to your personal data
            <br />
            Right to request deletion of the data - Request to delete
            <br />
            <br />
            You can ask for the deletion of your personal information. If you ask us to delete your personal information, we will respect your request and delete your personal information, subject to certain expectations provided by law, such as (but not limited to) the exercise by another consumer of his or her right to free speech, our compliance requirements resulting from a legal obligation or any processing that may be required to protect against illegal activities. 
            <br />
            <br />
            Right to be informed - Request to know
            <br />
            <br />
            Depending on the circumstances, you have a right to know:
            <ul>
                <li>Whether we collect and use your personal information;</li>
                <li>The categories of personal information that we collect;</li>
                <li>The purposes for which the information is used;</li>
                <li>Whether we sell your personal information to third parties;</li>
                <li>The categories of personal information that we sold or disclosed for a business purpose;</li>
                <li>The categories of third parties to whom the personal information was sold or disclosed for a business purpose; and</li>
                <li>The business or commercial purpose for collecting or selling personal information</li>
            </ul>
            In accordance with applicable law, we are not obligated to provide or delete consumer information that is de-identified in response to a consumer request or to re-identify individual data to verify a consumer request.
            <br />
            <br />
            Right to Non-Discrimination for the Exercise of a Consumer’s Privacy Rights
            <br />
            We will not discriminate against you if you exercise your privacy rights.
            <br />
            <br />
            Verification Process
            <br />
            Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. These verification efforts require us to ask you to provide information so that we can match it with information you have previously provided us. For instance, spending on the type of request you submit, we may ask you to provide certain information so that we can match the information you provide with the information we already have on file, or we may contact you through a communication method (e.g. phone or email) that you have previously provided to us. We may also use other verification methods as the circumstances dictate.
            <br />
            <br />
            We will only use personal information provided in your request to verify your identity or authority to make the request. To the extent possible, we will avoid requesting additional information from you for the purposes of verification. If, however, we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity, and for security or fraud-prevention purposes. We will delete such information as soon as we finish verifying you.
            <br />
            <br />
            Other privacy rights
            <ul>
                <li>You may object to the processing of your personal data.</li>
                <li>You may request correction of your personal data if it is incorrect or no longer relevant, or ask to restrict the processing of the data.</li>
                <li>You can designate an authorized agent to make a request under the CCPA on your behalf. We may deny a request from an authorized agent that does not submit proof that they have been validly authorized to act on your behalf in accordance with the CCPA.</li>
                <li>You may request to opt-out from future selling of your personal information to third parties. Upon receiving a request to opt-out, we will act upon the request as soon as feasibly possible, but no later than 15 days from the date of the request submission.</li>
            </ul>
            To exercise these rights, you can contact us by email at <a href="mailto: contactsafespaceinfo@gmail.com" className="contactUsLink">contactsafespaceinfo@gmail.com</a>, by calling toll-free at <a href="tel:206-309-2073" className="contactUsLink">(206) 309-2073</a>, or by referring to the contact details at the bottom of this document. If you have a complaint about how we handle your data, we would like to hear from you.
            <br />
            <br />
            10. DO WE MAKE UPDATES TO THIS NOTICE?
            <br />
            <br />
            In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.
            <br />
            <br />
            We may update this privacy notice from time to time. The updated version will be indicated by an updated “Revised” date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.
            <br />
            <br />
            11. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
            <br />
            <br />
            If you have any question or comments about this notice, you may email us at <a href="mailto: contactsafespaceinfo@gmail.com" className="contactUsLink">contactsafespaceinfo@gmail.com</a> or by post to:
            <br />
            <br />
            SafeSpace<br />
            1851 NE Grant LN<br />
            Seattle, WA 98195<br />
            United States
            <br />
            <br />
            12. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
            <br />
            <br />
            Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it in some circumstances. To request to review, update, or delete your personal, please submit a request via email at <a href="mailto: contactsafespaceinfo@gmail.com" className="contactUsLink">contactsafespaceinfo@gmail.com</a>.
            <br />
            <br />
            A majority of this privacy policy was created using Termly’s Privacy Policy Generator.
        </p>
    )
}

function TOSText() {
    return (
        <p>
        <b>Last updated November 21, 2021</b>
        <br />
        <br />
        TABLE OF CONTENTS
        <ol>
        <li>AGREEMENT TO TERMS</li>
        <li>INTELLECTUAL PROPERTY RIGHTS</li>
        <li>USER REPRESENTATIONS</li>
        <li>PROHIBITED ACTIVITIES</li>
        <li>USER GENERATED CONTRIBUTIONS</li>
        <li>CONTRIBUTION LICENSE</li>
        <li>SUBMISSIONS</li>
        <li>SITE MANAGEMENT</li>
        <li>TERM AND TERMINATION</li>
        <li>MODIFICATIONS AND INTERRUPTIONS</li>
        <li>GOVERNING LAW</li>
        <li>DISPUTE RESOLUTION</li>
        <li>CORRECTIONS</li>
        <li>DISCLAIMER</li>
        <li>LIMITATIONS OF LIABILITY</li>
        <li>INDEMNIFICATION</li>
        <li>USER DATA </li>
        <li>ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</li>
        <li>MISCELLANEOUS</li>
        <li>CONTACT US</li>
        </ol>
        1. AGREEMENT TO TERMS
        <br />
        <br />
        These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and SafeSpace (“Company,” “we,” “us,” or “our), concerning your access to and use of the SafeSpace website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the “Site”). You agree that by accessing the Site, you have read, understood, and agreed to be bound by all of these Terms of Service. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF SERVICE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY.
        <br />
        <br />
        Supplemental terms and conditions or documents that may be posted on the Site from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Terms of Use at any time and for any reason. We will alert you about any changes by updating the “Last updated” date of these Terms of Service, and you waive any right to receive specific notice of each such change. Please ensure that you check the applicable Terms every time you use our Site so that you understand which Terms apply. You will be subject to, and will be deemed to have been made aware of adn to have accepted, the changes in any revised Terms of Service by your continued use of the Site after the date such revised Terms of Use are posted. 
        <br />
        <br />
        The information provided on the Site is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Site from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable. 
        <br />
        <br />
        2. INTELLECTUAL PROPERTY RIGHTS
        <br />
        <br />
        Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and  unfair competition laws of the United States, international copyright laws, and international conventions. The Content and the Marks are provided on the Site “AS IS” for your information and personal use only. Except as expressly provided in these  Terms of Service, no part of the Site and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or other exploited for any commercial purpose whatsoever, without our express prior written permission.
        <br />
        <br />
        Provided that you are eligible to use the Site, you are granted a limited license to access and use the Site and to download or print a copy of any portion of the Content to which you have property gained access solely for your personal, non-commercial use. We reserve all rights not expressly granted to you in and to the Site, the Content, and the Marks. 
        <br />
        <br />
        3. USER REPRESENTATIONS
        <br />
        <br />
        By using the Site, you represent and warrant that: (1) you have the legal capacity and you agree to comply with these Terms of Service; (2) you are not a minor in the jurisdiction in which you reside; (3) you will not access the Site through automated or non-human means, whether through a bot, script, or otherwise; (4) you will not use the Site for any illegal or unauthorized purpose; and (5) your use of the Site will not violate any applicable law or regulation.
        <br />
        <br />
        If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Site (or any portion thereof).
        <br />
        <br />
        4. PROHIBITED ACTIVITIES
        <br />
        <br />
        You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us. 
        As a user of the Site, you agree  not to:
        <ul>
            <li>Systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection , compilation, database, or directory without written permission from us.</li>
            <li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</li>
            <li>Circumvent, disable, or other interfere with security-related features of the Site, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Site and/or the Content contained therein.</li>
            <li>Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Site.</li>
            <li>Use any information obtained from the Site in order to harass, abuse, or harm another person.</li>
            <li>Make improper use of our support services or submit false reports of abuse or misconduct.</li>
            <li>Use the Site in a manner inconsistent with any applicable laws or regulations.</li>
            <li>Engage in unauthorized framing or of linking to the Site.</li>
            <li>Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interfere with any party’s uninterrupted use and enjoyment of the Site or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Site.</li>
            <li>Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.</li>
            <li>Delete the copyright or other proprietary rights notice from any Content.</li>
            <li>Attempt to impersonate another user or person or user the username of another user.</li>
            <li>Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation, clear graphics interchange formats (“gifts”), 1x1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as “spyware” or “passive collection mechanisms” or “pcms”).</li>
            <li>Interfere with, disrupt, or create an undue burden on the Site or the networks or services connected to the Site.</li>
            <li>Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Site to you.</li>
            <li>Attempt to bypass any measures of the site designed to prevent or restrict access to the Site, or any portion of the Site.</li>
            <li>Copy or adapt the Site’s software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.</li>
            <li>Except as permitted by applicable law, decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Site.</li>
            <li>Except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper or offline reader that accesses the Site, or using or launching any unauthorized script or other software.</li>
            <li>Use a buying agent or purchasing agent to make purchases on the Site.</li>
            <li>Make any unauthorized use of the Site, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses.</li>
            <li>Use the Site as part of any effort to compete with us or otherwise use the Site and/or the Content for any revenue-generating endeavor or commercial enterprise.</li>
        </ul>
        5. USER GENERATED CONTRIBUTIONS
        <br />
        <br />
        The Site does not offer users to submit or post content. We may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to use or on the Site, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, “Contributions”). Contributions may be viewable by other users of the Site and through third-party websites. As such, any Contributions you transmit may be treated in accordance with the Site Privacy Policy. When you create or make available any Contributions, you thereby represent and warrant that:
        <ul>
        <li>The creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of your Contributions do not and will not infringe the proprietary rights, including but not limited to the copyright, patent, trademark, trade secret, or moral rights of any third party.</li>
        <li>You are the creator and owner of or have the necessary licenses, rights, consents, releases, and permissions to use and to authorize us, the site, and other users of the site to use your Contributions in any manner contemplated by the Site and these Terms of Service.</li>
        <li>You have the written consent, releasee, and/or permission of each and every identifiable  individual person in your Contributions to use the name or likeness of each and every such identifiable individual person to enable inclusion and use of your Contributions in any manner contemplated by the site and these Terms of Use.</li>
        <li>Your Contributions are not false, inaccurate, or misleading.</li>
        <li>Your Contributions are not unsolicited or authorized advertising, promotional materials, pyramid schemes, chain letters, spam, mass mailings, or other forms of solicitation.</li>
        <li>Your Contributions are not obscene, lewd, lascivious, filthy, violent, harassing, libelous, slanderous, or otherwise objectionable (as determined by us).</li>
        <li>Your Contributions do not ridicule, mock, disparage, intimidate, or abuse anyone.</li>
        <li>Your Contributions are not used to harass or threaten (in the legal sense of those terms) any other person and to promote violence against a specific person or class or people.</li>
        <li>Your Contributions do not violate any applicable law, regulation, or rule.</li>
        <li>Your Contributions do not violate the privacy or publicity rights of any third party.</li>
        <li>You Contributions do not violate any applicable law concerning child pornography, or other intended to protect the health or well-being or minors.</li>
        <li>Your Contributions do not include any offensive comments that are connected to race, national origin, gender, sexual preference, or physical handicap.</li>
        <li>Your Contributions do not otherwise violate, or link to material that violates, any provision of these Terms of Service, or any applicable law or regulation.</li>
        </ul>
        Any use of the Site in violation of the foregoing violates these Terms of Service and may result in, among other things, termination or suspension or your rights to use the Site.
        <br />
        <br />
        6. CONTRIBUTION LICENSE
        <br />
        <br />
        You and the Site agree that we may access, store, process, and use any information and personal data that you provide following the terms of the Privacy Policy and your choices (including settings).
        <br />
        <br />
        By submitting suggestions or other feedback regarding the Site, you agree that we can use and share such feedback for any purpose without compensation to you.
        <br />
        <br />
        We do not assert any ownership over your Contributions. You retain full ownership of all your Contributions and any intellectual property rights or other proprietary rights associated with your Contributions. We are not liable for any statement or representations in your Contributions provided by you in any area on the Site. You are solely responsible for your Contributions to the site and you expressly agree to exonerate us from any and all responsibility and to refrain from any legal action against us regarding your Contributions. 
        <br />
        <br />
        7. SUBMISSIONS
        <br />
        <br />
        You acknowledge and agree that any questions, comments, suggestions, ideas, feedback, or other information regarding the Site (“Submissions”) provided by you to us are non-confidential and shall become our sole property. We shall own exclusive rights, including all intellectual property rights, and shall be entitled to the unrestricted use and dissemination of these Submissions for any lawful purpose, commercial or otherwise, without acknowledgement or compensation to you. You hereby waive all moral rights to any such Submissions, and you hereby warrant that any such Submissions are original to you or that you have the right to submit such Submissions. You agree that there shall be no recourse against us for any alleged or actual infringement or misappropriation of any proprietary right in your Submissions. 
        <br />
        <br />
        8. SITE MANAGEMENT
        <br />
        <br />
        We reserve the right, but no the obligation, to: (1) monitor the Site for violations of these Terms of Service; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Terms of Service, including without limitation, reporting such user to law enforcement authorities; (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof; (4) in our sole discretion and without limitation, notice, or liability, to remove from the Site or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and (5) otherwise manage the site in a manner designed to protect our rights and property and to facilitate the proper functioning of the Site.
        <br />
        <br />
        9. TERM AND TERMINATION
        <br />
        <br />
        These Terms of Service shall remain in full force and effort while you use the Site. WITHOUT LIMITING ANY OTHER PROVISION OF THESE TERMS OF SERVICE, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SITE (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE TERMS OF SERVICE OF ANY APPLICABLE LAW OF REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SITE OR DELETE ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.
        <br />
        <br />
        If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party.  In addition to terminating or suspending your account, we reserve the right to take appropriate legal action, including without limitation pursuing civil, criminal, and injunctive redress. 
        <br />
        <br />
        10. MODIFICATIONS AND INTERRUPTIONS
        <br />
        <br />
        We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Site. We also reserve the right to modify or discontinue all or part of the Site without notice at any time. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Site. 
        <br />
        <br />
        We cannot guarantee the Site will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Site, resulting in interruptions, delays, or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Site at any time or for any reason without notice to you. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Site during any downtime or discontinuance of the Site. Nothing in these Terms of Service will be construed to obligate us to maintain and support the site or to supply any corrections, updates, or releases in connection therewith.
        <br />
        <br />
        11. GOVERNING LAW
        <br />
        <br />
        These terms shall be governed by and defined following the laws of The United States and yourself irrevocably consent that the courts of The United States shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms. 
        <br />
        <br />
        12. DISPUTE RESOLUTION
        <br />
        <br />
        Binding Arbitration 
        <br />
        Any dispute arising out of or in connection with this contract, including any question regarding its existence, validity or termination, shall be referred to and finally resolved by the international Commercial Arbitration Court under the European Arbitration Chamber (Belgium, Brussels, Avenue Louisee, 146) according to the Rules of this ICAC, which, as a result of referring to it, is considered as the part of this clause. The number of arbitrators shall be 4. The seat, or legal place, of arbitration shall be the University of Washington, Seattle. The language of the proceedings shall be English. The governing law of the contract shall be the substantive law of the United States Constitution. 
        <br />
        <br />
        Restrictions
        <br />
        The Parties agree that any arbitration shall be limited to the Dispute between the Parties individually. To the full extent permitted by law, (a) no arbitration shall be joined with any other proceeding; (b) there is no right or authority for any Dispute to be arbitrated on a class-action basis or to utilize class action procedures; and (c) there is no right or authority for any Dispute to be brought in a purported representative capability on behalf of the general public or any other persons
        <br />
        <br />
        Exceptions to Arbitration
        <br />
        The Parties agree that the following Disputes are not subject to the above provisions concerning binding arbitration: (a) any Disputes seeking to enforce or protect, or concerning the validity of, any of the intellectual property rights of a Party; (b) any Dispute related to, or arising from, allegations of theft, piracy, invasion of privacy, or unauthorized use; and (c) any claim for injunctive relief. If this provision is found to be illegal or unenforceable, then neither Party will elect to arbitrate any Dispute falling within that portion of this provision found to be illegal or unenforceable and such Dispute shall be decided by a court of competent jurisdiction within the courts lited for jurisdiction above, and the Parties agree to submit to the personal jurisdiction of that court.
        <br />
        <br />
        13. CORRECTIONS
        <br />
        <br />
        There may be information on the Site that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Site at any time, without prior notice.
        <br />
        <br />
        14. DISCLAIMER
        <br />
        <br />
        THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SITE AND OUR SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SITE AND WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SITE AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OR MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SITE’S CONTENT OR THE CONTENT OR ANY WEBSITES LINKED TO THE SITE AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OR CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE SITE, (3) ANY UNAUTHORIZED ACCESS TO OR  USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SITE, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SITE BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT  AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SITE. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SITE, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGEMENT AND EXERCISE CAUTION WHERE APPROPRIATE. 
        <br />
        <br />
        15. LIMITATIONS OF LIABILITY
        <br />
        <br />
        IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THIS SITE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. 
        NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE LESSER OF THE AMOUNT PAID, IF ANY, BY YOU TO US OR OUR SITE. CERTAIN US STATE LAWS AND INTERNATIONAL LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.
        <br />
        <br />
        16. INDEMNIFICATION
        <br />
        <br />
        You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys’ fees and expenses, made by any third party due to or arising out of: (1) use of the Site; (2) breach of these Terms of Service; (3) any breach of your representations and warranties set forth in these Terms of Service; (4) your violation of the rights of a third party, including but not limited to intellectual property rights; or (5) any overt harmful act toward any other user of the Site with whom you connected via the Site. Notwithstanding the foregoing, we reserve the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate, at your expense, with our defense of such claims. We will use reasonable efforts to notify you of any such claim, action, or proceeding which is subject to this indemnification upon becoming aware of it.
        <br />
        <br />
        17. USER DATA
        <br />
        <br />
        We will maintain certain data that you transmit to the Site for the purpose of managing the performance of the Site, as well as data relating to your use of the Site. Although we perform regular routine backups of data, you are solely respo	nsible for all data that you transmit or that relates to any activity you have undertaken using the Site. You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data.
        <br />
        <br />
        18. ELECTRONIC COMMUNICATION, TRANSACTION, AND SIGNATURES
        <br />
        <br />
        Visiting the Site, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically, via email and on the Site, satisfy any legal requirement that such communication be in writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SITE. You hereby waive any rights or requirements under any statues, regulations, rules, ordinances, or other laws in any jurisdiction which require an original signature or delivery or retention of non-electronic records, or to payments or the grinding of credits by any means other than electronic means.
        <br />
        <br />
        19. MISCELLANEOUS
        <br />
        <br />
        These Terms of Service are any policies or operating rules posted by us on the site or in respect to the site constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Terms of Service shall not operate as a waiver of such right or provision. These Terms of Service operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control. If any provision or part of a provision of these Terms of Service is determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Terms of Service and does not affect the validity and enforceability of any remaining provisions. There is no joint venture, partnership, employment or agency relationship created between you and us as a result of these Terms of Service or use of the Site. You agree that these Terms of Service will not be construed against us by virtue of having drafted them. You hereby waive any and all defenses you may have based on the electronic form of these Terms of Use and the lack of signing by the parties hereto to execute these Terms of Service.
        <br />
        <br />
        20. CONTACT US
        <br />
        <br />
        In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
        <br />
        <br />
        Email: <a href="mailto: contactsafespaceinfo@gmail.com" className="contactUsLink">contactsafespaceinfo@gmail.com</a>
        <br />
        Phone: <a href="tel:206-309-2073" className="contactUsLink">(206) 309-2073</a>
        <br />
        <br />
        SafeSpace<br />
        1851 NE Grant LN<br />
        Seattle, WA 98195<br />
        United States
        <br />
        <br />
        A majority of this privacy policy was created using Termly’s Terms and Conditions Generator.
        </p>
    )
}

export default SignUpPage;
