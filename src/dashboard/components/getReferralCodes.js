import React, { Component } from 'react'
import axios from 'axios'
import { connect } from "react-redux";
import ReferralCodesTable from '../tables/referral-codes-table'
import SideNav from '../Sidebar/SideNav'

class FetchReferralCodes extends Component {

    state = {
        data: ''
    }

    handleGetCodes = (token) => {
        axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`
          };
        axios.get('https://backend-entr.herokuapp.com/affiliate/get-ref-codes/').then(res =>{
            if (res.status == 200){
                this.setState({
                  data:res.data
                })
              }
        })
    }

    generateNewCode =  async(token) => {
        axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`
          };
       await axios.get('https://backend-entr.herokuapp.com/affiliate/generate-code').then(res =>{
            if (res.status == 200){
                this.handleGetCodes(token)    
          }
            console.log(res.data);
        })
    }

    componentDidMount(){
        if (this.props.token !== undefined && this.props.token !== null) {
          this.handleGetCodes(this.props.token)
        }
      }
      
      componentWillReceiveProps(newProps) {
        if (newProps.token !== this.props.token) {
          if (newProps.token !== undefined && newProps.token !== null) {
            this.handleGetCodes(newProps.token)
            }
        }
      }

    
    render() {
        const {data} = this.state
        const {token} = this.props
        console.log(data);
        // const a = new Set(data)
        const referral_codes = Array.from(data)
        console.log(referral_codes);
        console.log(this.props.token);
        console.log(referral_codes);
        return (
            <div>
                <SideNav />
                <div className="main">
                    <div className="fluid-container">
                        <h1>Referral Codes</h1>
                        <ReferralCodesTable data={referral_codes} />
                        <div className="m-t-10">
                            <button onClick={() => this.generateNewCode(token)} className="referral-button">
                                Generate new code
                            </button>
                        </div>
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
  
export default connect(mapStateToProps, null)(FetchReferralCodes) 
