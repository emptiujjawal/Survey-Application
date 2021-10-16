package com.jsftraining.capstone.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Users {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	private int id;
	
	private String username;
	private String emailid;
	private String password;
	private String usertype;
	private String interest;
	private String dedication;
	private String registerdate;
	
	
	public int getid() {
	    return id;
	 }
	public void setid(int id) {
		    this.id = id;
	  }
	
	 public String getusername() {
		    return username;
	 }
	  public void setusername(String username) {
		    this.username = username;
	  }
	  
	  public String getinterest() {
		    return interest;
	 }
	  public void setinterest(String interest) {
		    this.interest = interest;
	  }
	  
	  public String getemailid() {
	    return emailid;
	  }
	  public void setemailid(String emailid) {
	    this.emailid = emailid;
	  }
  
	  public String getpassword() {
		    return password;
	 }
	  public void setpassword(String password) {
		    this.password = password;
	  }
  
  public String getusertype() {
	    return usertype;
	  }
  public void setusertype(String usertype) {
	    this.usertype = usertype;
	  }
  
	public String getdedication() {
		    return dedication;
	}
	public void setdedication(String dedication) {
		    this.dedication = dedication;
	}
	
	public String getRegisterdate() {
		return registerdate;
	}
	public void setRegisterdate(String registerdate) {
		this.registerdate = registerdate;
	}





}
