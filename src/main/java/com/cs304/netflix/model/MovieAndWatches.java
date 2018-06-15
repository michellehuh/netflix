package com.cs304.netflix.model;

import java.math.BigDecimal;

public class MovieAndWatches {
    String movieTitle;
    BigDecimal watchCount;

    public MovieAndWatches(){}

    public MovieAndWatches(String movieTitle, BigDecimal watchCount){
        this.movieTitle = movieTitle;
        this.watchCount = watchCount;
    }

    public String getMovieTitle() {
        return movieTitle;
    }

    public void setMovieTitle(String movieTitle) {
        this.movieTitle = movieTitle;
    }

    public BigDecimal getWatchCount() {
        return watchCount;
    }

    public void setWatchCount(BigDecimal watchCount) {
        this.watchCount = watchCount;
    }
}
