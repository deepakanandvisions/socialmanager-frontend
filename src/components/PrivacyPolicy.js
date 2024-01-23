import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './Header';
const PrivacyPolicy = () => {
    return (
        <>

            <Header />
            <Container>
                <Row className="justify-content-md-center mt-5">
                    <Col md="auto">
                        <h1>ShortsCreator Privacy Policy</h1>
                        <p>Effective date: June 7th, 2023</p>

                        <h2>Handling of Google User Data</h2>
                        <h3>Access and Use of Google User Data</h3>
                        <p>ShortsMaker utilizes Google APIs to enable users to schedule video uploads to YouTube. When a user submits a YouTube URL to create shorts from, or connects their YouTube account for automatic uploads, we access their Google user data, specifically their YouTube account information. This access is strictly limited to the functionalities required for scheduling and uploading videos, such as retrieving video details, uploading videos, and updating video metadata (title, description, tags).</p>

                        <h3>Limited Use Disclosure</h3>
                        <p>Our application, ShortsCreator, adheres to the [Google API Services User Data Policy](<a href="https://developers.google.com/terms/api-services-user-data-policy" target='_blank'>https://developers.google.com/terms/api-services-user-data-policy</a>), including its Limited Use requirements. We ensure that the use and transfer of information received from Google APIs align with these policies. Our commitment to your privacy and data security is paramount.</p>

                        <h3>User Consent and Data Sharing</h3>
                        <p>At ShortsCreator, protecting your privacy is at the core of what we do. When it comes to using third-party tools, such as AI models, we are transparent about the data we share:</p>
                        <p><strong>Data Sharing: </strong> No personal data is shared with the AI tools. The only information transferred is the YouTube URL supplied by the user. We are asking for the SignIn with google only to upload the video to YouTube only.</p>
                        <p><strong>Opt-out Option: </strong> At any point, you can withdraw your consent, and we will cease sharing your data with third-party tools.</p>

                        <h3>Storage of Google User Data:</h3>
                        <p>We store relevant Google user data, such as YouTube account information and video details, on secure servers. This storage is essential for the effective scheduling and management of video uploads. We retain this data only for as long as necessary to provide our services and in accordance with our data retention policies.</p>

                        <h3>Sharing of Google User Data:</h3>
                        <p>ShortsMaker does not share Google user data with third parties except as necessary for providing the scheduled video upload service or as required by law. Third-party service providers, if any, are bound by strict data processing agreements that ensure the confidentiality and security of the data.</p>

                        <h3>Data Security:</h3>
                        <p>Robust security measures are in place to protect user data, including Google user data, from unauthorized access or breaches. We continuously update and test our security systems to enhance data protection.</p>

                        <h3>User Consent and Control:</h3>
                        <p>Users provide explicit consent when they submit their YouTube URL and link their YouTube account to ShortsMaker. Users maintain control over their data and can disconnect their YouTube account from ShortsMaker at any time, which will cease any further data access.</p>

                        <h3>Compliance with Google’s User Data Policy:</h3>
                        <p>Our application's use of Google APIs, particularly for YouTube, is fully compliant with Google's User Data Policy. We are committed to transparently handling user data, respecting user privacy, and complying with applicable laws and regulations.</p>

                        <p>At ShortsCreator, we are committed to protecting your privacy. This Privacy Policy outlines our practices regarding the collection, use, and sharing of your personal data. By accessing or using our services, you consent to the practices described in this document.</p>

                        <h2>Table of Contents</h2>
                        <ol>
                            <li><a href="#personal-data">Personal Data</a></li>
                            <li><a href="#data-sources">Categories of Sources of Personal Data</a></li>
                            <li><a href="#business-purposes">Our Commercial or Business Purposes for Collecting Personal Data</a></li>
                            <li><a href="#data-disclosure">How We Disclose Your Personal Data</a></li>
                            <li><a href="#tracking-tools">Tracking Tools, Advertising and Opt-Out</a></li>
                            <li><a href="#data-security">Data Security</a></li>
                            <li><a href="#data-retention">Data Retention</a></li>
                            <li><a href="#childrens-privacy">Personal Data of Children</a></li>
                            <li><a href="#resident-rights">Resident Rights</a></li>
                            <li><a href="#international-users">Supplemental Terms for International Users</a></li>
                            <li><a href="#contact-info">Contact Information</a></li>
                        </ol>

                        <h2 id="personal-data">Personal Data</h2>
                        <p><strong>Categories of Personal Data We Collect:</strong> Includes Profile or Contact Data (like name, email), Payment Data, Device/IP Data, Social Network Data, Geolocation Data, and Inferences Drawn from Personal Data.</p>

                        <h2 id="data-sources">Categories of Sources of Personal Data</h2>
                        <p>We collect Personal Data from you directly, through your use of our services, cookies, and sometimes from third parties like social networks or advertising partners.</p>

                        <h2 id="business-purposes">Our Commercial or Business Purposes for Collecting Personal Data</h2>
                        <p>This includes providing, customizing, and improving our services, marketing purposes, and fulfilling legal requirements.</p>

                        <h2 id="data-disclosure">How We Disclose Your Personal Data</h2>
                        <p>Personal Data may be shared with service providers, advertising partners, analytics partners, and as required by law.</p>

                        <h2 id="tracking-tools">Tracking Tools, Advertising, and Opt-Out</h2>
                        <p>We use cookies and similar technologies for various purposes, including analytics and personalized advertising. You have options to opt-out or manage preferences.</p>

                        <h2 id="data-security">Data Security</h2>
                        <p>We implement appropriate measures to protect your Personal Data, but please be aware that no security measures are infallible.</p>

                        <h2 id="data-retention">Data Retention</h2>
                        <p>Your Personal Data is retained as long as necessary to provide the services and for legitimate business purposes.</p>

                        <h2 id="childrens-privacy">Personal Data of Children</h2>
                        <p>ShortsCreator does not knowingly collect data from children under the age of 16 without parental consent.</p>

                        <h2 id="resident-rights">Resident Rights</h2>
                        <p>Residents of certain areas, like California or Virginia, may have specific rights regarding their personal data.</p>

                        <h2 id="international-users">Supplemental Terms for International Users</h2>
                        <p>Users outside the United States may be subject to different data protection laws and may have additional rights.</p>

                        <h2 id="contact-info">Contact Information</h2>
                        <p>If you have any questions about this Privacy Policy, please contact us at:</p>
                        <ul>
                            <li>Email: minimalee3950@gmail.com</li>
                        </ul>

                    </Col>
                </Row>
            </Container >


            <Container>
                <Row className="justify-content-md-center p-5">
                    <Col md="auto">
                        <div className="custom-text">© Copyright 2024. All Rights Reserved. </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};
export default PrivacyPolicy;
