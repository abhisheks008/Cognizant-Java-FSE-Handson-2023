package com.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.bean.Flat;

@Repository
public interface FlatRepository extends JpaRepository<Flat, String>{
    
    @Query("select obj from Flat obj where obj.numberOfRooms=(select max(numberOfRooms) from Flat) and obj.flatPrice=(select min(flatPrice) from Flat)")
    List<Flat> findFlatWithMinPriceMaxRooms();
    

	
	
}
