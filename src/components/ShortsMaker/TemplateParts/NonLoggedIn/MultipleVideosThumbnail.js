import { React } from 'react';
import AICuration from './../../../../assets/images/AI-Curation.png';
import AutoCaption from './../../../../assets/images/Auto-Caption.png';
import FaceTracking from './../../../../assets/images/Face-Tracking.png';
import ViralityScore from './../../../../assets/images/Virality-Score.png';

const MultipleVideosThumbnail = ({ ShortsMakerField }) => {

    return (
        <>
            <div className="multipleVideosThumbnailWrapper">
                <div className="multipleVideosHeading">
                    <h2>Go Viral with One Click : The Power of AI</h2>
                </div>
                <div className="multipleVideosThumbInner">
                    <div className="vidoesThumbWrapper">
                        <div className="videosThumbImage ">
                            <img
                                src={AICuration}
                                width={600}
                                height={400}
                                alt="AI Curation"
                            />
                        </div>
                        <div className="videoThumbContent">
                            <h3>AI Curation</h3>
                            <p>
                                AI analyzes and compiles the highlights of your video into potential
                                viral shorts.
                            </p>
                        </div>
                    </div>
                    <div className="vidoesThumbWrapper">
                        <div className="videosThumbImage ">
                            <img
                                src={AutoCaption}
                                width={600}
                                height={400}
                                alt="Auto Caption"
                            />
                        </div>
                        <div className="videoThumbContent">
                            <h3>Auto Caption</h3>
                            <p>Adds Subtitles and Emojis</p>
                        </div>
                    </div>
                    <div className="vidoesThumbWrapper">
                        <div className="videosThumbImage ">
                            <img
                                src={FaceTracking}
                                width={600}
                                height={400}
                                alt="Face Tracking"
                            />
                        </div>
                        <div className="videoThumbContent">
                            <h3>Face Tracking</h3>
                            <p>Keeps the speaker’s face at the center</p>
                        </div>
                    </div>
                    <div className="vidoesThumbWrapper">
                        <div className="videosThumbImage ">
                            <img
                                src={ViralityScore}
                                width={600}
                                height={400}
                                alt="Virality Score"
                            />
                        </div>
                        <div className="videoThumbContent">
                            <h3>Virality Score</h3>
                            <p>
                                AI assigns a virality score to each short, based on analysis of
                                thousands of popular videos.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};
export default MultipleVideosThumbnail;
