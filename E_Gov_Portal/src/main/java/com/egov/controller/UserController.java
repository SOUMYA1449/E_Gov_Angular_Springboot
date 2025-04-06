package com.egov.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.egov.entity.User;
import com.egov.response.LoginResponse;
import com.egov.services.UserServices;

@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UserController {

	@Autowired
	UserServices userservices;

	@PostMapping("/adduser")
	public User addUser(@RequestBody User user) {
		return userservices.addUser(user);
	}

	@PostMapping("/login")
	public ResponseEntity<LoginResponse> authenticateUser(@RequestBody User user) {
		// This call now returns ResponseEntity<LoginResponse>
		return userservices.authenticateUser(user.getEmail(), user.getPassword());
	}

	@GetMapping("/alluser")
	public List<User> alUser() {
		return userservices.allUser();
	}

}
