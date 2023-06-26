import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';
import './style.css';
class App extends Component { 
    //use style color as white for Link tag to match the screenshot
  render() { 
    return (
            <Router>
            <div>
            <h1>WeHost</h1>
            <nav>
            <ul>
            <li><Link style={{color: "white"}} to="/">Home</Link></li>
            <li><Link style={{color: "white"}} to="/about">About Us</Link></li>
            <li><Link style={{color: "white"}} to="/contact">Contact Us</Link></li>
            </ul>
            </nav>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            </div>
            </Router>
        ); 
  } 
} 
export default App;
