import React , { Component } from 'react';
import axios from  'axios';

export default class CustomLayout extends Component{
     
    render(){
    return(
        <div>
          {this.props.children}        
        </div>
        )
    }

} 
 