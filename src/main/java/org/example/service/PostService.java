package org.example.service;

import org.apache.commons.compress.utils.IOUtils;
import org.example.components.ObjectApiResponse;
import org.example.dao.PostDao;
import org.example.models.Post;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;
import javax.servlet.http.Part;
import javax.transaction.Transactional;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.List;


@Service
public class PostService {
    private List<String> allowedTypes;
    public final ObjectApiResponse objectApiResponse;
    private final int MAX_FILE_SIZE = 50000000;
    private final Logger logger = LoggerFactory.getLogger(PostService.class);
    private ClassPathResource resource;
    private PostDao postDao;

    @Autowired
    PostService(ObjectApiResponse obj, PostDao postDao){
        allowedTypes = Arrays.asList(new String[]{"image/png","image/svg"});
        this.postDao = postDao;
        objectApiResponse = obj;
        resource = new ClassPathResource("/webapp/resources");
    }

    @Transactional
    public ObjectApiResponse addPost(Part file, Post post) throws IOException {
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
               postDao.addPost(post);
               objectApiResponse.setStatus("ok");
           }
       }

       return objectApiResponse;
    }

    @Transactional
    public Post getPost(int id){
        return postDao.getPost(id);
    }

    @Transactional
    public List<Post> getPosts(int start, int limit){
        return postDao.getPosts(start,limit);
    }
}
