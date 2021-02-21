package org.example.dao;

import org.example.models.Letter;

import java.util.List;

public interface ILetterDao {
    public void addLetter(Letter letter);
    public List<Letter> getLetters();
}
