// Please do not make any changes in the given template
import React, { Component } from 'react';
import './Styles.css';


class ShareMarket extends Component {
  
    // IMPLEMENT YOUR CODE HERE
    
    getCurrentDate(){
        const today = new Date();
        const date = today.getDate() + '-' + (today.getMonth()+1) + '-' + today.getFullYear();
        return date;
    }
    
    /*
    constructor(props){
        super(props);
        
        this.state = {
            currentDate: new Date().toLocaleDateString()
        };
    }
    */
    render(){
        const date = this.getCurrentDate();
        
        return(
            <div>
            <h3>Share Market Statistics</h3>
            <h6>Commodity Report Dated: {date}</h6>
            <HealthCareDB />
            </div>
        );
    }
  
}

class HealthCareDB extends Component {
  
  // IMPLEMENT YOUR CODE HERE
  render(){
        return(
            <div>
            <table border="2">
            <tbody>
            <tr>
            <td>Commodity</td>
            <td>Price</td>
            <td>Change</td>
            <td>Change %</td>
            </tr>
            <tr>
            <td>Health Care</td>
            <td>2500</td>
            <td>100</td>
            <td>2</td>
            </tr>
            </tbody>
            </table>
            </div>
        );
    }
  
}


export {HealthCareDB};
export default ShareMarket;

