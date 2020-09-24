package com.bank.management.system.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.bank.management.system.model.MutualFund;
import com.bank.management.system.repository.MutualFundRepository;

@Service
@Transactional
public class MutualFundService {
    
	@Autowired
	MutualFundRepository mutaulFundRepository;
	
	
	
	public List<MutualFund> getAllMutualFund(){
		return mutaulFundRepository.findAll();
		
	}
	
	public void addMutualFund(MutualFund mutualFund){
		mutaulFundRepository.save(mutualFund);
	}
	
	@Transactional
	public List<MutualFund> findByNameMutual(String name) {
		
		return mutaulFundRepository.findByName(name);
	}
	
	
	
}