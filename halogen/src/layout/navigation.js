import React from 'react';
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
import login from "../pages/login";
import survey from "../pages/survey";
import update from "../pages/update";
import insights from "../pages/insights";
// import styles from './index.sass';
// import * as bs from 'bootstrap/dist/css/bootstrap.css
// import * as bst from 'bootstrap/dist/css/bootstrap-theme.css';

import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";

class MainNav extends React.Component {
  render() {
    return (
        <HashRouter>
            <div>

                
            <ul className="header">
            
            <li> <NavLink to="/login"> Login </NavLink> </li>
            <li> <NavLink to="/survey"> Survey </NavLink> </li>
            <li> <NavLink to="/update"> Update </NavLink> </li>
            <li> <NavLink to="/insights"> Insights </NavLink> </li>
            <div id = "top-right">
            <img src="https://halogen.sg/wp-content/uploads/2017/08/halogen-logo-1.png" alt="image" class="img-responsive"/>
            </div>
            
            </ul>
            
            <div className="content">
            <Route path = "/login" component={login}/>
            <Route path = "/survey" component={survey}/>
            <Route path = "/update" component={update}/>
            <Route path = "/insights" component={insights}/>
            </div>
        </div>
      </HashRouter>
    )
  }
}

export default MainNav;