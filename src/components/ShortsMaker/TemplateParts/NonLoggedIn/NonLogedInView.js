import { React } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { changeShortsMakerInputField } from '../../../../Redux/Actions/ToolActions';
import 'react-loading-skeleton/dist/skeleton.css'
import HeroSection from './HeroSection.js';
import UnderHeroWrapper from './UnderHeroWrapper.js';
import MultipleVideosThumbnail from './MultipleVideosThumbnail.js';
import PerfectToolsSection from './PerfectToolsSection.js';
import SteamLineSection from './SteamLineSection.js';

import SuccessPage from './../../SuccessPage.js';


import { useNavigate } from 'react-router-dom';
const NonLogedInView = ({ ShortsMakerField }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const isValidYouTubeURL = (jsonObject) => {
		const valid =
			/^(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/;
		return valid.test(jsonObject);
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		dispatch(
			changeShortsMakerInputField({ [name]: value })
		);
		const error = {
			validUrlInput: false,
			isLoadingUrl: false,
			convertDisabled: true,
			cancelProgress: false,
			formatOptionsValues: [],
			FormatInputField: '',
		};
		const successUrl = {
			isLoadingUrl: true,
			formatOptionsValues: [],
			convertDisabled: false,
			FormatInputField: '',
			validUrlInput: true,
		};
		const errorUrl = {
			isLoadingUrl: false,
			formatOptionsValues: [],
			validUrlInput: true,
			FormatInputField: '',
			convertDisabled: true,
			cancelProgress: false,
		};
		if (!e.target.value) {
			dispatch(changeShortsMakerInputField(errorUrl));
		} else {
			isValidYouTubeURL(value) ? dispatch(changeShortsMakerInputField(successUrl)) : dispatch(changeShortsMakerInputField(error))
			// isValidYouTubeURL( e.target.value ) ? validateURL( e.target.value ) : dispatch( changeShortsMakerInputField( error ) );

		}
	};

	const handleSubmitConvert = () => {
		dispatch(
			changeShortsMakerInputField({ progress: 100 })
		);
	};

	return (
		<>
			{(
				<div className="shortsSectionWrapper">
					{
						ShortsMakerField.progress !== 100 && (
							<>
								<section className="heroSection white_bg">
									<div className='shorts-container'>
										<HeroSection
											ShortsMakerField={ShortsMakerField}
											handleInputChange={handleInputChange}
											handleSubmitConvert={handleSubmitConvert}
										/>
									</div>
								</section>

								<section className="underHeroSection grey_bg">
									<div className='shorts-container'>
										<UnderHeroWrapper
											ShortsMakerField={ShortsMakerField}
											handleInputChange={handleInputChange}
											handleSubmitConvert={handleSubmitConvert}
										/>

										<MultipleVideosThumbnail
											ShortsMakerField={ShortsMakerField}

										/>


									</div>
								</section>

								{/* <PerfectToolsSection ShortsMakerField={ShortsMakerField} /> */}
								<SteamLineSection ShortsMakerField={ShortsMakerField} />
							</>
						)}

					{
						ShortsMakerField.progress === 100 && (
							<>
								<section className="heroSection white_bg">
									<div className='shorts-container'>
										<SuccessPage ShortsMakerField={ShortsMakerField} />
										<Button variant="danger"
											onClick={() => navigate('/upload')}
										>
											Upload to YouTube Channel
										</Button>
									</div>
								</section>
							</>
						)}

				</div>
			)}
		</>
	);
};
export default NonLogedInView;
