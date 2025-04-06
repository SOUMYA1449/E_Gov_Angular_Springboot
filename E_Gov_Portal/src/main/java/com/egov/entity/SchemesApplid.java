package com.egov.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;



@Entity
public class SchemesApplid {
 
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JsonBackReference("user-schemes")
    @JoinColumn(name = "user_id", nullable = false)  
    private User uid;


    private String sname;
    private String name;
    private String fname;
    private String aadharno;
    private String dob;
    private String phno;
    private String gender;
    private String address;
    private String distric;
    private String state;
    private String pincode;
    private String status;

    // Getters and Setters for all fields
    
    
    public int getId() {
        return id;
    }

    public User getU_id() {
		return uid;
	}

	public void setU_id(User u_id) {
		this.uid = u_id;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getSname() {
		return sname;
	}

	public void setSname(String sname) {
		this.sname = sname;
	}

	public void setId(int id) {
        this.id = id;
    }

    public User getUid() {
        return uid;
    }

    public void setUid(User uid) {
        this.uid = uid;
    }

   

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getFname() {
        return fname;
    }

    public void setFname(String fname) {
        this.fname = fname;
    }

    public String getAadharno() {
        return aadharno;
    }

    public void setAadharno(String aadharno) {
        this.aadharno = aadharno;
    }

    public String getDob() {
        return dob;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }

    public String getPhno() {
        return phno;
    }

    public void setPhno(String phno) {
        this.phno = phno;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getDistric() {
        return distric;
    }

    public void setDistric(String distric) {
        this.distric = distric;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getPincode() {
        return pincode;
    }

    public void setPincode(String pincode) {
        this.pincode = pincode;
    }

    // Constructors

  
	public SchemesApplid(int id, User uid, String sname, String name, String fname, String aadharno, String dob,
			String phno, String gender, String address, String distric, String state, String pincode, String status) {
		super();
		this.id = id;
		this.uid = uid;
		this.sname = sname;
		this.name = name;
		this.fname = fname;
		this.aadharno = aadharno;
		this.dob = dob;
		this.phno = phno;
		this.gender = gender;
		this.address = address;
		this.distric = distric;
		this.state = state;
		this.pincode = pincode;
		this.status = status;
	}

	public SchemesApplid() {
        super();
    }

	@Override
	public String toString() {
		return "SchemesApplid [id=" + id + ", uid=" + uid + ", sname=" + sname + ", name=" + name + ", fname=" + fname
				+ ", aadharno=" + aadharno + ", dob=" + dob + ", phno=" + phno + ", gender=" + gender + ", address="
				+ address + ", distric=" + distric + ", state=" + state + ", pincode=" + pincode + ", status=" + status
				+ "]";
	}

	
	
}
