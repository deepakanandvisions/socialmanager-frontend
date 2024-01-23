import { React, useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const AuthSection = ({ ShortsMakerField }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [videoFile, setVideoFile] = useState(null);
    const [videoTitle, setVideoTitle] = useState('');
    const [isUploading, setIsUploading] = useState(false);
    const [uploadMessage, setUploadMessage] = useState('');
    const [alertShow, setAlertShow] = useState(false);
    const [userInfo, setUserInfo] = useState(null);
    const [videoDescription, setVideoDescription] = useState('');
    const [videoTags, setVideoTags] = useState('');

    const apiUrl = process.env.REACT_APP_API_URL;

    const handleLogin = () => {
        console.log('Attempting to login');

        axios.get(apiUrl + '/auth/google/url')
            .then(response => {
                const authUrl = response.data.authUrl;
                window.location.href = authUrl; // Redirect to OAuth authentication URL
            })
            .catch(error => {
                console.error('Failed to retrieve login URL:', error);
            });
    };

    const handleInstagramLogin = () => {
        console.log('Attempting to instagram login');

        axios.get(apiUrl + '/auth/instagram/url')
            .then(response => {
                const authUrl = response.data.authUrl;
                window.location.href = authUrl; // Redirect to OAuth authentication URL
            })
            .catch(error => {
                console.error('Failed to retrieve login URL:', error);
            });
    };

   

    // Check login status
    const checkLoginStatus = () => {
        const token = localStorage.getItem('jwtToken');
        if (!token) {
            console.log('No token found');
            setIsLoading(false); // Update loading status
            setIsLoggedIn(false);
            return;
        }

        axios.get(apiUrl + '/auth/login/status', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                setIsLoggedIn(response.data.isLoggedIn);
                setIsLoading(false); // Update loading status
            })
            .catch(error => {
                console.error('Error checking login status:', error);
                localStorage.removeItem('jwtToken');
                setIsLoggedIn(false);
                setIsLoading(false); // Update loading status
            });
    };

    const fetchUserInfo = () => {
        const token = localStorage.getItem('jwtToken');
        axios.get(apiUrl + '/auth/userinfo', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                setUserInfo(response.data);
            })
            .catch(error => {
                console.error('Error fetching user info:', error);
            });
    };

    useEffect(() => {
        console.log('Checking login status');
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token');
        if (token) {
            localStorage.setItem('jwtToken', token);
            setIsLoggedIn(true);
        }
        checkLoginStatus();
    }, []);

    useEffect(() => {
        if (isLoggedIn) {
            fetchUserInfo();
        }
    }, [isLoggedIn]);

    const navigate = useNavigate(); // React Router v6

    const handleLogout = () => {
        localStorage.removeItem('jwtToken');
        setIsLoggedIn(false);
        navigate('/'); // Redirect to the homepage, React Router v6
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsUploading(true); // Start upload
        setUploadMessage('');
        setAlertShow(false);
        // Create FormData instance
        const formData = new FormData();
        // formData.append('video', videoFile);
        formData.append('title', videoTitle);
        formData.append('description', videoDescription);
        formData.append('tags', videoTags);

        // Request video upload
        axios.post(apiUrl + '/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${localStorage.getItem('jwtToken')}`
            }
        })
            .then(response => {
                setIsUploading(false); // Upload complete
                setUploadMessage('Once the video is generated, we will upload it to YouTube with the metadata you submitted');
                setAlertShow(true); // Show
            })
            .catch(error => {
                setIsUploading(false); // Upload complete
                setUploadMessage('Upload failed: ' + error.message);
            });
    };

    const handleFileChange = (event) => {
        setVideoFile(event.target.files[0]);
    };

    const handleTitleChange = (event) => {
        setVideoTitle(event.target.value);
    };


    return (
        <>



            {!isLoading && !isLoggedIn && (
                // <button onClick={handleLogin}>Login with Google</button>
                <div className="align-items-center bg-seconary d-flex flex-column justify-content-center vh-100">

                    <h1>YouTube Video Uploader</h1>
                    <div className='d-flex flex-column gap-2'>
                        <button className="btn btn-primary display-1 fw-bold mt-2" onClick={handleInstagramLogin}>Login with FB</button>


                        <button className="gsi-material-button" onClick={handleLogin}>
                            <div className="gsi-material-button-state"></div>
                            <div className="gsi-material-button-content-wrapper">
                                <div className="gsi-material-button-icon">
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" xmlnsXlink="http://www.w3.org/1999/xlink" style={{ display: 'block' }}>
                                        <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                                        <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                                        <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                                        <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                                        <path fill="none" d="M0 0h48v48H0z"></path>
                                    </svg>
                                </div>
                                <span className="gsi-material-button-contents">Sign in with Google</span>
                                <span style={{ display: 'none' }}>Sign in with Google</span>
                            </div>
                        </button>

                        <Link to="/">
                            <button className='btn btn-lg btn-secondary mt-2'>Go back to Home</button>
                        </Link>
                    </div>
                </div>
            )}
            {!isLoading && isLoggedIn && (
                <div className="">
                    <div className='container pb-5 pt-5'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <Link to="/">
                                    <button className='btn btn-secondary'>Go back to Home</button>
                                </Link>
                                {userInfo && (
                                    <div className='mt-4'>
                                        <div className='card col-md-3 col-sm-12 mb-5 p-4 text-center'>
                                            <div className="circle">
                                                <img className='img-thumbnail' src={userInfo.picture} alt={userInfo.name} />
                                                <h3>{userInfo.name}</h3>
                                                <h6>{userInfo.email}</h6>
                                            </div>
                                            <button className="btn btn-danger display-1 fw-bold mt-2" onClick={handleLogout}>Logout</button>
                                        </div>
                                    </div>
                                )}
                                <hr />

                                {alertShow && uploadMessage && (
                                    <Alert variant="success" onClose={() => setAlertShow(false)} dismissible>
                                        <Alert.Heading>{uploadMessage}</Alert.Heading>
                                    </Alert>
                                )}

                                <form onSubmit={handleSubmit} className='mt-5'>
                                    <Form.Group className="mb-3" controlId="ssForm.ControlInput1">
                                        <Form.Label>Title</Form.Label>
                                        <Form.Control type="text" placeholder="Video Title"
                                            value={videoTitle} onChange={handleTitleChange}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="ssForm.ControlTextarea1">
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control as="textarea" rows={3}
                                            value={videoDescription}
                                            onChange={(e) => setVideoDescription(e.target.value)}
                                            placeholder="Description"
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="ssForm.ControlInput1">
                                        <Form.Label>Tags</Form.Label>
                                        <Form.Control type="text" placeholder="Tags"
                                            value={videoTags}
                                            onChange={(e) => setVideoTags(e.target.value)}
                                        />
                                    </Form.Group>
                                    <Button variant="success" type='submit'>
                                        Upload
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            )}
            {isUploading && <div>Uploading...</div>}

        </>
    );
}

export default AuthSection;
