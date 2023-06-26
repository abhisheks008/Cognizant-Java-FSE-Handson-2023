package com.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bean.Buyer;

@Repository
public interface BuyerRepository extends JpaRepository<Buyer, String>{

}
