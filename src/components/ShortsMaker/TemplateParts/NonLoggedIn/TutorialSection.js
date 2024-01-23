import { React, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const TutorialSection = ({ ShortsMakerField }) => {
    return (
        <>
            <div className="TutorialSectionWrapper">

                <div className='FeedbackHeading'>
                    <h2>{ShortsMakerField?.EditVideoApiData?.heading_tutorials}</h2>
                </div>
                
                <div className='tutorialIframe'
                    dangerouslySetInnerHTML={{
                        __html: ShortsMakerField?.EditVideoApiData?.youtube_embeded_code,
                    }}
                />

            </div>
        </>
    );
};
export default TutorialSection;
