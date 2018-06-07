package com.cs304.netflix.repository;

import com.cs304.netflix.entity.Account;

import java.util.List;

public interface AccountDAO {
    List<Account> getAllAccounts();
    Account getAccountById(int id);
    boolean addAccount(Account account);
    void updateAccount(Account account);
    void deleteAccount(int articleId);
}
