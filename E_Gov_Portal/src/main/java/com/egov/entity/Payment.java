package com.egov.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Payment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "user_id", nullable = false)  
    private User uid;

    private double amount;
    private String date;
    private String sender_name;
    private String sender_transfer_type;
    private String sender_accountno;
    private String sender_ifsccode;
    private String sender_bankname;
    private String receiver_name;
    private String reciver_transfer_type;
    private String reciver_acountno;
    private String reciver_ifsccode;
    private String reciver_bankname;

    // Getters and setters
    
    public int getId() {
        return id;
    }

    public String getReciver_bankname() {
		return reciver_bankname;
	}

	public void setReciver_bankname(String reciver_bankname) {
		this.reciver_bankname = reciver_bankname;
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

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getSender_name() {
        return sender_name;
    }

    public void setSender_name(String sender_name) {
        this.sender_name = sender_name;
    }

    public String getSender_transfer_type() {
        return sender_transfer_type;
    }

    public void setSender_transfer_type(String sender_transfer_type) {
        this.sender_transfer_type = sender_transfer_type;
    }

    public String getSender_accountno() {
        return sender_accountno;
    }

    public void setSender_accountno(String sender_accountno) {
        this.sender_accountno = sender_accountno;
    }

    public String getSender_ifsccode() {
        return sender_ifsccode;
    }

    public void setSender_ifsccode(String sender_ifsccode) {
        this.sender_ifsccode = sender_ifsccode;
    }

    public String getSender_bankname() {
        return sender_bankname;
    }

    public void setSender_bankname(String sender_bankname) {
        this.sender_bankname = sender_bankname;
    }

    public String getReceiver_name() {
        return receiver_name;
    }

    public void setReceiver_name(String receiver_name) {
        this.receiver_name = receiver_name;
    }

    public String getReciver_transfer_type() {
        return reciver_transfer_type;
    }

    public void setReciver_transfer_type(String reciver_transfer_type) {
        this.reciver_transfer_type = reciver_transfer_type;
    }

    public String getReciver_acountno() {
        return reciver_acountno;
    }

    public void setReciver_acountno(String reciver_acountno) {
        this.reciver_acountno = reciver_acountno;
    }

    public String getReciver_ifsccode() {
        return reciver_ifsccode;
    }

    public void setReciver_ifsccode(String reciver_ifsccode) {
        this.reciver_ifsccode = reciver_ifsccode;
    }

    // Constructor with fields
  
    // Default constructor
    public Payment() {
        super();
    }

	public Payment(int id, User uid, double amount, String date, String sender_name, String sender_transfer_type,
			String sender_accountno, String sender_ifsccode, String sender_bankname, String receiver_name,
			String reciver_transfer_type, String reciver_acountno, String reciver_ifsccode, String reciver_bankname) {
		super();
		this.id = id;
		this.uid = uid;
		this.amount = amount;
		this.date = date;
		this.sender_name = sender_name;
		this.sender_transfer_type = sender_transfer_type;
		this.sender_accountno = sender_accountno;
		this.sender_ifsccode = sender_ifsccode;
		this.sender_bankname = sender_bankname;
		this.receiver_name = receiver_name;
		this.reciver_transfer_type = reciver_transfer_type;
		this.reciver_acountno = reciver_acountno;
		this.reciver_ifsccode = reciver_ifsccode;
		this.reciver_bankname = reciver_bankname;
	}
}
