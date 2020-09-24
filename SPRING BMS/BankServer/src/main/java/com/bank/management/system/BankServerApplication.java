package com.bank.management.system;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;
import org.springframework.context.annotation.Bean;
@EnableEurekaServer
@SpringBootApplication
public class BankServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(BankServerApplication.class, args);
	}
	
}
