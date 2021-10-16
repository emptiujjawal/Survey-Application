package com.jsftraining.capstone.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.jsftraining.capstone.model.Users;


@Repository
public interface UsersRepository extends CrudRepository<Users,Integer> {

	Users findByemailid(String email);

	boolean existsByemailid(String email);

	

}
