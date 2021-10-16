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
public class Surveymail {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	private int id;
	
	private String surveyname;
	//private String surveydescription;
	private String send;
	private String surveystart;
	private String surveyend;
	//private String surveymade;
	
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getSurveyname() {
		return surveyname;
	}
	public void setSurveyname(String surveyname) {
		this.surveyname = surveyname;
	}
	public String getSend() {
		return send;
	}
	public void setSend(String send) {
		this.send = send;
	}
	public String getSurveystart() {
		return surveystart;
	}
	public void setSurveystart(String surveystart) {
		this.surveystart = surveystart;
	}
	public String getSurveyend() {
		return surveyend;
	}
	public void setSurveyend(String surveyend) {
		this.surveyend = surveyend;
	}

}
