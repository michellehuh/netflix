package com.cs304.netflix.model;

import java.math.BigDecimal;

public class Movie {
    BigDecimal id, duration, releaseYear, watches, timeIn;
    String title, ageRestriction, genre, thumbnail;



    public Movie(){
    }

    public Movie(BigDecimal id, String title, BigDecimal duration, String ageRestriction, BigDecimal releaseYear, String genre, BigDecimal watches, String thumbnail, BigDecimal timeIn){
        this.id = id;
        this.title = title;
        this.duration = duration;
        this.ageRestriction = ageRestriction;
        this.releaseYear = releaseYear;
        this.genre = genre;
        this.watches = watches;
        this.thumbnail = thumbnail;
        this.timeIn = timeIn;
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

    public String getGenre(){
        return genre;
    }

    public void setGenre(String genre){
        this.genre = genre;
    }

    public void setWatches(BigDecimal watches){
        this.watches = watches;
    }

    public BigDecimal getWatches() {
        return this.watches;
    }

    public String getThumbnail() { return this.thumbnail; }

    public void setThumbnail(String thumbnail) { this.thumbnail = thumbnail; }

    public void setTimeIn(BigDecimal timeIn){
        this.timeIn = timeIn;
    }

    public BigDecimal getTimeIn() {
        return this.timeIn;
    }
}
