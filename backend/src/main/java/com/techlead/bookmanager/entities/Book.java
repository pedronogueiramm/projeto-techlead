package com.techlead.bookmanager.entities;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "tb_books")
public class Book {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String name;
	private String detail;
	private LocalDate releaseDate;
	private Boolean active;
	
	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;

	public Book() {

	}

	public Book(Long id, String name, String detail, LocalDate releaseDate, User user) {
		super();
		this.id = id;
		this.name = name;
		this.detail = detail;
		this.releaseDate = releaseDate;
		this.user = user;
	}
	
	public Book(Book book) {
		super();
		this.id = book.getId();
		this.name = book.getName();
		this.detail = book.getDetail();
		this.releaseDate = book.releaseDate;
		this.user = new User(book.getUser());
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDetail() {
		return detail;
	}

	public void setDetail(String detail) {
		this.detail = detail;
	}

	public LocalDate getreleaseDate() {
		return releaseDate;
	}

	public void setreleaseDate(LocalDate releaseDate) {
		this.releaseDate = releaseDate;
	}
	

	public Boolean getActive() {
		return active;
	}

	public void setActive(Boolean active) {
		this.active = active;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

}
