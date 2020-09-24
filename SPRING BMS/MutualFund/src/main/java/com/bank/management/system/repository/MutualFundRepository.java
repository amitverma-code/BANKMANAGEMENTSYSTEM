package com.bank.management.system.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.bank.management.system.model.MutualFund;

public interface MutualFundRepository extends JpaRepository<MutualFund, Long>{
	
	List<MutualFund> findByName(String name);

}