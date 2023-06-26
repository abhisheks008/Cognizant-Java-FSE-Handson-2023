import React, { Component } from 'react';
import './style.css';



class Info extends Component {
	//IMPLEMENT YOUR CODE HERE. 
    render()
    {
    return( 
        <div>
        <h1>Share Market Investments</h1>
        <h2>Hello Client!</h2>
        <HealthCare client={this.props.client} />
        <TeleCom client={this.props.client} />
        </div>
        );
    }   
}
class HealthCare extends React.Component{
	//IMPLEMENT YOUR CODE HERE. Declare state variable here
	constructor(props){
	    super(props);
	    this.state = {
	        stockNotation: this.props.client.hc_stockNotation,
	        quantity: this.props.client.hc_quantity,
	        stockValue: this.props.client.hc_stockValue,
	        totalValue: this.props.client.hc_quantity * this.props.client.hc_stockValue
	    };
	}
	
    render(){
    return(
            <div>
            <h2>Client's Investment in HealthCare</h2>
            <table border="1">
            <thead>
            <tr>
            <th>Stock Notation</th>
            <th>Quantity</th>
            <th>Stock Value</th>
            <th>Total Value</th>
            </tr>
            </thead>
            <tbody>
            <tr>
            <td>{this.state.stockNotation}</td>
            <td>{this.state.quantity}</td>
            <td>{this.state.stockValue}</td>
            <td>{this.state.totalValue}</td>
            </tr>
            </tbody>
            </table>
            </div>
        );
    }

}  


class TeleCom extends React.Component{
	//IMPLEMENT YOUR CODE HERE. Declare state variable here
	constructor(props){
	    super(props);
	    this.state = {
	        stockNotation: this.props.client.tc_stockNotation,
	        quantity: this.props.client.tc_quantity,
	        stockValue: this.props.client.tc_stockValue,
	        totalValue: this.props.client.tc_quantity * this.props.client.tc_stockValue
	    };
	}

render(){
return (
        <div>
            <h2>Client's Investment in TeleCom</h2>
            <table border="1">
            <thead>
            <tr>
            <th>Stock Notation</th>
            <th>Quantity</th>
            <th>Stock Value</th>
            <th>Total Value</th>
            </tr>
            </thead>
            <tbody>
            <tr>
            <td>{this.state.stockNotation}</td>
            <td>{this.state.quantity}</td>
            <td>{this.state.stockValue}</td>
            <td>{this.state.totalValue}</td>
            </tr>
            </tbody>
            </table>
        </div>
    
    );
}

}  
 
export {TeleCom}
export {HealthCare}
export default Info;
