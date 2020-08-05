import React, { Component } from 'react'
import AffiliatesTable from '../tables/all-affiliates'
import SideNav from '../Sidebar/SideNav';
import { connect } from 'react-redux';
import axios from "axios";


class AllAffiliates extends Component {

    state = {
        data: ''
    }

    getAffiliatesMarkerters = (token) => {
        axios.defaults.headers = {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`
        };
        axios.get('http://127.0.0.1:8000/affiliate/get-all-affiliates/')
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
          this.getAffiliatesMarkerters(this.props.token)
        }
      }
      
      componentWillReceiveProps(newProps) {
        if (newProps.token !== this.props.token) {
          if (newProps.token !== undefined && newProps.token !== null) {
            this.getAffiliatesMarkerters(newProps.token)
            }
        }
      }
  

    render() {

        const {data} = this.state
        console.log(data);
        const a = new Set(data)
        const affilaites_list = Array.from(a)

        return (
           <>
            <SideNav />
            <div className="main">
                <div className="fluid-container">
                  <h1>Affiliate Marketers</h1>
                    <AffiliatesTable data={affilaites_list} />
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
  
export default connect(mapStateToProps, null)(AllAffiliates) 
