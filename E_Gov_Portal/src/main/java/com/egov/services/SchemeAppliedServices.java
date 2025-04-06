package com.egov.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.egov.entity.SchemesApplid;
import com.egov.entity.User;
import com.egov.repos.SchemeAppliedRepo;
import com.egov.repos.UserRepo;

@Service
public class SchemeAppliedServices {

	@Autowired
	SchemeAppliedRepo schemeaplrepo;

	@Autowired
	UserRepo userRepo;

	public SchemesApplid apply(SchemesApplid app, int userId) {
		User user = userRepo.findById(userId).orElse(null);
		app.setUid(user);
		return schemeaplrepo.save(app);
	}

	public List<SchemesApplid> showAllappliedSchemes() {
		return schemeaplrepo.findAll();
	}

	public boolean deleteById(int id) {
		if (schemeaplrepo.existsById(id)) {
			schemeaplrepo.deleteById(id);
			return true;
		}
		return false;
	}

	public boolean updateSchemeStatus(int id, String status) {
		SchemesApplid scheme = schemeaplrepo.findById(id).orElse(null);
		if (scheme != null) {
			scheme.setStatus(status);
			schemeaplrepo.save(scheme);
			return true;
		}
		return false;
	}
	
	public List<SchemesApplid> getSchemesByUserId(int userId) {
        User user = userRepo.findById(userId).orElse(null);
        if (user != null) {
            return schemeaplrepo.findByUid(user);
        }
        return null;
    }
}
