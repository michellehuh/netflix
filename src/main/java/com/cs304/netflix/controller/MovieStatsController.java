package com.cs304.netflix.controller;

import com.cs304.netflix.mapper.MovieStatsMapper;
import com.cs304.netflix.model.Admin;
import com.cs304.netflix.model.Response;
import com.cs304.netflix.util.Parser;
import org.mybatis.spring.annotation.MapperScan;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000", maxAge=3600)
@RestController
@MapperScan("com.cs304.netflix.mapper")
public class MovieStatsController {
    @Autowired(required=false)
    MovieStatsMapper mapper;

    public static final Logger logger = LoggerFactory.getLogger(MovieStatsController.class);

    @PostMapping("/admin/movieStats")
    public ResponseEntity<Response> movieStats(@RequestBody Admin admin){
        logger.info(Parser.parse(admin));
        return new ResponseEntity<>(new Response(mapper.movieStats(admin)), HttpStatus.OK);
    }

    @PostMapping("/admin/movieStats/max")
    public ResponseEntity<Response> movieStatsMax(@RequestBody Admin admin){
        logger.info(Parser.parse(admin));
        return new ResponseEntity<>(new Response(mapper.movieStatsMax(admin)), HttpStatus.OK);
    }

    @PostMapping("/admin/movieStats/min")
    public ResponseEntity<Response> movieStatsMin(@RequestBody Admin admin){
        logger.info(Parser.parse(admin));
        return new ResponseEntity<>(new Response(mapper.movieStatsMin(admin)), HttpStatus.OK);
    }

}
