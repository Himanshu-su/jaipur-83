import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, } from 'react-router-dom'
import Cookies from 'js-cookie';
function Navbar() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

const hellomonth = new Date().getMonth()+1 ;
const hellodate = new Date().getDate()
const helloyear = new Date().getFullYear()
var month = "" ;
switch (hellomonth){
  case 1: month = "January" ;
  break ;
  case 2: month = "February" ;
  break ;
  case 3: month = "March" ;
  break ;
  case 4: month = "April" ;
  break ;
  case 5: month = "May" ;
  break ;
  case 6: month = "June" ;
  break ;
  case 7: month = "July" ;
  break ;
  case 8: month = "August" ;
  break ;
  case 9: month = "September" ;
  break ;
  case 10: month = "October" ;
  break ;
  case 11: month = "November" ;
  break ;
  case 12: month = "December" ;
  break ;
  default : month = "No Connection"
  break
}
  useEffect(() => {
    console.log("hellodate",hellodate)
    const userId = sessionStorage.getItem('userId'); 
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://103.69.196.162:2000/users/${userId}`);
        setUser(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setLoading(false);
      }
    };

    if (userId) {
      fetchUser();
    } else {
      setLoading(false);
      console.error("No userId found in localStorage.");
    }
  }, []);
  const logout = () => {
    // Remove the token from the cookie
    Cookies.remove('token');
    console.log('Token removed from cookie.');

    // Redirect to the login page
    navigate('/login');
    console.log('Navigating to login page after logout.');
  };

  return (
    <div>
        {/* Top Bar */}
<nav className="navbar p-l-5 p-r-5">
  <ul className="nav navbar-nav navbar-left">
  <li>
            <div className="navbar-header">
                <a href="javascript:void(0);" className="bars"></a>
              
            </div>
        </li>
  
    <li><NavLink href="" className="ls-toggle-btn" data-close="true"><i className="zmdi zmdi-swap" /></NavLink></li>
    {/* <li className="hidden-md-down"><NavLink href="events.html" title="Events"><i className="zmdi zmdi-calendar" /></NavLink></li>
    <li className="hidden-md-down"><NavLink href="mail-inbox.html" title="Inbox"><i className="zmdi zmdi-email" /></NavLink></li>
    <li><NavLink href="contact.html" title="Contact List"><i className="zmdi zmdi-account-box-phone" /></NavLink></li> */}

<li className="hidden-sm-down " >
      <div className="input-group ">
        <input type="text" className="form-control top_search" placeholder="Search..." />
        <span className="input-group-addon search_icon"><i className="zmdi zmdi-search" /></span>
      </div>
    </li> 

    <li>
    <a href="" onClick={(e) => e.preventDefault()} className="js-right-sidebar px-3" data-close="true" style={{backgroundColor:'#a77810',borderRadius:'12px', marginLeft:'30px'}}><i className="zmdi zmdi-settings zmdi-hc-spin text-white" /></a>
    </li>
    
    


   



        
    <li className="float-right">
      <a href='' onClick={(e) => { e.preventDefault(); logout(); }} className="mega-menu" data-close="true"><i className="zmdi zmdi-power"  /></a>
      <a className="dropdown"> <NavLink href="" onClick={(e) => e.preventDefault()} className="dropdown-toggle" data-toggle="dropdown" role="button"><i className="zmdi zmdi-notifications" />
        <div className="notify"><span className="heartbit" /><span className="point" /></div>
      </NavLink>
      <ul className="dropdown-menu pullDown" style={{
               borderRadius:'16px',
                  backgroundColor:'#C8C8C8'
                }}>
        <li className="body"  style={{
                  borderWidth: "4px",
                  borderStyle: "dotted",
                  borderColor: "#A77810",
                  borderRadius:'16px',
                  backgroundColor:'#C8C8C8'
                }}>
          <ul className="menu list-unstyled">
            <li>
              <NavLink href="">
                <div className="media">
                  <img className="media-object w60" src="../assets/images/image-gallery/1.jpg" alt="" />
                  <div className="media-body">
                    <span className="name">Sophia <span className="time">For Sale</span></span>
                    <span className="message">Relaxing Apartment</span>                                        
                  </div>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink href="">
                <div className="media">
                  <img className="media-object w60" src="../assets/images/image-gallery/2.jpg" alt="" />
                  <div className="media-body">
                    <span className="name">Sophia <span className="time">For Rent</span></span>
                    <span className="message">Co-op Apartment in Bay Terrace</span>                                        
                  </div>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink href="">
                <div className="media">
                  <img className="media-object w60" src="../assets/images/image-gallery/3.jpg" alt="" />
                  <div className="media-body">
                    <span className="name">Isabella <span className="time">For Rent</span></span>
                    <span className="message">A must see Villa on Chicago Ave</span>                                        
                  </div>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink href="">
                <div className="media">
                  <img className="media-object w60" src="../assets/images/image-gallery/4.jpg" alt="" />
                  <div className="media-body">
                    <span className="name">Alexander <span className="time">For Sale</span></span>
                    <span className="message">5 Room Apartment Special Deal</span>                                        
                  </div>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink href="">
                <div className="media">
                  <img className="media-object w60" src="../assets/images/image-gallery/5.jpg" alt="" />
                  <div className="media-body">
                    <span className="name">Grayson <span className="time">For Rent</span></span>
                    <span className="message">Real House Luxury Villa</span>                                        
                  </div>
                </div>
              </NavLink>
            </li>                        
          </ul>
        </li>
        <li className="footer"> <NavLink href="">View All</NavLink> </li>
      </ul>
    </a> 

    <a className="dropdown">
      <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
      <div class="demo-google-material-icon d-flex align-items-center "> <img src={`data:image/png;base64,${user.photo}`} style={{width:'32px',height:'32px', border: '2px solid #fff',marginRight:'5px', borderRadius:'50px'}} alt="User" /> <span class="icon-name ms-2">{user.username}</span></div>
      </a>
      <ul className="dropdown-menu pullDown " style={{
               borderRadius:'16px',
                  backgroundColor:'#C8C8C8'
                }}>
        <li className="p-2" style={{
                  borderWidth: "4px",
                  borderStyle: "dotted",
                  borderColor: "#A77810",
                  borderRadius:'16px',
                  backgroundColor:'#C8C8C8'
                }} >
        
            <ul className="menu list-unstyled">
                <li>
              <a href="">
                <div className="media d-flex align-items-center">
               <span className='rounded-circle' style={{maxWidth:'60px'}}> <img className='rounded-circle' src={`data:image/png;base64,${user.photo}`} alt="User"/></span>
                  <div className="media-body">
                    <span className="name text-dark">My Wallet </span>
                                                   
                  </div>
                </div>
              </a>
            </li>

            <li className='mb-4'>
              
                <div className="media d-flex align-items-center">
       
                  <div className=" p-2 px-lg-5  m-auto" style={{backgroundColor:'#A77810',borderRadius:'12px'}}>
                    <small className='text-white mb-2 text-center'>Total Balance</small>
                    <h4 className='text-white text-bold text-center'>$ 0.00</h4>
                                                   
                  </div>
                </div>
              
            </li>
             <strong className='text-center text-bold d-flex justify-content-center mb-lg-5'>{month} {hellodate}, {helloyear}</strong>

             <li   style={{
                          borderBottom: "2px solid #A77810",
                          borderRadius: "0px",
                        }}>
              <a href="">
                <div className="media d-flex align-items-center">
               <span className='rounded-circle' style={{maxWidth:'40px'}}> <img className='rounded-circle' src="../assets/images/profile_av.jpg" alt="User"/></span>
                  <div className="media-body">
                    <small className="name text-dark d-flex justify-content-between">My Properties Total value  <small style={{color:'#A77810', marginTop:'12px'}}>+10.4%</small> </small>
                    <strong style={{color:'#A77810'}}>$146,096</strong>
                                                   
                  </div>
                </div>
              </a>
            </li>

            <li   style={{
                          borderBottom: "2px solid #A77810",
                          borderRadius: "0px",
                        }}>
              <a href="">
                <div className="media d-flex align-items-center">
               <span className='rounded-circle' style={{maxWidth:'40px'}}> <img className='rounded-circle' src="../assets/images/profile_av.jpg" alt="User"/></span>
                  <div className="media-body">
                    <small className="name text-dark d-flex justify-content-between">Annual Rental Income  <small style={{color:'#A77810', marginTop:'12px'}}>+2.4%</small> </small>
                    <strong style={{color:'#A77810'}}>$14,050</strong>
                                                   
                  </div>
                </div>
              </a>
            </li>
            <li   style={{
                          borderBottom: "2px solid #A77810",
                          borderRadius: "0px",
                        }}>
              <a href="">
                <div className="media d-flex align-items-center">
               <span className='rounded-circle' style={{maxWidth:'40px'}}> <img className='rounded-circle' src="../assets/images/profile_av.jpg" alt="User"/></span>
                  <div className="media-body">
                    <small className="name text-dark d-flex justify-content-between">Numbers Of Properties  <small style={{color:'#A77810', marginTop:'12px'}}>+2.2%</small> </small>
                    <strong style={{color:'#A77810'}}>$9</strong>
                                                   
                  </div>
                </div>
              </a>
            </li>

            <li   style={{
                          borderBottom: "2px solid #A77810",
                          borderRadius: "0px",
                        }}>
              <a href='/login'><button type="button" className="btn btn-primary bg-primary btn-lg btn-block waves-effect waves-light mb-3" style={{ backgroundColor: '#919296', borderRadius: '16px' }} >Overview</button></a>
            </li>

            <li className='d-flex justify-content-around'>
              <a className='text-dark text-bold' href=''>My Properties</a>
              <a className='text-dark text-bold' href=''>Payouts</a>
            </li>

         
             
            </ul>
          
        </li>
       
      </ul>
    </a>

    </li>
  </ul>
</nav>

    </div>
  )
}

export default Navbar