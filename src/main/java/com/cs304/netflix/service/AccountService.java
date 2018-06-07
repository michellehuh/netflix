package com.spring.service;

import com.spring.entity.Account;
import com.spring.repository.AccountDAOI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AccountService implements AccountServiceI {

    @Autowired
    private AccountDAOI dao;

    @Override
    public List<Account> getAllAccounts() {
        return dao.getAllAccounts();
    }

    @Override
    public Account getAccountById(int id) {
        return dao.getAccountById(id);
    }

    @Override
    public boolean addAccount(Account account) {
        return dao.addAccount(account);
    }

    @Override
    public void updateAccount(Account account) {
        dao.updateAccount(account);
    }

    @Override
    public void deleteAccount(int id) {
        dao.deleteAccount(id);
    }
}
