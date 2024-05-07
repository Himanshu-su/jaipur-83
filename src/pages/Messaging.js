import React from 'react'
import { NavLink } from 'react-router-dom'
import Messagenavbar from '../components/Messagenavbar'
function Messaging() {
  return (
    <div>
      <Messagenavbar/>
        <section className="content">
  <div className="block-header">
    <div className="row">
      <div className="col-lg-7 col-md-6 col-sm-12">
        <h2>Chat
          <small>Welcome to Meta Estate Empire</small>
        </h2>
      </div>
      <div className="col-lg-5 col-md-6 col-sm-12">                
        <button className="btn btn-white btn-icon btn-round hidden-sm-down float-right ml-3" type="button">
          <i className="zmdi zmdi-plus" />
        </button>
        <ul className="breadcrumb float-md-right">
        <li className="breadcrumb-item"><a href="/home"><i className="zmdi zmdi-home" /> Meta</a></li>
          <li className="breadcrumb-item"><NavLink to="">App</NavLink></li>
          <li className="breadcrumb-item active">Chat</li>
        </ul>                
      </div>
    </div>
  </div>
  <div className="container-fluid">
    <div className="row clearfix">           
      <div className="col-lg-12 col-xl-12">
        <div className="card chat-app">
          <div id="plist" className="people-list">
            <div className="input-group">
              <input type="text" className="form-control message_search" placeholder="Search..." />
              <span className="input-group-addon search_addon ">
                <i className="zmdi zmdi-search" />
              </span>
            </div>
          
            <div className="tab-content">
              <div role="tabpanel" className="tab-pane slideRight active" id="people">
                <ul className="chat-list list-unstyled m-b-0">
                  <li className="clearfix">
                    <img src="../assets/images/xs/avatar1.jpg" alt="avatar" />
                    <div className="about d-flex justify-content-between">
                      <div className="name">Agent Name</div>
                      <div className="status"> 01.00 </div>                                            
                    </div>
                    <div className="about d-flex justify-content-between">
                      <small className="text-body fs-8" style={{overflow:'hidden',whiteSpace:'nowrap',textOverflow:'ellipsis'}}>We almost done with brief!</small>
                      <small className="status_show"> 2</small>                                            
                    </div>
                  </li>
                  <li className="clearfix active">
                    <img src="../assets/images/xs/avatar2.jpg" alt="avatar" />
                    <div className="about d-flex justify-content-between">
                      <div className="name">Agent Name</div>
                      <div className="status"> 02.45 </div>                                            
                    </div>
                    <div className="about d-flex justify-content-between">
                      <small className="text-body fs-8" style={{overflow:'hidden',whiteSpace:'nowrap',textOverflow:'ellipsis'}}>Hi! I have some sent money tod...</small>
                      <small className="status_show"> 3</small>                                            
                    </div>
                  </li>
                  <li className="clearfix">
                    <img src="../assets/images/xs/avatar3.jpg" alt="avatar" />
                    <div className="about d-flex justify-content-between">
                      <div className="name">Agent Name</div>
                      <div className="status"> Jan 12 </div>                                            
                    </div>
                    <div className="about d-flex justify-content-between">
                      <small className="text-body fs-8" style={{overflow:'hidden',whiteSpace:'nowrap',textOverflow:'ellipsis'}}>I will immediately pay according to t...</small>
                      {/* <small className="status_show"> 2</small>                                             */}
                    </div>
                  </li>
                  <li className="clearfix">
                    <img src="../assets/images/xs/avatar4.jpg" alt="avatar" />
                    <div className="about d-flex justify-content-between">
                      <div className="name">Agent Name</div>
                      <div className="status"> Jan 12 </div>                                            
                    </div>
                    <div className="about d-flex justify-content-between">
                      <small className="text-body fs-8" style={{overflow:'hidden',whiteSpace:'nowrap',textOverflow:'ellipsis'}}>your KYC Wasn't approved </small>
                      {/* <small className="status_show"> 2</small>                                             */}
                    </div>
                  </li>
                  <li className="clearfix">
                    <img src="../assets/images/xs/avatar5.jpg" alt="avatar" />
                    <div className="about d-flex justify-content-between">
                      <div className="name">Agent Name</div>
                      <div className="status">  Jan 12 </div>                                            
                    </div>
                    <div className="about d-flex justify-content-between">
                      <small className="text-body fs-8" style={{overflow:'hidden',whiteSpace:'nowrap',textOverflow:'ellipsis'}}>We almost done with brief!</small>
                      {/* <small className="status_show"> 2</small>                                             */}
                    </div>
                  </li>
                  <li className="clearfix">
                    <img src="../assets/images/xs/avatar6.jpg" alt="avatar" />
                    <div className="about d-flex justify-content-between">
                      <div className="name">Agent Name</div>
                      <div className="status">  Jan 12 </div>                                            
                    </div>
                    <div className="about d-flex justify-content-between">
                      <small className="text-body fs-8" style={{overflow:'hidden',whiteSpace:'nowrap',textOverflow:'ellipsis'}}>We almost done with brief!</small>
                      {/* <small className="status_show"> 2</small>                                             */}
                    </div>
                  </li>
                  <li className="clearfix">
                    <img src="../assets/images/xs/avatar7.jpg" alt="avatar" />
                    <div className="about d-flex justify-content-between">
                      <div className="name">Agent Name</div>
                      <div className="status">  Jan 12 </div>                                            
                    </div>
                    <div className="about d-flex justify-content-between">
                      <small className="text-body fs-8" style={{overflow:'hidden',whiteSpace:'nowrap',textOverflow:'ellipsis'}}>We almost done with brief!</small>
                      {/* <small className="status_show"> 2</small>                                             */}
                    </div>
                  </li>
                  <li className="clearfix">
                    <img src="../assets/images/xs/avatar8.jpg" alt="avatar" />
                    <div className="about d-flex justify-content-between">
                      <div className="name">Agent Name</div>
                      <div className="status">  Jan 12 </div>                                            
                    </div>
                    <div className="about d-flex justify-content-between">
                      <small className="text-body fs-8" style={{overflow:'hidden',whiteSpace:'nowrap',textOverflow:'ellipsis'}}>We almost done with brief!</small>
                      {/* <small className="status_show"> 2</small>                                             */}
                    </div>
                  </li>
                  <li className="clearfix">
                    <img src="../assets/images/xs/avatar9.jpg" alt="avatar" />
                    <div className="about d-flex justify-content-between">
                      <div className="name">Agent Name</div>
                      <div className="status">  Jan 12 </div>                                            
                    </div>
                    <div className="about d-flex justify-content-between">
                      <small className="text-body fs-8" style={{overflow:'hidden',whiteSpace:'nowrap',textOverflow:'ellipsis'}}>We almost done with brief!</small>
                      {/* <small className="status_show"> 2</small>                                             */}
                    </div>
                  </li>
                </ul>
              </div>
              <div role="tabpanel" className="tab-pane slideRight" id="groups">
                <ul className="chat-list list-unstyled">
                  <li className="clearfix">
                    <img src="../assets/images/xs/avatar6.jpg" alt="avatar" />
                    <div className="about">
                      <div className="name">PHP Lead</div>
                      <div className="status">6 People </div>
                    </div>
                  </li>
                  <li className="clearfix">
                    <img src="../assets/images/xs/avatar7.jpg" alt="avatar" />
                    <div className="about">
                      <div className="name">UI UX Designer</div>
                      <div className="status">10 People </div>
                    </div>
                  </li>
                  <li className="clearfix">
                    <img src="../assets/images/xs/avatar8.jpg" alt="avatar" />
                    <div className="about">
                      <div className="name">TL Groups</div>
                      <div className="status">2 People </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="chat">
          
            <div className="chat-history">
              <ul>
                <li className="clearfix">
                  {/* <div className="message-data text-right"> <span className="message-data-time">10:10 AM, Today</span> &nbsp; &nbsp; <span className="message-data-name">Michael</span> <i className="zmdi zmdi-circle me" /> </div> */}
                  <div className="message other-message float-right"> <img src='../assets/images/chat.png'/> </div>
                </li>
                
                <li>
                  <div className="message-data">
                  <div className="card">
                    <div className="body ">
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
                     
                      <div className='d-flex justify-content-between'>
                        <h3 className="mt-0 mb-2">test</h3>
                        <h3 className="mt-0 mb-2">Property Price</h3>
                        </div>
                        <div className='d-flex justify-content-between'>
                        <h6 className="text-primary"><i className="zmdi zmdi-pin mr-2" />marina dor , ES</h6>
                        <h6 className="text-primary  d-flex">$120.000 <span className='  text-dark 'style={{width:'16px',height:'16px',display:'flex',alignItems:'center',justifyContent:'center',borderRadius:'50px',marginLeft:'8px'}}><i className='zmdi zmdi-info-outline'></i></span></h6>
                        </div>
           
                      <div className='d-flex justify-content-around mt-3'>
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
                     

                  
                    
                    </div>
                  </div>
                  </div>
                </li>                        
                
              </ul>
            </div>
            <div className="chat-message clearfix">
              <div className="input-group p-t-15">
                <input type="text" className="form-control chat_input" placeholder="Enter text here..." />
                <span className="input-group-addon chat_addon">
                  <i className="zmdi zmdi-mail-send text-dark" />
                </span>
              </div>
              {/* <NavLink to="" className="btn btn-raised btn-warning btn-round"><i className="zmdi zmdi-camera" /></NavLink>
              <NavLink to="" className="btn btn-raised btn-info btn-round"><i className="zmdi zmdi-file-text" /></NavLink>                             */}
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

export default Messaging