package org.example.models;

import org.example.validation.Validate;
import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.Pattern;

@Entity
@Table(name="java_user")
public class User {
    @Id
    @Column(name="id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name="email")
    @Min(value=10)
    @Max(value=30)
    @Pattern(regexp = "\\\\b[A-Z0-9._%-]+@[A-Z0-9.-]+\\\\.[A-Z]{2,4}\\\\b",message = "Email is invalid")
    private String email;

    @Column(name="username")
    @Min(value=10)
    @Max(value=30)
    private String username;

    @Column(name="password")
    @Min(value=5)
    @Max(value=10)
    private String message;

    @Column(name="status")
    private String status;
}
