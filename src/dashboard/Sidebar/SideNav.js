import React from 'react'

import axios from "axios";
import {notification,message} from 'antd'
import { connect } from "react-redux";

import { Link, withRouter } from 'react-router-dom';
import clsx from 'clsx';
import {MenuItem, MenuList} from '@material-ui/core'


// import { faHamburger } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const host = 'http://127.0.0.1:8000'

class TempoaryDrawer extends React.Component{
    render(){
     
      return(
        <>
           <div class="sidenav">
                
            <div className="fitter">
                  <div className="sidenav-header">
                    <h3>
                      Affiliate Team
                    </h3>
                  </div>
            </div>

           <MenuList>
              <div  className = "menu-link">
                <MenuItem 
                    className="menu-link-text"
                    component={Link} to="/" >
                    Dashboard
                </MenuItem>
              </div>
          </MenuList>

          <MenuList>
              <div  className = "menu-link">
                <MenuItem 
                    className="menu-link-text"
                    component={Link} to="/pending-user-list" >
                     Pending Business           
                </MenuItem>
              </div>
          </MenuList>

          <MenuList>
              <div  className = "menu-link">
                <MenuItem 
                    className="menu-link-text"
                    component={Link} to="/add-to-list" >
                     Add a Business
                </MenuItem>
              </div>
          </MenuList>

          <MenuList>
              <div  className = "menu-link">
                <MenuItem 
                    className="menu-link-text"
                    component={Link} to="/profile" >
                     Profile
                </MenuItem>
              </div>
          </MenuList>

          <MenuList>
              <div  className = "menu-link">
                <MenuItem 
                    className="menu-link-text"
                    component={Link} to="/referral-codes" >
                     Referral Codes
                </MenuItem>
              </div>
          </MenuList>


        </div>

        </>
      )
    }

}


const mapStateToProps = state => {
  return {
    token: state.auth.token ,
    isAuth: state.auth.token !== null ,
    is_seller: state.auth.is_seller ,
  };
};

// const mapDispatchToProps = dispatch => {
// return {
//   member: (token) => dispatch(getMembership(token))
// }
// }

export default connect(
  mapStateToProps,
  
)(TempoaryDrawer) 
