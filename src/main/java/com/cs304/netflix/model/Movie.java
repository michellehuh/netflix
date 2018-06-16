package com.cs304.netflix.model;

import java.math.BigDecimal;

public class Movie {
    BigDecimal id, duration, releaseYear;
    String title, ageRestriction, genre;

    public Movie(){
    }

    public Movie(BigDecimal id, BigDecimal duration, BigDecimal releaseYear, String title, String ageRestriction, String genre) {
        this.id = id;
        this.duration = duration;
        this.releaseYear = releaseYear;
        this.title = title;
        this.ageRestriction = ageRestriction;
        this.genre = genre;
    }

    public BigDecimal getId() {
        return id;
    }

    public void setId(BigDecimal id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public BigDecimal getDuration() {
        return duration;
    }

    public void setDuration(BigDecimal duration) {
        this.duration = duration;
    }

    public String getAgeRestriction() {
        return ageRestriction;
    }

    public void setAgeRestriction(String ageRestriction) {
        this.ageRestriction = ageRestriction;
    }

    public BigDecimal getReleaseYear() {
        return releaseYear;
    }

    public void setReleaseYear(BigDecimal releaseYear) {
        this.releaseYear = releaseYear;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }
}
