import React from 'react';
import { Form, Button } from 'react-bootstrap';
import hero_image from './../../../../assets/images/hero_image.png';

import zoom from './../../../../assets/images/zoom.png';
import Berkeley from './../../../../assets/images/Berkeley.png';
import zoho from './../../../../assets/images/zoho.png';
import sap from './../../../../assets/images/sap.png';
import intel from './../../../../assets/images/intel.png';
import pwc from './../../../../assets/images/pwc.png';
import KPMG from './../../../../assets/images/KPMG.png';
import BBC from './../../../../assets/images/BBC.png';
import Aol from './../../../../assets/images/Aol.png';

const HeroSection = ({ ShortsMakerField, handleInputChange, handleSubmitConvert }) => {
    return (
        <div className="HeroSectionWrapper">
            <div className="shortsHeroInnerWrapper">
                <div className="left_section">
                    <h1>
                        Turn Your YouTube Videos into Engaging Shorts Automatically
                    </h1>
                    <p>Effortlessly expand your audience with engaging shorts created from all of your videos in your YouTube channel.</p>
                    <div className="formShortcode">
                        <div className="shortsFormWrappr">
                            <Form>
                                <div className="formFieldsGroup">
                                    <div className="appendValidationRef">
                                        <div className="inputField">
                                            <Form.Label htmlFor="inputPassword5">
                                                YouTube Video URL
                                            </Form.Label>
                                            <div className="formInputFields">
                                                <Form.Control
                                                    type="url"
                                                    id="ssembleyoutubeURL"
                                                    aria-describedby="ssembleyoutubeURL"
                                                    placeholder="https://www.youtube.com/watch?v=BZk-iDBVnO0"
                                                    className={
                                                        !ShortsMakerField.validUrlInput
                                                            ? 'youtubeChannel tool-error'
                                                            : 'youtubeChannel'
                                                    }
                                                    name="youtubeURL"
                                                    value={ShortsMakerField?.youtubeURL}
                                                    onChange={
                                                        handleInputChange
                                                    }
                                                />

                                                <Button
                                                    className={
                                                        ShortsMakerField.convertDisabled
                                                            ? 'shortsMakerButtonIsClicked disabled'
                                                            : 'shortsMakerButtonIsClicked'
                                                    }
                                                    variant="primary"
                                                    onClick={handleSubmitConvert}
                                                    disabled={ShortsMakerField?.convertDisabled}
                                                >
                                                    Generate Shorts

                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
                <div className="right_section">
                    <div className="imageWrapper"
                        height={ShortsMakerField?.EditVideoApiData?.right_side_image?.height}
                        width={ShortsMakerField?.EditVideoApiData?.right_side_image?.width}
                    >
                        <img
                            src={
                                hero_image
                            }
                        />

                    </div>
                </div>
            </div>


            {/* partner section */}

            <div className="partner_logos logo-container">
                <img className="logo" src={zoom} alt="zoom" />
                <img className="logo" src={Berkeley} alt="Berkeley" />
                <img className="logo" src={zoho} alt="zoho" />
                <img className="logo" src={sap} alt="sap" />
                <img className="logo" src={intel} alt="intel" />
                <img className="logo" src={pwc} alt="pwc" />
                <img className="logo" src={KPMG} alt="KPMG" />
                <img className="logo" src={BBC} alt="BBC" />
                <img className="logo" src={Aol} alt="Aol" />
            </div>



        </div>

    );
};

export default HeroSection;
