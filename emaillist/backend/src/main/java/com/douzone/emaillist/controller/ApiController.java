package com.douzone.emaillist.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.douzone.emaillist.dto.JsonResult;
import com.douzone.emaillist.repository.EmaillistRepository;
import com.douzone.emaillist.vo.EmailVo;



@RestController
@RequestMapping("/api")
public class ApiController {
	
	@Autowired
	private EmaillistRepository emaillistRepository;
	
	@GetMapping("/emaillist")
	public ResponseEntity<JsonResult> readEmail() {
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(emaillistRepository.findAll()));
	}
	
	@PostMapping("/emaillist")
	public ResponseEntity<JsonResult> createEmail(@RequestBody EmailVo emailVo) {
		emaillistRepository.insert(emailVo);
		
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(emailVo));
	}
	
	@DeleteMapping("/emaillist/{no}")
	public ResponseEntity<JsonResult> createEmail(@PathVariable("no") Long no) {
		emaillistRepository.delete(no);
		
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(no));
	}


}
