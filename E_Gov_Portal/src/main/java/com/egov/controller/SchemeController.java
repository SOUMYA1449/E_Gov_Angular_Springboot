package com.egov.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.egov.entity.Scheme;
import com.egov.services.SchemeServices;

@RequestMapping("/scheme")
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class SchemeController {

	@Autowired
	SchemeServices schemesc;

	@PostMapping("/addscheme")
	public Scheme addScheme(@RequestBody Scheme sc) {
		return schemesc.addScheme(sc);
	}

	@GetMapping("/showschemes")
	public List<Scheme> showAllSchemes() {
		return schemesc.showAllSchemes();
	}

	@DeleteMapping("/delete/{id}")
	public ResponseEntity<String> deleteScheme(@PathVariable Integer id) {
		boolean isDeleted = schemesc.deleteSchemeById(id);
		if (isDeleted) {
			return ResponseEntity.ok("Scheme deleted successfully with ID: " + id);
		} else {
			return ResponseEntity.status(404).body("Scheme not found with ID: " + id);
		}
	}
}
