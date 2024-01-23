import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './Header';
const TermsOfServices = () => {
    return (
        <>

            <Header />

            <Container>
                <Row className="justify-content-md-center mt-5">
                    <Col md="auto">

                        <h1>Privacy Policy of ShortsCreator</h1>

                        <p><strong>Effective Date: January 4, 2024</strong></p>

                        <h2>1. Introduction</h2>
                        <p>Welcome to ShortsCreator! This Privacy Policy governs your use of the ShortsCreator platform and its associated services (collectively, “Services”). We are committed to protecting your privacy and handling your data in an open and transparent manner.</p>

                        <h2>2. Who We Are</h2>
                        <p>ShortsCreator is a digital content creation platform specializing in short-form video content. Our services are designed to provide users with tools and resources to create, edit, and share short videos.</p>

                        <h2>3. Information We Collect</h2>
                        <ul>
                            <li><strong>User-Provided Information</strong>: This includes information you provide when you register for an account, such as your name, email address, and username.</li>
                            <li><strong>Automatically Collected Information</strong>: When you use our Services, we may automatically collect information such as your IP address, device information, and usage statistics.</li>
                            <li><strong>Content Information</strong>: Information related to the content you create, upload, or share on the ShortsCreator platform.</li>
                        </ul>

                        <h2>4. Use of Information</h2>
                        <ul>
                            <li>To provide and improve our Services.</li>
                            <li>To communicate with you about your account or transactions with us.</li>
                            <li>To send you offers and promotions for our products and services.</li>
                        </ul>

                        <h2>5. Sharing of Information</h2>
                        <p>We may share your information with third-party service providers who perform services on our behalf, such as hosting, data analysis, and payment processing. We require these service providers to maintain the confidentiality and security of your information.</p>

                        <h2>6. Data Security</h2>
                        <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction, or damage.</p>

                        <h2>7. Children’s Privacy</h2>
                        <p>Our Services are not directed to children under the age of 13. We do not knowingly collect personal information from children under 13.</p>

                        <h2>8. Changes to this Policy</h2>
                        <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>

                        <h2>9. Contact Us</h2>
                        <p>If you have any questions or concerns about our Privacy Policy, please contact us at:</p>
                        <ul>
                            <li>Email: <a href="mailto:minimalee3950@gmail.com">minimalee3950@gmail.com</a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>


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
export default TermsOfServices;
