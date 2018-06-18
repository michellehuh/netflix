package com.cs304.netflix.model;

import java.math.BigDecimal;

public class ProfileAndWatchTime {
    String name;
    BigDecimal age;
    BigDecimal watchTime;
    BigDecimal profileId;

    public ProfileAndWatchTime(BigDecimal profileId, BigDecimal age, String name, BigDecimal watchTime) {
        this.name = name;
        this.age = age;
        this.watchTime = watchTime;
        this.profileId = profileId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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

    public BigDecimal getProfileId() {
        return profileId;
    }

    public void setProfileId(BigDecimal profileId) {
        this.profileId = profileId;
    }
}
