package com.example.demo.Service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.Profile;
import com.example.demo.Repository.ProfileRepository;

@Service
public class ProfileService {

    @Autowired
    private ProfileRepository profileRepository;

    public Profile saveProfile(Profile profile) {
        return profileRepository.save(profile);
    }

    public Optional<Profile> getProfile(Long id) {
        return profileRepository.findById(id);
    }

    public Profile updateProfile(Long id, Profile profileDetails) {
        Profile profile = profileRepository.findById(id).orElseThrow(() -> new RuntimeException("Profile not found"));
        profile.setFirstName(profileDetails.getFirstName());
        profile.setLastName(profileDetails.getLastName());
        profile.setEmail(profileDetails.getEmail());
        profile.setPhoneNumber(profileDetails.getPhoneNumber());
        return profileRepository.save(profile);
    }
}