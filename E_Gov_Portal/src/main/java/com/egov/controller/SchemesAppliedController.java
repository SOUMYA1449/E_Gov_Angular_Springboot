package com.egov.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.egov.entity.SchemesApplid;

import com.egov.services.SchemeAppliedServices;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;


@RestController
@RequestMapping("/applied")
@CrossOrigin(origins = "http://localhost:4200")
public class SchemesAppliedController {

	@Autowired
	SchemeAppliedServices applyservices;

	
	@PostMapping("/apply/{userId}")
	public SchemesApplid apply(@RequestBody SchemesApplid app,@PathVariable int userId) {

		return applyservices.apply(app, userId);
	}
	
	@GetMapping("/allscap")
	public List<SchemesApplid>showAllappliedSchemes(){
		return applyservices.showAllappliedSchemes();
	}
	
	@DeleteMapping("/delete/{id}")  
    public String deleteById(@PathVariable int id) {
        boolean isDeleted = applyservices.deleteById(id); 
        if (isDeleted) {
            return "Scheme applied with ID " + id + " was successfully deleted.";
        } else {
            return "Scheme with ID " + id + " not found.";
        }
    }
	
	 @PutMapping("/updateStatus/{id}/{status}")  
	    public String updateSchemeStatus(@PathVariable int id, @PathVariable String status) {
	        boolean isUpdated = applyservices.updateSchemeStatus(id, status);
	        if (isUpdated) {
	            return "Scheme status updated to " + status + " for ID " + id;
	        } else {
	            return "Scheme with ID " + id + " not found.";
	        }
	    }
	 
	 @GetMapping("/user/{userId}")
	    public List<SchemesApplid> getSchemesByUserId(@PathVariable int userId) {
	        return applyservices.getSchemesByUserId(userId);
	    }
	

}
