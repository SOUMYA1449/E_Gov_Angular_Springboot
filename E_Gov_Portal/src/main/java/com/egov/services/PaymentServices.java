package com.egov.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.egov.entity.Payment;
import com.egov.entity.User;
import com.egov.repos.PaymentRepo;
import com.egov.repos.UserRepo;

@Service
public class PaymentServices {

    @Autowired
    private PaymentRepo paymentRepo;

    @Autowired
    private UserRepo userRepo;

    // Method to create a new payment record
    public Payment allPayment(Payment pay, int userId) {
        User user = userRepo.findById(userId).orElse(null);
        
        if (user != null) {
            pay.setUid(user);
            return paymentRepo.save(pay);
        } else {
            throw new RuntimeException("User not found for ID: " + userId);
        }
    }

    // Method to retrieve payment history by user ID
    public List<Payment> getPaymentsByUserId(int userId) {
        return paymentRepo.findByUid_Id(userId);
    }
}
