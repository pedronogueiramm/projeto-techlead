package com.techlead.bookmanager.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.techlead.bookmanager.entities.Book;


public interface BookRepository extends JpaRepository<Book, Long> {

	Optional<Book> findById(Long id);
	
	void deleteById(Long id);

	@SuppressWarnings("unchecked")
	Book save(Book book);


}
