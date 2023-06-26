// Please do not make any changes in the given code template

import React, { Component } from 'react';
import './styles.css';

class CourseDetails extends Component{
        //IMPLEMENT YOUR CODE HERE. 
        constructor(props){
            super(props);
            this.state = {
                course: ''
            };
            this.handleChange = this.handleChange.bind(this);
        }
        
        handleChange(event){
            this.setState({ course: event.target.value });
        }
        render(){
            return(
                <div>
                <h1>ZION - The Training Academy</h1>
                <label>Select the course:</label>
                <select id="course" onChange={this.handleChange}>
                <option value="">Select a course</option>
                <option value="Java">Java</option>
                <option value="React">React</option>
                <option value="Angular">Angular</option>
                </select>
                <h4>Selected Course: {this.state.course}</h4>
                </div>
                );
        }
        
}
export default CourseDetails;