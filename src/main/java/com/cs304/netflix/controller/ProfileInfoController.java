package com.cs304.netflix.controller;

import com.cs304.netflix.mapper.ProfileInfoMapper;
import com.cs304.netflix.model.Admin;
import com.cs304.netflix.model.Profile;
import com.cs304.netflix.model.Response;
import com.cs304.netflix.util.Parser;
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
public class ProfileInfoController {

    public static final Logger logger = LoggerFactory.getLogger(ProfileInfoController.class);

    @Autowired(required=false)
    ProfileInfoMapper mapper;

    @PostMapping("/admin/profiles")
    public ResponseEntity<Response> getProfiles(@RequestBody Admin admin) {
        logger.info("READ:\t" + Parser.parse(admin));
        return new ResponseEntity<Response>(new Response(mapper.getProfiles(admin)), HttpStatus.OK);
    }

    // {"name": "testNAME", "age":10, "adminId": "21a97bc7-7338-4bd1-bb8b-6edae247bba0" }
    @PostMapping("/admin/profile/create")
    public ResponseEntity<Response> create(@RequestBody Profile profile) {
        try {
            logger.info("CREATE:\t" + Parser.parse(profile));
            mapper.createProfile(profile);
            return new ResponseEntity<Response>(new Response(profile), HttpStatus.OK);
        } catch (Exception e) {
            logger.error(e.getLocalizedMessage());
            return new ResponseEntity<Response>(new Response(e), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // {"name": "testNAME", "age":10, "adminId": "21a97bc7-7338-4bd1-bb8b-6edae247bba0" }
    @PostMapping("/admin/profile/update")
    public ResponseEntity<Response> update(@RequestBody Profile profile) {
        try {
            logger.info("UPDATE:\t" + Parser.parse(profile));
            mapper.updateProfile(profile);
            return new ResponseEntity<Response>(new Response(profile), HttpStatus.OK);
        } catch (Exception e) {
            logger.error(e.getLocalizedMessage());
            return new ResponseEntity<Response>(new Response(e), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // {"name": "testNAME", "age":10, "adminId": "21a97bc7-7338-4bd1-bb8b-6edae247bba0" }
    @PostMapping("/admin/profile/delete")
    public ResponseEntity<Response> delete(@RequestBody Profile profile) {
        try {
            logger.info("DELETE:\t" + Parser.parse(profile));
            mapper.deleteProfile(profile);
            return new ResponseEntity<Response>(new Response(profile), HttpStatus.OK);
        } catch (Exception e) {
            logger.error(e.getLocalizedMessage());
            return new ResponseEntity<Response>(new Response(e), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}