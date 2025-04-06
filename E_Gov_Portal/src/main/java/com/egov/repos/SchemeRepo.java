package com.egov.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.egov.entity.Scheme;

public interface SchemeRepo extends JpaRepository<Scheme, Integer> {

}
