package org.example.service;

import org.example.dao.UserDao;
import org.example.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.TestingAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class UserService {
    private User user;
    private UserDao userDao;

    @Autowired
    UserService(UserDao userDao){
        this.userDao = userDao;
    }

    @Transactional
    public boolean login(String email, String password){
        user = userDao.findUser(email,password);

        SecurityContext context = SecurityContextHolder.createEmptyContext();
        Authentication authentication =
                new TestingAuthenticationToken(user.getUsername() ,user.getPassword(), user.getStatus());
        context.setAuthentication(authentication);
        SecurityContextHolder.setContext(context);

        if(user != null) {
            return true;
        }
        return false;
    }
}
