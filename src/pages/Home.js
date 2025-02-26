import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
function Home() {

  // const [auth,setAuth]=useState('')
  // const [user,setUser]=useState('')
  //   console.log(auth)
  // useEffect(()=>{
  
  // const store=JSON.parse(localStorage.getItem('isAuthenticated'))
  // const user=JSON.parse(localStorage.getItem('user'))
  // setUser(user)
  // setAuth(store)
  
  // },[])

  return (
    <div>
    
      {/* Main Content */}
      <section className="content">
        <div className="block-header">
          <div className="row">
            <div className="col-lg-5 col-md-5 col-sm-12 text-start">
              <h2>Dashboard
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
                <li className="breadcrumb-item"><NavLink to="/home"><i className="zmdi zmdi-home" /> Meta</NavLink></li>
                <li className="breadcrumb-item active">Dashboard</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row clearfix">
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="card">
                <div className="body">
                  <div className="d-flex justify-content-between mb-3">
                    <div>
                      <h5 className="mt-0">Properties</h5>
                      <span className="badge badge-danger">Sold 22</span>
                      <span className="badge badge-success">New 40</span>
                    </div>
                    <div>
                      <h2 className="mb-0">62</h2>
                    </div>
                  </div>
                  <span id="linecustom1">1,4,2,6,5,2,3,8,5,2</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="card">
                <div className="body">
                  <div className="d-flex justify-content-between mb-3">
                    <div>
                      <h5 className="mt-0">Sellers</h5>
                      <span className="badge badge-success">Active 13</span>
                      <span className="badge badge-danger">Inactive 7</span>
                    </div>
                    <div>
                      <h2 className="mb-0">20</h2>
                    </div>
                  </div>
                  <span id="linecustom2">2,9,5,5,8,5,4,2,6</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="card">
                <div className="body">
                  <div className="d-flex justify-content-between mb-3">
                    <div>
                      <h5 className="mt-0">Buyers</h5>
                      <span className="badge badge-success">Active 45</span>
                      <span className="badge badge-danger">Inactive 25</span>
                    </div>
                    <div>
                      <h2 className="mb-0">70</h2>
                    </div>
                  </div>
                  <span id="linecustom3">1,5,3,6,6,3,6,8,4,2</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="card">
                <div className="body">
                  <div className="d-flex justify-content-between mb-3">
                    <div>
                      <h5 className="mt-0">Transactions</h5>
                      <span className="badge badge-success">USD. $40M</span>
                      <span className="badge badge-danger">RS. 50K</span>
                    </div>
                    <div>
                      <h2 className="mb-0">$43M</h2>
                    </div>
                  </div>
                  <span id="linecustom4">1,5,3,6,6,3,6,8,4,2</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row clearfix">
            <div className="col-xl-4 col-lg-5 col-md-12">
              <div className="card">
                <div className="header">
                  <h2><strong>Total</strong> Properties</h2>
                </div>
                <div className="body text-center">
                  <div id="c3chart-properties" />
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-7 col-md-12">
              <div className="card">
                <div className="header">
                  <h2><strong>Graph</strong> this year</h2>
                </div>
                <div className="body">
                  <div id="chart-bar-rotated" />
                </div>
              </div>
            </div>
          </div>
          <div className="row clearfix">
            <div className="col-lg-8 col-md-12">
              <div className="card text-center">
                <div className="row">
                  <div className="col-lg-3 col-md-3 col-6">
                    <div className="body">
                      <i className="zmdi zmdi-eye col-amber zmdi-hc-2x" />
                      <h4 className="mb-0">15,453</h4>
                      <span>View</span>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-6">
                    <div className="body">
                      <i className="zmdi zmdi-thumb-up col-blue zmdi-hc-2x" />
                      <h4 className="mb-0">921</h4>
                      <span>Likes</span>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-6">
                    <div className="body">
                      <i className="zmdi zmdi-comment-text col-red zmdi-hc-2x" />
                      <h4 className="mb-0">215</h4>
                      <span>Comments</span>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-6">
                    <div className="body">
                      <i className="zmdi zmdi-account text-success zmdi-hc-2x" />
                      <h4 className="mb-0">2,55</h4>
                      <span>Total Agent</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card tasks_report">
                <div className="header">
                  <h2><strong>Total</strong> Revenue</h2>
                  <ul className="header-dropdown">
                    <li className="dropdown"> <NavLink to="" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i className="zmdi zmdi-more" /> </NavLink>
                      <ul className="dropdown-menu slideUp">
                        <li><NavLink to="">2017 Year</NavLink></li>
                        <li><NavLink to="">2016 Year</NavLink></li>
                        <li><NavLink to="">2015 Year</NavLink></li>
                      </ul>
                    </li>
                    <li className="remove">
                      <NavLink role="button" className="boxs-close"><i className="zmdi zmdi-close" /></NavLink>
                    </li>
                  </ul>
                </div>
                <div className="body">
                  <div className="row clearfix">
                    <div className="col-lg-7 col-md-6 text-center">
                      <h4 className="margin-0">Total Sale</h4>
                      <h6 className="m-b-20">2,45,124</h6>
                      <input type="text" className="knob dial1" defaultValue={66} data-width={100} data-height={100} data-thickness="0.1" data-fgcolor="#212121" readOnly />
                      <h6 className="m-t-20">Satisfaction Rate</h6>
                      <small className="displayblock">47% Average <i className="zmdi zmdi-trending-up" /></small>
                      <div className="sparkline m-t-20" data-type="bar" data-width="97%" data-height="35px" data-bar-width={2} data-bar-spacing={8} data-bar-color="#212121">3,2,6,5,9,8,7,8,4,5,1,2,9,5,1,3,5,7,4,6</div>
                    </div>
                    <div className="col-lg-5 col-md-6">
                      <div className="top-report mb-4">
                        <h3 className="mt-0 mb-0">240 <i className="zmdi zmdi-trending-up float-right" /></h3>
                        <p className="text-muted">New Feedbacks</p>
                        <div className="progress">
                          <div className="progress-bar l-blush" role="progressbar" aria-valuenow={68} aria-valuemin={0} aria-valuemax={100} style={{ width: '68%' }} />
                        </div>
                        <small>Change 15%</small>
                      </div>
                      <div className="top-report">
                        <h3 className="mt-0 mb-0">50.5 Gb <i className="zmdi zmdi-trending-up float-right" /></h3>
                        <p className="text-muted">Traffic this month</p>
                        <div className="progress">
                          <div className="progress-bar l-turquoise" role="progressbar" aria-valuenow={68} aria-valuemin={0} aria-valuemax={100} style={{ width: '68%' }} />
                        </div>
                        <small>Change 5%</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card visitors-map">
                <div className="header">
                  <h2><strong>Visitors</strong> Statistics</h2>
                  <ul className="header-dropdown">
                    <li className="dropdown"> <NavLink to="" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i className="zmdi zmdi-more" /> </NavLink>
                      <ul className="dropdown-menu slideUp">
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
                  <div id="world-map-markers" className="text-center" style={{ height: '350px' }} />
                  <div className="row">
                    <div className="col-lg-6 col-md-12">
                      <div className="progress-container">
                        <span className="progress-badge">visitor from america</span>
                        <div className="progress">
                          <div className="progress-bar l-turquoise" role="progressbar" aria-valuenow={86} aria-valuemin={0} aria-valuemax={100} style={{ width: '86%' }}>
                            <span className="progress-value">86%</span>
                          </div>
                        </div>
                      </div>
                      <div className="progress-container m-t-20">
                        <span className="progress-badge">visitor from Canada</span>
                        <div className="progress">
                          <div className="progress-bar l-coral" role="progressbar" aria-valuenow={86} aria-valuemin={0} aria-valuemax={100} style={{ width: '86%' }}>
                            <span className="progress-value">86%</span>
                          </div>
                        </div>
                      </div>
                      <div className="progress-container m-t-20">
                        <span className="progress-badge">visitor from Germany</span>
                        <div className="progress">
                          <div className="progress-bar l-blue" role="progressbar" aria-valuenow={38} aria-valuemin={0} aria-valuemax={100} style={{ width: '38%' }}>
                            <span className="progress-value">86%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <div className="progress-container">
                        <span className="progress-badge">visitor from UK</span>
                        <div className="progress">
                          <div className="progress-bar l-salmon" role="progressbar" aria-valuenow={48} aria-valuemin={0} aria-valuemax={100} style={{ width: '48%' }}>
                            <span className="progress-value">86%</span>
                          </div>
                        </div>
                      </div>
                      <div className="progress-container m-t-20">
                        <span className="progress-badge">visitor from India</span>
                        <div className="progress">
                          <div className="progress-bar l-parpl" role="progressbar" aria-valuenow={86} aria-valuemin={0} aria-valuemax={100} style={{ width: '86%' }}>
                            <span className="progress-value">86%</span>
                          </div>
                        </div>
                      </div>
                      <div className="progress-container m-t-20">
                        <span className="progress-badge">visitor from Australia</span>
                        <div className="progress">
                          <div className="progress-bar l-amber" role="progressbar" aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} style={{ width: '55%' }}>
                            <span className="progress-value">86%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="card">
                <div className="header">
                  <h2><strong>Browser</strong> Usage</h2>
                  <ul className="header-dropdown">
                    <li className="dropdown"> <NavLink to="" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i className="zmdi zmdi-more" /> </NavLink>
                      <ul className="dropdown-menu">
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
                  <div id="c3chart-Browser-Usage" />
                  <table className="table table-striped table-sm mt-3 mb-0">
                    <tbody>
                      <tr>
                        <td>Chrome</td>
                        <td>6985</td>
                        <td><i className="zmdi zmdi-caret-up text-success" /></td>
                      </tr>
                      <tr>
                        <td>Other</td>
                        <td>2697</td>
                        <td><i className="zmdi zmdi-caret-up text-success" /></td>
                      </tr>
                      <tr>
                        <td>Safari</td>
                        <td>3597</td>
                        <td><i className="zmdi zmdi-caret-down text-danger" /></td>
                      </tr>
                      <tr>
                        <td>Firefox</td>
                        <td>2145</td>
                        <td><i className="zmdi zmdi-caret-up text-success" /></td>
                      </tr>
                      <tr>
                        <td>Opera</td>
                        <td>1854</td>
                        <td><i className="zmdi zmdi-caret-down text-danger" /></td>
                      </tr>
                      <tr>
                        <td>IE</td>
                        <td>154</td>
                        <td><i className="zmdi zmdi-caret-down text-danger" /></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="card weather2">
                <div className="city-selected body l-khaki">
                  <div className="row">
                    <div className="col-12">
                      <div className="city"><span>City:</span> New York</div>
                      <div className="night">Day - 12:07 PM</div>
                    </div>
                    <div className="info col-7">
                      <div className="temp"><h2>34°</h2></div>
                    </div>
                    <div className="icon col-5">
                      <img src="../assets/images/weather/summer.svg" alt="" />
                    </div>
                  </div>
                </div>
                <table className="table text-dark table-striped m-b-0">
                  <tbody>
                    <tr>
                      <td>Wind</td>
                      <td className="font-medium">ESE 17 mph</td>
                    </tr>
                    <tr>
                      <td>Humidity</td>
                      <td className="font-medium">72%</td>
                    </tr>
                    <tr>
                      <td>Pressure</td>
                      <td className="font-medium">25.56 in</td>
                    </tr>
                    <tr>
                      <td>Cloud Cover</td>
                      <td className="font-medium">80%</td>
                    </tr>
                    <tr>
                      <td>Ceiling</td>
                      <td className="font-medium">25280 ft</td>
                    </tr>
                  </tbody>
                </table>
                <div className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner" role="listbox">
                    <div className="carousel-item text-center active">
                      <div className="col-12 text-dark">
                        <ul className="row days-list list-unstyled">
                          <li className="day col-4">
                            <p>Monday</p>
                            <img src="../assets/images/weather/rain.svg" alt="" />
                          </li>
                          <li className="day col-4">
                            <p>Tuesday</p>
                            <img src="../assets/images/weather/cloudy.svg" alt="" />
                          </li>
                          <li className="day col-4">
                            <p>Wednesday</p>
                            <img src="../assets/images/weather/wind.svg" alt="" />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="carousel-item text-center">
                      <div className="col-12 text-dark">
                        <ul className="row days-list list-unstyled">
                          <li className="day col-4">
                            <p>Thursday</p>
                            <img src="../assets/images/weather/sky.svg" alt="" />
                          </li>
                          <li className="day col-4">
                            <p>Friday</p>
                            <img src="../assets/images/weather/cloudy.svg" alt="" />
                          </li>
                          <li className="day col-4">
                            <p>Saturday</p>
                            <img src="../assets/images/weather/summer.svg" alt="" />
                          </li>
                        </ul>
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

export default Home