package com.cs304.netflix.controller;

import com.cs304.netflix.mapper.MovieMapper;
import com.cs304.netflix.model.Genre;
import com.cs304.netflix.model.Movie;
import org.mybatis.spring.annotation.MapperScan;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import javax.xml.ws.Response;
import java.math.BigDecimal;
import java.util.List;

@RestController
@MapperScan("com.cs304.netflix.mapper")
public class MovieController {

    @Autowired(required = false)
    MovieMapper mapper;

    public static final Logger logger = LoggerFactory.getLogger(MovieController.class);

    @GetMapping("/movie/new/{noOfPastYears}")
    public ResponseEntity<List<Movie>> newMovies(@PathVariable Integer noOfPastYears) {
        List<Movie> result = mapper.getNewMovies(noOfPastYears);
        return new ResponseEntity<List<Movie>>(result, HttpStatus.OK);
    }

    @GetMapping("/movie/moviesInYear/{year}")
    public ResponseEntity<List<Movie>> moviesInYear(@PathVariable BigDecimal year) {
        List<Movie> result = mapper.getMoviesInYear(year);
        return new ResponseEntity<List<Movie>>(result, HttpStatus.OK);
    }

    @GetMapping("/movie/moviesTitlesContaining/{string}")
    public ResponseEntity<List<Movie>> moviesContaining(@PathVariable String string) {
        List<Movie> result = mapper.getMoviesContaining(string);
        return new ResponseEntity<List<Movie>>(result, HttpStatus.OK);
    }


    @GetMapping("/movie/topMoviesinGenres")
    public ResponseEntity<List<Movie>> topMoviesIn() {
        List<Movie> result = mapper.getTopMoviesinGenres();
        return new ResponseEntity<List<Movie>>(result, HttpStatus.OK);
    }


    @GetMapping("/movie/topMoviesInGivenGenre/{givenGenre}")
    public ResponseEntity<List<Movie>> topInGiven(@PathVariable String givenGenre) {
        List<Movie> result = mapper.getTopMoviesInGivenGenre(givenGenre);
        return new ResponseEntity<List<Movie>>(result, HttpStatus.OK);
    }

    @GetMapping("/movie/maxAverageTimeIn")
    public ResponseEntity<List<Movie>> maxAverageTime() {
        List<Movie> result = mapper.getMaxAverageTimeIn();
        return new ResponseEntity<List<Movie>>(result, HttpStatus.OK);
    }
}


