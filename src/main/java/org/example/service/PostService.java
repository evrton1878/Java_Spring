package org.example.service;

import org.example.components.ObjectApiResponse;
import org.example.dao.PostDao;
import org.example.models.Post;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import java.io.IOException;
import java.util.List;


@Service
public class PostService {
    public final ObjectApiResponse objectApiResponse;
    private PostDao postDao;

    @Autowired
    PostService(ObjectApiResponse obj, PostDao postDao){
        this.postDao = postDao;
        objectApiResponse = obj;
    }

    @Transactional
    public void addPost(Post post) throws IOException {
        postDao.addPost(post);
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
