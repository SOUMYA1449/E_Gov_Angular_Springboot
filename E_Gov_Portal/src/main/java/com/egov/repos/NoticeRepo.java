package com.egov.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.egov.entity.Notices;

@Repository
public interface NoticeRepo extends JpaRepository<Notices, Integer> {

}
