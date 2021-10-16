package com.jsftraining.capstone.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.jsftraining.capstone.model.Subdata;

@Repository
public interface SubdataRepository extends CrudRepository<Subdata,Integer> {

}
