package com.bank.management.system.controller;

	import java.util.List;

	import javax.validation.Valid;

	import org.springframework.beans.factory.annotation.Autowired;
	import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
	import org.springframework.web.bind.annotation.PathVariable;
	import org.springframework.web.bind.annotation.PostMapping;
	import org.springframework.web.bind.annotation.RequestBody;
	import org.springframework.web.bind.annotation.RequestMapping;
	import org.springframework.web.bind.annotation.RequestMethod;
	import org.springframework.web.bind.annotation.ResponseBody;
	import org.springframework.web.bind.annotation.RestController;

	import com.bank.management.system.model.MutualFund;
	import com.bank.management.system.repository.MutualFundRepository;
	import com.bank.management.system.service.MutualFundService;


	@RestController
	
	public class MutualFundController {
		
		@Autowired
		MutualFundService mutualFundService;
		
		@Autowired
		MutualFundRepository repo;
		
		@GetMapping("/mutuals")
		public List<MutualFund> getAllMutualFunds(){
			return mutualFundService.getAllMutualFund();
		}
		
		@PostMapping("/addmutual")
		public void addMutualFund(@Valid @RequestBody MutualFund mutualFund) {
			mutualFundService.addMutualFund(mutualFund);
		}
		
		@RequestMapping(value = "/mutual/{name}", method = RequestMethod.GET)
		public List<MutualFund> getallAccountdetails(@PathVariable String name) {
			return mutualFundService.findByNameMutual(name) ;
		}

}
