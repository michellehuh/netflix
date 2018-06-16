package com.cs304.netflix.model;

import java.math.BigDecimal;

public class Watches {
    BigDecimal movieId, timeIn;
    String profileName, adminId;

    public Watches(){
    }

    public Watches(BigDecimal movieId, String adminId, String profileName, BigDecimal timeIn){
        this.movieId = movieId;
        this.adminId = adminId;
        this.profileName = profileName;
        this.timeIn = timeIn;
    }

    public BigDecimal getMovieId() {
        return movieId;
    }

    public void setMovieId(BigDecimal movieId) {
        this.movieId = movieId;
    }

    public String getAdminId() {
        return adminId;
    }

    public void setAdminId(String adminId) {
        this.adminId = adminId;
    }

    public BigDecimal getTimeIn() {
        return timeIn;
    }

    public void setTimeIn(BigDecimal timeIn) {
        this.timeIn = timeIn;
    }

    public String getProfileName() {
        return profileName;
    }

    public void setProfileName(String profileName) {
        this.profileName = profileName;
    }
}
