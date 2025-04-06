package com.egov.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.egov.entity.Payment;

@Repository
public interface PaymentRepo extends JpaRepository<Payment, Integer> {
	List<Payment> findByUid_Id(int userId);
}
