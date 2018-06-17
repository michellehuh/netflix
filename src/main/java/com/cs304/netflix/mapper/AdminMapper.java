package com.cs304.netflix.mapper;

import com.cs304.netflix.model.Admin;
import com.cs304.netflix.model.PaymentInfo;
import com.cs304.netflix.model.Profile;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface AdminMapper {

    @Select("SELECT * FROM Admin")
    List<Admin> getAll();

    @Select("SELECT * FROM Admin WHERE id = #{id}")
    Admin getById(int id);

    @Insert("INSERT INTO Admin (id, email, password) values (#{id}, #{email}, #{password})")
    boolean add(Admin admin);

    @Delete("DELETE FROM Admin WHERE id=#{id}")
    boolean delete(int id);

    @Update("UPDATE Admin SET email=#{email}, password=#{password}, planId=#{planId} paymentId=#{paymentId} WHERE id=#{id}")
    void update(Admin admin);

    @Select("SELECT * FROM Admin WHERE email=#{email} and password=#{password}")
    Admin login(Admin admin);

    @Select("SELECT count(*) FROM Admin WHERE email=#{email}")
    int countByEmail(String email);

    @Update("UPDATE Admin SET planId=#{planId} WHERE id=#{id}")
    void updatePlan(Admin admin);

    @Select("SELECT * FROM PaymentInfo, Admin WHERE Admin.id=#{id} AND PaymentInfo.id=paymentId")
    PaymentInfo getPayment(String id);

    @Insert("INSERT INTO Profile(adminId, name, age, id) values (#{adminId}, #{name}" +
            "#{age}, #{id}")
    boolean addProfile(Profile profile);

    @Select("SELECT Profile.name, Profile.age, Profile.id FROM Profile, Admin WHERE adminId=#{id}")
    List<Profile> getProfiles(String id);
}
