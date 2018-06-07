package com.spring.repository;

import com.spring.entity.Account;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.lang.Nullable;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@Repository
public class AccountDAO implements AccountDAOI{


    private static final Logger logger = LoggerFactory.getLogger(AccountDAO.class);

    @Autowired
    JdbcTemplate jdbcTemplate;

    @Override
    public List<Account> getAllAccounts() {
        String sql = "SELECT id, name, dob FROM Account";
        RowMapper<Account> rowMapper = new AccountRowMapper();
        return this.jdbcTemplate.query(sql, rowMapper);
    }

    @Override
    public Account getAccountById(int id) {
        String sql = "SELECT id, name, dob FROM Account WHERE id = ?";
        logger.info("id: " + id);
        RowMapper<Account> rowMapper = new AccountRowMapper();
        Account account = jdbcTemplate.queryForObject(sql, rowMapper, id);
        return account;
    }

    @Override
    public boolean addAccount(Account account) {
        String sql = "INSERT INTO Account (id, name, dob) values (?, ?, TODATE(?))";
        jdbcTemplate.update(sql, account.getId(), account.getName(), account.getDob());
        return false;
    }

    @Override
    public void updateAccount(Account account) {
        String sql = "UPDATE Account SET name=?, dob=? WHERE id=?";
        jdbcTemplate.update(sql, account.getName(), account.getDob(), account.getId());
    }

    @Override
    public void deleteAccount(int id) {
        String sql = "DELETE FROM Account WHERE id=?";
        jdbcTemplate.update(sql, id);
    }

    class AccountRowMapper implements RowMapper<Account> {
        /**
         * Implementations must implement this method to map each row of data
         * in the ResultSet. This method should not call {@code next()} on
         * the ResultSet; it is only supposed to map values of the current row.
         *
         * @param row     the ResultSet to map (pre-initialized for the current row)
         * @param rowNum the number of the current row
         * @return the result object for the current row (may be {@code null})
         * @throws SQLException if a SQLException is encountered getting
         *                      column values (that is, there's no need to catch SQLException)
         */
        @Nullable
        @Override
        public Account mapRow(ResultSet row, int rowNum) throws SQLException {
            return new Account(row.getInt("id"), row.getString("name"), row.getDate("dob"));
        }
    }
}
