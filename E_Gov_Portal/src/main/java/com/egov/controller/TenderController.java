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

import com.egov.entity.Tender;
import com.egov.services.TenderServices;

@RequestMapping("/tender")
@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class TenderController {

	@Autowired
	TenderServices tenderts;

	@PostMapping("/addtender")
	public Tender addTender(@RequestBody Tender tr) {
		return tenderts.addtender(tr);
	}

	
	@GetMapping("/showTender")
	public List<Tender> showTender() {

		return tenderts.showTender();
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<String> deleteTender(@PathVariable Integer id) {
		boolean isDeleted = tenderts.deleteTenderById(id);
		if (isDeleted) {
			return ResponseEntity.ok("Tender deleted successfully with ID: " + id);
		} else {
			return ResponseEntity.status(404).body("Tender not found with ID: " + id);
		}
	}
}
