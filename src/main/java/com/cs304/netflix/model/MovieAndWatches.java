package com.cs304.netflix.model;

import java.math.BigDecimal;

public class MovieAndWatches {
    BigDecimal id, duration, releaseYear, watchCount, watchTime;
    String genreName, movieTitle, ageRestriction;

    public MovieAndWatches(){}

    public MovieAndWatches(String movieTitle, String genreName, String ageRestriction,
                        BigDecimal id, BigDecimal duration, BigDecimal releaseYear, BigDecimal watchCount,
                        BigDecimal watchTime){
        this.movieTitle = movieTitle;
        this.genreName = genreName;
        this.ageRestriction = ageRestriction;
        this.id = id;
        this.duration = duration;
        this.releaseYear = releaseYear;
        this.watchCount = watchCount;
        this.watchTime = watchTime;

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

    public BigDecimal getWatchCount() {
        return watchCount;
    }

    public void setWatchCount(BigDecimal watchCount) {
        this.watchCount = watchCount;
    }

    public BigDecimal getWatchTime() {
        return watchTime;
    }

    public void setWatchTime(BigDecimal watchTime) {
        this.watchTime = watchTime;
    }
}
