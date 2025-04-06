package com.egov.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.egov.entity.Tender;

public interface TenderRepo extends JpaRepository<Tender, Integer> {

}
