package com.egov.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Scheme {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    
    
    private String sname;
    private String stype;

    // Default constructor
    public Scheme() {
        super();
    }

    // Parameterized constructor
    public Scheme(int id, String sname, String stype) {
        this.id = id;
        this.sname = sname;
        this.stype = stype;
    }

    // Getters and Setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getSname() {
        return sname;
    }

    public void setSname(String sname) {
        this.sname = sname;
    }

    public String getStype() {
        return stype;
    }

    public void setStype(String stype) {
        this.stype = stype;
    }

    // toString method for debugging and logging
    @Override
    public String toString() {
        return "Scheme [id=" + id + ", sname=" + sname + ", stype=" + stype + "]";
    }
}
