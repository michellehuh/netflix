package com.cs304.netflix.model;

import java.math.BigDecimal;

public class ProfileAndWatchTime {
    String name;
    String adminId;
    BigDecimal age;
    BigDecimal watchTime;

    public ProfileAndWatchTime(String name, String adminId, BigDecimal age, BigDecimal watchTime){
        this.name = name;
        this.adminId = adminId;
        this.age = age;
        this.watchTime = watchTime;
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

    public BigDecimal getWatchTime() {
        return watchTime;
    }

    public void setWatchTime(BigDecimal watchTime) {
        this.watchTime = watchTime;
    }
}
