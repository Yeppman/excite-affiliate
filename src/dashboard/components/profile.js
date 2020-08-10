import React, { Component } from 'react'
import axios from 'axios'
import { connect } from "react-redux";
import SideNav from '../Sidebar/SideNav'
import {Input ,Select , Form, Button ,notification} from 'antd';


class MarketerProfile extends Component {

    openNotification = (msg) => {
        notification.open({
          message: 'Alert!',
          description:msg,
          
        });
      }
    
    handleSubmit = (values, err) => {

        const fName =  
        values["fName"] === undefined ? null : values["fName"] ;

        const lName =  
        values["lName"] === undefined ? null : values["lName"] ;
        
        const businessName = 
            values['businessName'] === undefined ? null : values['businessName'] ;
            
        // const businessAddress = 
        // values['businessAddress'] === undefined ? null : values['businessAddress'] ;
        
        const emailAddress = 
        values['emailAddress'] === undefined ? null : values['emailAddress'] ;    
        
        const phoneNum = 
        values['phoneNum'] === undefined ? null : values['phoneNum']

        const fd  = new FormData()
        fd.append('FirstName', fName);
        fd.append('LastName',lName);
        fd.append('BusinessName', businessName);
        // fd.append('business_address', businessAddress);
        fd.append('Email', emailAddress);
        fd.append('Phone', phoneNum)

        if(!err){
            axios.defaults.headers = {
                "Content-Type": "application/json",
                Authorization: `Token ${this.props.token}`
            };
           axios.post(`http://127.0.0.1:8000/affiliate/edit-profile/`,fd)
            .then(res =>{
              this.props.history.push('/dashboard')
              this.openNotification('Profile edited successfully')             
          })
        //   .catch(e =>{
        //     openNotification(e)
        //         })
          }
    }

    render() {
        return (
            <>
              <SideNav />
              <div className="main">

                <div className="fluid-container">

                <div className="section-register-user">
                  <div className="create-user-form">
                  <Form onFinish={this.handleSubmit}>
                    <Form.Item>
                        <h1 style={{fontSize:23}} className="ant-form-text">Edit Profile</h1>
                              </Form.Item>

                              <Form.Item name ="fName">
                              
                                  <Input
                                    placeholder="First Name" enterButton
                                  />
                              </Form.Item>

                              <Form.Item name ="lName">
                                  <Input
                                    placeholder="Last Name" enterButton
                                  />
                              </Form.Item>
                              
                              <Form.Item name ="emailAddress">
                                  <Input
                                    placeholder="Email" enterButton
                                  />
                              </Form.Item>
                              
                              <Form.Item name ='businessName'> 
                                  <Input
                                    placeholder="Business Name"
                                    enterButton
                                  />
                              </Form.Item>

                              {/* <Form.Item name ='businessAddress'> 
                                  <Input
                                    placeholder="Business Address"
                                    enterButton
                                  />
                              </Form.Item> */}

                              <Form.Item name ='phoneNum'> 
                              
                                  <Input
                                    placeholder="Phone Number" enterButton
                                  />
                                
                              </Form.Item>
                                                      
                        <Form.Item >
                   
                      <button class="create-button" htmlType="submit">
                        Submit
                      </button>
                    </Form.Item>

                </Form>
                  </div>
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

export default connect(mapStateToProps, null)(MarketerProfile) 