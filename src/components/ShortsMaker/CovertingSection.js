import React, { useEffect, useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';

import ReactGA from 'react-ga4';
const ConvertingSection = ({ ShortsMakerField, shortcodeSettings }) => {
	
	const youtube_parser = (url) => {
		var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
		var match = url.match(regExp);
		return (match && match[7].length == 11) ? match[7] : false;
	}

	const handleCancel = () => {
		// ReactGA.event({
		// 	category: 'Cancel Button Clicked',
		// 	action: 'Cancel Button Clicked',
		// 	label: 'Cancel Button Clicked',
		// });
		window.location.reload();
	};

	return (
		<>
			<div className="main_wrapperyt">
				<section className="youtube-down-sec tools-sec converting-video-sec">
					<div className="container">
						<div className="tools-heading">
							<h1 className="shortMaker-heading">
								AI is analyzing your video.
							</h1>
							<h4 className='shortmakerSub-heading'>
								Don't close this browser.
							</h4>
						</div>
						<div className='shortsImageWrapper'>
							{ShortsMakerField?.validUrlInput && ShortsMakerField?.youtubeURL && (
								<img data-ytid={youtube_parser(ShortsMakerField.youtubeURL)}
									src={`https://img.youtube.com/vi/${youtube_parser(ShortsMakerField.youtubeURL)}/sddefault.jpg`}
									alt=""
								/>
							)}
						</div>
						<div className="youtube-down-con shortsMakerProgressWrapper">
							<form>

								<ProgressBar
									now={ShortsMakerField.progress}
									
								/>

								<div className="percentage-text">
									{' '}
									{ShortsMakerField.progress}%
								</div>

								<p className='shortsLoadingLabel'>
									Fetching YouTube video...
								</p>
								<div className="secondary-btn">
									<button
										type="button"
										onClick={handleCancel}
										title="Cancel"
									>
										Cancel
									</button>
								</div>
							</form>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};
export default ConvertingSection;
