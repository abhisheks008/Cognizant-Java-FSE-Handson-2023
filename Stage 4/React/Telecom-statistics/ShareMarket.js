// Please do not make any changes in the given template

import React, { Component } from 'react';
import './Styles.css';


const ShareMarket=()=> {
  
    // IMPLEMENT YOUR CODE HERE
    /*
    getCurrentDate(){
        const today = new Date();
        const date = today.getDate() + '-' + (today.getMonth()+1) + '-' + today.getFullYear();
        return date;
    }
    */
    const today = new Date();
    const date = `${today.getDate()}-${today.getMonth()+1}-${today.getFullYear()}`;
    
    //render(){
        //const date = this.getCurrentDate();
        return (
            <div>
            <h1>Share Market Statistics</h1>
            <h3>Commodity Report Dated: {date}</h3>
            <Telecom/>
            </div>
        );
           
    }
    


class Telecom extends React.Component {
  
  // IMPLEMENT YOUR CODE HERE
  render(){
      const commodity = 'Telecom';
      const price = 3000;
      const change = 200;
      const percentage = 3;
      
      return(
            <div>
            <table border="2">
            <tr>
            <td><b>Commodity</b></td>
            <td><b>Price</b></td>
            <td><b>Change</b></td>
            <td><b>Change %</b></td>
            </tr>
            <tbody>
            <tr>
            <td>{commodity}</td>
            <td>{price}</td>
            <td>{change}</td>
            <td>{percentage}</td>
            </tr>
            </tbody>
            </table>
            </div>
        );
  }

  
}

export {Telecom};
export default ShareMarket;