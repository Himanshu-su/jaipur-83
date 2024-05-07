import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import axios from 'axios';
import "react-toastify/dist/ReactToastify.css";
import Cookies from 'js-cookie';

function Signin() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
          const response = await axios.post('http://103.69.196.162:2000/signin', formData);
  
          // Check if response contains token
          if (response.data.token) {
              // Save token in a cookie with an expiry of 1 day
              Cookies.set('token', response.data.token, { expires: 1 });
  
              // Show success toast notification
              toast.success('Login successful!', {
                  position: 'top-center',
                  autoClose: 2000,
                  onClose: () => {
                      // Navigate to home page after toast is closed
                      navigate('/userdashboard');
                  }
              });
          } else {
              setError('Token not received. Please try again later.');
          }
      } catch (error) {
          // Handle error
          if (error.response) {
              console.error('Error signing in:', error.response.data);
              setError(error.response.data.errors);
          } else {
              console.error('Error signing in:', error.message);
              setError({ network: 'An error occurred. Please try again later.' });
          }
      }
  };

  const logout = () => {
    // Remove the token from the cookie
    Cookies.remove('token');

    // Redirect to the login page or any other desired page
    navigate('/login'); // Assuming '/login' is the route for the login page
};



    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError({ ...error, [e.target.name]: '' }); // Update only the specific property
    };

    return (
        <div className="page-header position-relative">
        <div className='background-div'></div>
            <div className="container   ">
              <div className='row h-100 '>
              <div className="col-md-7 content-center bg-white">
             
                      <div className="logo-container " style={{textAlign:'left'}}>
                        <img src="../assets/images/logo.svg" alt="" />
                      </div>
                
                 
                <div className='center_div '>
                  <div className='row'>
                    <div className='col-md-6 m-auto'>
                    <div className="card-plain">
                    <h3 className='text-center text-dark'>Sign In To Meta Estate Empire </h3>
                <div className='m-auto mb-5'><img className='img-fluid' src='../assets/images/google.png'/></div>
                <p className='text-center text-dark my-5'>or</p>
                  <form className="form" onSubmit={handleSubmit}>
                   
                    <div className="content">                                                
                      
                        
                      <input type="text" className="form-control mb-lg-4 mb-2 py-lg-3 py-2 with-icon1 " placeholder="Enter Email" name="email" value={formData.email} autoFocus autoComplete="off"   onChange={handleChange}   />
                       
                      
                    
                     
                        <input type="password" placeholder="Password " className="form-control with-icon2 mb-lg-2 mb-2 py-lg-3 py-2" name="password" value={formData.password} onChange={handleChange} autoFocus />
                       <small className=' d-flex justify-content-end '><a className='' href='/forget'>Forget Password ?</a></small>
                
                      
                        {error && typeof error === 'string' && <p className="text-danger">{error}</p>} {/* Display error message only if it's a string */}
                    </div>
                    
                    <div className="footer text-center">
                      <button type="submit" className="btn btn-primary  btn-lg btn-block waves-effect waves-light mb-3" style={{backgroundColor:'#919296',borderRadius:'16px'}}>SIGN IN</button>
                      <label className='text-body' htmlFor="terms ">
                      Create A New Account? Sign Up <a href="/">Sign Up</a>
                      </label>
                    </div>
                  </form>
                </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-5 position-relative    d-flex align-items-center'>
      <div className='secat_img' >
        <img className='img-fluid' src="../assets/images/s_img.svg"/>
      </div>
      
              </div>
              </div>
            </div>
          </div>
    );
}

export default Signin;
