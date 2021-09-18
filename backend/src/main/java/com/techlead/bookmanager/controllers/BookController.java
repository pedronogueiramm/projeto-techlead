package com.techlead.bookmanager.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.techlead.bookmanager.entities.Book;
import com.techlead.bookmanager.service.BookService;

@RestController
@RequestMapping(value = "/books")
public class BookController {

	@Autowired
	private BookService service;

	@GetMapping
	public ResponseEntity<Page<Object>> findAll(Pageable pageable) {
		Page<Object> list = service.findAll(pageable);
		return ResponseEntity.ok(list);
	}
	
	@PostMapping(value = "/add")
	public ResponseEntity<Book> addBook(@RequestBody Book book){
		Book newBook = service.addBook(book);
		return new ResponseEntity<Book>(newBook,HttpStatus.OK);
		
	}
	
	@PutMapping(value = "/update")
	public ResponseEntity<Book> updateBook(@RequestBody Book book){
		Book updateTheBook = service.updateBook(book);
		return ResponseEntity.ok(updateTheBook);
		
	}
	
	@DeleteMapping(value = "/delete/{id}")
	public ResponseEntity<?> deleteBook(@PathVariable("id") Long id){
		service.deleteBook(id);
		return ResponseEntity.ok(null);
	}
	

}
