package com.techlead.bookmanager.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.techlead.bookmanager.dto.UserDTO;
import com.techlead.bookmanager.repositories.UserRepository;

@Service
public class LoginService {
	
	@Autowired
	UserRepository loginRepository;
	
	@Transactional(readOnly = true)
	public UserDTO findByEmailAndPassword(String email, String password){
		UserDTO result = loginRepository.findByEmailAndPassword(email, password);
		
		return result;
	}
	
	

}
