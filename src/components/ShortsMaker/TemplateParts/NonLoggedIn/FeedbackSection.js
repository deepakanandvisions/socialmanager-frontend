import { React, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const FeedbackSection = ({ ShortsMakerField }) => {
    return (
        <>
            <div className="FeedbackSectionWrapper">

                <div className='FeedbackHeading'>
                    <h2>{ShortsMakerField?.EditVideoApiData?.heading_feedback}</h2>
                </div>
                <div className="FeedbackThumbInner">
                    <LazyLoadImage
                        src={ShortsMakerField?.EditVideoApiData?.thumbnail_feedback?.url}
                        width={ShortsMakerField?.EditVideoApiData?.thumbnail_feedback?.width}
                        height={ShortsMakerField?.EditVideoApiData?.thumbnail_feedback?.height}
                        alt={ShortsMakerField?.EditVideoApiData?.heading_perfect_tool}
                    />
                </div>

                <div className="FeedbackContentRepeat">
                    {ShortsMakerField?.EditVideoApiData
                        ?.feedback_content_repeated &&
                        ShortsMakerField?.EditVideoApiData?.feedback_content_repeated.map(
                            (data, index) => (
                                <div>
                                    <h3>
                                        {data.title_feedback}
                                    </h3>
                                    <p>
                                        {
                                            data.description_feedback
                                        }
                                    </p>
                                </div>
                            )
                        )}
                </div>

            </div>
        </>
    );
};
export default FeedbackSection;
