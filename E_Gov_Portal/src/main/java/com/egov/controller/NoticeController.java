package com.egov.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.egov.entity.Notices;
import com.egov.services.NoticeServices;

@RestController
@RequestMapping("/notice")
@CrossOrigin(origins = "http://localhost:4200")
public class NoticeController {

	@Autowired
	NoticeServices noticeservice;
	
	@PostMapping("/addnotice")
	public Notices addSCheme(@RequestBody Notices ns) {
		return noticeservice.addNotice(ns);
	}
	
	
	@GetMapping("/showNotice")
	public List<Notices> showAll(){
		return noticeservice.getAllnotice();
	}
}
