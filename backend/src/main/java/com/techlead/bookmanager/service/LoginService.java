package com.techlead.bookmanager.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.techlead.bookmanager.repositories.UserRepository;

@Service
public class LoginService {
	
	@Autowired
	UserRepository loginRepository;
	
	@Transactional(readOnly = true)
	public Long fakeAuth(String email, String password){
		Long result = loginRepository.fakeAuth(email, password);
		
		return result;
	}
	
	

}
