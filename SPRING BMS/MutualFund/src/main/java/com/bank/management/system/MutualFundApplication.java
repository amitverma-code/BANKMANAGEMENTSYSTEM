package com.bank.management.system;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
@EnableEurekaClient
@SpringBootApplication
public class MutualFundApplication {

	public static void main(String[] args) {
		SpringApplication.run(MutualFundApplication.class, args);
	}

}
