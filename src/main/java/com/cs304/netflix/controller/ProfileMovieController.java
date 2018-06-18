package com.cs304.netflix.controller;

import com.cs304.netflix.mapper.ProfileMovieMapper;
import com.cs304.netflix.model.Profile;
import com.cs304.netflix.model.Response;
import org.mybatis.spring.annotation.MapperScan;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000", maxAge=3600)
@RestController
@MapperScan("com.cs304.netflix.mapper")
public class ProfileMovieController {

    @Autowired(required=false)
    ProfileMovieMapper mapper;

    public static final Logger logger = LoggerFactory.getLogger(ProfileMovieController.class);

    @PostMapping("/profile/movies/favorites")
    /**
     * select the most popular movies within a profile’s age restriction based on profile's watch history
     * @param Profile
     */
    ResponseEntity<Response> getProfileFavoriteMovies(@RequestBody Profile profile) {
        logger.info("ID:" + profile.getId() + "Age: " + profile.getAge() + "adminID" + profile.getAdminId());
        return new ResponseEntity<Response>(new Response(mapper.getProfileFavoriteMovies(profile)), HttpStatus.OK);
    }

    @PostMapping("/profile/movies/all")
    /**
     * select all movies within a profile’s age restriction, order by year desc
     * @param Profile
     */
    ResponseEntity<Response> getProfileAppropriateMovies(@RequestBody Profile profile) {
        logger.info("ID:" + profile.getId() + "Age: " + profile.getAge() + "adminID" + profile.getAdminId());
        return new ResponseEntity<Response>(new Response(mapper.getProfileAppropriateMovies(profile)), HttpStatus.OK);
    }

    @PostMapping("/profile/movies/myMovies")
    /**
     * select all movies that given profile has watched
     * @param Profile
     */
    ResponseEntity<Response> getMyHistoryMovies(@RequestBody Profile profile) {
        return new ResponseEntity<Response>(new Response(mapper.getMyHistoryMovies(profile)), HttpStatus.OK);
    }

    @PostMapping("/profile/movies/addMovie")
    /**
     * add given Movie to the given profile
     * @param Profile
     */
    ResponseEntity<Response> addMovieToProfile(@RequestBody Profile profile) {
        mapper.addMovieToProfile(profile);
        return new ResponseEntity<Response>(new Response(profile), HttpStatus.OK);
    }

    @DeleteMapping("/profile/movies/deleteMovie")
    /**
     * delete given Movie from the given profile
     * @param Profile
     */
    ResponseEntity<Response> deleteMovieFromProfile(@RequestBody Profile profile) {
        mapper.deleteMovieFromProfile(profile);
        return new ResponseEntity<Response>(new Response(profile), HttpStatus.OK);
    }
}