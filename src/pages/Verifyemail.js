import React, { useState, useRef, useEffect } from 'react';
import { ToastContainer, toast } from "react-toastify";
import axios from 'axios'; // Axios ko import karna

function Verifyemail() {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  // State to store the email retrieved from local storage
  const [email, setEmail] = useState('');

 // Effect to retrieve email from local storage when component mounts
 useEffect(() => {
  const storedEmail = localStorage.getItem('email');
  if (storedEmail) {
    setEmail(storedEmail);
  }
}, []);

// Function to handle OTP change
const handleChange = (index, value) => {
  if (value.match(/^\d+$/)) {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move focus to the next input field
    if (value !== '' && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  }
};

// Function to handle backspace key press
const handleBackspace = (index, e) => {
  if (e.keyCode === 8 && index > 0 && otp[index] === '') {
    const newOtp = [...otp];
    newOtp[index - 1] = '';
    setOtp(newOtp);

    // Move focus to the previous input field
    inputRefs[index - 1].current.focus();
  }
};

const handleVerify = (e) => {
  e.preventDefault();

  const otpValue = otp.join('');

  // Save OTP in local storage
  localStorage.setItem('verificationCode', otpValue);

  // Redirect to reset password page
  window.location.href = '/resetpassword';
};
  return (
    <div className="page-header position-relative">
      <div className='background-div'></div>
      <div className="container">
        <div className='row h-100'>
          <div className="col-md-7 content-center bg-white">
            <div className="logo-container" style={{textAlign:'left'}}>
              <img src="../assets/images/logo.svg" alt="" />
            </div>
            <div className='center_div'>
              <div className='row'>
                <div className='col-md-6 m-auto'>
                  <div className="card-plain">
                    <h3 className='text-center text-dark'>Verify Email</h3>
                    <p className='text-center text-body my-5'>Enter the code sent to your email</p>
                    <form className="form" onSubmit={handleVerify}>
                      <div className="content d-flex justify-content-center">
                        {otp.map((value, index) => (
                          <input
                            key={index}
                            ref={inputRefs[index]}
                            type="text"
                            className="form-control mb-lg-4 mb-2 py-lg-3 py-2 otp-input"
                            maxLength="1"
                            value={value}
                            onChange={(e) => handleChange(index, e.target.value)}
                            onKeyDown={(e) => handleBackspace(index, e)}
                          />
                        ))}
                      </div>
                      <div className="footer text-center">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg btn-block waves-effect waves-light mb-3"
                          style={{ backgroundColor:'#919296', borderRadius:'16px' }}
                        >
                          Verify
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-5 position-relative d-flex align-items-center'>
            <div className='secat_img'>
              <img className='img-fluid' src="../assets/images/s_up_img.png"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Verifyemail;
