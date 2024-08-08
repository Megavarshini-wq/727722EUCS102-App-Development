package com.example.demo.Entity;



import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Admin {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long adminId;
    private String adminName;
    private String email;
    private String password;

    @OneToMany(mappedBy = "agent", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<User> users;
}

