package com.egov.entity;

import jakarta.persistence.*;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String name;
	private String email;
	private String password;
	private String type;

	public User(int id, String name, String email, String password, String type, List<Documents> documents) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.password = password;
		this.type = type;
		this.documents = documents;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	@OneToMany(mappedBy = "uid", cascade = CascadeType.ALL)
	@JsonBackReference
	private List<Documents> documents;

	@OneToMany(mappedBy = "uid", cascade = CascadeType.ALL)
	@JsonBackReference("user-schemes")
	private List<SchemesApplid> schemesapplied;

	@OneToMany(mappedBy = "uid", cascade = CascadeType.ALL)
	@JsonBackReference("user-payment")
	private List<Payment> payments;

	@OneToMany(mappedBy = "uid", cascade = CascadeType.ALL)
	@JsonBackReference("user-tender")
	private List<AppliedTenders> ppliedtenders;

	// Constructors, getters, setters, and toString method
	public User() {
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public List<Documents> getDocuments() {
		return documents;
	}

	public void setDocuments(List<Documents> documents) {
		this.documents = documents;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", name=" + name + ", email=" + email + ", password=" + password + ", type=" + type
				+ ", documents=" + documents + "]";
	}
}
