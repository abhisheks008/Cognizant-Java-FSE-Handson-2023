import React, { Component } from 'react';
import './stock.css';
class Stock extends Component {
    
  //IMPLEMENT YOUR CODE HERE. "stockName" and "stockShares" is sent through one props data (i.e) as JSON
  
	render(){
	    const { stockName, stockShares } = this.props.dashValues;
  
	    return (
	        <div>
	        <h1>Stock Securities</h1>
	        <div>
	        <h3>Stock Name</h3>
	        <p>{stockName}</p>
	        </div>
	        <div>
	        <h3>Stock Shares</h3>
	        <p>{stockShares}</p>
	        </div>
	        </div>
	        
	        );
	}
}
  



export default Stock;
