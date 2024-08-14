package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Model.Profile;

@Repository
public interface ProfileRepository extends JpaRepository<Profile, Long> {
    // Remove the method below since 'username' is not a field in Profile
    // Profile findByUsername(String username);
}
