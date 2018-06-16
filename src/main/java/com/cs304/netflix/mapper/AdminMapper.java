package com.cs304.netflix.mapper;

import com.cs304.netflix.model.Admin;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface AdminMapper {

    @Select("SELECT * FROM Admin")
    List<Admin> getAll();

    @Select("SELECT * FROM Admin WHERE id = #{id}")
    Admin getById(int id);

    @Insert("INSERT INTO Admin (id, email, password, planId, paymentId) values (#{id}, #{email}, #{password}, #{planId}, #{paymentId})")
    boolean add(Admin admin);

    @Delete("DELETE FROM Admin WHERE id=#{id}")
    boolean delete(int id);

    @Update("UPDATE Admin SET email=#{email}, password=#{password}, planId=#{planId} paymentId=#{paymentId} WHERE id=#{id}")
    public void update(Admin admin);

    @Select("SELECT * FROM Admin WHERE email=#{email} and password=#{password}")
    Admin login(Admin admin);

    @Select("SELECT count(*) FROM Admin WHERE email=#{email}")
    int countByEmail(String email);

    @Update("UPDATE Admin SET planId=#{planId} WHERE id=#{id}")
    void updatePlan(Admin admin);
}
