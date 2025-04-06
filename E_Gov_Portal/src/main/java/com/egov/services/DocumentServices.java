package com.egov.services;

import com.egov.entity.Documents;
import com.egov.entity.User;
import com.egov.repos.DocumentRepo;
import com.egov.repos.UserRepo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DocumentServices {

	@Autowired
	private DocumentRepo documentRepo;

	@Autowired
	private UserRepo userRepo;

	public Documents addDocument(Documents document, int userId) {

		User user = userRepo.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
		document.setUser(user);
		return documentRepo.save(document);
	}

	public List<Documents> getDocumentsByUserId(int userId) {
		return documentRepo.findByUid_Id(userId);
	}

	public boolean deleteSchemeById(Integer id) {
		if (documentRepo.existsById(id)) {
			documentRepo.deleteById(id);
			return true;
		} else {
			return false;
		}
	}
}
