package com.jsftraining.capstone.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.jsftraining.capstone.model.Submission;


@Repository
public interface SubmissionRepository extends CrudRepository<Submission,Integer> {

}
