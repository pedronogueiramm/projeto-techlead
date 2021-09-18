package com.techlead.bookmanager.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.techlead.bookmanager.dto.UserDTO;
import com.techlead.bookmanager.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {
	
	//@Query("SELECT * FROM User obj WHERE obj.email = ?1 AND obj.password = ?2")
	UserDTO findByEmailAndPassword(String email, String password);

	@SuppressWarnings("unchecked")
	User save(User user);

}
 