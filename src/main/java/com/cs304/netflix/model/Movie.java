package com.cs304.netflix.model;

import java.math.BigDecimal;

public class Movie {
    BigDecimal id, duration, releaseYear;
    String title, ageRestriction;

    public Movie(){
    }

    public Movie(BigDecimal id, String title, BigDecimal duration, String ageRestriction, BigDecimal releaseYear){
        this.id = id;
        this.title = title;
        this.duration = duration;
        this.ageRestriction = ageRestriction;
        this.releaseYear = releaseYear;
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
}
