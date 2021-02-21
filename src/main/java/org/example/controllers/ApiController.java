package org.example.controllers;

import org.example.models.Letter;
import org.example.service.LetterService;
import org.example.components.ObjectApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import javax.servlet.http.HttpServletResponse;
import java.util.regex.Matcher;
import java.util.regex.Pattern;


@Controller
@RequestMapping("/api/contacts")
public class ApiController {
    private ObjectApiResponse objectApiResponseResponse;
    private LetterService letterService;

    @Autowired
    public ApiController(LetterService letterService) {
        this.letterService = letterService;
    }

    @Autowired
    public void setObjectApiResponseResponse(ObjectApiResponse objectApiResponseResponse) {
        this.objectApiResponseResponse = objectApiResponseResponse;
    }

    @PostMapping(value = "/contacts", produces = "application/json", headers = "Content-Type:application/json")
    @ResponseBody
    public String addLetter(BindingResult results, HttpServletResponse response, @RequestBody Letter letter){
        String email = letter.getEmail();
        String message = letter.getMessage();
        String name = letter.getUsername();
        Pattern emailPattern = Pattern.compile("\\\\b[A-Z0-9._%-]+@[A-Z0-9.-]+\\\\.[A-Z]{2,4}\\\\b", Pattern.CASE_INSENSITIVE);
        Matcher matcher = emailPattern.matcher(email);

        if(matcher.matches() && !(email.length()<30 && email.length()>10)){
            objectApiResponseResponse.addErrors("Invalid email");
        } else if(message.length()>300){
            objectApiResponseResponse.addErrors("Too long message");
        } else if(name.length()>30 || name.length()<10){
            objectApiResponseResponse.addErrors("Invalid name");
        }

        if(objectApiResponseResponse.getErrors().isEmpty()){
            letterService.addLetter(letter);
            objectApiResponseResponse.setStatus("ok");
        }

        return objectApiResponseResponse.toString();
    }
}