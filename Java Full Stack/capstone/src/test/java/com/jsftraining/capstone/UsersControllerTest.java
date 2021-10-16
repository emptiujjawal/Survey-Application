package com.jsftraining.capstone;

import static org.junit.Assert.assertEquals;

import java.util.Arrays;

//import static org.hamcrest.Matchers.*;
//import static org.junit.Assert.*;


import org.junit.Test;
//import static org.hamcrest.Matchers.*;
//import static org.junit.Assert.*;


import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.runner.RunWith;
import org.mockito.ArgumentMatchers;
import org.mockito.Mockito;
//import static org.junit.matchers.JUnitMatchers.*;
import org.skyscreamer.jsonassert.JSONAssert;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import static org.hamcrest.CoreMatchers.*;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import com.jsftraining.capstone.model.Users;
import com.jsftraining.capstone.repository.QuestionsRepository;
import com.jsftraining.capstone.repository.SubmissionRepository;
import com.jsftraining.capstone.repository.SurveyRepository;
import com.jsftraining.capstone.repository.SurveyquestionRepository;
import com.jsftraining.capstone.repository.UsersRepository;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.equalTo;


//@RunWith(SpringRunner.class)
//@WebMvcTest(value = UsersController.class)
//@WithMockUser
@ExtendWith(SpringExtension.class)
@DataJpaTest
@TestPropertySource(properties = {
        "spring.jpa.hibernate.ddl-auto=none"
})
//@SpringBootTest
public class UsersControllerTest {
	
	@Autowired
	private MockMvc mockMvc;
	
	@Autowired
	private SubmissionRepository submissionrepo;
	@Autowired
	private SurveyquestionRepository surveyquesrepo;
	@Autowired
	private QuestionsRepository quesrepo;
	@Autowired
	private SurveyRepository surveyrepo;
	@Autowired
	private UsersRepository usersrepo;

	@MockBean
	private SubmissionRepository submissiorepo;
	@MockBean
	private SurveyquestionRepository surveyquerepo;
	@MockBean
	private QuestionsRepository querepo;
	@MockBean
	private SurveyRepository surverepo;
	@MockBean
	private UsersRepository userrepo;
	
	//boolean a;
	//boolean b;

	//void assertThat(a, equalTo(b));
	//void assertThat(a, is(equalTo(b)));
	//assertThat(a, is(b));
	
	
	@Test
	public void testController() {
	/*	Users u = new Users();
		u.setemailid("ujj@gmail.com");
		u.setpassword("uu11@@");
		u.setusername("ujju");
		u.setusertype("user");
		u.setRegisterdate("02-02-2012");
		usersrepo.save(u);
	  assertThat(userrepo.findByemailid("ujj@gmail.com")).isNotNull();*/
	}

/*	private ArgumentMatchers assertThat(Users findByemailid) {
		// TODO Auto-generated method stub
		return null;
	}

	/*private ArgumentMatchers assertThat(boolean existsByemailid) {
		// TODO Auto-generated method stub
		return null;
	}*/

	



}
