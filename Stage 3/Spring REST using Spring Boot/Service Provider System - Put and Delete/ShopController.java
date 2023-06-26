package com.controller;

import java.util.List;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PutMapping;


import com.model.Connection;
import com.service.ProviderService;

@RestController
public class ShopController {	
	
	@Autowired
	private ProviderService providerService;
	
	@PutMapping("/SPS/updateConnectionType/{connectionNum}/{connectionType}")
    public boolean updateConnectionType(@PathVariable("connectionNum") Integer connectionNum,@PathVariable("connectionType") String connectionType) {	
        return providerService.updateConnectionType(connectionNum, connectionType);
    }
    
    @DeleteMapping("/SPS/deleteConnection/{connectionNum}")
   	public boolean deleteConnection(@PathVariable("connectionNum") Integer connectionNum)	{
		return providerService.deleteConnection(connectionNum);
	}	

}