import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
function Secondary_market() {
  const [threebhk,setThreebhk] = useState([]);
  const [loading, setLoading] = useState(true);


  const icons = [
    { icon: 'zmdi zmdi-view-dashboard  mr-2', title: 'Square Feet' },
    { icon: 'zmdi zmdi-hotel  mr-2', title: 'Bedroom' },
    { icon: 'zmdi zmdi-car-taxi  mr-2', title: 'Parking space' },
    { icon: 'zmdi zmdi-home  mr-2', title: 'Garages' }
  ];

  useEffect(()=>{
    axios.get('http://localhost:4000/3bhk')
    .then((res)=>{
      setThreebhk(res.data);
      setLoading(false);
    }).catch((err)=>{
      console.log(err)
      setLoading(false)
    })
  })
  return (
    <div>
        
        {/* Main Content */}
<section className="content">
  <div className="block-header">
    <div className="row">
      <div className="col-lg-5 col-md-5 col-sm-12">
        <h2>Property view
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
    <div className="row clearfix">
      <div className="col-lg-12">
        <div className="card action_bar">
          <div className="body">
            <div className="row clearfix">
              <div className="col-lg-1 col-md-1 col-3">
                <div className="checkbox inlineblock delete_all mb-0">
                  <input id="deleteall" type="checkbox" />
                  <label htmlFor="deleteall">All</label>
                </div>                                
              </div>
              <div className="col-lg-5 col-md-5 col-9">
                <div className="input-group search mb-0">
                  <input type="text" className="form-control" placeholder="Search..." />
                  <span className="input-group-addon">
                    <i className="zmdi zmdi-search" />
                  </span>
                </div>
              </div>                                                        
            </div>
          </div>
        </div>
      </div>
      {threebhk.map((ele,index)=>(
   <div className="col-lg-3 col-md-6" key={ele._id}>
   <div className="card">
     <div className="body">
       <img className="img-thumbnail img-fluid"  src={`http://localhost:4000/uploads/${ele.image}`} alt="img" />
       <h6 className="text-success mt-3">{ele.pricerange}</h6>
       <h5 className="mt-0"><NavLink to="#" className="col-blue-grey">{ ele.title}</NavLink></h5>
       <p className="text-muted">{ele.description}</p>
       <small className="text-muted"><i className="zmdi zmdi-pin mr-2" />{ele.location}</small>
       <div className="d-flex justify-content-between mt-3 p-3 bg-light">
       {ele.bottomitem[0].split(',').map((item, idx) => (
            <NavLink key={idx} to="#" title={`Item ${idx + 1}`}>
              <i className={icons[idx].icon} />
              <span>{item}</span>
            </NavLink>
          ))}
       </div>
     </div>
   </div>
 </div>
     ))}
   

    </div>
  </div>
</section>

    </div>
  )
}

export default Secondary_market;