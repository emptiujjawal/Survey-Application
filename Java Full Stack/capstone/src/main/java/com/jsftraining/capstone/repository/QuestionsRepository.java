package com.jsftraining.capstone.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.jsftraining.capstone.model.Questions;


@Repository
public interface QuestionsRepository extends CrudRepository<Questions,Integer> {

	//void updateQuestion(Questions ques);

	//void updateQuestion(Questions ques);

	//boolean updateQuestions(Questions ques);

	

}
