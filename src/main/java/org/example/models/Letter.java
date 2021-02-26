package org.example.models;

import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.Pattern;

@Entity
@Table(name="java_letters")
public class Letter {

    @Id
    @Column(name="id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name="email")
    @Min(value=10)
    @Max(value=30)
    @Pattern(regexp = "\\\\b[A-Z0-9._%-]+@[A-Z0-9.-]+\\\\.[A-Z]{2,4}\\\\b")
    private String email;

    @Column(name="username")
    @Min(value=10)
    @Max(value=30)
    private String username;

    @Min(value=10)
    @Max(value=300)
    @Column(name="message")
    private String message;

    @Column(name="date")
    @Min(value=10)
    @Max(value=30)
    private String date;

    @Column(name="status")
    private String status;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
