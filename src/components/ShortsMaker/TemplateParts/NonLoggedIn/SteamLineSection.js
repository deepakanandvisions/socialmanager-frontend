import React from 'react';
import { Accordion } from 'react-bootstrap';
const SteamLineSection = ({ ShortsMakerField }) => {
    return (
        <section className="steamlineSection white_bg">
            <div className="shorts-container">
                <div className="straemlineShortsMakingWrapper">
                    <div className="streamLineShortsheading">
                        <h2>In Shortsmaker, you can easily schedule a video upload to YouTube</h2>
                    </div>
                    <div className="shtreamlineShortsInner">

                    

                        <div className="StreamlineShortsColumn">
                            <h4 className="title">Submit Your Request</h4>
                            <p className="description">
                            Put your YouTube URL to make shorts from
                            </p>
                        </div>
                        <div className="StreamlineShortsColumn">
                            <h4 className="title">Connect Your YouTube Account</h4>
                            <p className="description">
                            Link your account for automatic uploads.
                            </p>
                        </div>
                        <div className="StreamlineShortsColumn">
                            <h4 className="title">Enter Details</h4>
                            <p className="description">Provide a title, description, and tags for your video.</p>
                        </div>
                    </div>
                </div>

                <div className="faqWrapper">
                    <div className="container">
                        <h4>FAQ</h4>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>How does YouTube Shorts Maker select the best parts of
                                    my video?</Accordion.Header>
                                <Accordion.Body>
                                    Our AI-driven system analyzes your video's engagement metrics to
                                    identify the segments that resonated most with your audience.
                                </Accordion.Body>
                            </Accordion.Item>
                            
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>How long does it take to receive my shorts after submitting a
                                    video?</Accordion.Header>
                                <Accordion.Body>
                                    Shorts are typically generated and sent to your email within 30
                                    minutes of YouTube URL submission.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SteamLineSection;
