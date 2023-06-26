package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {"com.controller com.model"})
public class EmployeeRestAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(EmployeeRestAppApplication.class, args);
	}

}
