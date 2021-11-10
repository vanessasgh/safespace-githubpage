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
            EXAMPLE TERMS OF SERVICES
        </p>
    )
}

export default SignUpPage;
