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
public class Surveyquestion {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	private int id;
	
	private String surveyname;
	private String surveydescription;
	private String noofques;
	private String surveystart;
	private String surveyend;
	private String surveymade;
	private String question1;
	private String questiontype1;
	private String answers1;
	private String question2;
	private String questiontype2;
	private String answers2;
	private String question3;
	private String questiontype3;
	private String answers3;
	private String question4;
	private String questiontype4;
	private String answers4;
	private String question5;
	private String questiontype5;
	private String answers5;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getSurveydescription() {
		return surveydescription;
	}
	public void setSurveydescription(String surveydescription) {
		this.surveydescription = surveydescription;
	}
	public String getNoofques() {
		return noofques;
	}
	public void setNoofques(String noofques) {
		this.noofques = noofques;
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
	public String getQuestion1() {
		return question1;
	}
	public void setQuestion1(String question1) {
		this.question1 = question1;
	}
	public String getQuestiontype1() {
		return questiontype1;
	}
	public void setQuestiontype1(String questiontype1) {
		this.questiontype1 = questiontype1;
	}
	public String getAnswers1() {
		return answers1;
	}
	public void setAnswers1(String answers1) {
		this.answers1 = answers1;
	}
	public String getQuestion2() {
		return question2;
	}
	public void setQuestion2(String question2) {
		this.question2 = question2;
	}
	public String getQuestiontype2() {
		return questiontype2;
	}
	public void setQuestiontype2(String questiontype2) {
		this.questiontype2 = questiontype2;
	}
	public String getAnswers2() {
		return answers2;
	}
	public void setAnswers2(String answers2) {
		this.answers2 = answers2;
	}
	public String getQuestion3() {
		return question3;
	}
	public void setQuestion3(String question3) {
		this.question3 = question3;
	}
	public String getQuestiontype3() {
		return questiontype3;
	}
	public void setQuestiontype3(String questiontype3) {
		this.questiontype3 = questiontype3;
	}
	public String getAnswers3() {
		return answers3;
	}
	public void setAnswers3(String answers3) {
		this.answers3 = answers3;
	}
	public String getQuestion4() {
		return question4;
	}
	public void setQuestion4(String question4) {
		this.question4 = question4;
	}
	public String getQuestiontype4() {
		return questiontype4;
	}
	public void setQuestiontype4(String questiontype4) {
		this.questiontype4 = questiontype4;
	}
	public String getAnswers4() {
		return answers4;
	}
	public void setAnswers4(String answers4) {
		this.answers4 = answers4;
	}
	public String getQuestion5() {
		return question5;
	}
	public void setQuestion5(String question5) {
		this.question5 = question5;
	}
	public String getAnswers5() {
		return answers5;
	}
	public void setAnswers5(String answers5) {
		this.answers5 = answers5;
	}
	
	public String getSurveyname() {
		return surveyname;
	}
	public void setSurveyname(String surveyname) {
		this.surveyname = surveyname;
	}
	public String getQuestiontype5() {
		return questiontype5;
	}
	public void setQuestiontype5(String questiontype5) {
		this.questiontype5 = questiontype5;
	}
	

}
