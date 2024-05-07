import axios from 'axios';
import React, { useState, useEffect,useRef  } from 'react';
import { toast } from 'react-toastify';

function Pincode() {
  const [pin, setPin] = useState(['', '', '', '']);
  const [userId, setUserId] = useState('');
  const inputRefs = useRef([]);

  useEffect(() => {
    const storedUserId = sessionStorage.getItem('userId');
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);

  const handleVerify = (e) => {
    e.preventDefault();
    const pinValue = pin.join('');

    if (!userId) {
      toast.error('User ID is missing.');
      return;
    }

    if (pinValue.length !== 4) {
      toast.error('Please enter a valid pin code.');
      return;
    }

    axios.post('http://103.69.196.162:2000/signup/step2', { pin: pinValue, userId: userId })
      .then((response) => {
        if (response.status === 200) {
          sessionStorage.setItem('userpin', pinValue);
          toast.success('Pin Set successful!', {
            position: 'top-center',
            autoClose: 2000,
            onClose: () => {
              window.location.href = '/identitycard';
            }
          });
        } else {
          toast.error('Failed to set pin. Please try again later.');
          console.error('Failed to set pin:', response);
        }
      })
      .catch((error) => {
        toast.error('Failed to set pin. Please try again later.');
        console.error('Failed to set pin:', error);
      });
  };

  const handleChange = (index, value) => {
    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);
    
    // Move focus to the next input field if value is not empty and it's not the last input field
    if (value !== '' && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
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
                    <h3 className='text-center text-dark'>Set A Pin Code</h3>
                    <p className='text-center text-body my-5'>Enter 04 Digit Code</p>
                    <form className="form" onSubmit={handleVerify}>
                      <div className="content d-flex justify-content-center">
                        {pin.map((value, index) => (
                          <input
                            key={index}
                            type="text"
                            className="form-control mb-lg-4 mb-2 py-lg-3 py-2 otp-input"
                            maxLength="1"
                            value={value}
                            onChange={(e) => handleChange(index, e.target.value)}
            ref={(inputRef) => {
              inputRefs.current[index] = inputRef;
            }}
                          />
                        ))}
                      </div>
                      <div className="footer text-center">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg btn-block waves-effect waves-light mb-3"
                          style={{ backgroundColor: '#919296', borderRadius: '16px' }}
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
              <img className='img-fluid' src="../assets/images/s_up_img.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pincode;
