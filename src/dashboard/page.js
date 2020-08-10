import React, { Component } from 'react'
import SideDrawer from './Sidebar/SideNav'
import axios from "axios";
import { connect } from "react-redux";
import { Link, withRouter } from 'react-router-dom';

import SimpleTable from './components/table'
import PendingUsers from './components/pendingUsers';

 class Page extends Component {
    state =  {
        data: ''
      }
  
    //   getUserAffiliate = (token) => {
    //     axios.defaults.headers = {
    //       "Content-Type": "application/json",
    //       Authorization: `Token ${token}`
    //     };
    //     axios.get('https://backend-entr.herokuapp.com/affiliate/get-affiliates/')
    //     .then(res => {
    //         if (res.status == 200){
    //           this.setState({
    //             data:res.data
    //           })
    //         }
    //     })
    //   }
  
    //   componentDidMount(){
    //       if (this.props.token !== undefined && this.props.token !== null) {
    //         this.getUserAffiliate(this.props.token)
    //       }
    //     }
        
    //     componentWillReceiveProps(newProps) {
    //       if (newProps.token !== this.props.token) {
    //         if (newProps.token !== undefined && newProps.token !== null) {
    //           this.getUserAffiliate(newProps.token)
    //           }
    //       }
    //     }

    render() {
        //   const AllowAdmin  = true
              
        //   const {isAuth} = this.props
      
        //   if (isAuth === false){
        //     window.location.replace("/login")
        //   }else{
        //     let AllowAdmin  = true
        //   }
    
          const {data} = this.state
        //   console.log(data);
        //   const a = new Set(data)
        //   const affiliate_data = Array.from(a)
        //   console.log(affiliate_data);
        
        return (
           
            <>
                 <h1>Page</h1>
            {/* <PendingUsers/> */}
            </>

        )
    }
}


export default Page