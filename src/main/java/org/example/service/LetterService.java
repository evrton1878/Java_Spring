package org.example.service;

import org.example.dao.LetterDao;
import org.example.models.Letter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class LetterService {
    private LetterDao letterDao;

    @Autowired
    public void setLetterDao(LetterDao letterDao) {
        this.letterDao = letterDao;
    }

    @Transactional
    public void addLetter(Letter letter){
        this.letterDao.addLetter(letter);
    }
}
