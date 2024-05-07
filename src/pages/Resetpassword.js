import React, { useState } from 'react';

function Resetpassword() {
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Retrieve email and verification code from local storage
    const storedEmail = localStorage.getItem('email');
    const storedVerificationCode = localStorage.getItem('verificationCode');

    // Check if stored email and verification code match the current form values
    if (email !== storedEmail || verificationCode !== storedVerificationCode) {
      setError('Invalid email or verification code');
      return;
    }

    try {
      // Make API request to reset password
      const response = await fetch('http://103.69.196.162:2000/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          verificationCode,
          newPassword,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to reset password');
      }

      // Reset form and display success message
      setEmail('');
      setVerificationCode('');
      setNewPassword('');
      setSuccessMessage('Password reset successfully');
      setError('');

      // Optionally, you can clear the email and verification code from local storage
      localStorage.removeItem('resetEmail');
      localStorage.removeItem('resetVerificationCode');
    } catch (error) {
      console.error('Error resetting password:', error);
      setError('Failed to reset password. Please try again.');
    }
  };

  return (
    <div className="page-header position-relative">
      <div className='background-div'></div>
      <div className="container   ">
        <div className='row h-100 '>
          <div className="col-md-7 content-center bg-white">
            <div className="logo-container " style={{ textAlign: 'left' }}>
              <img src="../assets/images/logo.svg" alt="" />
            </div>
            <div className='center_div '>
              <div className='row'>
                <div className='col-md-6 m-auto'>
                  <div className="card-plain">
                    <h3 className='text-center text-dark'>Reset Password</h3>
                    <p className='text-center text-dark my-5'> Reset & Confirm Password</p>
                    <form className="form" onSubmit={handleSubmit}>
                      <div className="content">
                        <input type="email" placeholder="Email" className="form-control with-icon2 mb-lg-2 mb-2 py-lg-3 py-2" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="text" placeholder="Verification Code" className="form-control with-icon2 mb-lg-2 mb-2 py-lg-3 py-2" value={verificationCode} onChange={(e) => setVerificationCode(e.target.value)} />
                        <input type="password" placeholder="New Password" className="form-control with-icon2 mb-lg-2 mb-2 py-lg-3 py-2" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                      </div>
                      <div className="footer text-center">
                        <button type="submit" className="btn btn-primary  btn-lg btn-block waves-effect waves-light mb-3" style={{ backgroundColor: '#919296', borderRadius: '16px' }}>Reset</button>
                        {error && <div className="text-danger">{error}</div>}
                        {successMessage && <div className="text-success">{successMessage}</div>}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-5 position-relative     d-flex align-items-center'>
            <div className='secat_img' >
              <img className='img-fluid' src="../assets/images/s_img.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resetpassword;
