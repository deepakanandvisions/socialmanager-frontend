import { React } from 'react';
import perfecttools from './../../../../assets/images/perfect-tools.png';

import feedback from './../../../../assets/images/feedback.png';
import Audiocleaner from './../../../../assets/images/Audio-cleaner.png';
import giffy from './../../../../assets/images/giffy.png';
import Freesound from './../../../../assets/images/Freesound.png';
import AIVoiceover from './../../../../assets/images/AI-Voiceover.png';


const PerfectToolsSection = ({ ShortsMakerField }) => {
    return (
        <>
            <div className="gradiant_bg">
                <section className="pefectToolsSection">
                    <div className="shorts-container">
                        <div className="PerfectToolsSectionWrapper">
                            <div className="PerfectToolsHeading">
                                <h2>The Perfect Tool for Easily Refining Your Shorts</h2>
                                <p>
                                    If you've created Shorts with AI, now refine them to your style.
                                    Change or move scenes, and add video, audio, text, and more wherever
                                    you want. Fine-tune your Shorts with Ssemble's detailed features.
                                </p>
                            </div>
                            <div className="PerfectToolsThumbInner">
                                <img
                                    src={perfecttools}
                                    width={989}
                                    height={904}
                                    alt="The Perfect Tool for Easily Refining Your Shorts"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="pefectToolsSection feedback-sec">
                    <div className="shorts-container">
                        <div className="FeedbackSectionWrapper">
                            <div className="FeedbackHeading">
                                <h2>Get Feedback for Perfect Shorts</h2>
                            </div>
                            <div className="FeedbackThumbInner">
                                <img
                                    src={feedback}
                                    width={1412}
                                    height={1027}
                                    alt="The Perfect Tool for Easily Refining Your Shorts"
                                />
                            </div>
                            <div className="FeedbackContentRepeat">
                                <div>
                                    <h3>Detailed Content Critique</h3>
                                    <p>
                                        Users can give detailed feedback on specific scenes or elements of
                                        the Shorts. For instance, they can comment on the editing style of
                                        a particular scene or the content of the subtitles.
                                    </p>
                                </div>
                                <div>
                                    <h3>Interactive Dialogue</h3>
                                    <p>
                                        Beyond simple comments, feedback spurs conversations and
                                        discussions among users. They can exchange ideas and discuss
                                        specific aspects of the content.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="pefectToolsSection">
                    <div className="shorts-container">
                        <div className="aishorts-sec">
                            <h2>Effortlessly Refine Your AI-Shorts with Powerful Plugins</h2>
                            <div className="aishorts-row">
                                <div className="aishorts-img">
                                    <img src={Audiocleaner} />
                                </div>
                                <div className="aishorts-content">
                                    <h3>

                                        Audio Cleaner

                                    </h3>
                                    <p>
                                        Remove background noise from videos. no need for expensive
                                        microphones.
                                    </p>
                                </div>
                            </div>
                            <div className="aishorts-row">
                                <div className="aishorts-img">
                                    <img src={giffy} />
                                </div>
                                <div className="aishorts-content">
                                    <h3>

                                        GIPHY

                                    </h3>
                                    <p>
                                        Refresh your audience's attention by adding appropriate meme
                                        videos when needed.
                                    </p>
                                </div>
                            </div>
                            <div className="aishorts-row">
                                <div className="aishorts-img">
                                    <img src={Freesound} />
                                </div>
                                <div className="aishorts-content">
                                    <h3>

                                        Freesound

                                    </h3>
                                    <p>Add trendy sound effects to emphasize key moments.</p>
                                </div>
                            </div>
                            <div className="aishorts-row">
                                <div className="aishorts-img">
                                    <img src={AIVoiceover} />
                                </div>
                                <div className="aishorts-content">
                                    <h3>

                                        AI Voiceover

                                    </h3>
                                    <p>
                                        Enhance your narratives in Shorts with natural-sounding voices
                                        using AI Voiceover
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    );
};
export default PerfectToolsSection;
