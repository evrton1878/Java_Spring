package org.example.models;

import com.fasterxml.jackson.annotation.JsonValue;
import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;

@Entity
@Table(name="java_post",schema="1oASotOvGd")
public class Post {
    @Id
    @Column(name="id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name="title")
    @Min(value=10)
    @Max(value=30)
    private String title;

    @Column(name="description")
    @Min(value=10)
    @Max(value=100)
    private String description;

    @Column(name="image")
    @Min(value=10)
    @Max(value=60)
    private String image;

    @Column(name="category")
    @Min(value=10)
    @Max(value=60)
    private String category;

    @Column(name="content")
    @Min(value=10)
    @Max(value=900)
    private String content;

    @Column(name="contentList")
    @Min(value=10)
    @Max(value=90)
    private String contentList;

    @JsonValue
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @JsonValue
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    @JsonValue
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @JsonValue
    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    @JsonValue
    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    @JsonValue
    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    @JsonValue
    public String getContentList() {
        return this.contentList;
    }

    public void setContentList(String contentList) {
        this.contentList = contentList;
    }
}
