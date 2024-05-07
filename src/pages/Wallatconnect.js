import React from "react";
import {
  ThirdwebProvider,
  ConnectWallet,
  ConnectEmbed,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  trustWallet,
  rainbowWallet,
  lightTheme,
} from "@thirdweb-dev/react";
function Wallatconnect() {
  return (
    <div className="page-header position-relative">
      <div className="background-div"></div>
      <div className="container   ">
        <div className="row h-100 ">
          <div className="col-md-7 content-center bg-white">
            <div className="logo-container " style={{ textAlign: "left" }}>
              <img src="../assets/images/logo.svg" alt="" />
            </div>

            <div className="center_div ">
              <div className="row">
                <div className="col-md-6 m-auto">
                  <div className="card-plain">
                    <h3 className="text-center text-dark">
                      Sign In To Meta Estate Empire{" "}
                    </h3>
                    <div className="m-auto mb-5">
                      <img
                        className="img-fluid"
                        src="../assets/images/google.png"
                      />
                    </div>
                    <p className="text-center text-dark my-5">or</p>
                    <form className="form">
                      <div
                        className="content p-lg-4 p-2"
                        style={{
                          borderWidth: "3px",
                          borderStyle: "dotted",
                          borderColor: "#A77810",
                        }}
                      >
                        <h6 className="text-dark my-lg-5">
                          You’ll need a wallet to continue
                        </h6>
                        <div className="py-3">
                          <img
                            src="../assets/images/Frame.svg"
                            className="img-fluid"
                          />
                        </div>

                        <div className="footer text-center my-lg-3">
                          {/* <button type="submit" className="btn btn-primary  btn-lg btn-block waves-effect waves-light mb-3" style={{backgroundColor:'#A77810',borderRadius:'16px'}}>Get started</button> */}
                          <ThirdwebProvider
                            activeChain="sepolia"
                            clientId="4fae5cc9e29916ac9ce8d155627c1428"
                            supportedWallets={[
                              metamaskWallet(),
                              coinbaseWallet(),
                              walletConnect(),
                              trustWallet(),
                              rainbowWallet(),
                            ]}
                          >
                            <ConnectWallet
                              theme={lightTheme({
                                colors: {
                                  borderColor: "#A77810",
                                  accentText: "#A77810",
                                  accentButtonBg: "#A77810",
                                  primaryButtonBg: "#A77810",
                                },
                              })}
                              btnTitle={"Get Started"}
                              modalTitle={"Choose your preferred wallet"}
                              modalSize={"compact"}
                              modalTitleIconUrl={""}
                              showThirdwebBranding={false}
                            />
                          </ThirdwebProvider>
                        </div>
                        <small className="text-dark">
                          Already have a wallet? View options
                        </small>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5 position-relative    d-flex align-items-center">
            <div className="secat_img">
              <img className="img-fluid" src="../assets/images/s_img.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wallatconnect;
