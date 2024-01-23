import React from 'react';
import { Form, Button } from 'react-bootstrap';
const SuccessPage = ({ ShortsMakerField }) => {
	// Assuming htmlContentFromAPI is the fetched HTML content
	const htmlContentFromAPI = `<p>It usually takes 30 minutes, you can safely leave this page, email will be sent to <b>your email</b> when it’s ready.</p>
<p><span style="color: #ff0000;">Please be sure to check your spam folder if you don’t receive an email in 30 minutes.</span></p>`;
	// const modifiedHtmlContent = htmlContentFromAPI.replace('[userEmail]', ShortsMakerField?.UserStatusData?.userEmail);

	return (
		<>
			<div className="successSectionWrapper">
				<div className="shorts-container">
					<div className="success-headings_wrapper">
						<div className="successLoader"></div>
						<div className="succesHeadingsInner">
							<div className="successSectionHeading">
								<h2>AI is analyzing your channel</h2>
							</div>
							<div className="successSectionSubHead">
								<h4>We’ll create Shorts Clips for your video.</h4>
							</div>
						</div>
					</div>
					<div className="successSectionContent" dangerouslySetInnerHTML={{ __html: htmlContentFromAPI }} />
				</div>

				<div className='formWrapper shorts-container mt-5'>

				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" placeholder="Enter email" />
					<Form.Text className="text-muted">
						We'll never share your email with anyone else.
					</Form.Text>
				</Form.Group>


				<div className="d-flex justify-content-between">
					<Button as="a" variant="primary">
						Get Notified
					</Button>


				</div>

				</div>




			</div>
		</>
	);
};
export default SuccessPage;
