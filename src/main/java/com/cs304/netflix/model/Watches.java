package com.cs304.netflix.model;

import java.math.BigDecimal;

public class Watches {
    BigDecimal movieId, timeIn, profileId;
    String adminId;

    public Watches(){
    }

    public Watches(BigDecimal movieId, String adminId, BigDecimal profileId, BigDecimal timeIn){
        this.movieId = movieId;
        this.adminId = adminId;
        this.profileId = profileId;
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

    public BigDecimal getProfileId() {
        return profileId;
    }

    public void setProfileId(BigDecimal profileId) {
        this.profileId = profileId;
    }
}
