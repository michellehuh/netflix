package com.cs304.netflix.controller;

import com.cs304.netflix.mapper.AccountMapper;
import com.cs304.netflix.model.Account;
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
public class AccountController {

    @Autowired(required=false)
    AccountMapper mapper;

    public static final Logger logger = LoggerFactory.getLogger(AccountController.class);

    @RequestMapping(value = "/test", method = RequestMethod.GET)
    public String test(@RequestParam(value = "name") String name) {
        // http://localhost:8080/test?name=michelle
        logger.info("test(name = " + name + ")");
        return "hello " + name + "!"; // hello michelle
    }

    @GetMapping("/account")
    public ResponseEntity<List<Account>> getAllAccounts() {
        List<Account> accounts = mapper.getAllAccounts();
        return new ResponseEntity<List<Account>>(accounts, HttpStatus.OK);
    }

    @GetMapping("/account/{id}")
    public ResponseEntity<Account> getAccountById(@PathVariable Integer id) {
        Account account = mapper.getById(id);
        return new ResponseEntity<Account>(account, HttpStatus.OK);
    }
}