package org.example.dao;

import org.example.models.Letter;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import java.util.List;


@Component
public class LetterDao implements ILetterDao{
    private SessionFactory sessionFactory;

    @Autowired
    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    @Override
    public void addLetter(Letter letter) {
        Session session = this.sessionFactory.getCurrentSession();
        session.persist(letter);
    }

    @Override
    public List<Letter> getLetters() {
        Session session = this.sessionFactory.getCurrentSession();
        List<Letter> letters = session.createSQLQuery("select * from java_letters").list();
        return letters;
    }
}
