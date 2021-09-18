package com.techlead.bookmanager.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.techlead.bookmanager.dto.BookDTO;
import com.techlead.bookmanager.entities.Book;
import com.techlead.bookmanager.repositories.BookRepository;
 
@Service
public class BookService {

	@Autowired
	private BookRepository repository;

	@Autowired
	private BookRepository bookRepository;

	@Transactional(readOnly = true)
	public Page<Object> findAll(Pageable pagealbe){
		bookRepository.findAll();
		Page<Book> result = repository.findAll(pagealbe);
		
		return result.map(x -> new BookDTO(x));
	}

	public void deleteBook(Long id) {
		repository.deleteById(id);

	}


	public Book updateBook(Book book) {
	    return repository.save(book);
	}
	
	public Book addBook(Book book) {

		return repository.save(book);
	}
 
}
