import React, { Component } from 'react';
import './styles.css';

class Quote extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            likes: 0,
        };
    }
    
    handleLikeClick = () => {
        this.setState((prevState) => ({
            likes: prevState.likes + 1,
        }));
    };
	
	//IMPLEMENT YOUR CODE HERE. 
   render(){
return (
        <div>
        <h2>Quote for the Day</h2>
        <h3>"If you are tired, learn to rest, Not quit."</h3>
        <h5 onClick={this.handleLikeClick}>
        Hit here to like: {this.state.likes} likes
        </h5>
        </div>
    
    );
}
    
}

export default Quote;
