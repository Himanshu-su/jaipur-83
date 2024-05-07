import React from 'react'

function Profile() {
  return (
    <div>
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

  <div className='container-fluid'>
    <div className='row ' style={{borderTop:'3px solid #A77810'}}>
        <div className='col-lg-4 pl-5 pt-5' style={{borderRight:'3px solid #A77810'}}>

            <div>
                <img src='../assets/images/complete.png'/>
            </div>
            <div>
                <ul className="nav nav-tabs" role="tablist" style={{display:'inline-block'}}>
                <li className="nav-item mb-3"><a className="nav-link active" data-toggle="tab" href="#home_with_icon_title"> <i className="zmdi zmdi-home" /> Account Information  </a> </li>
                <li className="nav-item mb-3"><a className="nav-link" data-toggle="tab" href="#profile_with_icon_title"><i className="zmdi zmdi-account" /> PROFILE </a></li>
                <li className="nav-item mb-3"><a className="nav-link" data-toggle="tab" href="#messages_with_icon_title"><i className="zmdi zmdi-email" /> MESSAGES </a></li>
                </ul>

            </div>
        </div>

        <div className='col-lg-8 pt-5 pl-5'>
    
{/* Tab panes */}
<div className="tab-content">
  <div role="tabpanel" className="tab-pane in active" id="home_with_icon_title"> 
  <h1 className='text-dark'>Personal Informations</h1>
  <div className="inbox-item d-flex align-items-center">
 
        <div className="inbox-img mr-3">
             <img src="../assets/images/card.svg" style={{width:'90px',height:'90px'}} className="rounded-circle" alt="" /> 
             </div>
        <div className="inbox-item-info">
          <p className="author text-dark mb-3">Agent Name</p>
          <p className="inbox-message text-dark"><button className='btn-primary border-0 py-2 px-4 mr-3' style={{borderRadius:'12px'}}>Upload New PIcture</button> <button className='btn-primary-outline border-0 py-2 px-4' style={{borderRadius:'12px'}}>Delete</button></p>
      
        </div>
    
    
    
    </div>

    <div className="body">
          <form >
            <div className="row clearfix">
              <div className="col-sm-12">
                <div className="form-group">
                  <input type="text"  name="name"  className="form-control" placeholder="Full Name" />
                  <span className=' chats_addon'><box-icon name='edit'></box-icon></span>
                </div>
              </div>
              <div className="col-sm-12">
                <div className="form-group">
                  <input type="text"  name="price"  className="form-control" placeholder="Email Address" />
                  <span className=' chats_addon'><box-icon name='edit'></box-icon></span>
                </div>
              </div>
              <div className="col-sm-12">
                <div className="form-group">
                  <input type="text" name="location"  className="form-control" placeholder="Phone Number" />
                  <span className=' chats_addon'><box-icon name='edit'></box-icon></span>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <input type="text"  name="type"  className="form-control" placeholder="Address" />
                  <span className=' chats_addon'><box-icon name='edit'></box-icon></span>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <input type="text"  name="status"  className="form-control" placeholder="Date of Birth:" />
                </div>
              </div>
              <div className="col-sm-3">
                      <select className="form-control show-tick ms select2" data-placeholder="Select">
                                   <option>Country</option>
                                   <option>Mustard</option>
                                   <option>Ketchup</option>
                                   <option>Relish</option>
                               </select>
          
           
           </div>
            
              <div className="col-sm-3">
              <select className="form-control show-tick ms select2" data-placeholder="Select">
                                   <option>Country</option>
                                   <option>Mustard</option>
                                   <option>Ketchup</option>
                                   <option>Relish</option>
                               </select>
              </div>
              <div className="col-sm-3">
              <select className="form-control show-tick ms select2" data-placeholder="Select">
                                   <option>Country</option>
                                   <option>Mustard</option>
                                   <option>Ketchup</option>
                                   <option>Relish</option>
                               </select>
              </div>

              <div className="col-sm-3">
              <select className="form-control show-tick ms select2" data-placeholder="Select">
                                   <option>Country</option>
                                   <option>Mustard</option>
                                   <option>Ketchup</option>
                                   <option>Relish</option>
                               </select>
              </div>
             

              
      
            </div>
           
          
           <button type="submit" className="btn btn-primary btn-round">Update</button>
      </form>
          </div>
  </div>
  <div role="tabpanel" className="tab-pane" id="profile_with_icon_title"> <b>Profile Content</b>
    <p> Lorem ipsum dolor sit amet, ut duo atqui exerci dicunt, ius impedit mediocritatem an. Pri ut tation electram moderatius.
      Per te suavitate democritum. Duis nemore probatus ne quo, ad liber essent aliquid
      pro. Et eos nusquam accumsan, vide mentitum fabellas ne est, eu munere gubergren
      sadipscing mel. </p>
  </div>
  <div role="tabpanel" className="tab-pane" id="messages_with_icon_title"> <b>Message Content</b>
    <p> Lorem ipsum dolor sit amet, ut duo atqui exerci dicunt, ius impedit mediocritatem an. Pri ut tation electram moderatius.
      Per te suavitate democritum. Duis nemore probatus ne quo, ad liber essent aliquid
      pro. Et eos nusquam accumsan, vide mentitum fabellas ne est, eu munere gubergren
      sadipscing mel. </p>
  </div>
</div>

            
        </div>
    </div>
  </div>
  </section>
    </div>
  )
}

export default Profile