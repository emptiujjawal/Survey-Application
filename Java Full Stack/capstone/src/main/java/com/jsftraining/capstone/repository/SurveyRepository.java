package com.jsftraining.capstone.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.jsftraining.capstone.model.Survey;


@Repository
public interface SurveyRepository extends CrudRepository<Survey,Integer>{

	//void updateStudent(Survey surv);

	//void updateSurvey(Survey surv);

}
