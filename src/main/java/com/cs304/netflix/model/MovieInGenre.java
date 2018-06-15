package com.cs304.netflix.model;

import java.math.BigDecimal;

public class MovieInGenre {
   BigDecimal id, duration, releaseYear;
    String genreName, movieTitle, ageRestriction;

    public MovieInGenre(){}

    public MovieInGenre(String movieTitle, String genreName, String ageRestriction,
                        BigDecimal id, BigDecimal duration, BigDecimal releaseYear){
        this.movieTitle = movieTitle;
        this.genreName = genreName;
        this.ageRestriction = ageRestriction;
        this.id = id;
        this.duration = duration;
        this.releaseYear = releaseYear;

    }

    public String getMovieTitle(){
        return movieTitle;
    }

    public String getGenreName() {
        return genreName;
    }

    public void setMovieTitle(String movieTitle) {
        this.movieTitle = movieTitle;
    }

    public void setGenreName(String genreName) {
        this.genreName = genreName;
    }

    public BigDecimal getDuration() {
        return duration;
    }

    public BigDecimal getId() {
        return id;
    }

    public BigDecimal getReleaseYear() {
        return releaseYear;
    }

    public String getAgeRestriction() {
        return ageRestriction;
    }

    public void setAgeRestriction(String ageRestriction) {
        this.ageRestriction = ageRestriction;
    }

    public void setDuration(BigDecimal duration) {
        this.duration = duration;
    }

    public void setId(BigDecimal id) {
        this.id = id;
    }

    public void setReleaseYear(BigDecimal releaseYear) {
        this.releaseYear = releaseYear;
    }
}

