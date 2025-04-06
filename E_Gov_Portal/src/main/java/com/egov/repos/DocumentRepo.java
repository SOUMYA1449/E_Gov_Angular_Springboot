package com.egov.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.egov.entity.Documents;

public interface DocumentRepo extends JpaRepository<Documents, Integer> {
	List<Documents> findByUid_Id(int userId);
}
