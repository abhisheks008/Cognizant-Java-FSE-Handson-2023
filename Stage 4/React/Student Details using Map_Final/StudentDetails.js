// Please do not make any changes in the given code template
import React, { Component } from 'react';
import './styles.css';

//DO NOT CHANGE THE BELOW list INITIALIZATION
const studentsList = [
  {
    id: 'RS001',
    firstname: 'Robin',
    lastname: 'Wieruch',
    course:'Bio-tech',
    batch: '2013-2017',
  },
  {
    id: 'RS002',
    firstname: 'Dave',
    lastname: 'Johnson',
    course: 'IT',
    batch: '2014-2018',
  },
];
 
class StudentsDetails extends React.Component {
	//IMPLEMENT YOUR CODE HERE. 
		render(){
	    return( 
	        <div>
	        <h1>ZION - The Training Academy</h1>
	        {studentsList.map((student) => (
	        <dl key={student.id}>
	        <dt>Id: {student.id}</dt>
	        <dd>Student Name: {student.firstname + " " + student.lastname}</dd>
	        <dd>Course: {student.course}</dd>
	        <dd>Batch: {student.batch}</dd>
	        </dl>
	        ))}
	        </div>
	    );
	}
   
}

export default StudentsDetails;
