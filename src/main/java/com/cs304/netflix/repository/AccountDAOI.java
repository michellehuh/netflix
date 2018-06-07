package com.spring.repository;

import com.spring.entity.Account;

import java.util.List;

public interface AccountDAOI {
    List<Account> getAllAccounts();
    Account getAccountById(int id);
    boolean addAccount(Account account);
    void updateAccount(Account account);
    void deleteAccount(int articleId);
}
