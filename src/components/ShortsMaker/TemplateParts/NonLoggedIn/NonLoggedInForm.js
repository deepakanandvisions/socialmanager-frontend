import React from 'react';
import { Form, Button } from 'react-bootstrap';
const NonLogedInForm = (props) => {
    const { ShortsMakerField } = props;
    


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
            isValidYouTubeURL(value) ? executeProcess(successUrl, value) : dispatch(changeShortsMakerInputField(error))
            // isValidYouTubeURL( e.target.value ) ? validateURL( e.target.value ) : dispatch( changeShortsMakerInputField( error ) );

        }
    };

    const handleSubmitConvert = () => {
        dispatch(
            changeShortsMakerInputField({ isConvertLoading: true })
        );
        dispatch(
            changeShortsMakerInputField({ convertDisabled: true })
        );
    };


    return (
        <>
            <Form onSubmit={handleSubmitConvert}>
                <div className="formFieldsGroup">
                    <div className="appendValidationRef">
                        <div className="inputField">
                            <Form.Label htmlFor="inputPassword5">
                                YouTube video URL
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
                                    type="submit"
                                    disabled={ShortsMakerField?.convertDisabled}
                                >
                                    Generate Shorts
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Form>

        </>
    );
};
export default NonLogedInForm;
