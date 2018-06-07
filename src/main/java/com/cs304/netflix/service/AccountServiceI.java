package com.spring.service;

import com.spring.entity.Account;

import java.util.List;

public interface AccountServiceI {
    List<Account> getAllAccounts();
    Account getAccountById(int id);
    boolean addAccount(Account account);
    void updateAccount(Account account);
    void deleteAccount(int id);
}
