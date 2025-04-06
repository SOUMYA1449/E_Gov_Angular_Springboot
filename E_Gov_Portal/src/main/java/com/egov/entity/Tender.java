package com.egov.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Tender {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	
	private String tname;
	private String ttype;
	private double bidamount;
	
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getTname() {
		return tname;
	}
	public void setTname(String tname) {
		this.tname = tname;
	}
	public String getTtype() {
		return ttype;
	}
	public void setTtype(String ttype) {
		this.ttype = ttype;
	}
	public double getBidamount() {
		return bidamount;
	}
	public void setBidamount(double bidamount) {
		this.bidamount = bidamount;
	}
	@Override
	public String toString() {
		return "Tender [id=" + id + ", tname=" + tname + ", ttype=" + ttype + ", bidamount=" + bidamount + "]";
	}
	public Tender(int id, String tname, String ttype, double bidamount) {
		super();
		this.id = id;
		this.tname = tname;
		this.ttype = ttype;
		this.bidamount = bidamount;
	}
	public Tender() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
}
