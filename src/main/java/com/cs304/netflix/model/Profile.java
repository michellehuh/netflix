package com.cs304.netflix.model;

import java.math.BigDecimal;

public class Profile {
    String name, adminId;
    BigDecimal age;

    public Profile() {}

    public Profile(String adminId, String name) {
        this.name = name;
        this.adminId = adminId;
    }

    public Profile(String name, String adminId, Integer age){
        this.name = name;
        this.adminId = adminId;
        this.age = BigDecimal.valueOf(age);
    }


    public Profile(String name, String adminId, BigDecimal age){
        this.name = name;
        this.adminId = adminId;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAdminId() {
        return adminId;
    }

    public void setAdminId(String adminId) {
        this.adminId = adminId;
    }

    public BigDecimal getAge() {
        return age;
    }

    public void setAge(BigDecimal age) {
        this.age = age;
    }
}