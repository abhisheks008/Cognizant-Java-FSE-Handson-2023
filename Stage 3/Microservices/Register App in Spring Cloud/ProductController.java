package com.controller;

import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.model.Product;

@RestController
public class ProductController {

	@GetMapping(value="/getDetails")
	public Product getProdctDetails() {
	    Product prod = new Product();
		prod.setName("prod1");
		prod.setCode("PA101");
		prod.setCategory("Dress");
		return prod;
	}
	
}
