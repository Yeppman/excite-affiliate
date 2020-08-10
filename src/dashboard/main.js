import React, { Component } from 'react'
import SideDrawer from './Sidebar/SideNav'
import axios from "axios";
import { connect } from "react-redux";
import { Link, withRouter } from 'react-router-dom';
import {handleGetCodes} from '../store/actions/affiliates'

import SimpleTable from './components/table'
import PendingUsers from './components/pendingUsers';
import FetchReferralCodes from './components/getReferralCodes';

class Main extends Component {

    state =  {
      data: '',
      referral_codes: ''
    }

    handleGetCodes = (token) => {
      axios.defaults.headers = {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`
        };
      axios.get('http://127.0.0.1:8000/affiliate/get-ref-codes/').then(res =>{
          if (res.status == 200){
              this.setState({
                referral_codes:res.data[0]
              })
              const refff = this.state.referral_codes.link
              console.log(refff);
              this.getUserAffiliate(token, refff)
            }
      })
  }

    getUserAffiliate = (token,refff) => {
      console.log(this.state.referral_codes);
      const ref_code = this.state.referral_codes
      console.log(ref_code);
      axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`
      };
      axios.get(`http://127.0.0.1:8000/affiliate/get-ref/${refff}/`)
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
          this.handleGetCodes(this.props.token)
          // this.affiliates(this.props.token)
          // this.getUserAffiliate(this.props.token)
        }
      }
      
      componentWillReceiveProps(newProps) {
        if (newProps.token !== this.props.token) {
          if (newProps.token !== undefined && newProps.token !== null) {
            this.handleGetCodes(newProps.token)
            // this.affiliates(newProps.token)
            // this.getUserAffiliate(newProps.token)
          }
        }
      }

    render() {

      const {affiliates} = this.props
      console.log(affiliates);

      const AllowAdmin  = true
          
      const {isAuth} = this.props
  
      if (isAuth === false){
        window.location.replace("/login")
      }else{
        let AllowAdmin  = true
      }

      const {data, referral_codes} = this.state
      console.log(data);
      const a = new Set(data)
      const affiliate_data = Array.from(a)
      console.log(affiliate_data.length);
      console.log(referral_codes.link);
      console.log(referral_codes);
      // const ref_code = Array.from(referral_codes)
      // console.log(ref_code.link);
        return (
            <>
              <SideDrawer />
              <div className="main">
                 <div className="fluid-container">
                  <div className="top-info-card">
                    <div className="top-info-content">
                      <h3>Number of users registered: </h3>
                        <p>{affiliate_data.length}</p>
                    </div>

                    <div className="top-info-content">
                      <h3>Number of users today: </h3>
                        <p>1</p>
                    </div>
                    <div className="top-info-content">
                      <h3>Referral Code </h3>
                        <p>{referral_codes.link}</p>
                    </div>
                    
                  </div>
                  <div className="m-t-10">
                      <SimpleTable aff={affiliate_data} />
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
      isAuth: state.auth.token !== null,
      affiliates: state.affiliates.affiliate_link    
    };
};
  
// const mapDispatchToProps = dispatch => {
//   return {
//     affiliates: () => dispatch(handleGetCodes())    

//   }
// }

export default connect(mapStateToProps, null)(Main) 