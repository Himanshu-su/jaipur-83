import React from "react";
import { NavLink } from "react-router-dom";

function Messagenavbar() {
  return (
    <div>
      <nav className="navbar p-l-5 p-r-5">
        <ul className="nav navbar-nav navbar-left">
          <li>
            <div className="navbar-header">
              <a href="javascript:void(0);" className="bars m-r-10"></a>
            </div>
          </li>

          <li>
            <NavLink href="" className="ls-toggle-btn" data-close="true">
              <i className="zmdi zmdi-swap" />
            </NavLink>
          </li>

          <li>
            <div className=" d-flex align-items-center m_user">
              <img
                src="../assets/images/xs/avatar1.jpg"
                className="rounded-circle"
                alt="avatar"
              />
              <div className=" ps-3" style={{ paddingLeft: "10px" }}>
                <div class="text-dark fs-14">Vincent Porter</div>
                <div className="status text-dark fs-8">
                  {" "}
                  <i className="zmdi zmdi-circle offline fs-8"></i> left 7 mins
                  ago{" "}
                </div>
              </div>
            </div>
          </li>

          <li className="float-right">
            <a>
              <span className="m_icon">
                <i className="zmdi zmdi-videocam"></i>
              </span>
            </a>

            <a>
              <span className="m_icon">
                <i className="zmdi zmdi-phone"></i>
              </span>
            </a>
            <a>
              <span className="m_icon">
                <ul class="header-dropdown p-0 ">
                  <li className="dropdown " style={{ listStyleType: "none" }}>
                    {" "}
                    <a
                      href="javascript:void(0);"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i class="zmdi zmdi-more-vert"></i>
                    </a>
                    <ul className="dropdown-menu pull-right">
                      <li>
                        <a
                          href="javascript:void(0);"
                          className=" waves-effect waves-block"
                        >
                          Action
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0);"
                          className=" waves-effect waves-block"
                        >
                          Another action
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0);"
                          className=" waves-effect waves-block"
                        >
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Messagenavbar;
