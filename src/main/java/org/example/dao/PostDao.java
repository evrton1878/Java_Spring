package org.example.dao;

import org.example.models.Post;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.transaction.Transactional;
import java.util.List;

@Component
public class PostDao {
    private SessionFactory sessionFactory;

    @Autowired
    PostDao(SessionFactory sessionFactory){
        this.sessionFactory = sessionFactory;
    }

    private Session getCurrentSession(){
        return this.sessionFactory.getCurrentSession();
    }

    public void addPost(Post post){
        getCurrentSession().save(post);
    }

    public void updatePost(Post post){
        getCurrentSession().update(post);
    }

    public List<Post> getPosts(int start, int limit){
        Session session = getCurrentSession();
        Query query = session.createQuery("from Post where id>= " + start);
        query.setMaxResults(limit);
        List<Post> list = query.list();
        return list;
    }

    public Post getPost(int id){
        return getCurrentSession().get(Post.class,id);
    }
}
