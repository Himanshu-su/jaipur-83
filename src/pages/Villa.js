import React from 'react'

import { NavLink } from 'react-router-dom'
function Villa() {
  return (
    <div>
        
        {/* Main Content */}
<section className="content">
  <div className="block-header">
    <div className="row">
      <div className="col-lg-5 col-md-5 col-sm-12">
        <h2>Villa
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
          <li className="breadcrumb-item active">Villa</li>
        </ul>
      </div>
    </div>
  </div>
  <div className="container-fluid">
    <div className="row clearfix">            
      <div className="col-xl-3 col-lg-4 col-md-6">
        <div className="card card_type">
          <div className="img_area">
            <div className="label l-blush">For Sale</div>
            <div className="area_price">$352,000 <span>$1200/Sqft</span></div>
            <div className="starmark"><i className="zmdi zmdi-star-outline" /></div>
            <img className="img-fluid" src="../assets/images/image-gallery/4.jpg" alt="img" />
          </div>
          <div className="body">                        
            <h5 className="mt-0"><NavLink href="#" className="col-blue-grey">Nirala Appartment</NavLink></h5>
            <small className="text-muted"><i className="zmdi zmdi-pin mr-2" />245 E 20th St, New York, NY 201609</small>
            <div className="d-flex justify-content-between mt-3 p-3 bg-light">
              <NavLink href="#" title="Square Feet"><i className="zmdi zmdi-view-dashboard mr-2" /><span>280</span></NavLink>
              <NavLink href="#" title="Bedroom"><i className="zmdi zmdi-hotel mr-2" /><span>4</span></NavLink>
              <NavLink href="#" title="Parking space"><i className="zmdi zmdi-car-taxi mr-2" /><span>2</span></NavLink>
              <NavLink href="#" title="Garages"><i className="zmdi zmdi-home mr-2" /><span> 24H</span></NavLink>
            </div>
            <div className="mt-3 d-flex justify-content-between">
              <div><i className="zmdi zmdi-account mr-2" />Jeson</div>
              <div><i className="zmdi zmdi-calendar mr-2" />6 Months Ago</div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-4 col-md-6">
        <div className="card card_type">
          <div className="img_area">
            <div className="label l-green">For Rent</div>
            <div className="area_price">$352,000 <span>$1200/Sqft</span></div>
            <div className="starmark"><i className="zmdi zmdi-star-outline" /></div>
            <img className="img-fluid" src="../assets/images/image-gallery/5.jpg" alt="img" />
          </div>
          <div className="body">                        
            <h5 className="mt-0"><NavLink href="#" className="col-blue-grey">Relaxing Apartment</NavLink></h5>
            <small className="text-muted"><i className="zmdi zmdi-pin mr-2" />Avenue South Burlington, Los Angles</small>
            <div className="d-flex justify-content-between mt-3 p-3 bg-light">
              <NavLink href="#" title="Square Feet"><i className="zmdi zmdi-view-dashboard mr-2" /><span>280</span></NavLink>
              <NavLink href="#" title="Bedroom"><i className="zmdi zmdi-hotel mr-2" /><span>4</span></NavLink>
              <NavLink href="#" title="Parking space"><i className="zmdi zmdi-car-taxi mr-2" /><span>2</span></NavLink>
              <NavLink href="#" title="Garages"><i className="zmdi zmdi-home mr-2" /><span> 24H</span></NavLink>
            </div>
            <div className="mt-3 d-flex justify-content-between">
              <div><i className="zmdi zmdi-account mr-2" />Jeson</div>
              <div><i className="zmdi zmdi-calendar mr-2" />6 Months Ago</div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-4 col-md-6">
        <div className="card card_type">
          <div className="img_area">
            <div className="label l-blush">For Sale</div>
            <div className="area_price">$352,000 <span>$1200/Sqft</span></div>
            <div className="starmark"><i className="zmdi zmdi-star-outline" /></div>
            <img className="img-fluid" src="../assets/images/image-gallery/4.jpg" alt="img" />
          </div>
          <div className="body">                        
            <h5 className="mt-0"><NavLink href="#" className="col-blue-grey">Nirala Appartment</NavLink></h5>
            <small className="text-muted"><i className="zmdi zmdi-pin mr-2" />245 E 20th St, New York, NY 201609</small>
            <div className="d-flex justify-content-between mt-3 p-3 bg-light">
              <NavLink href="#" title="Square Feet"><i className="zmdi zmdi-view-dashboard mr-2" /><span>280</span></NavLink>
              <NavLink href="#" title="Bedroom"><i className="zmdi zmdi-hotel mr-2" /><span>4</span></NavLink>
              <NavLink href="#" title="Parking space"><i className="zmdi zmdi-car-taxi mr-2" /><span>2</span></NavLink>
              <NavLink href="#" title="Garages"><i className="zmdi zmdi-home mr-2" /><span> 24H</span></NavLink>
            </div>
            <div className="mt-3 d-flex justify-content-between">
              <div><i className="zmdi zmdi-account mr-2" />Jeson</div>
              <div><i className="zmdi zmdi-calendar mr-2" />6 Months Ago</div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-4 col-md-6">
        <div className="card card_type">
          <div className="img_area">
            <div className="label l-blush">For Sale</div>
            <div className="area_price">$352,000 <span>$1200/Sqft</span></div>
            <div className="starmark"><i className="zmdi zmdi-star-outline" /></div>
            <img className="img-fluid" src="../assets/images/image-gallery/1.jpg" alt="img" />
          </div>
          <div className="body">                        
            <h5 className="mt-0"><NavLink href="#" className="col-blue-grey">Nirala Appartment</NavLink></h5>
            <small className="text-muted"><i className="zmdi zmdi-pin mr-2" />245 E 20th St, New York, NY 201609</small>
            <div className="d-flex justify-content-between mt-3 p-3 bg-light">
              <NavLink href="#" title="Square Feet"><i className="zmdi zmdi-view-dashboard mr-2" /><span>280</span></NavLink>
              <NavLink href="#" title="Bedroom"><i className="zmdi zmdi-hotel mr-2" /><span>4</span></NavLink>
              <NavLink href="#" title="Parking space"><i className="zmdi zmdi-car-taxi mr-2" /><span>2</span></NavLink>
              <NavLink href="#" title="Garages"><i className="zmdi zmdi-home mr-2" /><span> 24H</span></NavLink>
            </div>
            <div className="mt-3 d-flex justify-content-between">
              <div><i className="zmdi zmdi-account mr-2" />Jeson</div>
              <div><i className="zmdi zmdi-calendar mr-2" />6 Months Ago</div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-4 col-md-6">
        <div className="card card_type">
          <div className="img_area">
            <div className="label l-green">For Rent</div>
            <div className="area_price">$352,000 <span>$1200/Sqft</span></div>
            <div className="starmark"><i className="zmdi zmdi-star-outline" /></div>
            <img className="img-fluid" src="../assets/images/image-gallery/2.jpg" alt="img" />
          </div>
          <div className="body">                        
            <h5 className="mt-0"><NavLink href="#" className="col-blue-grey">Modern Family Home</NavLink></h5>
            <small className="text-muted"><i className="zmdi zmdi-pin mr-2" />Avenue South Burlington, Los Angles</small>
            <div className="d-flex justify-content-between mt-3 p-3 bg-light">
              <NavLink href="#" title="Square Feet"><i className="zmdi zmdi-view-dashboard mr-2" /><span>280</span></NavLink>
              <NavLink href="#" title="Bedroom"><i className="zmdi zmdi-hotel mr-2" /><span>4</span></NavLink>
              <NavLink href="#" title="Parking space"><i className="zmdi zmdi-car-taxi mr-2" /><span>2</span></NavLink>
              <NavLink href="#" title="Garages"><i className="zmdi zmdi-home mr-2" /><span> 24H</span></NavLink>
            </div>
            <div className="mt-3 d-flex justify-content-between">
              <div><i className="zmdi zmdi-account mr-2" />Jeson</div>
              <div><i className="zmdi zmdi-calendar mr-2" />6 Months Ago</div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-4 col-md-6">
        <div className="card card_type">
          <div className="img_area">
            <div className="label l-green">For Rent</div>
            <div className="area_price">$352,000 <span>$1200/Sqft</span></div>
            <div className="starmark"><i className="zmdi zmdi-star-outline" /></div>
            <img className="img-fluid" src="../assets/images/image-gallery/3.jpg" alt="img" />
          </div>
          <div className="body">                        
            <h5 className="mt-0"><NavLink href="#" className="col-blue-grey">Office Floor</NavLink></h5>
            <small className="text-muted"><i className="zmdi zmdi-pin mr-2" />245 E 20th St, New York, NY 201609</small>
            <div className="d-flex justify-content-between mt-3 p-3 bg-light">
              <NavLink href="#" title="Square Feet"><i className="zmdi zmdi-view-dashboard mr-2" /><span>280</span></NavLink>
              <NavLink href="#" title="Bedroom"><i className="zmdi zmdi-hotel mr-2" /><span>4</span></NavLink>
              <NavLink href="#" title="Parking space"><i className="zmdi zmdi-car-taxi mr-2" /><span>2</span></NavLink>
              <NavLink href="#" title="Garages"><i className="zmdi zmdi-home mr-2" /><span> 24H</span></NavLink>
            </div>
            <div className="mt-3 d-flex justify-content-between">
              <div><i className="zmdi zmdi-account mr-2" />Jeson</div>
              <div><i className="zmdi zmdi-calendar mr-2" />6 Months Ago</div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-4 col-md-6">
        <div className="card card_type">
          <div className="img_area">
            <div className="label l-green">For Rent</div>
            <div className="area_price">$352,000 <span>$1200/Sqft</span></div>
            <div className="starmark"><i className="zmdi zmdi-star-outline" /></div>
            <img className="img-fluid" src="../assets/images/image-gallery/6.jpg" alt="img" />
          </div>
          <div className="body">                        
            <h5 className="mt-0"><NavLink href="#" className="col-blue-grey">Apolo Family Appartment</NavLink></h5>
            <small className="text-muted"><i className="zmdi zmdi-pin mr-2" />245 E 20th St, New York, NY 201609</small>
            <div className="d-flex justify-content-between mt-3 p-3 bg-light">
              <NavLink href="#" title="Square Feet"><i className="zmdi zmdi-view-dashboard mr-2" /><span>280</span></NavLink>
              <NavLink href="#" title="Bedroom"><i className="zmdi zmdi-hotel mr-2" /><span>4</span></NavLink>
              <NavLink href="#" title="Parking space"><i className="zmdi zmdi-car-taxi mr-2" /><span>2</span></NavLink>
              <NavLink href="#" title="Garages"><i className="zmdi zmdi-home mr-2" /><span> 24H</span></NavLink>
            </div>
            <div className="mt-3 d-flex justify-content-between">
              <div><i className="zmdi zmdi-account mr-2" />Jeson</div>
              <div><i className="zmdi zmdi-calendar mr-2" />6 Months Ago</div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-4 col-md-6">
        <div className="card card_type">
          <div className="img_area">
            <div className="label l-green">For Rent</div>
            <div className="area_price">$352,000 <span>$1200/Sqft</span></div>
            <div className="starmark"><i className="zmdi zmdi-star-outline" /></div>
            <img className="img-fluid" src="../assets/images/image-gallery/5.jpg" alt="img" />
          </div>
          <div className="body">                        
            <h5 className="mt-0"><NavLink href="#" className="col-blue-grey">Relaxing Apartment</NavLink></h5>
            <small className="text-muted"><i className="zmdi zmdi-pin mr-2" />Avenue South Burlington, Los Angles</small>
            <div className="d-flex justify-content-between mt-3 p-3 bg-light">
              <NavLink href="#" title="Square Feet"><i className="zmdi zmdi-view-dashboard mr-2" /><span>280</span></NavLink>
              <NavLink href="#" title="Bedroom"><i className="zmdi zmdi-hotel mr-2" /><span>4</span></NavLink>
              <NavLink href="#" title="Parking space"><i className="zmdi zmdi-car-taxi mr-2" /><span>2</span></NavLink>
              <NavLink href="#" title="Garages"><i className="zmdi zmdi-home mr-2" /><span> 24H</span></NavLink>
            </div>
            <div className="mt-3 d-flex justify-content-between">
              <div><i className="zmdi zmdi-account mr-2" />Jeson</div>
              <div><i className="zmdi zmdi-calendar mr-2" />6 Months Ago</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Villa