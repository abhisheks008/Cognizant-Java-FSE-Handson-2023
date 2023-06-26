// Please do not make any changes in the given code template
import React, { Component } from 'react';
import './styles.css';

//DO NOT CHANGE THE BELOW applicantsList INITIALIZATION
const applicantsList = [
	{
	   rollNo: 114,
	   name: 'Dean',
	   age: 22
	},
	{
	   rollNo: 325,
	   name: 'Carl Marx',
	   age: 25
	},
	{
	    rollNo: 120,
	    name: 'Bobby', 
	    age: 24
	},
	{
	    rollNo: 23,
	    name: 'Alice Dyana',
	    age: 22
	},
	{
	    rollNo: 35,
	    name: 'Ethan Donald',
	    age: 21
	},
  ];
 
class List extends React.Component {
	
	//IMPLEMENT YOUR CODE HERE. 
	
	render(){
	    
	    return( 
	        
	        <>
	        <h1>ZION - The Training Academy</h1>
	        <table>
	        <tr>
	        <th>Roll No</th>
	        <th>Applicant Name</th>
	        <th>Age</th>
	        </tr>
	        {applicantsList.sort((a,b) => (a.rollNo - b.rollNo)).map((e) => (
	        <tr>
	        <td>{e.rollNo}</td>
	        <td>{e.name}</td>
	        <td>{e.age}</td>
	        </tr>
	        ))}
	        </table>
	        </>
	    );
	}
   
}

export default List;
