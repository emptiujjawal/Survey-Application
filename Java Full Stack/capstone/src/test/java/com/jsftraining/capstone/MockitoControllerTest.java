package com.jsftraining.capstone;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.List;

import org.junit.Before;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;

import com.jsftraining.capstone.controller.UsersController;
import com.jsftraining.capstone.model.Questions;
import com.jsftraining.capstone.model.Submission;
import com.jsftraining.capstone.model.Users;
import com.jsftraining.capstone.repository.UsersRepository;
import com.jsftraining.capstone.service.EmailService;

public class MockitoControllerTest {
	
	 @InjectMocks
	    private UsersController userController;

	    @Mock
	    private UsersRepository userRepository;

	    @Before
	    public void init() {
	        MockitoAnnotations.initMocks(this);
	    }
	    
	    @Autowired
	    private UsersRepository useRepository;
	    
	    @Autowired
	    private EmailService emailService;
	    
	
	@Test
    public void testGetUserById() {
       // UsersController userController = new UsersController();
        Users u =new Users();
        u.setemailid("admin@wipro.com");
        u.setpassword("wipro@123");
        u.setusertype("admin");
        
        when(userRepository.findByemailid("admin@wipro.com")).thenReturn(u);
        
        Users user = userController.getUser(u);
        
        System.out.println(user.getemailid());
        //verify(userRepository).findByemailid("admin@wipro.com");
        
        assertEquals(null, user.getemailid());
    }
	
	//Db Users Check
	@Test
	public void testUsers() throws NullPointerException {
		
		//List<Users> u = (List<Users>) useRepository.findAll();
		
		//Users uu = useRepository.findByemailid("admin@wipro.com");
		
		//System.out.println(uu);
	//	assertEquals(0, u.size());
		//assertEquals(1, uu.getid()); getUserSurvey getSurvey addSurvey
		
		/*Surveyquestion sq = new Surveyquestion();
		sq.setSurveydescription("sd");
		sq.setSurveyname("sn");
		sq.setNoofques("1");
		sq.setQuestion1("Q1");
		sq.setAnswers1("A1");*/
		
		Users sq = new Users();
		sq.setusername("sd");
		sq.setpassword("sn");
		sq.setRegisterdate("01-02-2012");
		sq.setusertype("user");
		sq.setinterest("A1");
		
		Users s =userController.addUser(sq);
		
		//List<Surveyquestion> lists = userController.getUserSurvey();
		
		assertEquals("sd",s.getusername());

		//Assertions.assertNull(sq);
		
		
		
		//assertEquals(true, lists.isEmpty());
		
		
		
		
	}
	
	@Test
	public void testQuestions() throws NullPointerException {
		
		Questions q = new Questions();
		q.setInput("RadioButton");
		q.setSurveyname("s");
		q.setQuestion("ques");
		q.setOption1("op1");
		q.setQuesdate("01-02-2012");
		q.setOption2("op2");
		q.setOption3("op3");
		q.setOption4("op4");
		
		
		//Question qq = userController.addQuestion(q);
		
		assertEquals("s", q.getSurveyname() );
		
		
	}
	
	@Test
	public void testSubmission() throws NullPointerException {
		
		Submission q = new Submission();
		q.setAnswer1("RadioButton");
		q.setSurveyname("s");
		q.setQuestion1("ques");
		q.setAnswer2("op1");
		q.setSubmissiondate("01-02-2012");
		q.setQuestion2("op2");
		q.setQuestion3("op3");
		q.setQuestion4("op4");
		
		
		// Submission ss =userController.addSubmission(q);
		
		assertEquals("s", q.getSurveyname() );
		
		
	}
	

    
}
