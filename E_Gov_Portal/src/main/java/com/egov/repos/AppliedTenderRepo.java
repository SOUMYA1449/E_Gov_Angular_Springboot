package com.egov.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.egov.entity.AppliedTenders;
import com.egov.entity.User;

@Repository
public interface AppliedTenderRepo extends JpaRepository<AppliedTenders, Integer> {
	List<AppliedTenders> findByUid(User uid);
}
