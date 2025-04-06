package com.egov.controller;

import com.egov.entity.Documents;
import com.egov.services.DocumentServices;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/document")
@CrossOrigin(origins = "http://localhost:4200")
public class DocumentController {

    @Autowired
    private DocumentServices documentServices;

    @PostMapping("/adddocument/{userId}")
    public Documents addDocument(@RequestBody Documents document, @PathVariable int userId) {
        return documentServices.addDocument(document, userId);
    }
    
    @GetMapping("/getdocuments/{userId}")
    public List<Documents> getDocumentsByUserId(@PathVariable int userId) {
        return documentServices.getDocumentsByUserId(userId);
    }
    
    @DeleteMapping("/delete/{id}")
	public ResponseEntity<String> deleteScheme(@PathVariable Integer id) {
		boolean isDeleted = documentServices.deleteSchemeById(id);
		if (isDeleted) {
			return ResponseEntity.ok("Scheme deleted successfully with ID: " + id);
		} else {
			return ResponseEntity.status(404).body("Scheme not found with ID: " + id);
		}
	}
}
