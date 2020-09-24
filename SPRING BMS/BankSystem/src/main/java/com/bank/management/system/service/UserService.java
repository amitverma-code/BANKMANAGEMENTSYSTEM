package com.bank.management.system.service;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.bank.management.system.model.Account;
import com.bank.management.system.model.Investment;
import com.bank.management.system.model.UserDao;
import com.bank.management.system.repository.UserRepository;
import com.bank.management.system.repository.UserRepository1;

@Service
public class UserService {

	@Autowired
	UserRepository userRepository;
	
	@Autowired
	UserRepository1 userRepository1;
	
	
	
	@Transactional
	public List<UserDao> findUser(String username) {
		
		return userRepository1.findByUsername(username);
	}
	public List<UserDao> getAllUserList(){
		return userRepository.findAll();
		
	}
}
