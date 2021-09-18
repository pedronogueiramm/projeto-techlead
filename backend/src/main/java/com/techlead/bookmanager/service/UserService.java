package com.techlead.bookmanager.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.techlead.bookmanager.dto.UserDTO;
import com.techlead.bookmanager.entities.User;
import com.techlead.bookmanager.repositories.UserRepository;

@Service
public class UserService {
	
	@Autowired
	UserRepository repository;
	
	@Autowired
	UserRepository userRepository;
	
	@Transactional(readOnly = true)
	public List<UserDTO> findAll(){ 
		userRepository.findAll();
		List<User> result = repository.findAll();
		
		return result.stream().map(x -> new UserDTO(x)).collect(Collectors.toList());
	}
	

	public User addUser(User user) {
		User result = repository.save(user);
		return result;
	}

}
