package com.egov.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.egov.entity.AppliedTenders;
import com.egov.services.AppliedTenderServices;

@RestController
@RequestMapping("/applytenders")
@CrossOrigin(origins = "http://localhost:4200")
public class AppliedTendersController {

	@Autowired
	AppliedTenderServices applytenderservice;

	@PostMapping("/apply/{userId}")
	public AppliedTenders applyTender(@RequestBody AppliedTenders applytender,@PathVariable int userId) {
		
		return applytenderservice.applyTender(applytender, userId);
	}
	
	
	@GetMapping("/showall")
	public List<AppliedTenders> showAppliedtender(){
		return applytenderservice.showTender();
	}
	
	@DeleteMapping("/delete/{id}")  
    public String deleteById(@PathVariable int id) {
        boolean isDeleted = applytenderservice.deleteById(id); 
        if (isDeleted) {
            return "Scheme applied with ID " + id + " was successfully deleted.";
        } else {
            return "Scheme with ID " + id + " not found.";
        }
    }
	
	@PutMapping("/updateStatus/{id}/{status}")  
    public String updateSchemeStatus(@PathVariable int id, @PathVariable String status) {
        boolean isUpdated = applytenderservice.updateSchemeStatus(id, status);
        if (isUpdated) {
            return "Scheme status updated to " + status + " for ID " + id;
        } else {
            return "Scheme with ID " + id + " not found.";
        }
    }
	
	@GetMapping("/user/{userId}")
    public List<AppliedTenders> getSchemesByUserId(@PathVariable int userId) {
        return applytenderservice.getByid(userId);
    }


}
