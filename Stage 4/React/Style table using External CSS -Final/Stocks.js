// Please do not make any changes in the given code template
import React, { Component } from 'react';
//ADD REQUIRED IMPORTS
import './stocks.css';

var data=[    
		{"id":"ST1", "Stock":"Apple", "Price":"$150"},    
		{"id":"ST2", "Stock":"Amazon", "Price":"$3500"},
		{"id":"ST3", "Stock":"Alibaba Group","Price":"$175"},
		{"id":"ST4", "Stock":"Johnson & Johnson","Price":"$160"},
	];  

class Stocks extends Component {
	//IMPLEMENT YOUR CODE HERE
	constructor(props){
	    super(props);
	    this.state = { stocks: data };
	}
	
		render(){
	      return (
	          <>
        	    <h1 style={{textAlign:"center"}}> STOCK SECURITIES</h1>
        	    <h2 style={{textAlign:"center"}}>REPORT</h2>
        	    <table className="tableCSS">
        	    {this.state.stocks.map(s => (<Display stocks={s} key={s.id} />))}
        	    </table>
        	  </>
	        
	        );
	}
}

class Display extends Component {
	  //IMPLEMENT YOUR CODE HERE 
	render(){
	    
	    
	    return (
	        
	        <tr>
	        <td className="tdCSS">{this.props.stocks.id}</td>
	        <td className="tdCSS">{this.props.stocks.Stock}</td>
	        <td className="tdCSS">{this.props.stocks.Price}</td>
	        </tr>
	        );
	}
}

export {Display};
export default Stocks;

