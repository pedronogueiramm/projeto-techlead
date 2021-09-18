package com.techlead.bookmanager.dto;

import java.time.LocalDate;

import com.techlead.bookmanager.entities.Book;

public class BookDTO {

	private Long id;
	private String name;
	private String detail;
	private LocalDate releaseDate;
	private Boolean active;
	private UserDTO user;

	public BookDTO() {

	}

	public BookDTO(Long id, String name, String detail, LocalDate releaseDate, Boolean active, UserDTO user) {
		super();
		this.id = id;
		this.name = name;
		this.detail = detail;
		this.releaseDate = releaseDate;
		this.active = active;
		this.user = user;
	}

	public BookDTO(Book entity) {
		this.id = entity.getId();
		this.name = entity.getName();
		this.detail = entity.getDetail();
		this.releaseDate = entity.getreleaseDate();
		this.active = entity.getActive();
		this.user = new UserDTO(entity.getUser());
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

	public UserDTO getUser() {
		return user;
	}

	public void setUser(UserDTO user) {
		this.user = user;
	}

}
