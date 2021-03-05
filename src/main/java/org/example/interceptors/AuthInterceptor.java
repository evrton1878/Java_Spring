package org.example.interceptors;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.example.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.servlet.HandlerInterceptor;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class AuthInterceptor implements HandlerInterceptor
{

    private  UserService userService;

    @Autowired
    void setUserService(UserService userService){
        this.userService = userService;
    }

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler){
        try{
            String authHeader = request.getHeader("Auth");
            String url = request.getRequestURI();

            if(authHeader != null && authHeader.length()>0){
               ObjectMapper objectMapper = new ObjectMapper();
               JsonNode jsonNode = objectMapper.readTree(authHeader);
               String email = jsonNode.get("email").asText();
               String password = jsonNode.get("password").asText();
               userService.login(email,password);
            }
        } catch(Throwable exception){
            exception.printStackTrace();
        }

        return true;
    }
}
