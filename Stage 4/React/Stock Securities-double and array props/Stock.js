import React, { Component } from 'react';
import './stock.css';
class Stock extends Component {
  
   //IMPLEMENT YOUR CODE HERE. "stockSymbol" , "marketPrice" and "options" are sent through one props data (i.e) as JSON
   render(){
       const { stockSymbol, marketPrice, options } = this.props.stocks;
       
       
       return(
            <div>
            <h1>Stock Securities</h1>
            <div>
            <h3>Stock Symbol</h3>
            <p>{stockSymbol}</p>
            </div>
            <div>
            <h3>Market Price</h3>
            <p>{marketPrice}</p>
            </div>
            <div>
            <h3>Options</h3>
            <ul>{options.map((option, index) => (
            <li key={index}>{option}</li>
            ))}
            </ul>
            </div>
            </div>
            
           
        );
   }
}


export default Stock;
