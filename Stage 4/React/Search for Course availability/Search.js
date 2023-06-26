import React, { Component } from 'react';
import './styles.css';
import courseList from './courseList.json';


class Search extends Component {
    
    constructor(props){
        super(props);
        this.state = {course: "", name: "", submitStatus: false};
        this.displayName = this.displayName.bind(this);
        this.searchCourse = this.searchCourse.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    displayName(e){
        this.setState({...this.state, name: e.target.value});
    }
    
    searchCourse(e){
        let course = `course '${e.target.value}' is currently${courseList.includes(e.target.value) ? " " : " not "}available`;
        this.setState({...this.state, course: course});
    }
    handleSubmit(e){
        e.preventDefault();
        this.setState({...this.state, submitStatus: true});
    }
    
    //IMPLEMENT YOUR CODE HERE
     render(){
        return (
            <div>
            <h1>EXCEL COACHING CENTRE</h1>
            <form>
            <label htmlFor="name">Name</label><br />
            <input id="name" onChange={this.displayName} /><br />
            <label htmlFor="qualification">Qualification</label><br />
            <select id="qualification">
            <option value="BE/BTech">BE/BTech</option>
            <option value="ME/MTech">ME/MTech</option>
            <option value="BCA/MCA">BCA/MCA</option>
            </select>
            <br />
            <label htmlFor="search">Search by Course</label><br />
            <input id="search" onChange={this.searchCourse} /><br />
            <button id="submit" value="Submit" onClick={this.handleSubmit} /><br />
            </form>
            <Display course={this.state.course} name={this.state.name} submitStatus={this.state.submitStatus} />
            </div>
            );
    }
}
class Display extends Component {
		
    //IMPLEMENT YOUR CODE HERE
    render(){
        return (
            <div>
            Welcome to Excel coaching centre!!!<br />
            Hi {this.props.name}, {this.props.course}
            </div>
            );
    }
}

export {Display};
export default Search;

