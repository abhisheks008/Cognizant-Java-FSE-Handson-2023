import React, { Component } from 'react';
import './Display.css';
import PropTypes from 'prop-types';

class Display extends Component {

 //IMPLEMENT YOUR CODE   
    
    render(){
        const { movieName, certificate, releasedYear } = this.props;
        
       return (
            <div>
            <h1>Fun Time Ticket</h1>
            <h3>Movie Name</h3>
            <p>{movieName}</p>
            <h3>Certificate</h3>
            <p>{certificate}</p>
            <h3>Released Year</h3>
            <p>{releasedYear}</p>
            </div>
        );
   }
    
}

//IMPLEMENT PROPTYPES

Display.propTypes = {
    movieName: PropTypes.string.isRequired,
    certificate: PropTypes.oneOf(['U', 'A']).isRequired,
    releasedYear: PropTypes.number.isRequired,
};

export default Display;

