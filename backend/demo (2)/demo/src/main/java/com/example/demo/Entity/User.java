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
    public class User {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long userId;
        private String name;
        private String email;
        private String password;

        @ManyToOne
        @JoinColumn(name = "agent_id")
        private Admin agent;

        @OneToMany(mappedBy = "owner", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
        private Set<Book> properties;
    }

