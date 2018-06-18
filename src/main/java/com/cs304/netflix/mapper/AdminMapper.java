package com.cs304.netflix.mapper;

import com.cs304.netflix.model.Admin;
import com.cs304.netflix.model.PaymentInfo;
import com.cs304.netflix.model.ProfileAndWatchTime;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface AdminMapper {
    @Select("SELECT * \n" +
            "  FROM Admin")
    List<Admin> getAll();

    @Select("SELECT * \n" +
            "  FROM Admin \n" +
            " WHERE id = #{id}")
    Admin getById(int id);

    @Insert("INSERT INTO Admin (id, email, password) \n" +
            "VALUES (#{id}, #{email}, #{password})")
    boolean add(Admin admin);

    @Delete("DELETE FROM Admin WHERE id=#{id}")
    boolean delete(int id);

    @Update("UPDATE Admin SET email     = #{email}\n" +
            "               , password  = #{password}\n" +
            "               , planId    = #{planId}\n" +
            "               , paymentId = #{paymentId} \n" +
            "WHERE id=#{id}")
    void update(Admin admin);

    @Select("SELECT * \n" +
            "  FROM Admin \n" +
            " WHERE email=#{email} \n" +
            "   AND password=#{password}")
    Admin login(Admin admin);

    @Select("SELECT count(*) FROM Admin WHERE email=#{email}")
    int countByEmail(String email);

    @Update("UPDATE Admin SET planId=#{planId} WHERE id=#{id}")
    void updatePlan(Admin admin);

    @Update("UPDATE Admin SET paymentId=#{id} WHERE id=#{adminId}")
    void updatePaymentInfo(PaymentInfo paymentInfo);

    @Insert("INSERT INTO PaymentInfo (id, cardName, cardNo, expMonth, expYear, billingAddress) \n" +
            "VALUES (#{id}\n" +
            "      , #{cardName}\n" +
            "      , #{cardNo}\n" +
            "      , #{expMonth}\n" +
            "      , #{expYear}\n" +
            "      , #{billingAddress})")
    void addPaymentInfo(PaymentInfo paymentInfo);
}