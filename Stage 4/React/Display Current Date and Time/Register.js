// Please do not make any changes in the given template
import React, { Component } from 'react';
import './Styles.css';


class Register extends Component {
    render() {
        return (
            <div>
                <h1>Stock Securities</h1>
                <p>Welcome to one of the leading online platforms for stock trading in the country</p>
                <TimeComp />
            </div>
        );
    }
  
    // IMPLEMENT YOUR CODE HERE

}

class TimeComp extends Component {
  
  // IMPLEMENT YOUR CODE HERE
  getCurrentDateTime() {
      const today = new Date();
      const date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
      const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      return { date, time };
  }
  
  render() {
      const { date, time } = this.getCurrentDateTime();
      return (
          <div>
            <p>You have successfully registered with us on {time} at {date}</p>
          </div>
        );
  }
  

}

export {TimeComp};
export default Register;

