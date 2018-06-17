package com.cs304.netflix.controller;

import com.cs304.netflix.mapper.ProfileInfoMapper;
import com.cs304.netflix.model.Profile;
import com.cs304.netflix.model.Response;
import org.mybatis.spring.annotation.MapperScan;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@MapperScan("com.cs304.netflix.mapper")
public class ProfileInfoController {

    public static final Logger logger = LoggerFactory.getLogger(ProfileInfoController.class);

    @Autowired(required=false)
    ProfileInfoMapper mapper;

    @PostMapping("/admin/profile/create")
    public ResponseEntity<Response> login(@RequestBody Profile profile) {
        // {"name": "testNAME", "age":10, "adminId": "21a97bc7-7338-4bd1-bb8b-6edae247bba0" }
        Profile result;
        try {
            mapper.createProfile(profile);
            result = mapper.getProfileByAdminIdAndName(profile);
            return new ResponseEntity<Response>(new Response(result), HttpStatus.OK);
        } catch (Exception e) {
            logger.error(e.getLocalizedMessage());
            return new ResponseEntity<Response>(new Response(e), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}