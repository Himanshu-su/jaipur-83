import React, { useEffect, useState } from 'react'

function Idcard() {
  const [barcodeRead, setBarcodeRead] = useState("");

  const barcode = {
    timing: 1000,
    data: "",
  };

  const barcodeReaded = () => {
    if (barcode.data.length > 1) {
      setBarcodeRead(barcode.data);
    } else {
      barcode.data = "";
    }
  };

  let timeout = setTimeout(barcodeReaded, 500);

  useEffect(() => {
    window.addEventListener("keypress", (e) => {
      console.log(e.key);
      console.log(e.timeStamp);
      if (barcode.data.length === 0 || e.timeStamp - barcode.timing < 200) {
        barcode.data += e.key;
        barcode.timing = e.timeStamp;
        clearTimeout(timeout);
        timeout = setTimeout(barcodeReaded, 500);
      } else {
        barcode.data = "";
      }
      console.log(barcode);
    });
  }, []);
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
                  <h3 className='text-center text-dark'>Proof Of Residency</h3>
                  <div className='m-auto mb-5'>
                    <img src='../assets/images/ID.png' className='img-fluid'/>
                
                  </div>
              
                  <div className="footer text-center">
                    {/* <h3 className='text-dark'>Readed: {barcodeRead}</h3> */}
                 
                    <a href='/login'><button type="button" className="btn btn-primary btn-lg btn-block waves-effect waves-light mb-3" style={{ backgroundColor: '#919296', borderRadius: '16px' }} >Next</button></a>
                  </div>
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
  )
}

export default Idcard