package org.example.service;

import org.example.models.User;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private User user;
    private Boolean isAuth = false;

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Boolean getAuth() {
        return isAuth;
    }

    public void setAuth(Boolean auth) {
        isAuth = auth;
    }
}
