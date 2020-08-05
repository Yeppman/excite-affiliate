import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import axios from "axios";

import * as actions from "../../store/actions/auth";
import {
  Form,
  Input,
  Tooltip,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
} from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { registrationURL} from '../../constants'
import SideNav from "../Sidebar/SideNav";
// SideNav

class CreateUser extends React.Component {
  state = {

  };

  handleSubmit = (values) => {

      const username = values['username']
      const email = values['email']
      const password1 = values['password']
      const password2 = values['confirm']
      const option = values['option']
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
        is_seller: !is_buyer
      };
      console.log(user);
      axios
        .post(registrationURL, user)
        .then(res => {
          const user = {
            token: res.data.key,
            username,
            userId: res.data.user,
            is_buyer,
            is_seller: !is_buyer,
            expirationDate: new Date(new Date().getTime() + 3600 * 1000)
          };
          localStorage.setItem("user", JSON.stringify(user));
          console.log(user);
          this.props.history.push("/")
          window.location.reload();

        //  dispatch(authSuccess(user));
          //dispatch(fetchCart())
        //  dispatch(checkAuthTimeout(3600));
        })
        .catch(err => {
        //  dispatch(authFail(err));
        console.log(err);
        });
      // console.log(is_buyer);
      // this.props.Signup(
      //   values.userName,
      //   values.email,
      //   values.password,
      //   values.confirm,
      //   is_buyer
      // );
//      this.props.history.push("/");

  };


render() {

      const layout = {
        labelCol: {
          span: 8,
        },
        wrapperCol: {
          span: 16,
        },
      };

      const Demo = () => {
        const onFinish = values => {
          console.log('Success:', values);
        };
      }

        const onFinishFailed = errorInfo => {
          console.log('Failed:', errorInfo);
        };


return (
    

      <>
      <SideNav />
     <div className="main">
              <div className="fluid-container">

              <Form onFinish={this.handleSubmit}>
                    <Form.Item>
                        <h1 style={{fontSize:23}} className="ant-form-text">Create an account</h1>
                              </Form.Item>

                              <Form.Item name ="username">
                              
                                  <Input
                                    placeholder="Username" enterButton
                                  />
                              </Form.Item>
                              
                              <Form.Item name ="email">
                                  <Input
                                    placeholder="Email" enterButton
                                  />
                              </Form.Item>
                              
                              <Form.Item  name="password"
                                rules={[
                                {
                                required: true,
                                     message: 'Please input your password!',
                                    },
                           ]}> 
                             <Input
                                    placeholder="Password"
                                    enterButton
                                  />
                              </Form.Item>

                              <Form.Item  name="confirm"
                               rules={[
                                {
                                  required: true,
                                  message: 'Please confirm your password!',
                                },
                                ({ getFieldValue }) => ({
                                  validator(rule, value) {
                                    if (!value || getFieldValue('password') === value) {
                                      return Promise.resolve();
                                    }
                                    return Promise.reject('The two passwords that you entered do not match!');
                                  },
                                }),
                              ]}
                            > 
                             <Input
                                    placeholder="Confirm Password"
                                    enterButton
                                  />
                              </Form.Item>


                              <Form.Item label="Option" name="option" rules={[{ required: true }]}>
                                <Select >
                                    <Select.Option value="buyer">Buyer</Select.Option>
                                    <Select.Option value="seller">Vendor</Select.Option>
                                    <Select.Option value="marketer">Marketer</Select.Option>
                                </Select>
                            </Form.Item>

                        <Form.Item >
                        <button class="create-button" htmlType="submit">
                            Submit
                        </button>
                    </Form.Item>

                </Form>

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
    Signup: (username, email, password1, password2, is_buyer) =>
      dispatch(
        actions.authSignup(username, email, password1, password2, is_buyer)
      )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateUser);
