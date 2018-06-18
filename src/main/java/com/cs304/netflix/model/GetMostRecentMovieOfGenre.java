package com.cs304.netflix.model;

public class GetMostRecentMovieOfGenre {

    int pastNoYears, numOfMovies;
    String genre;

    public GetMostRecentMovieOfGenre() {
    }

    public GetMostRecentMovieOfGenre(int pastNoYears, int numOfMovies, String genre) {
        this.pastNoYears = pastNoYears;
        this.numOfMovies = numOfMovies;
        this.genre = genre;
    }

    public int getPastNoYears() {
        return pastNoYears;
    }

    public void setPastNoYears(int pastNoYears) {
        this.pastNoYears = pastNoYears;
    }

    public int getNumOfMovies() {
        return numOfMovies;
    }

    public void setNumOfMovies(int numOfMovies) {
        this.numOfMovies = numOfMovies;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }
}
