package com.egov.response;

public class LoginResponse {
    
    private String message;
    private String name;
    private String type;
    private int id;
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	@Override
	public String toString() {
		return "LoginResponse [message=" + message + ", name=" + name + ", type=" + type + ", id=" + id + "]";
	}
	public LoginResponse(String message, String name, String type, int id) {
		super();
		this.message = message;
		this.name = name;
		this.type = type;
		this.id = id;
	}
	public LoginResponse() {
		super();
		// TODO Auto-generated constructor stub
	}
    
	
}
