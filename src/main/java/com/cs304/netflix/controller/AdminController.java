package com.cs304.netflix.controller;


import com.cs304.netflix.mapper.AdminMapper;
import com.cs304.netflix.model.Admin;
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
public class AdminController {

    @Autowired(required=false)
    AdminMapper mapper;

    public static final Logger logger = LoggerFactory.getLogger(AdminController.class);

    @PostMapping("/admin")
    public ResponseEntity<Admin> create(@RequestBody Admin admin) {
        // {"id":67453069,"planId":1,"paymentId":0,"email":"michelle@alumni.ubc.ca","password":"qwer"}
        mapper.add(admin);
        return new ResponseEntity<Admin>(admin, HttpStatus.OK);
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
    public ResponseEntity<Boolean> delete(@RequestBody Integer id) {
        return new ResponseEntity<Boolean>(mapper.delete(id), HttpStatus.OK);
    }

//    @PostMapping("/admin/payment")
//    public ResponseEntity<PaymentInfo> getPayment(@RequestBody Admin admin){
//        return new ResponseEntity<PaymentInfo>(mapper.getPaymentInfo(admin), HttpStatus.OK);
//    }
}