package com.model;

public class Employee
{
    private int empId;
    private String firstName;
    private String lastName;
    private String email;
     
    public Employee(int empId, String firstName, String lastName, String email) {
        super();
        this.empId = empId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
     
    public Employee(){
         
    }
 
    public Integer getEmpId() {
        return empId;
    }
 
    public void setEmpId(int empId) {
        this.empId = empId;
    }
 
    public String getFirstName() {
        return firstName;
    }
 
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
 
    public String getLastName() {
        return lastName;
    }
 
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
 
    public String getEmail() {
        return email;
    }
 
    public void setEmail(String email) {
        this.email = email;
    }
    
}