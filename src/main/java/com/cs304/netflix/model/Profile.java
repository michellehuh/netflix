package com.cs304.netflix.model;

import java.math.BigDecimal;

public class Profile {
    String name;
    BigDecimal adminId;
    BigDecimal age;

    public Profile(String name, BigDecimal adminId, BigDecimal age){
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

    public BigDecimal getAdminId() {
        return adminId;
    }

    public void setAdminId(BigDecimal adminId) {
        this.adminId = adminId;
    }

    public BigDecimal getAge() {
        return age;
    }

    public void setAge(BigDecimal age) {
        this.age = age;
    }
}
