import React,{ Component } from 'react';
import './Styles.css';
class AppleStock extends Component {
    // IMPLEMENT YOUR CODE HERE
    constructor(props){
        super(props);
        this.state = {
            name: "Apple Inc. Common Stock",
            lastSale: 138.27,
            netChange: 2.92,
            percentageChange: 2.197
        };
    }
    render() {
        const { name, lastSale, netChange, percentageChange } = this.state;
      return (
            <div>
            <h1>Stock Securities</h1>
            <h3>{name} - Market Today</h3>
            <p>The last sale: {lastSale}</p>
            <p>Net Change: {netChange}</p>
            <p>Percentage Change: {percentageChange}</p>
            </div>
        );
    }
  }
  
//  EXPORT DEFAULT COMPONENT

  export default AppleStock;
   