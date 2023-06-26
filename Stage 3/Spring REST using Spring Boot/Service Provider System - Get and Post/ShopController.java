package com.controller;

import java.util.List;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.PathVariable;

import com.model.Connection;
import com.service.ProviderService;

@RestController
public class ShopController {	
	
	@Autowired
	private ProviderService providerService;
	
	@RequestMapping(value = "/SPS/addConnection",method = RequestMethod.POST)
	public boolean addConnection(Connection connectionObj) {		
		return providerService.addConnection(connectionObj);
	}
	
    @RequestMapping(value = "/SPS/findConnectionById/{connectionNum}", method = RequestMethod.GET)
	public Connection findConnectionById(@PathVariable("connectionNum") Integer connectionNum) {
			return providerService.findConnectionById(connectionNum);
	}

	@RequestMapping(value = "/SPS/findAllConnection", method = RequestMethod.GET)	
	public List<Connection> findAllConnection() {
		return providerService.viewAllConnections();
	}	
	
}
