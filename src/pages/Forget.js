import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Forget() {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const response = await axios.post('http://103.69.196.162:2000/forgot-password', { email });
          console.log('Response Data:', response.data); // Confirm the response structure
          // Assuming email is already available from the form
          const emailFromForm = email; 
          console.log('Email from Form:', emailFromForm); // Check if email is captured correctly
          // Now, you can store the email in local storage
          localStorage.setItem('email', emailFromForm);
          // Show success toast
          toast.success('Email sent successfully!', {
              position: 'top-center',
              autoClose: 2000,
              onClose: () => {
                  // Navigate to verification page after toast is closed
                  navigate('/verifyemail');
              }
          });
      } catch (error) {
          console.error(error);
      }
    };

    return (
        <div className="page-header position-relative">
            <div className='background-div'></div>
            <div className="container">
                <div className='row h-100'>
                    <div className="col-md-7 content-center bg-white">
                        <div className="logo-container" style={{ textAlign: 'left' }}>
                            <img src="../assets/images/logo.svg" alt="" />
                        </div>
                        <div className='center_div'>
                            <div className='row'>
                                <div className='col-md-6 m-auto'>
                                    <div className="card-plain">
                                        <h3 className='text-center text-dark'>Forget Password</h3>
                                        <p className='text-center text-dark my-5'>Enter Your Mail To Reset</p>
                                        <form className="form" onSubmit={handleSubmit}>
                                            <div className="content">
                                                <input type="text" className="form-control mb-lg-4 mb-2 py-lg-3 py-2 with-icon1" placeholder="Nader@MetaEstateEmpire.com" name="email" onChange={(e) => setEmail(e.target.value)} required />
                                            </div>
                                            <div className="footer text-center">
                                                <button type="submit" className="btn btn-primary btn-lg btn-block waves-effect waves-light mb-3" style={{ backgroundColor: '#919296', borderRadius: '16px' }}>Verify</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-5 position-relative d-flex align-items-center'>
                        <div className='secat_img'>
                            <img className='img-fluid' src="../assets/images/s_up_img.png" alt="section image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Forget;
