package com.jsftraining.capstone;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.jsftraining.capstone.service.EmailService;

import org.junit.runner.RunWith;

@RunWith(SpringRunner.class)
@SpringBootTest
public class SendEmailApplicationTest {

    @Autowired
    private EmailService emailService;

    @Test
    public void testEmail() {
        emailService.sendMail("frank23@example.com", "Test subject", "Test mail");
    }
}
