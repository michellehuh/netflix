package com.cs304.netflix.model;

import java.math.BigDecimal;

public class MovieStats {
    String title;
    BigDecimal maxTime, minTime, avgTime;

    public MovieStats(){}

    public MovieStats(String title, BigDecimal maxTime, BigDecimal minTime, BigDecimal avgTime) {
        this.title = title;
        this.maxTime = maxTime;
        this.minTime = minTime;
        this.avgTime = avgTime;
    }

    public String getTitle() {
        return title;
    }

    public BigDecimal getAvgTime() {
        return avgTime;
    }

    public BigDecimal getMaxTime() {
        return maxTime;
    }

    public BigDecimal getMinTime() {
        return minTime;
    }

    public void setAvgTime(BigDecimal avgTime) {
        this.avgTime = avgTime;
    }

    public void setMaxTime(BigDecimal maxTime) {
        this.maxTime = maxTime;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setMinTime(BigDecimal minTime) {
        this.minTime = minTime;
    }
}