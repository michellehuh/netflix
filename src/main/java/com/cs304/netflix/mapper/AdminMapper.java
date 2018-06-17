package com.cs304.netflix.mapper;

import com.cs304.netflix.model.*;
import org.apache.ibatis.annotations.*;

import java.math.BigDecimal;
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
    boolean delete(String id);

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

    @Select("SELECT DISTINCT Profile.name, Profile.age, Profile.id FROM Profile, Admin WHERE adminId=#{id}")
    List<Profile> getProfiles(String id);

    @Select("SELECT * FROM Profile WHERE adminId=#{adminId} AND id=#{id}")
    Profile getProfile(Profile profile);

    @Update("UPDATE Profile SET name=#{name}, age=#{age} WHERE adminId=#{adminId} AND id=#{id}")
    void updateProfile(Profile profile);

    @Delete("DELETE FROM Profile WHERE adminId=#{adminId} AND id=#{id}")
    boolean deleteprofile(String adminId, BigDecimal id);

    @Select("SELECT DISTINCT M.title\n" +
            "FROM Movie M\n" +
            "WHERE NOT EXISTS\n" +
            "    ((SELECT P.id\n" +
            "        FROM Profile P\n" +
            "        WHERE P.adminId = #{adminId})\n" +
            "    MINUS\n" +
            "    (SELECT W.profileId\n" +
            "        FROM Watches W\n" +
            "        WHERE W.movieId = M.id))\n")
    List<Movie> movieDivision(String adminId);

    @Select("SELECT P.name, SUM(W.timeIn) AS watchTime\n" +
            "FROM Watches W, Profile P\n" +
            "WHERE W.adminId =#{adminId} AND P.adminId = W.adminId AND P.id = W.profileId\n" +
            "GROUP BY P.name\n" +
            "ORDER BY watchTime DESC\n")
    List<ProfileAndWatchTime> watchTime(String adminId);
}
