import React from 'react'
import { NavLink } from 'react-router-dom'
function Add_agent() {
  return (
    <div>
         
        {/* Main Content */}
<section className="content">
  <div className="block-header">
    <div className="row">
      <div className="col-lg-5 col-md-5 col-sm-12">
        <h2>Add Agent
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
          <li className="breadcrumb-item active">Add Agent</li>
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
            <ul className="header-dropdown">
              <li className="dropdown"> <NavLink to="" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i className="zmdi zmdi-more" /> </NavLink>
                <ul className="dropdown-menu dropdown-menu-right slideUp">
                  <li><NavLink to="">Action</NavLink></li>
                  <li><NavLink to="">Another action</NavLink></li>
                  <li><NavLink to="">Something else</NavLink></li>
                </ul>
              </li>
              <li className="remove">
                <NavLink role="button" className="boxs-close"><i className="zmdi zmdi-close" /></NavLink>
              </li>
            </ul>
          </div>
          <div className="body">
            <div className="row clearfix">
              <div className="col-sm-4">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="First Name" />
                </div>
              </div>
              <div className="col-sm-4">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Last Name" />
                </div>
              </div>
              <div className="col-sm-4">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Phone No." />
                </div>
              </div>
              <div className="col-sm-3">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Date of Birth" />
                </div>
              </div>
              <div className="col-sm-3">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Age" />
                </div>
              </div>
              <div className="col-sm-3">
                <select className="form-control show-tick">
                  <option value>-- Gender --</option>
                  <option value={10}>Male</option>
                  <option value={20}>Female</option>
                </select>
              </div>
              <div className="col-sm-3">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Enter Your Email" />
                </div>
              </div>
            </div>
            <h6 className="mt-4">Account Information</h6>
            <div className="row clearfix">
              <div className="col-md-3 col-sm-6">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Email" />
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Phone" />
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Password" />
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Confirm Password" />
                </div>
              </div>
            </div>
            <h6 className="mt-4">Account Information</h6>
            <div className="row clearfix">
              <div className="col-md-3 col-sm-6">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Facebook" />
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Twitter" />
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Google" />
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Linkdin" />
                </div>
              </div>
              <div className="col-sm-12">
                <form action="" id="frmFileUpload" className="dropzone" method="post" encType="multipart/form-data">
                  <div className="dz-message">
                    <div className="drag-icon-cph"> <i className="material-icons">touch_app</i> </div>
                    <h3>Drop files here or click to upload.</h3>
                    <em>(This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)</em> </div>
                  <div className="fallback">
                    <input name="file" type="file" multiple />
                  </div>
                </form>
              </div>
              <div className="col-sm-12 mt-4">
                <button type="submit" className="btn btn-primary btn-round">Submit</button>
                <button type="submit" className="btn btn-default btn-round btn-simple">Cancel</button>
              </div>
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

export default Add_agent