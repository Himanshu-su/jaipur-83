import React, { useEffect, useState } from "react";
import { ConnectWallet, useSDK } from '@thirdweb-dev/react';
import './Signup.css'

function Userdashboard() {

  const [parsedAddress, setParsedAddress] = useState("");
  const [showConnectWallet, setShowConnectWallet] = useState(false);
  const [signature,setSignature]=useState("N/A")
  const [address,setAddress]=useState("N/A")
  const sdk=useSDK()


  const message='Please sign me!'

  useEffect(() => {
    const storedAddress = localStorage.getItem('walletaddress');
    setParsedAddress(storedAddress);
   
  }, []);
  const handleGetStartedClick = () => {
    setShowConnectWallet(true);
  };

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
    alert("address add ")
    setParsedAddress(addr)
 setAddress(addr);
 localStorage.setItem("walletaddress",addr)
    
  } catch (error) {
    console.error("Error recovering address:", error);
    alert("Error recovering address. Please try again later.");
  }
};
  


  

  return (
    <div>
      <section className="content">
        <div className="container-fluid card pb-3 mt-lg-5 mt-2">
          <div className="row clearfix">
            <div className="col-lg-12  ">
              <div
                className="body mt-lg-5 mt-2"
                style={{
                  borderWidth: "3px",
                  borderStyle: "groove",
                  borderColor: "#A77810",
                  borderRadius:'16px'
                }}
              >
                <h5 className="">Welcome Please complete Your Account.</h5>
                <p>
                  We are on a mission to bring real estate investments to anyone
                  with an internet connection. Powered by innovative technology,
                  our vision is simple - to make real estate investing
                  accessible, digital and global. Thank you for your support,
                  together we are making history!
                </p>
                <button type="submit" className="btn btn-primary btn-round">
                  Start Tour
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="body p-lg-5 p-2 text-center mt-lg-5 mt-2"
                style={{
                  borderWidth: "4px",
                  borderStyle: "dotted",
                  borderColor: "#A77810",
                  borderRadius:'16px',
                  
                }}
              >
               <div className="p-lg-5 p-3" style={{backgroundColor:'#36383C', borderRadius:'12px'}}>
               <h6 className="text-white my-lg-5">
               {parsedAddress?(<p>Your Wallet is Connected</p>):
               (<p>Looks Lke You Need To ConnectAnd Register Your First Wallet </p>)}
          
                </h6>
                <div className="py-3">
                  <img src="../assets/images/Frame.svg" className="img-fluid" />
                </div>

                <div className="footer text-center my-lg-3">
                {parsedAddress ? (
        <button className="btn btn-primary btn-lg btn-block waves-effect waves-light mb-3" style={{ backgroundColor: "#A77810", borderRadius: "16px" }}>
          Address: {parsedAddress}
        </button>
      ) : (
        <>
        {!showConnectWallet && (
              <button
                type="submit"
                className="btn btn-primary btn-lg btn-block waves-effect waves-light mb-3"
                style={{ backgroundColor: "#A77810", borderRadius: "16px" }}
                onClick={handleGetStartedClick}
              >
                Get started
              </button>
            )}
            {showConnectWallet && (
              <>
                <ConnectWallet
                  style={{ color: "white", backgroundColor: "#A77810", borderRadius: "16px" }}
                  className="btn btn-primary btn-lg btn-block waves-effect waves-light mb-3"
                />
                <br />
                <button
                  style={{ width: "150px", backgroundColor: "#A77810", borderRadius: "16px" }}
                  className="btn btn-primary waves-effect waves-light mb-3"
                  onClick={signMessage}
                >
                  Sign Message
                </button>
                <br />
                <button
                  style={{ width: "150px", backgroundColor: "#A77810", borderRadius: "16px" }}
                  className="btn btn-primary waves-effect waves-light mb-3"
                  onClick={recoverAddress}
                >
                  Recover Address
                </button>
              </>
            )}
        </>
      )}
                </div>
                <small className="text-dark">
                  Already have a wallet? View options
                </small>
               </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div
                className="body p-lg-5 p-2 text-center mt-lg-5 mt-2"
                style={{
                  borderWidth: "4px",
                  borderStyle: "dotted",
                  borderColor: "#A77810",
                  borderRadius:'16px'
                }}
              >
                <h3 className="text-center text-dark mb-3">
                  Complete your account.
                </h3>
                <div className="">
                  <div className=" text-start ">
                    <ul className="inbox-widget list-unstyled clearfix">
                      <li
                        className="inbox-inner "
                        style={{
                          borderBottom: "2px solid #A77810",
                          borderRadius: "0px",
                        }}
                      >
                        <div className="inbox-item">
                          <a href="/photoupload">
                            <div className="inbox-img">
                              <img
                                src="../assets/images/Message_alt_duotone.svg"
                                className=""
                                alt=""
                              />
                            </div>
                            <div className="inbox-item-info">
                              <p className="author text-bold ">
                                Confirm your email address
                              </p>
                              <small className="inbox-message">
                                Add basic account security{" "}
                              </small>
                            </div>
                          </a>
                        </div>
                      </li>
                      <li
                        className="inbox-inner"
                        style={{
                          borderBottom: "2px solid #A77810",
                          borderRadius: "0px",
                        }}
                      >
                        <div className="inbox-item">
                          <a href="/propresidency">
                            <div className="inbox-img">
                              <img
                                src="../assets/images/Subtract.svg"
                                className=""
                                alt=""
                              />
                            </div>
                            <div className="inbox-item-info">
                              <p className="author">Verify your identity</p>
                              <p className="inbox-message">
                                Upload your ID before investing in listed
                                properties
                              </p>
                            </div>
                          </a>
                        </div>
                      </li>
                      <li
                        className="inbox-inner"
                        style={{
                          borderBottom: "2px solid #A77810",
                          borderRadius: "0px",
                        }}
                      >
                        <div className="inbox-item">
                          <a href="/idcard">
                            <div className="inbox-img">
                              <img
                                src="../assets/images/Subtractwal.svg"
                                className=""
                                alt=""
                              />
                            </div>
                            <div className="inbox-item-info">
                              <p className="author">
                                Register your first wallet
                              </p>
                              <p className="inbox-message">
                                MetaMask wallet, connect and compatible
                                hardware wall
                              </p>
                            </div>
                          </a>
                        </div>
                      </li>

                      <li
                        className="inbox-inner mb-1"
                        style={{
                          borderBottom: "2px solid #A77810",
                          borderRadius: "0px",
                        }}
                      >
                        <div className="inbox-item">
                          <a href="/idcard">
                            <div className="inbox-img">
                              <img
                                src="../assets/images/Vectorbank.svg"
                                className=""
                                alt=""
                              />
                            </div>
                            <div className="inbox-item-info">
                              <p className="author">Add a bank account</p>
                              <p className="inbox-message">
                                Use a bank account to invest in open offering
                              </p>
                            </div>
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Userdashboard;
