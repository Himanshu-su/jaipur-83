import { Route, Routes,useLocation  } from 'react-router-dom';
import React, { useState } from 'react';
import Home from './pages/Home';
import Property_list from './pages/Property_list';
import Marketplace from './pages/Marketplace';
import Secondary_market from './pages/Secondary_market';
import Add_proparty from './pages/Add_proparty';
import Property_details from './pages/Property_details';
import All_agents from './pages/All_agents';
import Add_agent from './pages/Add_agent';
import Agent_profile from './pages/Agent_profile';
import Agent_invoice from './pages/Agent_invoice';
import Messaging from './pages/Messaging';
import Apartment from './pages/Apartment';
import Office from './pages/Office';
import Sales from './pages/Sales';
import Villa from './pages/Villa';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Leftsidebar from './components/Leftsidebar';
import Rightsidebar from './components/Rightsidebar';
import Signin from './pages/Signin';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Signup from './pages/Signup';
import Forget from './pages/Forget';
import Resetpassword from './pages/Resetpassword';
import Verifyemail from './pages/Verifyemail';
import Pincode from './pages/Pincode';
import Identitycard from './pages/Identitycard';
import Wallatconnect from './pages/Wallatconnect';
import Photoupload from './pages/Photoupload';
import Propresidency from './pages/Propresidency';
import Idcard from './pages/Idcard';
import Userdashboard from './pages/Userdashboard';
import Comparison from './pages/Comparison';
import Profile from './pages/Profile';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';

function App() {
  const location = useLocation();
  const [selectedProperties, setSelectedProperties] = useState([]);
  const addPropertyToComparison = (property) => {
    if (selectedProperties.length < 3) {
      setSelectedProperties([...selectedProperties, property]);
      console.log("Property Added");
    } else {
      console.log("Maximum properties reached for comparison");
    }
  };
  const removePropertyFromComparison = (index) => {
    const updatedProperties = selectedProperties.filter((_, i) => i !== index);
    setSelectedProperties(updatedProperties);
  };
  const isLoginPage = location.pathname === '/login';
  const isRegisterPage = location.pathname === '/';
  const isForgetPage = location.pathname === '/forget';
  const isResetPassword = location.pathname === '/resetpassword';
  const isVerifyemail = location.pathname === '/verifyemail';
  const isPincode = location.pathname === '/pincode';
  const isIdentitycard = location.pathname === '/identitycard';
  const isWallatconnect = location.pathname === '/wallatconnect';
  const isPhotoupload = location.pathname === '/photoupload';
  const isPropresidency = location.pathname === '/propresidency';
  const isIdcard = location.pathname === '/idcard';
  const isMessagingPage = location.pathname === '/messaging';

  const activeChainId=ChainId.Mumbai
  return (
    <ThirdwebProvider activeChainId={activeChainId}>
    <div className="App">
      {!isLoginPage && !isRegisterPage && !isForgetPage && !isResetPassword && !isVerifyemail && !isPincode && !isIdentitycard && !isWallatconnect && !isPhotoupload && !isPropresidency && !isIdcard && !isMessagingPage && <Navbar />}
      {!isLoginPage && !isRegisterPage && !isForgetPage && !isResetPassword && !isVerifyemail && !isPincode && !isIdentitycard && !isWallatconnect && !isPhotoupload && !isPropresidency && !isIdcard &&  <Leftsidebar/>}
      {!isLoginPage && !isRegisterPage && !isForgetPage && !isResetPassword && !isVerifyemail && !isPincode && !isIdentitycard && !isWallatconnect && !isPhotoupload && !isPropresidency && !isIdcard && <Rightsidebar />}
     
      <ToastContainer />
      <Routes>
      <Route path='/' element={ <Signup/>}/>
      <Route path='/login' element={ <Signin/>}/>
        <Route path='/home' element={ <Home/>}/>
        <Route path='/property_list' element={ <Property_list />}/>
        <Route path='/marketplace' element={ <Marketplace addPropertyToComparison={addPropertyToComparison}/>}/>
        <Route path='/secondary_market' element={ <Secondary_market/>}/>
        <Route path='/add_property' element={ <Add_proparty/>}/>
        <Route path='/property_details' element={ <Property_details/>}/>
        <Route path='/all_agents' element={ <All_agents/>}/>
        <Route path='/add_agent' element={ <Add_agent/>}/>
        <Route path='/agent_profile' element={ <Agent_profile/>}/>
        <Route path='/agent_invoice' element={ <Agent_invoice/>}/>
        <Route path='/messaging' element={ <Messaging/>}/>
        <Route path='/apartment' element={ <Apartment/>}/>
        <Route path='/office' element={ <Office/>}/>
        <Route path='/sales' element={ <Sales/>}/>
        <Route path='/villa' element={ <Villa/>}/>
        <Route path='/forget' element={ <Forget/>}/>
        <Route path='/resetpassword' element={ <Resetpassword/>}/>
        <Route path='/verifyemail' element={ <Verifyemail/>}/>
        <Route path='/pincode' element={ <Pincode/>}/>
        <Route path='/identitycard' element={ <Identitycard/>}/>
        <Route path='/wallatconnect' element={ <Wallatconnect/>}/>
        <Route path='/photoupload' element={ <Photoupload/>}/>
        <Route path='/propresidency' element={ <Propresidency/>}/>
        <Route path='/idcard' element={ <Idcard/>}/>
        <Route path='/userdashboard' element={ <Userdashboard/>}/>
        <Route path='/comparison' element={ <Comparison selectedProperties={selectedProperties} removePropertyFromComparison={removePropertyFromComparison}/>}/>
        <Route path='/Profile' element={ <Profile/>}/>
      </Routes>

    </div>
    </ThirdwebProvider>
  );
}

export default App;