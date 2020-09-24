package com.bank.management.system.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.bank.management.system.model.UserDao;

public interface UserRepository1 extends JpaRepository<UserDao, Integer> {
	
    List<UserDao> findByUsername(String username);
    
    
}