package com.cs304.netflix.service;

import com.cs304.netflix.entity.Account;

import java.util.List;

public interface AccountService {
    List<Account> getAllAccounts();
    Account getAccountById(int id);
    boolean addAccount(Account account);
    void updateAccount(Account account);
    void deleteAccount(int id);
}
