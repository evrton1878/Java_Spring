package org.example.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
public class NotFoundController {

    @RequestMapping("*")
    public String getFallBack(){
        return "index";
    }
}