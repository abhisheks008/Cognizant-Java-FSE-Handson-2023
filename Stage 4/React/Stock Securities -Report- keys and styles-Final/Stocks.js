// Please do not make any changes in the given code template
import React, { Component } from 'react';

const data=[    
		{"id":"ST1", "Stock":"Apple", "Price":"$150"},    
		{"id":"ST2", "Stock":"Amazon", "Price":"$3500"},
		{"id":"ST3", "Stock":"Alibaba Group","Price":"$175"},
		{"id":"ST4", "Stock":"Johnson & Johnson","Price":"$160"},
	]; 
	
const styles={
    tableCSS :{
      border: '1px solid black',
      borderCollapse: 'collapse',
    },
    tdCSS :{
       border: '1px solid black',
      borderCollapse: 'collapse',
        padding: '15px',
        textAlign: 'left',
    }
};

class Stocks extends Component {
	//IMPLEMENT YOUR CODE HERE

	render(){
	    
	   
	    
	    return (
	        
	        <div>
	        <h1 style={{textAlign:"center"}}>STOCK SECURITIES</h1>
	        <h2 style={{textAlign:"center"}}>REPORT</h2>
	        <table style={styles.tableCSS}>
	        {data.map(s => (<Display stocks={s} key={s.id} />))}
	        </table>
	        </div>
	        );
	}
}

class Display extends Component {
	//IMPLEMENT YOUR CODE HERE
	render(){
	    const { stocks } = this.props;
	    
	    return(
	        <tr>
	        <td style={styles.tdCSS}>{this.props.stocks.id}</td>
	        <td style={styles.tdCSS}>{this.props.stocks.Stock}</td>
	        <td style={styles.tdCSS}>{this.props.stocks.Price}</td>
	        </tr>
	        
	        
	   );
	}
}

export {Display}
export default Stocks

