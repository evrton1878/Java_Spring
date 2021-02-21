package org.example.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/api")
public class ApiPostsController {

    @RequestMapping(value="/{id}",method= RequestMethod.GET,produces = "application/json")
    public String getPost(@PathVariable int id){
        return null;
    }

    @RequestMapping(value="/",method= RequestMethod.GET,produces = "application/json")
    public String getPosts(@RequestParam String page){
        return null;
    }
}
