import React, { Component } from 'react'
import SideNav from '../../Sidebar/SideNav';
import { connect } from 'react-redux';
import axios from "axios";

class AffDetail extends Component {

    state = {
        data: ''
      }
      
      affiliate_id  = this.props.match.params.affiliateID
      
      getAffiliateMarketerDetail = async(token) =>{
          axios.defaults.headers = {
              "Content-Type": "application/json",
              Authorization: `Token ${token}`
            };
          axios.get(`https://backend-entr.herokuapp.com/affiliate/${this.affiliate_id}/`)
          .then(res =>{
             this.setState({
                 data: res.data
             })
          })
      }

      componentDidMount(){
        if (this.props.token !== undefined && this.props.token !== null) {
          this.getAffiliateMarketerDetail(this.props.token)
        }
      }
      
      componentWillReceiveProps(newProps) {
        if (newProps.token !== this.props.token) {
          if (newProps.token !== undefined && newProps.token !== null) {
            this.getAffiliateMarketerDetail(newProps.token)
            }
        }
      }


    render() {
        return (
            <div>
                <SideNav />
                <div className="main">
                    
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
      token: state.auth.token ,
      isAuth: state.auth.token !== null ,    
    };
};
  
export default connect(mapStateToProps, null)(AffDetail) 

