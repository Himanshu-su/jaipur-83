import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

function Photoupload() {
    const [file, setFile] = useState(null);
    const [error, setError] = useState('');

    // Function to handle file change
    const handleFileChange = (e) => {
      setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
    
      // Clear previous error message
      setError('');
    
      // Get user ID from local storage
      const userId = sessionStorage.getItem('userId');
    
      if (!userId) {
        // Handle the case where user ID is not available
        setError('User ID not found. Please sign in again.');
        return;
      }
    
      // Create form data with file and user ID
      const formData = new FormData();
      formData.append('userId', userId);
      formData.append('photo', file);
    
      try {
        // Send POST request to the server with form data
        const response = await axios.post('http://103.69.196.162:2000/signup/step3', formData);
    
        // Check if status code is 200
        if (response.status === 200) {
          // Handle success response
          console.log(response.data);
          toast.success('Photo uploaded successfully!', {
            position: 'top-center',
            autoClose: 2000,
            onClose: () => {
              window.location.href = '/propresidency';
            }
          });
        } else {
          // Handle non-200 status code
          setError('Failed to upload photo. Please try again later.');
        }
      } catch (error) {
        // Handle error
        console.error('Error uploading file:', error);
    
        if (error.response) {
          // Server responded with an error status code
          setError('Failed to upload file: ' + error.response.data.message);
        } else if (error.request) {
          // The request was made but no response was received
          setError('No response from server. Please try again later.');
        } else {
          // Other types of errors
          setError('An error occurred. Please try again later.');
        }
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
                    <h3 className='text-center text-dark'>Upload Photo</h3>
                    <div className='m-auto mb-5'><img className='img-fluid' src='../assets/images/google.png' alt=""/></div>
                    <p className='text-center text-dark my-5'>or</p>
                    <form className="form" onSubmit={handleSubmit}>
                      <div className="content">
                        <div className='dropzone user_im'>
                          <div className="dz-message d-flex justify-content-center align-items-center h-100">
                            <div className="drag-icon-cph"> <i className="material-icons">touch_app</i> </div>
                          
                          </div>
                          <div className="fallback">
                            <input name="file" type="file" onChange={handleFileChange} />
                          </div>
                        </div>
                        {error && <div className="text-danger">{error}</div>}
                      </div>
                      <div className="footer text-center">
                        <button type="submit" className="btn btn-primary btn-lg btn-block waves-effect waves-light mb-3" style={{ backgroundColor: '#919296', borderRadius: '16px' }}>Upload</button>
                      </div>
                    </form>
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

export default Photoupload;
