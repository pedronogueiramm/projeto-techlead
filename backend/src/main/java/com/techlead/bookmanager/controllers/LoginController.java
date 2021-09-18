package com.techlead.bookmanager.controllers;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.techlead.bookmanager.dto.UserDTO;
import com.techlead.bookmanager.service.LoginService;

@RestController
@RequestMapping(value = "/login")
public class LoginController {
	
	private String decode(String value) {
	    try {
			return URLDecoder.decode(value, StandardCharsets.UTF_8.toString());
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		return value;
	}

	@Autowired
	private LoginService service;
	
	@GetMapping
	public ResponseEntity<UserDTO> fakeAuth(String email, String password){
		UserDTO user = service.findByEmailAndPassword(decode(email),password);
		
		return ResponseEntity.ok(user);
	}
}
