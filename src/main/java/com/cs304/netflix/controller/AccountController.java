package com.spring.controller;

import com.spring.entity.Account;
import com.spring.service.AccountServiceI;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AccountController {

    @Autowired
    private AccountServiceI service;

    public static final Logger logger = LoggerFactory.getLogger(AccountController.class);

    @RequestMapping(value = "/test", method = RequestMethod.GET)
    public String test(@RequestParam(value = "name") String name) {
        // http://localhost:8080/test?name=michelle
        logger.info("test(name = " + name + ")");
        return "hello " + name + "!"; // hello michelle
    }


    @GetMapping("/account")
    public ResponseEntity<List<Account>> getAllAccounts() {
        List<Account> accounts = service.getAllAccounts();
        return new ResponseEntity<List<Account>>(accounts, HttpStatus.OK);
    }

    @GetMapping("/account/{id}")
    public ResponseEntity<Account> getAccountById(@PathVariable Integer id) {
        Account account = service.getAccountById(id);
        return new ResponseEntity<Account>(account, HttpStatus.OK);
    }



}
