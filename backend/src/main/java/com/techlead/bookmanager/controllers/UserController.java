package com.techlead.bookmanager.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.techlead.bookmanager.dto.UserDTO;
import com.techlead.bookmanager.entities.User;
import com.techlead.bookmanager.service.UserService;

@RestController
@RequestMapping(value = "/users")
public class UserController {
	
	@Autowired
	private UserService service;
	
	@GetMapping
	public ResponseEntity<List<UserDTO>> findAll(){
		List<UserDTO> list = service.findAll();
		
		return ResponseEntity.ok(list);
	}


	@PostMapping(value = "/add")
	public ResponseEntity<User> addUser(@RequestBody User user){
		User newUser = service.addUser(user);
		return new ResponseEntity<>(newUser, HttpStatus.CREATED);
		
	}

}
