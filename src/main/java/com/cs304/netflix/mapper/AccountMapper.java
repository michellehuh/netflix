package com.cs304.netflix.mapper;

import com.cs304.netflix.model.Account;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface AccountMapper {

    @Select("SELECT * FROM Account")
    List<Account> getAllAccounts();

    @Select("SELECT * FROM Account WHERE id = #{id}")
    Account getById(int id);

    @Insert("INSERT INTO Account (id, name, dob) values (#{account.id}, #{account.name}, #{account.dob})")
    void add(Account account);

    @Delete("DELETE FROM Account WHERE id=#{id}")
    public void delete(int id);

    @Update("UPDATE Account SET name=#{account.name}, dob=#{account.dob} WHERE id=#{account.id}")
    public void update(Account account);

}
