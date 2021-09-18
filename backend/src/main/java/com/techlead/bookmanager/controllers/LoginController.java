package com.techlead.bookmanager.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.techlead.bookmanager.service.LoginService;

@RestController
@RequestMapping(value = "/login")
public class LoginController {

	@Autowired
	private LoginService service;
	
	@GetMapping
	public ResponseEntity<Long> fakeAuth(String email, String password){
		Long idUser = service.fakeAuth(email,password);
		
		return ResponseEntity.ok(idUser);
	}
}
