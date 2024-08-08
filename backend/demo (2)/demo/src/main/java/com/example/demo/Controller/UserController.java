package com.example.demo.Controller;

import com.example.demo.Entity.User;
import com.example.demo.Service.JwtService;
import com.example.demo.Service.UserService;
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

// @CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserService userService;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JwtService jwtService;

    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        Optional<User> user = userService.getUserById(id);
        return user.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public User createUser(@RequestBody User user) {
        return userService.saveUser(user);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/authenticate")
    public ResponseEntity<?> authenticateAndGetToken(@RequestBody AuthRequest authRequest) {
        try {
            System.out.println("Authenticating user: " + authRequest.getUsername());
            Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword())
            );
            System.out.println("Authentication result: " + authentication.isAuthenticated());
    
            if (authentication.isAuthenticated()) {
                String token = jwtService.generateToken(authRequest.getUsername());
                return ResponseEntity.ok(token);
            } else {
                System.out.println("Invalid credentials");
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
            }
        } catch (Exception e) {
            System.out.println("Authentication failed: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Authentication failed");
        }
    }
    
}
