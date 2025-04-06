package com.egov.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.egov.entity.Tender;
import com.egov.repos.TenderRepo;

@Service
public class TenderServices {

	@Autowired
	TenderRepo tenderrepo;
	
	public Tender addtender(Tender tr) {
		
		return tenderrepo.save(tr);	
	}
	
	public List<Tender> showTender(){
		return 	tenderrepo.findAll();
	}
	
	public boolean deleteTenderById(Integer id) {
		if (tenderrepo.existsById(id)) {
			tenderrepo.deleteById(id);
			return true;
		} else {
			return false;
		}
	}
	
}
