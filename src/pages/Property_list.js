import React from 'react';
import  { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';


function Property_list() {
  const [prop, setProp] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
  // Function to fetch property data from the API
  
    
       axios.get('http://103.69.196.162:20')
       .then((res)=>{
        setProp(res.data);
        setLoading(false)
       }) .catch((err)=>{
        console.log(err)
        setLoading(false)
       })
      
     
    
  },[]);







  return (
    <div>
        
        <section className="content">
  <div className="block-header">
    <div className="row">
      <div className="col-lg-5 col-md-5 col-sm-12">
        <h2>Property List
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
        <div className="card">                   
          <div className="body">
            <div className="table-responsive">
              <table className="table td_2 table-striped table-hover js-basic-example dataTable">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Property</th>
                    <th>price</th>
                    <th>location</th>
                    <th>type</th>
                    <th>status</th>
                    <th>bedrooms</th>
                    <th>toilets</th>
                    <th>area</th>
                    <th>description</th>
                    <th>about</th>
                    <th>amenities</th>
                    <th>areaReport</th>
                    <th>projectionReport</th>
                    <th>memorandum</th>
                    <th>propertyReport</th>

                
                    
                  </tr>
                </thead>
            
                

<tbody>
{prop.map((ele, index) => (
  <tr key={ele._id}>
    <td>{index + 1}</td>
    <td>{ele.name}</td>
    <td>{ele.price}</td>
    <td>{ele.location}</td>
    <td>{ele.type}</td>
    <td>{ele.status}</td>
    <td>{ele.bedrooms}</td>
    <td>{ele.toilets}</td>
    <td>{ele.area}</td>
    <td>{ele.description}</td>
    <td>{ele.about}</td>
    <td>{ele.amenities}</td>
    <td>{ele.areaReport ? ele.areaReport : "File Not Available"}</td>
    <td>{ele.projectionReport ? ele.projectionReport : "File Not Available"}</td>
    <td>{ele.memorandum ? ele.memorandum : "File Not Available"}</td>
    <td>{ele.propertyReport ? ele.propertyReport : "File Not Available"}</td>
  </tr>
))}
</tbody>
      
                
              </table>
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

export default Property_list