package com.egov.repos;



import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.egov.entity.SchemesApplid;
import com.egov.entity.User;

public interface SchemeAppliedRepo extends JpaRepository<SchemesApplid, Integer> {
	List<SchemesApplid> findByUid(User uid);
}
