package com.egov.repos;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.egov.entity.User;
@Repository
public interface UserRepo extends JpaRepository<User, Integer> {
	Optional<User> findFirstByEmail(String email);

}
