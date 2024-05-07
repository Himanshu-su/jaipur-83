import React from 'react'
import { NavLink } from 'react-router-dom'
function Agent_profile() {
  return (
    <div>
    
        <section className="content profile-page">
  <div className="block-header">
    <div className="row">
      <div className="col-lg-7 col-md-6 col-sm-12">
        <h2>Agent Profile
          <small>Welcome to Meta Estate Empire</small>
        </h2>
      </div>
      <div className="col-lg-5 col-md-6 col-sm-12">                
        <button className="btn btn-white btn-icon btn-round hidden-sm-down float-right ml-3" type="button">
          <i className="zmdi zmdi-plus" />
        </button>
        <ul className="breadcrumb float-md-right">
        <li className="breadcrumb-item"><a href="/home"><i className="zmdi zmdi-home" /> Meta</a></li>
          <li className="breadcrumb-item active">Profile</li>
        </ul>                
      </div>
    </div>
  </div>    
  <div className="container-fluid">
    <div className="row clearfix">
      <div className="col-xl-6 col-lg-7 col-md-12">
        <div className="card profile-header">
          <div className="body">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-12">
                <div className="profile-image float-md-right"> <img src="../assets/images/profile_av.jpg" alt="" /> </div>
              </div>
              <div className="col-lg-8 col-md-8 col-12">
                <h4 className="m-t-0 m-b-0"><strong>Michael</strong> Deo</h4>
                <span className="job_post">Ui UX Designer</span>
                <p>795 Folsom Ave, Suite 600<br /> San Francisco, CADGE 94107</p>
                <div>
                  <button className="btn btn-primary btn-round">Follow</button>
                  <button className="btn btn-primary btn-round btn-simple">Message</button>
                </div>
                <p className="social-icon m-t-5 m-b-0">
                  <NavLink title="Twitter" to=""><i className="zmdi zmdi-twitter" /></NavLink>
                  <NavLink title="Facebook" to=""><i className="zmdi zmdi-facebook" /></NavLink>
                  <NavLink title="Google-plus" to=""><i className="zmdi zmdi-twitter" /></NavLink>
                  <NavLink title="Behance" to=""><i className="zmdi zmdi-behance" /></NavLink>
                  <NavLink title="Instagram" to=""><i className="zmdi zmdi-instagram " /></NavLink>
                </p>
              </div>                
            </div>
          </div>                    
        </div>
      </div>
      <div className="col-xl-6 col-lg-5 col-md-12">
        <div className="card">
          <ul className="row profile_state list-unstyled">
            <li className="col-lg-4 col-md-4 col-6">
              <div className="body">
                <i className="zmdi zmdi-camera col-amber" />
                <h5 className="m-b-0 number count-to" data-from={0} data-to={2365} data-speed={1000} data-fresh-interval={700}>2365</h5>
                <small>Shots View</small>
              </div>
            </li>
            <li className="col-lg-4 col-md-4 col-6">
              <div className="body">
                <i className="zmdi zmdi-thumb-up col-blue" />
                <h5 className="m-b-0 number count-to" data-from={0} data-to={1203} data-speed={1000} data-fresh-interval={700}>1203</h5>
                <small>Likes</small>
              </div>
            </li>
            <li className="col-lg-4 col-md-4 col-6">
              <div className="body">
                <i className="zmdi zmdi-comment-text col-red" />
                <h5 className="m-b-0 number count-to" data-from={0} data-to={324} data-speed={1000} data-fresh-interval={700}>324</h5>
                <small>Comments</small>
              </div>
            </li>
            <li className="col-lg-4 col-md-4 col-6">
              <div className="body">
                <i className="zmdi zmdi-account text-success" />
                <h5 className="m-b-0 number count-to" data-from={0} data-to={1980} data-speed={1000} data-fresh-interval={700}>1980</h5>
                <small>Profile Views</small>
              </div>
            </li>
            <li className="col-lg-4 col-md-4 col-6">
              <div className="body">
                <i className="zmdi zmdi-desktop-mac text-info" />
                <h5 className="m-b-0 number count-to" data-from={0} data-to={251} data-speed={1000} data-fresh-interval={700}>251</h5>
                <small>Website View</small>
              </div>
            </li>
            <li className="col-lg-4 col-md-4 col-6">
              <div className="body">
                <i className="zmdi zmdi-attachment text-warning" />
                <h5 className="m-b-0 number count-to" data-from={0} data-to={52} data-speed={1000} data-fresh-interval={700}>52</h5>
                <small>Attachment</small>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="row clearfix">
      <div className="col-lg-4 col-md-12">
        <div className="card">
          <ul className="nav nav-tabs">
            <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#friends">Friends</a></li>                        
          </ul>
          <div className="tab-content">
            <div className="tab-pane body active" id="about">
              <small className="text-muted">Email address: </small>
              <p>michael@gmail.com</p>
              <hr />
              <small className="text-muted">Phone: </small>
              <p>+ 202-555-9191</p>
              <hr />
              <small className="text-muted">Mobile: </small>
              <p>+ 202-555-2828</p>
              <hr />
              <small className="text-muted">Birth Date: </small>
              <p className="m-b-0">October 22th, 1990</p>
            </div>
            <div className="tab-pane body" id="friends">
              <ul className="new_friend_list list-unstyled row">
                <li className="col-lg-4 col-md-2 col-sm-6 col-4">
                  <NavLink to="#">
                    <img src="../assets/images/sm/avatar1.jpg" className="img-thumbnail" alt="User " />
                    <h6 className="users_name">Jackson</h6>
                    <small className="join_date">Today</small>
                  </NavLink>
                </li>
                <li className="col-lg-4 col-md-2 col-sm-6 col-4">
                  <NavLink to="#">
                    <img src="../assets/images/sm/avatar2.jpg" className="img-thumbnail" alt="User" />
                    <h6 className="users_name">Aubrey</h6>
                    <small className="join_date">Yesterday</small>
                  </NavLink>
                </li>
                <li className="col-lg-4 col-md-2 col-sm-6 col-4">
                  <NavLink to="#">
                    <img src="../assets/images/sm/avatar3.jpg" className="img-thumbnail" alt="User " />
                    <h6 className="users_name">Oliver</h6>
                    <small className="join_date">08 Nov</small>
                  </NavLink>
                </li>
                <li className="col-lg-4 col-md-2 col-sm-6 col-4">
                  <NavLink to="#">
                    <img src="../assets/images/sm/avatar4.jpg" className="img-thumbnail" alt="User " />
                    <h6 className="users_name">Isabella</h6>
                    <small className="join_date">12 Dec</small>
                  </NavLink>
                </li>
                <li className="col-lg-4 col-md-2 col-sm-6 col-4">
                  <NavLink to="#">
                    <img src="../assets/images/sm/avatar1.jpg" className="img-thumbnail" alt="User " />
                    <h6 className="users_name">Jacob</h6>
                    <small className="join_date">12 Dec</small>
                  </NavLink>
                </li>
                <li className="col-lg-4 col-md-2 col-sm-6 col-4">
                  <NavLink to="#">
                    <img src="../assets/images/sm/avatar5.jpg" className="img-thumbnail" alt="User " />
                    <h6 className="users_name">Matthew</h6>
                    <small className="join_date">17 Dec</small>
                  </NavLink>
                </li>                            
              </ul>
            </div>                        
          </div>
        </div>
        <div className="card">
          <div className="header">
            <h2><strong>Who</strong> to follow</h2>
            <ul className="header-dropdown">
              <li className="dropdown"> <NavLink to="" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i className="zmdi zmdi-more" /> </NavLink>
                <ul className="dropdown-menu slideUp float-right">
                  <li><NavLink to="">Edit</NavLink></li>
                  <li><NavLink to="">Delete</NavLink></li>
                  <li><NavLink to="">Report</NavLink></li>
                </ul>
              </li>
              <li className="remove">
                <NavLink role="button" className="boxs-close"><i className="zmdi zmdi-close" /></NavLink>
              </li>
            </ul>
          </div>
          <div className="body">
            <ul className="right_chat list-unstyled">
              <li className="online">
                <NavLink to="">
                  <div className="media">
                    <img className="media-object " src="../assets/images/xs/avatar4.jpg" alt="" />
                    <div className="media-body">
                      <span className="name">Chris Fox</span>
                      <span className="message">Designer, Blogger</span>
                      <span className="badge badge-outline status" />
                    </div>
                  </div>
                </NavLink>                            
              </li>
              <li className="online">
                <NavLink to="">
                  <div className="media">
                    <img className="media-object " src="../assets/images/xs/avatar5.jpg" alt="" />
                    <div className="media-body">
                      <span className="name">Joge Lucky</span>
                      <span className="message">Java Developer</span>
                      <span className="badge badge-outline status" />
                    </div>
                  </div>
                </NavLink>                            
              </li>
              <li className="offline">
                <NavLink to="">
                  <div className="media">
                    <img className="media-object " src="../assets/images/xs/avatar2.jpg" alt="" />
                    <div className="media-body">
                      <span className="name">Isabella</span>
                      <span className="message">CEO, Thememakker</span>
                      <span className="badge badge-outline status" />
                    </div>
                  </div>
                </NavLink>                            
              </li>
              <li className="offline">
                <NavLink to="">
                  <div className="media">
                    <img className="media-object " src="../assets/images/xs/avatar1.jpg" alt="" />
                    <div className="media-body">
                      <span className="name">Folisise Chosielie</span>
                      <span className="message">Art director, Movie Cut</span>
                      <span className="badge badge-outline status" />
                    </div>
                  </div>
                </NavLink>                            
              </li>
              <li className="online">
                <NavLink to="">
                  <div className="media">
                    <img className="media-object " src="../assets/images/xs/avatar3.jpg" alt="" />
                    <div className="media-body">
                      <span className="name">Alexander</span>
                      <span className="message">Writter, Mag Editor</span>
                      <span className="badge badge-outline status" />
                    </div>
                  </div>
                </NavLink>                            
              </li>                        
            </ul>
          </div>
        </div>
        <div className="card">
          <div className="header">
            <h2><strong>Recent</strong> Activity</h2>
            <ul className="header-dropdown">
              <li className="dropdown"> <NavLink to="" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i className="zmdi zmdi-more" /> </NavLink>
                <ul className="dropdown-menu slideUp float-right">
                  <li><NavLink to="">Edit</NavLink></li>
                  <li><NavLink to="">Delete</NavLink></li>
                  <li><NavLink to="">Report</NavLink></li>
                </ul>
              </li>
              <li className="remove">
                <NavLink role="button" className="boxs-close"><i className="zmdi zmdi-close" /></NavLink>
              </li>
            </ul>
          </div>
          <div className="body user_activity">
            <div className="streamline b-accent">
              <div className="sl-item">
                <img className="user rounded-circle" src="../assets/images/xs/avatar4.jpg" alt="" />
                <div className="sl-content">
                  <h5 className="m-b-0">Admin Birthday</h5>
                  <small>Jan 21 <NavLink to="" className="text-info">Sophia</NavLink>.</small>
                </div>
              </div>
              <div className="sl-item">
                <img className="user rounded-circle" src="../assets/images/xs/avatar5.jpg" alt="" />
                <div className="sl-content">
                  <h5 className="m-b-0">Add New Contact</h5>
                  <small>30min ago <NavLink to="">Alexander</NavLink>.</small>
                  <small><strong>P:</strong> +264-625-2323</small>
                  <small><strong>E:</strong> maryamamiri@gmail.com</small>
                </div>
              </div>
              <div className="sl-item">
                <img className="user rounded-circle" src="../assets/images/xs/avatar6.jpg" alt="" />
                <div className="sl-content">
                  <h5 className="m-b-0">Code Change</h5>
                  <small>Today <NavLink to="">Grayson</NavLink>.</small>
                  <small>The standard chunk of Lorem Ipsum used since the 1500s is reproduced</small>
                </div>
              </div>
              <div className="sl-item">
                <img className="user rounded-circle" src="../assets/images/xs/avatar7.jpg" alt="" />
                <div className="sl-content">
                  <h5 className="m-b-0">New Email</h5>
                  <small>45min ago <NavLink to="" className="text-info">Fidel Tonn</NavLink>.</small>
                </div>
              </div>                        
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-8 col-md-12">
        <div className="card">
          <ul className="nav nav-tabs">
            <li className="nav-item"><NavLink className="nav-link active" data-toggle="tab" to="#mypost">My Post</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" data-toggle="tab" to="#timeline">Timeline</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" data-toggle="tab" to="#usersettings">Setting</NavLink></li>
          </ul>
        </div>
        <div className="tab-content">
          <div role="tabpanel" className="tab-pane active" id="mypost">
            <div className="card">
              <div className="body">
                <div className="form-group">
                  <textarea rows={4} className="form-control no-resize" placeholder="Please type what you want..." defaultValue={""} />
                </div>
                <div className="post-toolbar-b">
                  <button className="btn btn-warning btn-icon  btn-icon-mini btn-round"><i className="zmdi zmdi-attachment" /></button>
                  <button className="btn btn-warning btn-icon  btn-icon-mini btn-round"><i className="zmdi zmdi-camera" /></button>
                  <button className="btn btn-primary btn-round">Post</button>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="body post-box">                                
                <div className="post-img">
                  <img src="../assets/images/image1.jpg" className="img-fluid" alt="" />
                </div>                                
                <h5 className="m-t-20 m-b-0 post_title">It is a long established fact that a be distracted</h5>                                
                <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</p>                                
                <div className="form-group m-b-0">
                  <button className="btn btn-info btn-round">Like 5</button>
                  <button className="btn btn-primary btn-simple btn-round">Reply</button>
                  <span className="date m-l-20"><i className="zmdi zmdi-alarm" /> 7min ago</span>
                </div>
                <hr />
              </div>
              <div className="body post-box">                                
                <div className="post-img">
                  <img src="../assets/images/image2.jpg" className="img-fluid" alt="" />
                </div>                                
                <h5 className="m-t-20 m-b-0 post_title">need to be sure there isn't anything embarrassing</h5>                                
                <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</p>                                
                <div className="form-group m-b-0">
                  <button className="btn btn-info btn-round">Like 5</button>
                  <button className="btn btn-primary btn-simple btn-round">Reply</button>
                  <span className="date m-l-20"><i className="zmdi zmdi-alarm" /> 1hr ago</span>
                </div>
              </div>
            </div>
          </div>
          <div role="tabpanel" className="tab-pane" id="timeline">
            <div className="card">
              <div className="body">
                <ul className="cbp_tmtimeline">
                  <li>
                    <time className="cbp_tmtime" dateTime="2017-11-04T18:30"><span className="hidden">25/12/2017</span> <span className="large">Now</span></time>
                    <div className="cbp_tmicon"><i className="zmdi zmdi-account" /></div>
                    <div className="cbp_tmlabel empty"> <span>No Activity</span> </div>
                  </li>
                  <li>
                    <time className="cbp_tmtime" dateTime="2017-11-04T03:45"><span>03:45 AM</span> <span>Today</span></time>
                    <div className="cbp_tmicon bg-info"><i className="zmdi zmdi-label" /></div>
                    <div className="cbp_tmlabel">
                      <h2><NavLink to="">Art Ramadani</NavLink> <span>posted a status update</span></h2>
                      <p>Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.</p>
                    </div>
                  </li>
                  <li>
                    <time className="cbp_tmtime" dateTime="2017-11-03T13:22"><span>01:22 PM</span> <span>Yesterday</span></time>
                    <div className="cbp_tmicon bg-green"> <i className="zmdi zmdi-case" /></div>
                    <div className="cbp_tmlabel">
                      <h2><NavLink to="">Job Meeting</NavLink></h2>
                      <p>You have a meeting at <strong>Laborator Office</strong> Today.</p>
                    </div>
                  </li>
                  <li>
                    <time className="cbp_tmtime" dateTime="2017-10-22T12:13"><span>12:13 PM</span> <span>Two weeks ago</span></time>
                    <div className="cbp_tmicon bg-blush"><i className="zmdi zmdi-pin" /></div>
                    <div className="cbp_tmlabel">
                      <h2><NavLink to="">Arlind Nushi</NavLink> <span>checked in at</span> <NavLink to="">New York</NavLink></h2>
                      <blockquote>
                        <p className="blockquote blockquote-primary">
                          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."                                    
                          <br />
                          <small>
                            - Isabella
                          </small>
                        </p>
                      </blockquote>
                      <div className="row clearfix">
                        <div className="col-lg-12">
                          <div className="map m-t-10">
                            <iframe title='hello' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.91477011208!2d-74.11976308802028!3d40.69740344230033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sin!4v1508039335245" frameBorder={0} style={{border: 0, width: '100%'}} allowFullScreen />
                          </div>
                        </div>
                      </div>							
                    </div>
                  </li>
                  <li>
                    <time className="cbp_tmtime" dateTime="2017-10-22T12:13"><span>12:13 PM</span> <span>Two weeks ago</span></time>
                    <div className="cbp_tmicon bg-orange"><i className="zmdi zmdi-camera" /></div>
                    <div className="cbp_tmlabel">
                      <h2><NavLink to="">Eroll Maxhuni</NavLink> <span>uploaded</span> 4 <span>new photos to album</span> <NavLink to="">Summer Trip</NavLink></h2>
                      <blockquote>Pianoforte principles our unaffected not for astonished travelling are particular.</blockquote>
                      <div className="row">
                        <div className="col-lg-3 col-md-6 col-6"><NavLink to=""><img src="../assets/images/image1.jpg" alt="" className="img-fluid img-thumbnail m-t-30" /></NavLink> </div>
                        <div className="col-lg-3 col-md-6 col-6"><NavLink to=""> <img src="../assets/images/image2.jpg" alt="" className="img-fluid img-thumbnail m-t-30" /></NavLink> </div>
                        <div className="col-lg-3 col-md-6 col-6"><NavLink to=""> <img src="../assets/images/image3.jpg" alt="" className="img-fluid img-thumbnail m-t-30" /> </NavLink> </div>
                        <div className="col-lg-3 col-md-6 col-6"><NavLink to=""> <img src="../assets/images/image4.jpg" alt="" className="img-fluid img-thumbnail m-t-30" /> </NavLink> </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <time className="cbp_tmtime" dateTime="2017-11-03T13:22"><span>01:22 PM</span> <span>Two weeks ago</span></time>
                    <div className="cbp_tmicon bg-green"> <i className="zmdi zmdi-case" /></div>
                    <div className="cbp_tmlabel">
                      <h2><NavLink to="">Job Meeting</NavLink></h2>
                      <p>You have a meeting at <strong>Laborator Office</strong> Today.</p>                            
                    </div>
                  </li>
                  <li>
                    <time className="cbp_tmtime" dateTime="2017-10-22T12:13"><span>12:13 PM</span> <span>Month ago</span></time>
                    <div className="cbp_tmicon bg-blush"><i className="zmdi zmdi-pin" /></div>
                    <div className="cbp_tmlabel">
                      <h2><NavLink to="">Arlind Nushi</NavLink> <span>checked in at</span> <NavLink to="">Laborator</NavLink></h2>
                      <blockquote>Great place, feeling like in home.</blockquote>                            
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div role="tabpanel" className="tab-pane" id="usersettings">
            <div className="card">
              <div className="header">
                <h2><strong>Security</strong> Settings</h2>
              </div>
              <div className="body">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Username" />
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" placeholder="Current Password" />
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" placeholder="New Password" />
                </div>
                <button className="btn btn-info btn-round">Save Changes</button>                               
              </div>
            </div>
            <div className="card">
              <div className="header">
                <h2><strong>Account</strong> Settings</h2>
              </div>
              <div className="body">
                <div className="row clearfix">
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="First Name" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Last Name" />
                    </div>
                  </div>                                    
                  <div className="col-lg-4 col-md-12">
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="City" />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-12">
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="E-mail" />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-12">
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Country" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea rows={4} className="form-control no-resize" placeholder="Address Line 1" defaultValue={""} />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="checkbox">
                      <input id="procheck1" type="checkbox" />
                      <label htmlFor="procheck1">Profile Visibility For Everyone</label>
                    </div>
                    <div className="checkbox">
                      <input id="procheck2" type="checkbox" />
                      <label htmlFor="procheck2">New task notifications</label>
                    </div>
                    <div className="checkbox">
                      <input id="procheck3" type="checkbox" />
                      <label htmlFor="procheck3">New friend request notifications</label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <button className="btn btn-primary btn-round">Save Changes</button>
                  </div>
                </div>
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

export default Agent_profile