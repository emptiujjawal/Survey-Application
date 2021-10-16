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
public class Survey {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	private int id;
	
	private String surveyname;
	private String surveydescription;
	private String noofques;
	private String surveystart;
	private String surveyend;
	private String surveymade;
	
	
	public int getid() {
	    return id;
	 }
	public void setid(int id) {
		    this.id = id;
	  }
	
	public String getSurveyname() {
		return surveyname;
	}
	public void setSurveyname(String surveyname) {
		this.surveyname = surveyname;
	}
	public String getSurveydescription() {
		return surveydescription;
	}
	public void setSurveydescription(String surveydescription) {
		this.surveydescription = surveydescription;
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
	public String getSurveymade() {
		return surveymade;
	}
	public void setSurveymade(String surveymade) {
		this.surveymade = surveymade;
	}
	public String getNoofques() {
		return noofques;
	}
	public void setNoofques(String noofques) {
		this.noofques = noofques;
	}


}
