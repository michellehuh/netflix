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
        logger.info(profile.getName() + profile.getAge() + profile.getAdminId());
        return new ResponseEntity<Response>(new Response(mapper.getProfileFavoriteMovies(profile)), HttpStatus.OK);
    }

    @PostMapping("/profile/movies/all")
    /**
     * select all movies within a profile’s age restriction, order by year desc
     * @param Profile
     */
    ResponseEntity<Response> getProfileAppropriateMovies(@RequestBody Profile profile) {
        logger.info(profile.getName() + profile.getAge() + profile.getAdminId());
        return new ResponseEntity<Response>(new Response(mapper.getProfileAppropriateMovies(profile)), HttpStatus.OK);

    }
}