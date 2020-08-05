import React, { Component } from 'react'
import SideDrawer from './Sidebar/SideNav'
import axios from "axios";
import { connect } from "react-redux";
import { Link, withRouter } from 'react-router-dom';

import SimpleTable from './components/table'

class Main extends Component {

    state =  {
      data: ''
    }

    getUserAffiliate = (token) => {
      axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios.get('http://127.0.0.1:8000/affiliate/get-affiliates/')
      .then(res => {
          if (res.status == 200){
            this.setState({
              data:res.data
            })
          }

      })
    }

    componentDidMount(){
        if (this.props.token !== undefined && this.props.token !== null) {
          this.getUserAffiliate(this.props.token)
        }
      }
      
      componentWillReceiveProps(newProps) {
        if (newProps.token !== this.props.token) {
          if (newProps.token !== undefined && newProps.token !== null) {
            this.getUserAffiliate(newProps.token)
            }
        }
      }

    render() {
      const {data} = this.state
      console.log(data);
      const a = new Set(data)
      const affiliate_data = Array.from(a)
      console.log(affiliate_data);
        return (
            <>
              <SideDrawer />
              <div className="main">
                 <div className="fluid-container">
                  <div>
                      <SimpleTable aff={affiliate_data} />

                    </div>
                  <div className="create-list">
                    <a href="/add-to-list">
                      <button className="create-button">
                            Add a user 
                        </button>
                    </a>
                  </div>
                 </div>
              </div>  
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
      token: state.auth.token ,
      isAuth: state.auth.token !== null ,    
    };
};
  
export default connect(mapStateToProps, null)(Main) 