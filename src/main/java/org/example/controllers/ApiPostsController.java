package org.example.controllers;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.commons.compress.utils.IOUtils;
import org.example.components.ObjectApiResponse;
import org.example.dao.PostDao;
import org.example.models.Post;
import org.example.service.PostService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.Part;
import javax.validation.Valid;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.List;

@Controller
@RequestMapping("/api")
public class ApiPostsController {
    PostService postService;
    private List<String> allowedTypes;
    public  ObjectApiResponse objectApiResponse;
    private final int MAX_FILE_SIZE = 50000000;
    private ClassPathResource resource;

    @Autowired
    ApiPostsController(ObjectApiResponse obj, PostService postService){
        allowedTypes = Arrays.asList(new String[]{"image/png","image/svg"});
        objectApiResponse = obj;
        resource = new ClassPathResource("/webapp/resources");
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
    public String getPosts(@RequestParam String page, @RequestParam String per_page ) {
        Integer pageInteger = Integer.valueOf(page);
        Integer perPageInteger = Integer.valueOf(per_page);
        int start = pageInteger*perPageInteger;
        int end = start+perPageInteger;
        List<Post> posts = postService.getPosts(pageInteger*perPageInteger,end);
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
           objectApiResponse.addErrors("Some errors has occurred");
       } else{
           int fileSize = (int)file.getSize();
           String contentType = file.getContentType();
           String filename = file.getName()+Math.random();

           if(!allowedTypes.contains(contentType)){
               objectApiResponse.addErrors("Invalid type of file");
           }else if(fileSize>MAX_FILE_SIZE){
               objectApiResponse.addErrors("Max file size is exceeded");
           }else {
               InputStream inputStream = file.getInputStream();
               byte[] bytes = IOUtils.toByteArray(inputStream);
               Path dest = Paths.get(resource.getFile().getAbsolutePath(), filename);
               Files.createFile(dest);

               if(Files.exists(dest)){
                   String publicPath = "/public/images/"+filename;
                   post.setImage(publicPath);
                   Files.write(dest, bytes);
                   postService.addPost(post);
                   objectApiResponse.setStatus("ok");
               }
           }
       }

       return objectApiResponse.toString();
    }
}
