package com.cs304.netflix.controller;


import com.cs304.netflix.mapper.AdminMapper;
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

import java.math.BigDecimal;

@CrossOrigin(origins = "http://localhost:3000", maxAge=3600)
@RestController
@MapperScan("com.cs304.netflix.mapper")
public class AdminController {

    @Autowired(required=false)
    AdminMapper mapper;

    public static final Logger logger = LoggerFactory.getLogger(AdminController.class);

    @PostMapping("/admin")
    public ResponseEntity<Response> create(@RequestBody Admin admin) {
        // {"planId":null,"paymentId":null,"email":"michelle@alumni.ubc.ca","password":"qwer"}
        admin.generateAndSetId();
        logger.info(admin.getId() + admin.getEmail() + admin.getPassword());
        mapper.add(admin);
        return new ResponseEntity<Response>(new Response(admin.getId()), HttpStatus.OK);
    }

    @PostMapping("/admin/login")
    public ResponseEntity<Response> login(@RequestBody Admin admin) {
        // {"email":"joon.hur@alumni.ubc.ca","password":"qwer"}
        return new ResponseEntity<Response>(new Response(mapper.login(admin)), HttpStatus.OK);
    }

    @GetMapping("/admin/{email}")
    public ResponseEntity<Integer> getById(@PathVariable String email) {
        // url = localhost:8080/admin/joon.hur@alumni.ubc.ca
        int count = mapper.countByEmail(email);
        return new ResponseEntity<Integer>(count, HttpStatus.OK);
    }

    @DeleteMapping("/admin")
    public ResponseEntity<Boolean> delete(@RequestBody String id) {
        return new ResponseEntity<Boolean>(mapper.delete(id), HttpStatus.OK);
    }

    // request: planId, id
    @PostMapping("/admin/plan")
    public ResponseEntity<Response> updatePlan(@RequestBody Admin admin) {
        mapper.updatePlan(admin);
        return new ResponseEntity<Response>(new Response(admin), HttpStatus.OK);
    }

    @GetMapping("/admin/{id}/payment")
    public ResponseEntity<Response> getPayment(@PathVariable String id){
        return new ResponseEntity<>(new Response(mapper.getPayment(id)), HttpStatus.OK);
    }

    //This doesn't really work yet idk why
//    //request: adminId, name, age, id
//    @PostMapping("/admin/addProfile")
//    public ResponseEntity<Profile> addProfile(@RequestBody Profile profile){
//        logger.info(profile.getAdminId() + profile.getName() + profile.getAge() + profile.getId());
//        mapper.addProfile(profile);
//        return new ResponseEntity<Profile>(mapper.getProfile(profile), HttpStatus.OK);
//    }

    @GetMapping("/admin/{id}/profiles")
    public ResponseEntity<Response> getProfiles(@PathVariable String id){
        return new ResponseEntity<>(new Response(mapper.getProfiles(id)), HttpStatus.OK);
    }

    //not tested
    @PostMapping("/admin/{adminiId}/updateProfile")
    public ResponseEntity<Profile> updateProfile(@RequestBody Profile profile){
        mapper.updateProfile(profile);
        return new ResponseEntity<Profile>(profile, HttpStatus.OK);
    }

    //not tested
    @DeleteMapping("/admin/{adminId}/deleteProfile")
    public ResponseEntity<Boolean> deleteProfile(@PathVariable String adminId, @RequestBody BigDecimal id){
        return new ResponseEntity<Boolean>(mapper.deleteprofile(adminId, id), HttpStatus.OK);
    }

    @GetMapping("/admin/{adminId}/movieDiv")
    public ResponseEntity<Response> movieDiv(@PathVariable String adminId){
        return new ResponseEntity<>(new Response(mapper.movieDivision(adminId)), HttpStatus.OK);
    }

    @GetMapping("admin/{adminId}/watchTime")
    public ResponseEntity<Response> watchTime(@PathVariable String adminId){
        return new ResponseEntity<>(new Response(mapper.watchTime(adminId)), HttpStatus.OK);
    }

}