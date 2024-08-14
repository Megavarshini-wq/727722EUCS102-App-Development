package com.example.demo.Controller;

import com.example.demo.Model.Profile;
import com.example.demo.Service.ProfileService;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/profiles")
public class ProfileController {

    @Autowired
    private ProfileService profileService;

    @PostMapping
    public Profile saveProfile(@RequestBody Profile profile) {
        return profileService.saveProfile(profile);
    }

    @CrossOrigin(origins="*")
    @GetMapping("/{id}")
    public Optional<Profile> getProfile(@PathVariable Long id) {
        return profileService.getProfile(id);
    }
    
    @CrossOrigin(origins="*")
    @PutMapping("/{id}")
    public Profile updateProfile(@PathVariable Long id, @RequestBody Profile profileDetails) {
        return profileService.updateProfile(id, profileDetails);
    }
}