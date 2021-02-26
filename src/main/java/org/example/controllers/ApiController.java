package org.example.controllers;

import org.example.models.Letter;
import org.example.service.LetterService;
import org.example.components.ObjectApiResponse;
import org.example.validation.Validate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import javax.validation.Valid;



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
    public String addLetter(BindingResult results, @Valid Letter letter){
        if(results.hasErrors()){
           results.getFieldErrors().forEach(v->{
                String fieldName = v.getObjectName();
                objectApiResponseResponse.addErrors(Validate.getErrorMessage(fieldName));
           });
        } else{
            letterService.addLetter(letter);
            objectApiResponseResponse.setStatus("ok");
        }
        return objectApiResponseResponse.toString();
    }
}