package com.jsftraining.capstone;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;


@Configuration
@SpringBootApplication
public class CapstoneApplication {

	public static void main(String[] args) {
		System.setProperty("server.port", "8077");
		SpringApplication.run(CapstoneApplication.class, args);
	}

}
