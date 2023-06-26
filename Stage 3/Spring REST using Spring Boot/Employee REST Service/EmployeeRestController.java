package com.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;
import com.model.Employee;
import com.model.Company;

//include the required annotation to make EmployeeRestController as RestController
@RestController
public class EmployeeRestController {
    
        @Autowired
        private Company companyObj;

	    @RequestMapping(value = "/employees")
	 	public  List<Employee> getAllEmployees() 
	    {
	        //Include the required business logic to return the list of employees

	        return companyObj.getEmpList();
	         
	     }
	     
}
