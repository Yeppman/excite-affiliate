import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';

import { connect } from "react-redux";
import * as actions from "./store/actions/auth";

import './assets/css/Homepage.css'
import './assets/css/ProductsandServcies.css'
import './assets/css/CartandOrder.css'
import './assets/css/customForms.css'

import './assets/css/enterprise.css'
import './assets/css/dashboard.css'
import './assets/css/payment.css'
import './assets/css/logicstics.css'
import './assets/css/inventory.css'
import './assets/css/post_item_cards.css'
import './assets/css/post_create.css'
import './assets/css/AuthandForm.css'
import './assets/css/unveil.css'
import './assets/css/sidebar.css'
import './assets/css/payment.css'
import './App.css'
import './assets/css/antd-override.css'

import './assets/css/cart.css'


// import * as actions from "./store/actions/auth";
import "tailwindcss/dist/base.css";

import CustomLayout from "./layout"
import BaseRouter from './routes'

class App extends Component {
  
  componentDidMount() {
    this.props.onTryAutoSignup();
  }

    render() {
        return (
            <div>
            <Router>
              <CustomLayout  {...this.props}>
                  <BaseRouter />
              </CustomLayout>
            </Router>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      isAuthenticated: state.auth.token !== null
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      onTryAutoSignup: () => dispatch(actions.authCheckState())
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(App);