package com.model;

import java.util.ArrayList;

import org.springframework.stereotype.Component;

@Component
public class Company {
	
	
	private ArrayList<Employee> empList=new ArrayList<Employee>();

	public ArrayList<Employee> getEmpList() {
		return empList;
	}

	public void setEmpList(ArrayList<Employee> empList) {
		this.empList = empList;
	}
	
	public Company()
	{
		 Employee empOne = new Employee(1,"Tom","David","tom@gmail.com");
	     Employee empTwo = new Employee(2,"Peter","Churchill","peter@yahoo.com");
	     Employee empThree = new Employee(3,"Joseph","Xavier","joseph@gmail.com");
	     empList.add(empOne);
	     empList.add(empTwo);
	     empList.add(empThree);
	}
	
	
	

}
