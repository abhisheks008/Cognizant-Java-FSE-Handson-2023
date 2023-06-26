package com.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ProductController {

	@GetMapping(value="/getInfo")
	public String getDetails() {
	    return " This is product application";
	}
	
}
