import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';
import {Bar, Line} from 'react-chartjs-2';
import axios from "axios";
import { connect } from "react-redux";
//import {notification,message, Statistic} from 'antd'
//import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

//import TemporaryDrawer from '../Sidebar/SideNav'

const Post_Analytics_url = 'http://127.0.0.1:8000/analytics/full_analysis/'

const host = 'http://127.0.0.1:8000'
const products_analysis_endpoint = host + `/analytics/product_views/`
const views_count_endpoint = host + '/analytics/count_products/'

var Main = []

export default class dummyData extends Component{
    state = {
       
        chartData : [],
        loading : false ,
        error : null , 
        
        chartData : [],
          }
    

    DummyAnalysis = async(token)=>{
      
   const Months = ['July','August', 'Sept','Oct','Nov','December']
    let Views = []
    for (let i = 0; i<6; i++){
        let taker = Math.floor(Math.random() * 150)
        Views.push(taker)

    }

    this.setState({
        chartData:{
          labels: Months,
          datasets:[
            {
              label:'Impressions',
              data: Views,
              backgroundColor:[
               
               'rgb(9, 173, 50)',
               'rgb(9, 173, 50)',
               'rgb(9, 173, 50)',
                 
               'rgb(9, 173, 50)',
               'rgb(9, 173, 50)',
               'rgb(9, 173, 50)',
              ]
            }
          ]
        }
    })
    console.log('Products Data',Main)
    console.log('Chart Labels', this.state.Allocated_products_analysis_data)

    //Caculates Average and Total Impressions
   
    //Products Analysis Functions ends here
    }


        Insights = (token)=>{
            axios.defaults.headers = {
              "Content-Type": "application/json",
              Authorization: `Token ${token}`
            };
            axios.get(views_count_endpoint)
            .then(res =>{
                this.setState({
                  Total_Product_Views:res.data.TotalViews,
                  Average_Product_Views:Math.round(res.data.AverageViews),
                  Count_Products:res.data.Count,
                });
                console.log('Impression',res.data)
            })
            .catch(e =>{
                console.log(e)
            })
        }

        componentDidMount(){
            
              this.DummyAnalysis()
             // this.Products_Analysis(this.props.token)
             }
          
         
      
            componentWillReceiveProps(newProps) {
              if (newProps.token !== this.props.token) {
                if (newProps.token !== undefined && newProps.token !== null) {
               
                  //this.Insights(newProps.token)
                ///  this.Products_Analysis(newProps.token)

                }
              }
            }

            render(){
                const { Total_Product_Views,  Average_Product_Views , Count_Products} = this.state
                return(
                
                    <>
                       
                    <div className="main">

                        <div className="fitter">
                        
                        <div className="infograph-card">
  
                          <ul>
            
                                <li className="">
                                    <div className="">
                                        <p className="Header">
                                        Total  Users
                                        </p>
  
                                        <div className="subHeader">
                                          <div className="left">
                                        
                                        <p>
                                        {Average_Product_Views} 
                                        </p>
  
                                          </div>
  
                                          <div className="right">
                                          
                                          </div>
  
                                        </div>
  
                                      </div>
                                    </li>
  
                                    <li className="">
                                    <div className="">
                                        <p className="Header">
                                        Registered Today
                                        </p>
  
                                        <div className="subHeader">
                                          <div className="left">
                                         <p>{Total_Product_Views}</p> 
                                          </div>
  
                                          <div className="right">
                                          
                                          </div>
  
                                        </div>
  
                                      </div>
                                    </li>
  
                                    <li className="">
                                      <div className="">
                                          <p className="Header">
                                           Verified
                                          </p>
  
                                          <div className="subHeader">
                                            <div className="left">
                                               
                                            <a href={`/vendor_quotes/`}>
                                                Click
                                                </a>
  
                                            </div>
  
                                            <div className="right">
                                            
                                            </div>
  
                                          </div>
  
                                      </div>
                                    </li>

                                    <li className="">
                                      <div className="">
                                          <p className="Header">
                                           Products
                                          </p>
  
                                          <div className="subHeader">
                                            <div className="left">
                                               
                                            {Count_Products}

                                            </div>
  
                                            <div className="right">
                                            
                                            </div>
  
                                          </div>
  
                                      </div>
                                    </li>
  
                                  </ul>  
                                  </div>

                        </div>
                   
                   <div className="fitter">
                            
                            <div className="page-grid">
                                <div className="left">

                                <div className="oneBox-section">
                        <div className=".box ">
                        <div 
                     className="base-card ">
                     <Bar
                           className =""
                           data={this.state.chartData}
                           options={{
                            responsive: true,
                           maintainAspectRatio : true,
                           title:{
                           display:this.props.displayTitle,
                           text:'Largest Cities In '+this.props.location,
                           fontSize:25
                           },
                           legend:{
                           display:this.props.displayLegend,
                           position:this.props.legendPosition
                           
                           }
                           }}
                      />
                     </div>
                        </div>
                    </div>

             </div>

                            </div>

                            </div>



                        </div>

                    </>


                )
            }


}


