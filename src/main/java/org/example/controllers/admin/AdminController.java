package org.example.controllers.admin;

import org.apache.commons.compress.utils.IOUtils;
import org.example.components.ObjectApiResponse;
import org.example.models.Post;
import org.example.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
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
@RequestMapping(value="/admin/")
public class AdminController {
    PostService postService;
    private List<String> allowedTypes;
    public  ObjectApiResponse objectApiResponse;
    private final int MAX_FILE_SIZE = 50000000;
    private ClassPathResource resource;


    @Autowired
    AdminController(ObjectApiResponse obj, PostService postService){
        String[] types = new String[]{"image/png","image/svg"};
        allowedTypes = Arrays.asList(types);
        objectApiResponse = obj;
        resource = new ClassPathResource("/webapp/resources");
        this.postService = postService;
    }


    @PostMapping(value="/addPost",produces = "application/json")
    @ResponseBody
    public String addPost(BindingResult bindingResult,
                          @RequestPart(value="image", required=true) Part file,
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
