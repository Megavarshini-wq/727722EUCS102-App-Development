package com.example.demo.Controller;


import com.example.demo.Entity.Admin;
import com.example.demo.Service.AdminService;
import com.example.demo.Service.JwtService;
import com.example.demo.dto.AuthRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/admins")
public class AdminController {
    @Autowired
    private AdminService adminService;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JwtService jwtService;

    @GetMapping
    public List<Admin> getAllAdmins() {
        return adminService.getAllAdmins();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Admin> getAdminById(@PathVariable Long id) {
        Optional<Admin> agent = adminService.getAdminById(id);
        return agent.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Admin createAgent(@RequestBody Admin admin) {
        return adminService.saveAdmin(admin);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAgent(@PathVariable Long id) {
        adminService.deleteAdmin(id);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/authenticate")
public ResponseEntity<?> authenticateAndGetToken(@RequestBody AuthRequest authRequest) {
    System.out.println("Received authentication request: " + authRequest);
    try {
        Authentication authentication = authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword())
        );
        if (authentication.isAuthenticated()) {
            String token = jwtService.generateToken(authRequest.getUsername());
            return ResponseEntity.ok(token);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
    } catch (Exception e) {
        System.out.println("Authentication failed: " + e.getMessage());
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Authentication failed");
    }
}

}
