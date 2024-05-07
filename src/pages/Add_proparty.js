import React from 'react'
import  { useState } from 'react';
import axios from 'axios'; 
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';

function Add_proparty() {

  const [formData, setFormData] = useState({
    name: '',
    price: '',
    location: '',
    type: '',
    status: '',
    bedrooms: '',
    toilets: '',
    area: '',
    description: '',
    about: '',
    amenities: '',
    projectionReport: null,
    projectionReport: null,
    memorandum: null,
    propertyReport: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const fieldName = e.target.name;
    const file = e.target.files[0];
    setFormData({ ...formData, [fieldName]: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        data.append(key, value);
      });

      const response = await axios.post('http://103.69.196.162:2000/properties/add', data); // Change URL to match your backend API endpoint
      console.log('Property added successfully:', response.data);
      setFormData({
        name: '',
        price: '',
        location: '',
        type: '',
        status: '',
        bedrooms: '',
        toilets: '',
        area: '',
        description: '',
        about: '',
        amenities: '',
        projectionReport: null,
        projectionReport: null,
        memorandum: null,
        propertyReport: null
      });
     
      toast.success('Property added successfully!', {
        position: 'top-center',
        autoClose: 2000,
        onClose: () => {
        
        }
      });
    } catch (error) {
      console.error('Error adding property:', error.response.data);
    }
  };


  return (
    <div>
     
        {/* Main Content */}
<section className="content">
  <div className="block-header">
    <div className="row">
      <div className="col-lg-5 col-md-5 col-sm-12">
        <h2>Property Add
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
          <div className="header">
            <h2><strong>Basic</strong> Information <small>Description text here...</small> </h2>
            <ul className="header-dropdown m-r--5">
              <li className="dropdown"> <NavLink to="" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i className="zmdi zmdi-more-vert" /></NavLink>
                <ul className="dropdown-menu pull-right">
                  <li><NavLink to="" className=" waves-effect waves-block">Action</NavLink></li>
                  <li><NavLink to="" className=" waves-effect waves-block">Another action</NavLink></li>
                  <li><NavLink to="" className=" waves-effect waves-block">Something else here</NavLink></li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="body">
          <form onSubmit={handleSubmit}>
            <div className="row clearfix">
              <div className="col-sm-3">
                <div className="form-group">
                  <input type="text"  name="name" value={formData.name} onChange={handleChange} className="form-control" placeholder="Property Name" />
                </div>
              </div>
              <div className="col-sm-3">
                <div className="form-group">
                  <input type="text"  name="price" value={formData.price} onChange={handleChange} className="form-control" placeholder="price" />
                </div>
              </div>
              <div className="col-sm-3">
                <div className="form-group">
                  <input type="text" name="location" value={formData.location} onChange={handleChange} className="form-control" placeholder="Property Location" />
                </div>
              </div>
              <div className="col-sm-3">
                <div className="form-group">
                  <input type="text"  name="type" value={formData.type} onChange={handleChange} className="form-control" placeholder="Property type" />
                </div>
              </div>
              <div className="col-sm-3">
                <div className="form-group">
                  <input type="text"  name="status" value={formData.status} onChange={handleChange} className="form-control" placeholder="status" />
                </div>
              </div>
              <div className="col-sm-3">
                <div className="form-group">
                  <input type="text"  name="bedrooms" value={formData.bedrooms} onChange={handleChange} className="form-control" placeholder="bedrooms" />
                </div>
              </div>
              <div className="col-sm-3">
                <div className="form-group">
                  <input type="text"  name="toilets" value={formData.toilets} onChange={handleChange} className="form-control" placeholder="toilets" />
                </div>
              </div>
              <div className="col-sm-3">
                <div className="form-group">
                  <input type="text"  name="area" value={formData.area} onChange={handleChange} className="form-control" placeholder="area" />
                </div>
              </div>

              <div className="col-sm-3">
                <div className="form-group">
                  <input type="text"  name="description" value={formData.description} onChange={handleChange} className="form-control" placeholder="description" />
                </div>
              </div>
              <div className="col-sm-3">
                <div className="form-group">
                  <input type="text"  name="about" value={formData.about} onChange={handleChange} className="form-control" placeholder="about" />
                </div>
              </div>

              <div className="col-sm-3">
                <div className="form-group">
                  <input type="text"  name="amenities" value={formData.amenities} onChange={handleChange} className="form-control" placeholder="amenities" />
                </div>
              </div>
              {/* <div className="col-sm-12">
                <div className="form-group">
                  <div className="form-line">
                    <textarea rows={4} className="form-control no-resize" placeholder="Property Description" defaultValue={""} />
                  </div>
                </div>
              </div> */}
            </div>
            <h6 className="mt-4">Property Information</h6>
            <div className="row clearfix">
            
              <div className="col-sm-3 " >
           
                <div className='dropzone'>
                <div className="dz-message">
                    <div className="drag-icon-cph"> <i className="material-icons">touch_app</i> </div>
                    <h3> areaReportDrop files here or click to upload.</h3>
                     </div>
                  <div className="fallback">
                  <input name="areaReport" type="file" onChange={handleFileChange} />
                  </div>
                </div>
               
              </div>  
              <div className="col-sm-3 " >
              
              <div className='dropzone'>
             <div className="dz-message">
                    <div className="drag-icon-cph"> <i className="material-icons">touch_app</i> </div>
                    <h3> pro_Report Drop files here or click to upload.</h3>
                   </div>
                  <div className="fallback">
                  <input name="projectionReport" type="file" onChange={handleFileChange} />
                  </div>
             </div> 

        
                
              </div> 
              <div className="col-sm-3 " >
          <div className='dropzone'>
            
          <div className="dz-message">
                    <div className="drag-icon-cph"> <i className="material-icons">touch_app</i> </div>
                    <h3> memorandum  Drop files here or click to upload.</h3>
                    </div>
                  <div className="fallback">
                  <input name="memorandum" type="file" onChange={handleFileChange} />
                  </div>
          </div>
               
              </div> 
              <div className="col-sm-3 ">
          
                <div className='dropzone'>
                <div className="dz-message">
                    <div className="drag-icon-cph"> <i className="material-icons">touch_app</i> </div>
                    <h3> propertyReport Drop files here or click to upload.</h3>
                    </div>
                  <div className="fallback">
                  <input name="propertyReport" type="file" onChange={handleFileChange} />
                  </div>
                </div>
               
              </div>                           
            
             
            
            </div>
          
          

            <div className='d-flex justify-content-center align-items-center p-3 mt-3'><button type="submit" className="btn btn-primary btn-round">Submit</button></div>
      </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Add_proparty