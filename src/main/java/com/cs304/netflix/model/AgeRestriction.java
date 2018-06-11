package com.cs304.netflix.model;

import java.math.BigDecimal;

public class AgeRestriction {

    String name;
    BigDecimal minAge;

    public AgeRestriction(){
    }

    public AgeRestriction(String name, BigDecimal minAge){
        this.name = name;
        this.minAge = minAge;
    }

    public String getName() {
        return name;
    }

    public void setName(String name){
        this.name = name;
    }

    public BigDecimal getMinAge() {
        return minAge;
    }

    public void setMinAge(BigDecimal minAge){
        this.minAge = minAge;
    }
}
