import React from "react";
import axios from 'axios'
import { Form, Input, Select, message, notification } from "antd";
import { Link, NavLink, Redirect } from "react-router-dom";
//import { MessageOutlined,  LikeOutlined, StarOutlined } from '@ant-designs';
import { connect } from "react-redux";
import Logo from '../assets/img/ExciteLogo.png'

import * as actions from "../store/actions/auth";

const FormItem = Form.Item
const Option = Select.Option;

const openNotification = (msg) => {
  notification.open({
    message: 'Profile Notification',
    description: msg
  });
};


class RegistrationForm extends React.Component {
 

  handleSubmit = (values) => {

    const username = values['username']
    const email = values['email']
    const password1 = values['password']
    const password2 = values['confirm']
    const option = values['option']
    let is_marketer ;
    console.log(username);
    console.log(option);
    console.log(password1);
    console.log(password2);
    let is_buyer = false;
    if (values.option === "buyer") is_buyer = true;
    const user = {
      username,
      email,
      password1,
      password2,
      is_buyer,
      is_seller: !is_buyer,
      is_marketer: true
    };
    console.log(user);
    axios
      .post('http://127.0.0.1:8000/rest-auth/registration/', user)
      .then(res => {
        const user = {
          token: res.data.key,
          username,
          userId: res.data.user,
          is_buyer,
          is_seller: !is_buyer,
          is_marketer: true,
          expirationDate: new Date(new Date().getTime() + 3600 * 1000)
        };
        localStorage.setItem("user", JSON.stringify(user));
        console.log(user);
        this.props.history.push("/dashboard")
        window.location.reload();

      })
    }

  render() {
   
    const formItemLayout = {
      wrapperCol: { span: 12, offset: 6 }
    };

    return (
            
          <>

<div className="access-form-layout">
                            <div className="access-form-image">
                              <div className="access-form-bg-image">
                                <div className="access-header-intro">
                                    <h3>
                                      Excite Enterprise
                                    </h3>
                                    <p>
                                      We Grow SMEs
                                    </p>
                                </div>
                              </div>
                            </div>

                            <div className="access-form-box">
                            <nav className="access-main-nav">
                                  <ul>
                                    <li>
                                      <Link to="/">
                                      <div className="ExciteLogoContainer">
                                      <img
                                      className="ExciteLogo"
                                      src={Logo} /> 
                                      </div>
                                      </Link>
                                    </li>
                                  
                                  </ul>
                                </nav>

                            <div className="form-box">

                                      <div className="login-welcome-intro">
                                                      <h3>
                                                      Affiliate marketing
                                                      </h3>
        
                                              </div>



                                          
                <Form className="form-box-width"
                {...formItemLayout}
                onFinish={this.handleSubmit}>
                <Form.Item rules={[{ required: true, message:'Username is required' }]}>
            
          </Form.Item>
        <FormItem 
        rules={[{ required: true, message:'Username is required' }]}
        name ="username">
          
            <Input
              prefix
              placeholder="Username"
            />
         
        </FormItem>

        <FormItem
        rules={[{ required: true, message:'Email is required' }]}
         name = "email">
          
            <Input
              prefix
              placeholder="Email"
            />
        
        </FormItem>

        <FormItem 
        rules={[{ required: true, message:'Paswword is required' }]}
        name="password">
          
            <Input.Password
              prefix
              type="password"
              placeholder="Password"
            />
          
        </FormItem>

        <FormItem 
        rules={[{ required: true, message:'You need to confirm your password' }]}
        name = "confirm">
          
            <Input.Password
              prefix
              type="password"
              placeholder="Type Password Again"
              
              onChange={this.Validate_Passowrds}
            />
        
        </FormItem>

        <FormItem 
        rules={[{ required: true, message:'You need to select a user type' }]}
        name='userType'>
         
            <Select placeholder="Select a user type">
              <Option value="buyer">User</Option>
              <Option value="seller">Vendor</Option>
            </Select>
         
        </FormItem>

      
        <Form.Item >
        <button
              class="form-button"
             htmlType="submit">
              Register
            </button>
          </Form.Item>
      </Form>


      <div className="text-center">
                      <Link to="/login/">
                         Already have and account? Sign in 
                      </Link>
                    
           </div>

                                        


                                      </div>
                           
                            </div>
                </div>

          </>

    );
  }
}



const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (username, email, password1, password2, is_buyer) =>
      dispatch(
        actions.authSignup(username, email, password1, password2, is_buyer)
      )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationForm);
