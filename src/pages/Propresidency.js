import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
function Propresidency() {
    const [file, setFile] = useState(null);
    // const [userId, setUserId] = useState('');
    const [country, setCountry] = useState('');
    const [error, setError] = useState('');
    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };
    const userId = sessionStorage.getItem('userId');
    const handleCountryChange = (event) => {
        setCountry(event.target.value);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Check if file, userId, and country are provided
        if (!file || !userId || !country) {
            setError('Please fill in all fields');
            return;
        }
        // Clear previous error message
        setError('');
        const formData = new FormData();
        formData.append('userId', userId);
        formData.append('proofOfResidence', file);
        formData.append('country', country);
        try {
            const response = await axios.post('http://103.69.196.162:2000/signup/step4', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            // Check if status code is 200
            if (response.status === 200) {
                console.log(response.data);
                toast.success('Proof uploaded successfully!', {
                    position: 'top-center',
                    autoClose: 2000,
                    onClose: () => {
                        window.location.href = '/idcard';
                    }
                });
            } else {
                // Handle non-200 status code
                setError('Failed to upload proof. Please try again later.');
            }
        } catch (error) {
            console.error('Error uploading file:', error);
            // Handle error
        }
    };
    return (
        <div className="page-header position-relative">
            <div className='background-div'></div>
            <div className="container">
                <div className='row h-100 '>
                    <div className="col-md-7 content-center bg-white">
                        <div className="logo-container" style={{ textAlign: 'left' }}>
                            <img src="../assets/images/logo.svg" alt="" />
                        </div>
                        <div className='center_div '>
                            <div className='row'>
                                <div className='col-md-6 m-auto'>
                                    <div className="card-plain">
                                        <h3 className='text-center text-dark'>Proof Of Residency</h3>
                                        <div className='m-auto mb-5'>
                                            <h4 className=' text-dark' style={{ textAlign: 'left' }}>Nationality</h4>
                                            {error && <p>{error}</p>}
                                            <form onSubmit={handleSubmit}>
                                                <div className='form-group'>
                                                <input type="file" onChange={handleFileChange} className="form-control" />
                                                </div>
                                                {/* <div className='form-group'>
                                                <input type="text" placeholder="User ID" value={userId} onChange={} className="form-control" />
                                                </div> */}
                                                <div className='form-group'>
                                                <select className="form-control show-tick ms select2" onChange={handleCountryChange} data-placeholder="Select">
                                   <option value={country}>Country</option>
                                   <option>India</option>
                                   <option>London</option>
                                   <option>Japan</option>
                               </select>
                                                </div>
                                                <div className="footer text-center">
                                                    <button type="submit" className="btn btn-primary btn-lg btn-block waves-effect waves-light mb-3" style={{ backgroundColor: '#919296', borderRadius: '16px' }}>Next</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-5 position-relative    d-flex align-items-center'>
                        <div className='secat_img' >
                            <img className='img-fluid' src="../assets/images/s_img.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Propresidency;