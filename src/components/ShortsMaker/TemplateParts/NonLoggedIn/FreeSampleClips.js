import React from 'react';
import { Form, Button } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const FreeSampleClips = ({ ShortsMakerField, handleInputChange, handleSubmitConvert }) => {
    return (
        <div className="freeSapmleClipsWrapper">
            <div className="shorts-container">
                <div className="freeSampleClipsInner">
                    <div className="freeSampleHeading">
                        <h2>{
                            ShortsMakerField
                                ?.EditVideoApiData
                                ?.form_title_data
                        }</h2>
                    </div>
                    <div className="formShortcode">
                        <div className="shortsFormWrappr">
                            <Form>
                                <div className="formFieldsGroup">
                                    <div className="appendValidationRef">
                                        <div className="inputField">
                                            <Form.Label htmlFor="inputPassword5">
                                                {
                                                    ShortsMakerField
                                                        ?.EditVideoApiData
                                                        ?.youtube_input_label
                                                }
                                            </Form.Label>
                                            <div className="formInputFields">
                                                <Form.Control
                                                    type="url"
                                                    id="ssembleyoutubeURL"
                                                    aria-describedby="ssembleyoutubeURL"
                                                    placeholder={
                                                        ShortsMakerField
                                                            ?.EditVideoApiData
                                                            ?.youtube_input_placeholder
                                                    }
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
                                                    {
                                                        ShortsMakerField
                                                            ?.EditVideoApiData
                                                            ?.form_button_text
                                                    }
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FreeSampleClips;
