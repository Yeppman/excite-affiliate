import React, { Component } from 'react'
import axios from "axios";
import PendingUserTable from '../tables/user-list-table'
import SideDrawer from '../Sidebar/SideNav'
import { connect } from 'react-redux';

class PendingUsers extends Component {

    state = {
        data: ''
    }

    getPendingUsers = (token) => {
        axios.defaults.headers = {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`
        };
        axios.get('http://127.0.0.1:8000/affiliate/get-pending-users/')
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
            this.getPendingUsers(this.props.token)
            console.log('hey');
          }
        }
        
        componentWillReceiveProps(newProps) {
          if (newProps.token !== this.props.token) {
            if (newProps.token !== undefined && newProps.token !== null) {
              this.getPendingUsers(newProps.token)
              }
          }
        }
  

    render() {
        const {data} = this.state
        console.log(data);
        const a = new Set(data)
        const user_list = Array.from(a)
        console.log(user_list);
        return (
            <>
                <SideDrawer />
                <div className="main">
                     <div className="fluid-container">
                        <PendingUserTable data={user_list} />
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
  
export default connect(mapStateToProps, null)(PendingUsers) 