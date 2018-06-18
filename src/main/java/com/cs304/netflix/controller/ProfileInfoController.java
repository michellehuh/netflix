package com.cs304.netflix.controller;

import com.cs304.netflix.mapper.ProfileInfoMapper;
import com.cs304.netflix.model.Admin;
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
public class ProfileInfoController {

    public static final Logger logger = LoggerFactory.getLogger(ProfileInfoController.class);

    @Autowired(required=false)
    ProfileInfoMapper mapper;

    @PostMapping("/admin/profiles")
    public ResponseEntity<Response> getProfiles(@RequestBody Admin admin) {
        logger.info("getProfiles" + admin.getId());
        return new ResponseEntity<Response>(new Response(mapper.getProfiles(admin)), HttpStatus.OK);
    }

    @PostMapping("/admin/profile/create")
    public ResponseEntity<Response> create(@RequestBody Profile profile) {
        // {"name": "testNAME", "age":10, "adminId": "21a97bc7-7338-4bd1-bb8b-6edae247bba0" }
        Profile result;
        try {
            logger.info("create" + profile.getName());
            mapper.createProfile(profile);
            result = mapper.getLastProfile(profile);
            return new ResponseEntity<Response>(new Response(result), HttpStatus.OK);
        } catch (Exception e) {
            logger.error(e.getLocalizedMessage());
            return new ResponseEntity<Response>(new Response(e), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @PostMapping("/admin/profile/update")
    public ResponseEntity<Response> update(@RequestBody Profile profile) {
        // {"name": "testNAME", "age":10, "adminId": "21a97bc7-7338-4bd1-bb8b-6edae247bba0" }
        try {
            logger.info("update" + profile.getName());
            mapper.updateProfile(profile);
            return new ResponseEntity<Response>(new Response(profile), HttpStatus.OK);
        } catch (Exception e) {
            logger.error(e.getLocalizedMessage());
            return new ResponseEntity<Response>(new Response(e), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/admin/profile/delete")
    public ResponseEntity<Response> delete(@RequestBody Profile profile) {
        // {"name": "testNAME", "age":10, "adminId": "21a97bc7-7338-4bd1-bb8b-6edae247bba0" }
        try {
            logger.info("delete" + profile.getName());
            mapper.deleteProfile(profile);
            return new ResponseEntity<Response>(new Response(true), HttpStatus.OK);
        } catch (Exception e) {
            logger.error(e.getLocalizedMessage());
            return new ResponseEntity<Response>(new Response(e), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
