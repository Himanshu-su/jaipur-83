import React from 'react'
import { NavLink } from 'react-router-dom'
function Property_details() {
  return (
    <div>
        
        {/* Main Content */}
<section className="content pb-5">
  <div className="block-header">
    <div className="row">
      <div className="col-lg-5 col-md-5 col-sm-12">
        <h2>Property Detail
          <small>Welcome to Meta Estate Empire</small>
        </h2>
      </div>            
      <div className="col-lg-7 col-md-7 col-sm-12 text-md-right">
        <div className="inlineblock text-center m-r-15 m-l-15 hidden-md-down">
          <div className="sparkline" data-type="bar" data-width="97%" data-height="25px" data-bar-width={2} data-bar-spacing={5} data-bar-color="#fff">3,2,6,5,9,8,7,9,5,1,3,5,7,4,6</div>
          <small className="col-white">Visitors</small>
        </div>
        <div className="inlineblock text-center m-r-15 m-l-15 hidden-md-down">
          <div className="sparkline" data-type="bar" data-width="97%" data-height="25px" data-bar-width={2} data-bar-spacing={5} data-bar-color="#fff">1,3,5,7,4,6,3,2,6,5,9,8,7,9,5</div>
          <small className="col-white">Bounce Rate</small>
        </div>
        <button className="btn btn-white btn-icon btn-round hidden-sm-down float-right ml-3" type="button">
          <i className="zmdi zmdi-plus" />
        </button>
        <ul className="breadcrumb float-md-right">
        <li className="breadcrumb-item"><a href="/home"><i className="zmdi zmdi-home" /> Meta</a></li>
          <li className="breadcrumb-item active">Property</li>
        </ul>
      </div>
    </div>
  </div>
  <div className="container-fluid">
    <div className="row clearfix d_row">
      <div className="col-lg-8 col-md-12">
        <div className="card">
          <div className="body">
            
            <div className='d-flex justify-content-between'>
                        <h3 className="mt-0 mb-2">test</h3>
                        <h3 className="mt-0 mb-2">Property Price</h3>
                        </div>
                        <div className='d-flex justify-content-between'>
                        <h6 className="text-primary"><i className="zmdi zmdi-pin mr-2" />marina dor , ES</h6>
                        <h6 className="text-primary  d-flex">$120.000 <span className='  text-dark 'style={{width:'16px',height:'16px',display:'flex',alignItems:'center',justifyContent:'center',borderRadius:'50px',marginLeft:'8px'}}><i className='zmdi zmdi-info-outline'></i></span></h6>
                        </div>
                        <div class="position-relative overflow-hidden" >
                                        <a href=""><img className="img-fluid img-thumbnail" src='../assets/images/image-gallery/1.jpg' alt="img"/></a>
                                        <div className="bg-primary rounded text-white  m-4 py-1 px-3" style={{position:'absolute',left:'0',top:'0'}}>Closed</div>
                                        <div className="bg-primary rounded text-white  m-4 py-1 px-3" style={{position:'absolute',right:'0',bottom:'0'}}>Vacant</div>
                                        {/* <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Appartment</div> */}
                                        <div className="d-flex justify-content-between mt-3 p-3 bg-light" style={{position:'absolute',left:'0',bottom:'0',width:'60%'}}>
                        <a href="#" title="Square Feet"><i className="zmdi zmdi-view-dashboard mr-2" /><span>12000</span></a>
                        <a href="#" title="Bedroom"><i className="zmdi zmdi-hotel mr-2" /><span>2</span></a>
                        <a href="#" title="Parking space"><i className="zmdi zmdi-car-taxi mr-2" /><span>3</span></a>
                      
                      </div>
                                    </div>
                                    <div className='d-flex justify-content-around my-3'>
                        <div className='text-center'>
                          <h6 className='mb-2'>Token Price</h6>
                          <p>$50 <strong className='text-primary'>$50</strong></p>
                        </div>
                        <div className='text-center'>
                          <h6 className='mb-2'>Dividend Yield</h6>
                          <p className='text-primary text-bold'> <strong className='text-primary'>%6+(0.50%)</strong></p>
                        </div>
                        <div className='text-center'>
                          <h6 className='mb-2'>Dividend Frequency</h6>
                          <p> <strong className='text-primary'>Weekly</strong></p>
                        </div>
                      </div>
            {/* <h6 className="text-success mt-3">$390,000 - $430,000</h6> */}
            {/* <h5 className="mt-0"><NavLink to="#" className="col-blue-grey">4BHK Alexander Court,New York</NavLink></h5> */}

            <span className='premium' >Premium</span>
            <h3 className='mb-2'>Description</h3>
            <p className="text-muted">Introducing the stunning "Sunset View Apartments" - a luxurious residential complex nestled in the heart of a vibrant city. These contemporary apartments offer a harmonious blend of comfort, style,
             and convenience, making them the ideal choice for modern urban living. </p>
         
          
          </div>
        </div>
     
      
      </div>
      <div className="col-lg-4 col-md-12 d_card" >
        <div className="card">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d72819.29427079171!2d10.182343971294257!3d55.225188075524926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464cd79c0682f831%3A0x4c766576d155714b!2s5672%20Broby%2C%20Denmark!5e0!3m2!1sen!2sin!4v1711972209850!5m2!1sen!2sin" width={400} height={350} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      <div className=''>
      <button type="submit" className="btn btn-primary w-100" style={{borderRadius:'12px'}}>
      Buy Now
                </button>
      </div>
        </div>
        <div className="card"  style={{
                  borderWidth: "4px",
                  borderStyle: "dotted",
                  borderColor: "#A77810",
                  borderRadius:'16px',
                  backgroundColor:'#C8C8C8'
                }}>
                 
         
          <div className="body ">
            <div className='d-flex justify-content-between mb-4'>
            <div >
                    <h6 className='text-bold'>Property Price</h6>
                    <small className='text-primary'>$340,000 <sub>USDT</sub></small>
                  </div>

                  <div>
                <div className='d-flex mb-2' >
                  <h6 className='text-bold m-r-5'>IRR</h6>
                  <span className='  text-dark m-r-5'style={{width:'16px',height:'16px',display:'flex',alignItems:'center',justifyContent:'center',borderRadius:'50px',marginLeft:'8px'}}><i className='zmdi zmdi-info-outline'></i></span>
                    <small className='text-primary m-r-5'>28 %</small>
                  </div>
                  <div className='d-flex' >
                  <h6 className='text-bold m-r-5'>IRR</h6>
                  <span className='  text-dark m-r-5'style={{width:'16px',height:'16px',display:'flex',alignItems:'center',justifyContent:'center',borderRadius:'50px',marginLeft:'8px'}}><i className='zmdi zmdi-info-outline'></i></span>
                    <small className='text-primary m-r-5'>28 %</small>
                  </div>
                 
         
                </div>

             
            </div>
        
            <div>
                    <div className='d-flex justify-content-between p-2'>
                      <h6 className='text-dark'>Buy Amount</h6>
                      <h6 className='text-dark'>Your Balance: 0 USDT</h6>
                    </div>
                    <div className='btn-primary d-flex justify-content-between p-2 mb-4' style={{borderRadius:'16px'}}>
                    <h6 className='text-white'>Enter Asset Token Amount</h6>
                      <h6 className='text-white'>Max</h6>
                    </div>
                  </div>
                  <div className=''>
      <button type="submit" className="btn btn-primary w-100 fs-14" style={{borderRadius:'12px'}}>
      Buy Now
                </button>
      </div>
    
          
            {/* <div className="form-group">
              <textarea rows={4} className="form-control no-resize" placeholder="Please type what you want..." defaultValue={""} />
            </div>
            <button type="submit" className="btn btn-primary btn-round">Submit</button>
            <button type="submit" className="btn btn-default btn-round btn-simple">Cancel</button> */}
          </div>
        </div>
   
      </div>
    </div>
    <h2 className='text-center text-dark mt-5'>Overview</h2>
<div className='row d_row'>
<div className='col-lg-7'>
  <h5 className='mb-3 text-dark'>About the Property</h5>
  <p className='text-dark'>Here you will find all available information regarding the specific property. For example, this might entail where 
the property is located, what makes it unique, and why 
it could interest you. Furthermore, meta  provides insights about market conditions and why our team believes 
that the property value will increase in the long term. 
We evaluate crucial aspects of the property, including
 the area, surrounding development, service charges, building quality, number of amenities, developer, and expected supply.</p>
</div>
<div className='col-lg-5 p-lg-5 p-3'>
  <div className='d-flex justify-content-between mb-4'>
    <div className='d-flex align-items-center'>
      <img src='../assets/images/vector.png'/>
      <h6 className='text-dark mb-0'>Garden view</h6>
    </div>
    <div className='d-flex align-items-center mb-4'>
      <img src='../assets/images/vector.png'/>
      <h6 className='text-dark mb-0'>Garden view</h6>
    </div>
  </div>

  <div className='d-flex justify-content-between mb-4'>
    <div className='d-flex align-items-center'>
      <img src='../assets/images/vector.png'/>
      <h6 className='text-dark mb-0'>Garden view</h6>
    </div>
    <div className='d-flex align-items-center '>
      <img src='../assets/images/vector.png'/>
      <h6 className='text-dark mb-0'>Garden view</h6>
    </div>
  </div>

  <div className='d-flex justify-content-between mb-4'>
    <div className='d-flex align-items-center'>
      <img src='../assets/images/vector.png'/>
      <h6 className='text-dark mb-0'>Garden view</h6>
    </div>
    <div className='d-flex align-items-center '>
      <img src='../assets/images/vector.png'/>
      <h6 className='text-dark mb-0'>Garden view</h6>
    </div>
  </div>

  <div className='d-flex justify-content-between mb-4'>
    <div className='d-flex align-items-center'>
      <img src='../assets/images/vector.png'/>
      <h6 className='text-dark mb-0'>Garden view</h6>
    </div>
    <div className='d-flex align-items-center'>
      <img src='../assets/images/vector.png'/>
      <h6 className='text-dark mb-0'>Garden view</h6>
    </div>
  </div>

  <div className='d-flex justify-content-between mb-4'>
    <div className='d-flex align-items-center'>
      <img src='../assets/images/vector.png'/>
      <h6 className='text-dark mb-0'>Garden view</h6>
    </div>
    <div className='d-flex align-items-center'>
      <img src='../assets/images/vector.png'/>
      <h6 className='text-dark mb-0'>Garden view</h6>
    </div>
  </div>
</div>
</div>
<h2 className='text-center text-dark my-5'>Financial Details</h2>
<div className='row d_row pb-4'>

  <div className='col-lg-6'>
<img src='../assets/images/fin_1.png' className='img-fluid'/>
  </div>
  <div className='col-lg-6'>
  <img src='../assets/images/fin_2.png' className='img-fluid'/>
  </div>
</div>

<h2 className='text-center text-dark mb-2 mt-5'>Documents</h2>
<p className='text-dark mb-5 text-center'>Confidential Property Document</p>

<div className='row mb-5 d_row'>
  <div className='col-lg-3'>
  <div className='btn-primary text-center p-3 ' style={{borderRadius:'16px'}}>
                    <h6 className='text-white mb-2'>Download</h6>
                      <h6 className='text-white'>Independent Area Report</h6>
                    </div>
  </div>
  <div className='col-lg-3'>
  <div className='btn-primary text-center p-3 ' style={{borderRadius:'16px'}}>
                    <h6 className='text-white mb-2'>Download</h6>
                      <h6 className='text-white'>Independent Area Report</h6>
                    </div>
  </div>
  <div className='col-lg-3'>
  <div className='btn-primary text-center p-3 ' style={{borderRadius:'16px'}}>
                    <h6 className='text-white mb-2'>Download</h6>
                      <h6 className='text-white'>Independent Area Report</h6>
                    </div>
  </div>
  <div className='col-lg-3'>
  <div className='btn-primary text-center p-3 ' style={{borderRadius:'16px'}}>
                    <h6 className='text-white mb-2'>Download</h6>
                      <h6 className='text-white'>Independent Area Report</h6>
                    </div>
  </div>
</div>
<h2 className='text-center text-dark mb-2 mt-5'>Developer & Property Manager</h2>
  </div>
  <div className='row'></div>
</section>

    </div>
  )
}

export default Property_details