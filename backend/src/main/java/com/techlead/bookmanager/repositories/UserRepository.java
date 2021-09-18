package com.techlead.bookmanager.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.techlead.bookmanager.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {
	
	@Query("SELECT obj.id FROM User obj WHERE obj.email = ?1 AND obj.password = ?2")
	Long fakeAuth(String email, String password);

	@SuppressWarnings("unchecked")
	User save(User user);

}
 