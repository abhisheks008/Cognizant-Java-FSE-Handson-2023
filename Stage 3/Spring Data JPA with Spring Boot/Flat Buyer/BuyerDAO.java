package com.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import com.bean.Buyer;
import com.bean.Flat;

import com.repository.BuyerRepository;
import com.repository.FlatRepository;


@Component
public class BuyerDAO {

	@Autowired
	private BuyerRepository buyerRepo;
	
	@Autowired
	private FlatRepository flatRepo;
	
	public void addBuyer(Buyer buyer) {
		buyerRepo.save(buyer);
	}
	
	
	public void addFlat(String buyerId, Flat flat) {
		Optional<Buyer> op = buyerRepo.findById(buyerId);
		flat.setBuyer(op.get());
		flatRepo.save(flat);
		
	}
	
	
	public List<Flat> flatWithMinPriceMaxRooms(){
		
		return flatRepo.findFlatWithMinPriceMaxRooms();
	}
	
}
