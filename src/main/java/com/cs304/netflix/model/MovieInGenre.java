package com.cs304.netflix.model;

public class MovieInGenre {
    String movieTitle;
    String genreName;

    public MovieInGenre(){}

    public MovieInGenre(String movieTitle, String genreName){
        this.movieTitle = movieTitle;
        this.genreName = genreName;
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
}
