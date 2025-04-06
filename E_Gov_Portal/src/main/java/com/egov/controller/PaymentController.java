package com.egov.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.egov.entity.Payment;
import com.egov.services.PaymentServices;

@RestController
@RequestMapping("/payment")
@CrossOrigin(origins = "http://localhost:4200")
public class PaymentController {

    @Autowired
    private PaymentServices payservices;

    // Endpoint to create a new payment record
    @PostMapping("/pay/{userId}")
    public ResponseEntity<?> allPayment(@RequestBody Payment pay, @PathVariable int userId) {
        try {
            Payment payment = payservices.allPayment(pay, userId);
            return new ResponseEntity<>(payment, HttpStatus.CREATED);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }
    
    // Endpoint to retrieve payment history by user ID
    @GetMapping("history/{userId}")
    public List<Payment> getPayments(@PathVariable int userId) {
        return payservices.getPaymentsByUserId(userId);
    }
}
