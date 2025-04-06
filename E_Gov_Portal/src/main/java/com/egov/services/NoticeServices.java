package com.egov.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.egov.entity.Notices;
import com.egov.repos.NoticeRepo;

@Service
public class NoticeServices {

	@Autowired
	NoticeRepo noticerepo;
	
	public Notices addNotice(Notices notic) {
		return noticerepo.save(notic);
	}
	
	public List<Notices> getAllnotice(){
		return noticerepo.findAll();
	}
}
