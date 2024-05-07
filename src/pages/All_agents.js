import React from 'react'
import { NavLink } from 'react-router-dom'
function All_agents() {
  return (
    <div>
      
        {/* Main Content */}
<section className="content">
  <div className="block-header">
    <div className="row">
      <div className="col-lg-5 col-md-5 col-sm-12">
        <h2>Agent
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
          <li className="breadcrumb-item active">Agent</li>
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
              <table className="table td_2 table-striped table-hover js-basic-example dataTable vcenter">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>City</th>
                    <th>Rating</th>                                        
                    <th>Deal</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td><img src="../assets/images/xs/avatar1.jpg" className="w30 rounded mr-2" alt="" /> Karen Eilla Boyette</td>
                    <td>areneboyette@armyspy.com</td>
                    <td>+502-324-4194</td>
                    <td>Manchester</td>
                    <td className="text-warning">
                      <i className="zmdi zmdi-star" />
                      <i className="zmdi zmdi-star" />
                      <i className="zmdi zmdi-star" />
                      <i className="zmdi zmdi-star" />
                      <i className="zmdi zmdi-star" />
                    </td>
                    <td>53</td>
                    <td>$2,800</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td><img src="../assets/images/xs/avatar2.jpg" className="w30 rounded mr-2" alt="" /> Walter Devid Moye</td>
                    <td>areneboyette@armyspy.com</td>
                    <td>+502-324-1245</td>
                    <td>Chicago</td>
                    <td className="text-warning">
                      <i className="zmdi zmdi-star" />
                      <i className="zmdi zmdi-star" />
                      <i className="zmdi zmdi-star" />
                    </td>
                    <td>51</td>
                    <td>$25,800</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td><img src="../assets/images/xs/avatar3.jpg" className="w30 rounded mr-2" alt="" /> Linda Dina Pate</td>
                    <td>areneboyette@armyspy.com</td>
                    <td>+502-324-2583</td>
                    <td>Manchester</td>
                    <td className="text-warning">
                      <i className="zmdi zmdi-star" />
                      <i className="zmdi zmdi-star" />
                      <i className="zmdi zmdi-star" />
                    </td>
                    <td>201</td>
                    <td>$320,800</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td><img src="../assets/images/xs/avatar4.jpg" className="w30 rounded mr-2" alt="" /> Karen Eilla Boyette</td>
                    <td>areneboyette@armyspy.com</td>
                    <td>+502-324-4578</td>
                    <td>Manchester</td>
                    <td className="text-warning">
                      <i className="zmdi zmdi-star" />
                      <i className="zmdi zmdi-star" />
                    </td>
                    <td>53</td>
                    <td>$21,800</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td><img src="../assets/images/xs/avatar5.jpg" className="w30 rounded mr-2" alt="" /> Walter Devid Moye</td>
                    <td>areneboyette@armyspy.com</td>
                    <td>+502-324-5689</td>
                    <td>New Jersy</td>
                    <td className="text-warning">
                      <i className="zmdi zmdi-star" />
                      <i className="zmdi zmdi-star" />
                      <i className="zmdi zmdi-star" />
                    </td>
                    <td>108</td>
                    <td>$65,800</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td><img src="../assets/images/xs/avatar6.jpg" className="w30 rounded mr-2" alt="" /> Linda Dina Pate</td>
                    <td>areneboyette@armyspy.com</td>
                    <td>+502-324-7485</td>
                    <td>Manchester</td>
                    <td className="text-warning">
                      <i className="zmdi zmdi-star" />
                      <i className="zmdi zmdi-star" />
                      <i className="zmdi zmdi-star" />
                      <i className="zmdi zmdi-star" />
                    </td>
                    <td>250</td>
                    <td>$651,800</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td><img src="../assets/images/xs/avatar7.jpg" className="w30 rounded mr-2" alt="" /> Karen Eilla Boyette</td>
                    <td>areneboyette@armyspy.com</td>
                    <td>+502-324-4194</td>
                    <td>Manchester</td>
                    <td className="text-warning">
                      <i className="zmdi zmdi-star" />
                      <i className="zmdi zmdi-star" />
                      <i className="zmdi zmdi-star" />
                      <i className="zmdi zmdi-star" />
                    </td>
                    <td>53</td>
                    <td>$2,800</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td><img src="../assets/images/xs/avatar8.jpg" className="w30 rounded mr-2" alt="" /> Walter Devid Moye</td>
                    <td>areneboyette@armyspy.com</td>
                    <td>+502-324-1245</td>
                    <td>New Delhi</td>
                    <td className="text-warning">
                      <i className="zmdi zmdi-star" />
                      <i className="zmdi zmdi-star" />
                      <i className="zmdi zmdi-star" />
                    </td>
                    <td>51</td>
                    <td>$25,800</td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td><img src="../assets/images/xs/avatar9.jpg" className="w30 rounded mr-2" alt="" /> Linda Dina Pate</td>
                    <td>areneboyette@armyspy.com</td>
                    <td>+502-324-2583</td>
                    <td>New York</td>
                    <td className="text-warning">
                      <i className="zmdi zmdi-star" />
                      <i className="zmdi zmdi-star" />
                      <i className="zmdi zmdi-star" />
                      <i className="zmdi zmdi-star" />
                    </td>
                    <td>185</td>
                    <td>$52,800</td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td><img src="../assets/images/xs/avatar4.jpg" className="w30 rounded mr-2" alt="" /> Karen Eilla Boyette</td>
                    <td>areneboyette@armyspy.com</td>
                    <td>+502-324-5263</td>
                    <td>Los Angles</td>
                    <td className="text-warning">
                      <i className="zmdi zmdi-star" />
                      <i className="zmdi zmdi-star" />
                      <i className="zmdi zmdi-star" />
                      <i className="zmdi zmdi-star" />
                      <i className="zmdi zmdi-star" />
                    </td>
                    <td>53</td>
                    <td>$21,800</td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td><img src="../assets/images/xs/avatar5.jpg" className="w30 rounded mr-2" alt="" /> Walter Devid Moye</td>
                    <td>areneboyette@armyspy.com</td>
                    <td>+502-324-6358</td>
                    <td>Manchester</td>
                    <td className="text-warning">
                      <i className="zmdi zmdi-star" />
                      <i className="zmdi zmdi-star" />
                      <i className="zmdi zmdi-star" />
                    </td>
                    <td>108</td>
                    <td>$65,800</td>
                  </tr>
                  <tr>
                    <td>12</td>
                    <td><img src="../assets/images/xs/avatar6.jpg" className="w30 rounded mr-2" alt="" /> Linda Dina Pate</td>
                    <td>areneboyette@armyspy.com</td>
                    <td>+502-324-6598</td>
                    <td>Los Angles</td>
                    <td className="text-warning">
                      <i className="zmdi zmdi-star" />
                    </td>
                    <td>78</td>
                    <td>$23,800</td>
                  </tr>
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

export default All_agents