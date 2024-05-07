import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
function Leftsidebar() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
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
  return (
    <div>
        <aside id="leftsidebar" className="sidebar">
        <div className="menu">
        <ul className="list">
          <li>
            <div className="user-info pt-2">
              <a href='/home'><img src="../assets/images/logo.svg" alt="User" /></a>
            </div>
          </li>
          <li className="active open"><NavLink to="/userdashboard" ><i className="zmdi zmdi-home" /><span>Dashboard</span></NavLink></li>
          <li className=""><NavLink to="/marketplace" ><i className="zmdi zmdi-city" /><span>Marketplace</span></NavLink></li>
          <li className=""><NavLink to="/comparison" ><i className="zmdi zmdi-accounts-outline" /><span>Compare Properties</span></NavLink></li>
          <li className=""><NavLink to="/sales" ><i className="zmdi zmdi-home" /><span>Sales</span></NavLink></li>
          <li className=""><NavLink to="/messaging"><i className="zmdi zmdi-apps" /><span>Messages</span></NavLink></li>
          <li className=""><NavLink to="/agent_profile"><i className="zmdi zmdi-apps" /><span>Profile</span></NavLink></li>
          {/* <li>
  <a class="menu-toggle">
    <i class="zmdi zmdi-city"></i><span>Property</span>
  </a>
  <ul class="ml-menu">
    <li><a href="/property_list">Property List</a></li>
    <li><a href="/property_3bhk">3BHK</a></li>
    <li><a href="/property_4bhk">4BHK</a></li>
    <li><a href="/add_property">Add Property</a></li>
    <li><a href="/property_details">Property Detail</a></li>
  </ul>
</li> */}
{/* <li><a  className="menu-toggle"><i className="zmdi zmdi-accounts-outline"></i><span>Agents</span></a>
                        <ul className="ml-menu">
                            <li><a href="/all_agents">All Agents</a></li>
                            <li><a href="/add_agent">Add Agent</a></li>
                            <li><a href="/agent_profile">Agent Profile</a></li>
                            <li><a href="/agent_invoice">Agent Invoice</a></li>
                        </ul>
                    </li>
                    <li><a  className="menu-toggle"><i className="zmdi zmdi-city"></i><span>Marketplace</span></a>
                        <ul class="ml-menu">
                            <li><a href="/apartment">Apartment</a></li>
                            <li><a href="/office">Office</a></li>
                            <li><a href="/shop">Shop</a></li>
                            <li><a href="/villa">Villa</a></li>
                        </ul>
                    </li>                    */}
        </ul>
      </div>
</aside>
    </div>
  )
}
export default Leftsidebar