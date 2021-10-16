DROP TABLE IF EXISTS USERS;
CREATE TABLE USERS(ID INT AUTO_INCREMENT  PRIMARY KEY,
   USERNAME VARCHAR(255), EMAILID VARCHAR(255), PASSWORD VARCHAR(255), USERTYPE VARCHAR(255), 
   INTEREST VARCHAR(255), DEDICATION VARCHAR(255), REGISTERDATE VARCHAR(255));
   
DROP TABLE IF EXISTS SURVEY;

CREATE TABLE SURVEY(ID INT AUTO_INCREMENT  PRIMARY KEY,
   SURVEYNAME VARCHAR(255), SURVEYDESCRIPTION VARCHAR(255), NOOFQUES VARCHAR(255), SURVEYSTART VARCHAR(255), SURVEYEND VARCHAR(255),
   SURVEYMADE VARCHAR(255));
   
DROP TABLE IF EXISTS QUESTIONS;

CREATE TABLE QUESTIONS(ID INT AUTO_INCREMENT  PRIMARY KEY,
   SURVEYNAME VARCHAR(255), QUESTION VARCHAR(255), INPUT VARCHAR(255), OPTION1 VARCHAR(255),
   OPTION2 VARCHAR(255), OPTION3 VARCHAR(255), OPTION4 VARCHAR(255), QUESDATE VARCHAR(255));   
   
   
DROP TABLE IF EXISTS SUBMISSION;
CREATE TABLE SUBMISSION(ID INT AUTO_INCREMENT  PRIMARY KEY,
   EMAILID VARCHAR(255), SURVEYNAME VARCHAR(255), QUESTION1 VARCHAR(255), ANSWER1 VARCHAR(255), 
    QUESTION2 VARCHAR(255), ANSWER2 VARCHAR(255),
     QUESTION3 VARCHAR(255), ANSWER3 VARCHAR(255),
      QUESTION4 VARCHAR(255), ANSWER4 VARCHAR(255),
       QUESTION5 VARCHAR(255), ANSWER5 VARCHAR(255),
   SUBMISSIONDATE VARCHAR(255));
   
      
DROP TABLE IF EXISTS SUBDATA;
CREATE TABLE SUBDATA(ID INT AUTO_INCREMENT  PRIMARY KEY,
	USERNAME VARCHAR(255),INTEREST VARCHAR(255), DEDICATION VARCHAR(255),
   EMAILID VARCHAR(255), SURVEYNAME VARCHAR(255), QUESTION1 VARCHAR(255), ANSWER1 VARCHAR(255), 
    QUESTION2 VARCHAR(255), ANSWER2 VARCHAR(255),
     QUESTION3 VARCHAR(255), ANSWER3 VARCHAR(255),
      QUESTION4 VARCHAR(255), ANSWER4 VARCHAR(255),
       QUESTION5 VARCHAR(255), ANSWER5 VARCHAR(255),
   SUBMISSIONDATE VARCHAR(255));
   
DROP TABLE IF EXISTS SURVEYQUESTION;
CREATE TABLE SURVEYQUESTION(ID INT AUTO_INCREMENT  PRIMARY KEY,
   SURVEYNAME VARCHAR(255), SURVEYDESCRIPTION VARCHAR(255), NOOFQUES VARCHAR(255), SURVEYSTART VARCHAR(255), SURVEYEND VARCHAR(255),
   SURVEYMADE VARCHAR(255),QUESTION1 VARCHAR(255),QUESTION2 VARCHAR(255),QUESTION3 VARCHAR(255),QUESTION4 VARCHAR(255),QUESTION5 VARCHAR(255),
	QUESTIONTYPE1 VARCHAR(255), QUESTIONTYPE2 VARCHAR(255), QUESTIONTYPE3 VARCHAR(255), QUESTIONTYPE4 VARCHAR(255), QUESTIONTYPE5 VARCHAR(255),
	ANSWERS1 VARCHAR(255), ANSWERS2 VARCHAR(255), ANSWERS3 VARCHAR(255), ANSWERS4 VARCHAR(255), ANSWERS5 VARCHAR(255)
	);
	
DROP TABLE IF EXISTS SURVEYMAIL;	
CREATE TABLE SURVEYMAIL(ID INT AUTO_INCREMENT  PRIMARY KEY,
   SURVEYNAME VARCHAR(255), SURVEYSTART VARCHAR(255), SURVEYEND VARCHAR(255), SEND VARCHAR(255)
   );
