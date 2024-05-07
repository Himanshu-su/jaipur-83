import React, { useEffect, useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import './Signup.css'
import { ConnectWallet, useSDK } from '@thirdweb-dev/react';

function Signup() {
  const navigate = useNavigate();
  const {user,loginWithRedirect,isAuthenticated}=useAuth0()

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [signature,setSignature]=useState("N/A")
  const [address,setAddress]=useState("N/A")

  const sdk=useSDK()
  

  const message='Please sign me!'
  const [errors, setErrors] = useState({});

// thirdweb

const signMessage = async () => {
  if (!sdk?.wallet.isConnected()) {
    alert("Please connect your wallet before signing a message.");
    return;
  }

  try {
    const sig = await sdk?.wallet.sign(message);
    if (!sig) {
      alert("No signature!");
    }
    setSignature(sig);
  } catch (error) {
    console.error("Error signing message:", error);
    alert("Error signing message. Please try again later.");
  }
};

const recoverAddress = async () => {
  if (!signature) {
    alert("Please sign a message first.");
    return;
  }

  try {
    const addr = await sdk?.wallet.recoverAddress(message, signature);
    if (!addr) {
      alert('No address');
    }
 setAddress(addr);
    localStorage.setItem("walletaddress",addr)
    alert("address add ")
    navigate('/userDashboard')
  } catch (error) {
    console.error("Error recovering address:", error);
    alert("Error recovering address. Please try again later.");
  }
};

// disconnect wallet

useEffect(() => {
  // Function to check wallet connection status
  const checkWalletConnection = () => {
    if (!sdk?.wallet.isConnected()) {
      // Clear address from localStorage when wallet disconnects
      localStorage.removeItem("walletaddress");
      // Reset the address state
      setAddress("N/A");
    }
  };


  const intervalId = setInterval(checkWalletConnection, 2000);

  // Clear interval on component unmount
  return () => clearInterval(intervalId);
}, [sdk]);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  useEffect(() => {
    // Save isAuthenticated to localStorage when its value changes
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('isAuthenticated', JSON.stringify(isAuthenticated));
    // setFormData.username(user.name)
    // setFormData.email(user.email)
    // setFormData.password(user.password)
  }, [user,isAuthenticated]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://103.69.196.162:2000/signup/step1', formData,);
  console.log(response)
   // Extract the MongoDB _id from the response
   const {userId} = response.data;
   console.log('u id',userId)

   // Save _id to local storage
   sessionStorage.setItem('userId', userId);
      // Show success toast notification
      toast.success('Signup successful!', {
        position: 'top-center',
        autoClose: 2000,
        onClose: () => {
          // Navigate to login page after toast is closed
          navigate('/pincode');
        }
      });
       
    } catch (error) {
      // Handle error
      if (error.response) {
        console.error('Error signing up:', error.response.data);
        // You can set error messages and handle them in your UI
        // For example:
        setErrors(error.response.data.errors);
      } else {
        console.error('Error signing up:', error.message);
        // Handle other types of errors, e.g., network errors
        // For example:
        setErrors({ network: 'An error occurred. Please try again later.' });
      }
    }
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
              <h3 className='text-center text-dark'>Sign Up To Meta Estate Empire </h3>
          <div className='d-flex justify-content-between align-items-center mb-5 "' ><img 
          style={{cursor:'pointer'}}
           className='img-fluid' src='../assets/images/google.png'
           onClick={(e)=>loginWithRedirect()}
           />
           <div style={{}}> <ConnectWallet id="connectwallet" style={{
            backgroundColor:'transparent',
            border: '5px dotted #6A4C08',
            width:''
           }}/></div>
          
           </div>
           <button onClick={signMessage}>Sign Message</button>
                    {/* <p>Signature: {signature}</p> */}
                    <br />
                    <button onClick={recoverAddress}>Recover Address</button>
                    {/* <p>Address: {address}</p> */}
  
          <p className='text-center text-dark my-5'>or</p>
            <form className="form" onSubmit={handleSubmit}>
             
              <div className="content">                                                
                
                  <input type="text" className="form-control with-icon mb-lg-4 mb-2 py-lg-3 py-2 " placeholder="Enter User Name" name="username" value={formData.username} onChange={handleChange} autoFocus autoComplete="off" />
                
               
                {errors.username && <span className="text-danger">{errors.username}</span>}
                
                <input type="text" className="form-control mb-lg-4 mb-2 py-lg-3 py-2 with-icon1 " placeholder="Enter Email" name="email" value={formData.email} onChange={handleChange} autoFocus autoComplete="off" />
                 
                
                {errors && errors.email && <p className="text-danger">{errors.email}</p>}
               
                  <input type="password" placeholder="Password " className="form-control with-icon2 mb-lg-4 mb-2 py-lg-3 py-2" name="password" value={formData.password} onChange={handleChange} autoFocus autoComplete="off" />
                 
          
                
{errors && errors.password && <p className="text-danger">{errors.password}</p>}
              </div>
              
              <div className="footer text-center">
                <button type="submit" className="btn btn-primary  btn-lg btn-block waves-effect waves-light mb-3" style={{backgroundColor:'#919296',borderRadius:'16px'}}>SIGN UP</button>
                <label className='text-body' htmlFor="terms ">
                Already Have An Account? Log In <a href="/login">Log In</a>
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
  <img className='img-fluid' src="../assets/images/s_up_img.png"/>
</div>

        </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
