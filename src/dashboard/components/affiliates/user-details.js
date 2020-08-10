import React, { Component } from 'react'
import axios from 'axios'
import SideNav from '../../Sidebar/SideNav';
import { connect } from 'react-redux';


class UserDetail extends Component {

    state = {
        data: ''
    }

    affiliate_id  = this.props.match.params.userID
      
    getUserDetail = async(token) =>{
        axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`
          };
        axios.get(`http://127.0.0.1:8000/affiliate/get-user-detail/${this.affiliate_id}/1234/`)
        .then(res =>{
           this.setState({
               data: res.data
           })
        })
    }

    componentDidMount(){
      if (this.props.token !== undefined && this.props.token !== null) {
        this.getUserDetail(this.props.token)
      }
    }
    
    componentWillReceiveProps(newProps) {
      if (newProps.token !== this.props.token) {
        if (newProps.token !== undefined && newProps.token !== null) {
          this.getUserDetail(newProps.token)
          }
      }
    }


    render() {

        const {data} = this.state
        console.log(data);

        return (
            <div>
                <SideNav />
                <div className="main">
                    <div className="fluid-container">
        <p>Useer: {data.user}</p>
        <p>Full Name: {data.User_First_Name}</p>
        <p>Email: {data.Email}</p>
        <p>Phone: {data.Phone}</p>
        <p>Date Created: {data.DateCreated}</p>
        <p>Affiliate ID: {data.AffliateMarketingID}</p>
        </div>
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
  
export default connect(mapStateToProps, null)(UserDetail) 
