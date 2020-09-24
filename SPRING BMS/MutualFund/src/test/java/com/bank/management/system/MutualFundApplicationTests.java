package com.bank.management.system;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.stream.Collectors;
import java.util.stream.Stream;
import org.junit.jupiter.api.Test;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.bank.management.system.model.MutualFund;
import com.bank.management.system.repository.MutualFundRepository;
import com.bank.management.system.service.MutualFundService;

@SpringBootTest
class MutualFundApplicationTests {

	@Autowired
	private MutualFundService mutualFundService;
	@MockBean
	MutualFundRepository mutualFundRepository;
	@Test
	public void getAllMutualFundTest(){
		when(mutualFundRepository.findAll()).thenReturn(Stream
				.of(new MutualFund(344,"HDFC"),new MutualFund(345,"Axis")).collect(Collectors.toList()));
	assertEquals(2, mutualFundService.getAllMutualFund().size());
	}
	
}
