package org.example.controllers;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.example.components.ObjectApiResponse;
import org.example.models.Post;
import org.example.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@Controller
@RequestMapping("/api")
public class ApiPostsController {
    PostService postService;
    public  ObjectApiResponse objectApiResponse;

    @Autowired
    ApiPostsController(ObjectApiResponse obj, PostService postService){
        objectApiResponse = obj;
        this.postService = postService;
    }

    @RequestMapping(value="/post/{id}",method= RequestMethod.GET,produces = "application/json")
    @ResponseBody
    public ResponseEntity<String> getPost(@PathVariable int id) throws JsonProcessingException {
        Post post = postService.getPost(id);
        ObjectMapper mapper = new ObjectMapper();
        String result = "{}";

        if(post != null){
            result = mapper.writeValueAsString(post);
        } else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(result);
        }

        return ResponseEntity.ok(result);
    }

    @RequestMapping(value="/posts",method= RequestMethod.GET,produces = "application/json")
    @ResponseBody
    public String getPosts(@RequestParam String page, @RequestParam String per_page ) {
        Integer pageInteger = Integer.valueOf(page);
        Integer perPageInteger = Integer.valueOf(per_page);
        int start = pageInteger * perPageInteger;
        int end = start + perPageInteger;
        List<Post> posts = postService.getPosts(pageInteger*perPageInteger,end);
        ObjectMapper mapper = new ObjectMapper();
        String result = "[]";

        try {
            if(posts.size()>0){
                result = mapper.writeValueAsString(posts);
            }
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }

        return result;
    }
}
