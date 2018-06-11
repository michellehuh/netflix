package com.cs304.netflix.controller;


import com.cs304.netflix.mapper.AdminMapper;
import com.cs304.netflix.model.Admin;
import org.mybatis.spring.annotation.MapperScan;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@MapperScan("com.cs304.netflix.mapper")
public class AdminController {

    @Autowired(required=false)
    AdminMapper mapper;

    public static final Logger logger = LoggerFactory.getLogger(AdminController.class);

    @GetMapping("/admin")
    public ResponseEntity<List<Admin>> getAllAccounts() {
        List<Admin> admin = mapper.getAll();
        return new ResponseEntity<List<Admin>>(admin, HttpStatus.OK);
    }

    @GetMapping("/admin/{id}")
    public ResponseEntity<Admin> getById(@PathVariable Integer id) {
        Admin admin = mapper.getById(id);
        return new ResponseEntity<Admin>(admin, HttpStatus.OK);
    }

    @PostMapping("/admin")
    public ResponseEntity<Admin> create(@RequestBody Admin admin) {
        // {"id":67453069,"planId":1,"paymentId":0,"email":"michelle@alumni.ubc.ca","password":"qwer"}
        mapper.add(admin);
        return new ResponseEntity<Admin>(admin, HttpStatus.OK);
    }

    @DeleteMapping("/admin")
    public ResponseEntity<Boolean> delete(@RequestBody Integer id) {
        return new ResponseEntity<Boolean>(mapper.delete(id), HttpStatus.OK);
    }
}