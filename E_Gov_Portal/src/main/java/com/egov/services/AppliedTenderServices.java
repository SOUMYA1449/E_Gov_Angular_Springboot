package com.egov.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.egov.entity.AppliedTenders;

import com.egov.entity.User;
import com.egov.repos.AppliedTenderRepo;
import com.egov.repos.UserRepo;

@Service
public class AppliedTenderServices {

	@Autowired
	AppliedTenderRepo appliedtenderrepo;
	
	@Autowired
	UserRepo userrepo;
	
	public AppliedTenders applyTender(AppliedTenders apptenders, int userId) {
        User user = userrepo.findById(userId).orElse(null);
        apptenders.setUid(user);
        return appliedtenderrepo.save(apptenders);
    }
	
	public List<AppliedTenders> showTender(){
		return appliedtenderrepo.findAll();
	}
	public boolean deleteById(int id) {
		if (appliedtenderrepo.existsById(id)) {
			appliedtenderrepo.deleteById(id);
			return true;
		}
		return false;
	}
	
	public boolean updateSchemeStatus(int id, String status) {
		AppliedTenders tender = appliedtenderrepo.findById(id).orElse(null);
		if (tender != null) {
			tender.setStatus(status);
			appliedtenderrepo.save(tender);
			return true;
		}
		return false;
	}
	
	public List<AppliedTenders> getByid(int userId){
		User user = userrepo.findById(userId).orElse(null);
        if (user != null) {
            return appliedtenderrepo.findByUid(user);
        }
        return null;
	}
}
