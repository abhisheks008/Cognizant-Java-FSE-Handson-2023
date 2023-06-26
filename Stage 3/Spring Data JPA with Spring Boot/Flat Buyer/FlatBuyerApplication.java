package com;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.dao.BuyerDAO;

@SpringBootApplication
public class FlatBuyerApplication implements CommandLineRunner {
    
    @Autowired
    private BuyerDAO buyerDAO;

	public static void main(String[] args) {
		
		SpringApplication app = new SpringApplication(FlatBuyerApplication.class);
       
        app.run(args);
	}
	
	@Override
	public void run(String... args) throws Exception {
		System.out.println("Invoke the methods");
    }
}
