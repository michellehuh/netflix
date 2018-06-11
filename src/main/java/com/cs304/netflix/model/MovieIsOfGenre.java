package com.cs304.netflix.model;

import java.math.BigDecimal;

public class MovieIsOfGenre {

    BigDecimal movieId;
    String genre;

    public MovieIsOfGenre(){
    }

    public MovieIsOfGenre(BigDecimal movieId, String genre){
        this.movieId = movieId;
        this.genre = genre;
    }

    public BigDecimal getMovieId() {
        return movieId;
    }

    public void setMovieId(BigDecimal movieId) {
        this.movieId = movieId;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }
}
