package com.egov.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.egov.entity.Scheme;
import com.egov.repos.SchemeRepo;

@Service
public class SchemeServices {

	@Autowired
	SchemeRepo schemerepo;

	public Scheme addScheme(Scheme scheme) {
		return schemerepo.save(scheme);
	}

	public List<Scheme> showAllSchemes() {
		return schemerepo.findAll();
	}

	public boolean deleteSchemeById(Integer id) {
		if (schemerepo.existsById(id)) {
			schemerepo.deleteById(id);
			return true;
		} else {
			return false;
		}
	}
}
