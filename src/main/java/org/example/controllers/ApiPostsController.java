package org.example.controllers;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.example.models.Post;
import org.example.service.PostService;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.Part;
import javax.validation.Valid;
import java.io.IOException;
import java.util.List;

@Controller
@RequestMapping("/api")
public class ApiPostsController {
    PostService postService;

    @Inject
    ApiPostsController(PostService postService){
        this.postService = postService;
    }

    @RequestMapping(value="/post/{id}",method= RequestMethod.GET,produces = "application/json")
    @ResponseBody
    public String getPost(@PathVariable int id) throws JsonProcessingException {
        Post post = postService.getPost(id);
        ObjectMapper mapper = new ObjectMapper();
        String result = mapper.writeValueAsString(post);
        return result;
    }

    @RequestMapping(value="/posts",method= RequestMethod.GET,produces = "application/json")
    @ResponseBody
    public String getPosts(@RequestParam int page, @RequestParam int per_page ) {
        int start = page*per_page;
        int end = start+per_page;
        List<Post> posts = postService.getPosts(start,end);
        ObjectMapper mapper = new ObjectMapper();
        String result = null;

        try {
            result = mapper.writeValueAsString(posts);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }

        return result;
    }

    @PostMapping(value="/addPost",produces = "application/json")
    public String addPost(BindingResult bindingResult,
                          @RequestParam(value="file", required=false) Part file,
                          @Valid Post post) throws IOException {
       if(bindingResult.hasErrors()){
           postService.objectApiResponse.addErrors("Some errors has occurred");
       } else{
           postService.addPost(file,post);
       }

       return postService.objectApiResponse.toString();
    }
}
