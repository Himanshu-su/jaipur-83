import React from 'react'

function Identitycard() {
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
              <h3 className='text-center text-dark mb-5'>Verify Your Identity</h3>
                <div className="card-plain">
                
                  
                  
                    <div className="content text-start ">
                    <ul className="inbox-widget list-unstyled clearfix">
  <li className="inbox-inner active">
    <div className="inbox-item">
       
        <div className="inbox-img"> 
        <img src="../assets/images/photo.svg" className="rounded-circle" alt="" />
         </div>
        <div className="inbox-item-info">
          <h2 className="author ">Your Photo</h2>
          <p className="inbox-message">Look Straight In Your Cam For 30 Seconds </p>
          
        </div>
     
     
     
    </div>
  </li>
  <li className="inbox-inner"> 
 
    <div className="inbox-item">
      
        <div className="inbox-img">
             <img src="../assets/images/Location.svg" className="rounded-circle" alt="" /> 
             </div>
        <div className="inbox-item-info">
          <p className="author">Residency</p>
          <p className="inbox-message">Proof Of Your Residency Via Passport / ID Card</p>
          
        </div>
     
      
    </div>
  </li>
  <li className="inbox-inner"> 
    <div className="inbox-item">
      
        <div className="inbox-img">
             <img src="../assets/images/card.svg" className="rounded-circle" alt="" /> 
             </div>
        <div className="inbox-item-info">
          <p className="author">Scan Card</p>
          <p className="inbox-message">Scan Your Both Sides Of Your Bank Card</p>
          
        </div>
     
    
    
    </div>
  </li>

 
  
</ul>
                    </div>
                    <div className="footer text-center">
                      <a href='/photoupload'>
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg btn-block waves-effect waves-light mb-3"
                        style={{ backgroundColor:'#919296', borderRadius:'16px' }}
                      >
                        Next
                      </button>
                      </a>
                   
                      <p className='text-primary my-3'>OR</p>
                   <a className='' href='/userdashboard'>
                   <button
                        type="submit"
                        className="btn btn-primary btn-md btn-block waves-effect waves-light mb-3"
                        style={{ backgroundColor:'#919296', borderRadius:'16px', width:'20rem' }}
                      >
                       skip for now
                      </button>
                   </a>
                    </div>
               
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
  )
}

export default Identitycard