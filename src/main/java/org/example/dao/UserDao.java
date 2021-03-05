package org.example.dao;

import org.example.models.User;
import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import java.util.SortedSet;
import java.util.TreeSet;

@Component
public class UserDao implements IUserDao{
    private SessionFactory sessionFactory;

    @Autowired
    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    @Override
    public User findUser(String email, String password) {
        Query query = sessionFactory.getCurrentSession().createQuery("from User where email=:email and password=:password");
        query.setString("email",email);
        query.setMaxResults(1);
        query.setString("password",password);
        SortedSet<User> set = new TreeSet<>(query.list());
        return set.first();
    }
}
