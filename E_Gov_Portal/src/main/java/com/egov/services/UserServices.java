package com.egov.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.egov.entity.User;
import com.egov.repos.UserRepo;
import com.egov.response.LoginResponse;


@Service
public class UserServices {

	@Autowired
	UserRepo userrepo;
	
	public User addUser(User user) {
		
		return userrepo.save(user);
	}
	
	public ResponseEntity<LoginResponse> authenticateUser(String email, String password) {
        Optional<User> optionalUser = userrepo.findFirstByEmail(email);
        if (optionalUser.isPresent() && optionalUser.get().getPassword().equals(password)) {
            User user = optionalUser.get();
            LoginResponse response = new LoginResponse("Login Successful", user.getName(), user.getType(), user.getId());
            return ResponseEntity.ok(response);
        } else {
            LoginResponse response = new LoginResponse("Invalid credentials", null, null, 0);
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
        }
    }
	
	public List<User> allUser() {
		return userrepo.findAll();
	}
}
