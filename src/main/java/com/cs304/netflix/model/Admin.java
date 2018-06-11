package com.cs304.netflix.model;

import java.math.BigDecimal;

public class Admin {
    BigDecimal id, planId, paymentId;
    String email;
    String password;

    public Admin(){
    }

    public Admin(BigDecimal id, String email, String password, BigDecimal planId, BigDecimal paymentId){
        this.id = id;
        this.email = email;
        this.password = password;
        this.planId = planId;
        this.paymentId = paymentId;
    }

    public BigDecimal getId() {
        return id;
    }

    public void setId(BigDecimal id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email){
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password){
        this.password = password;
    }

    public BigDecimal getPlanId() {
        return planId;
    }

    public void setPlanId(BigDecimal planId){
        this.planId = planId;
    }

    public BigDecimal getPaymentId() {
        return paymentId;
    }

    public void setPaymentId(BigDecimal paymentId){
        this.paymentId = paymentId;
    }
}
