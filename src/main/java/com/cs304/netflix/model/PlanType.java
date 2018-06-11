package com.cs304.netflix.model;

import java.math.BigDecimal;

public class PlanType {
    BigDecimal id;
    String name;
    Float monthlyPayment;

    public PlanType(){}

    public PlanType(BigDecimal id, String name, Float monthlyPayment){
        this.id = id;
        this.name = name;
        this.monthlyPayment = monthlyPayment;
    }

    public BigDecimal getId() {
        return id;
    }

    public void setId(BigDecimal id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Float getMonthlyPayment() {
        return monthlyPayment;
    }

    public void setMonthlyPayment(Float monthlyPayment) {
        this.monthlyPayment = monthlyPayment;
    }
}
