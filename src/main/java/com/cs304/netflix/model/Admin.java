package com.cs304.netflix.model;

import java.math.BigDecimal;
import java.util.UUID;

public class Admin {
    String id, paymentId;
    BigDecimal planId;
    String email;
    String password;

    public Admin(){
    }

    public Admin(String id, String email, String password, BigDecimal planId, String paymentId){
        this.id = id;
        this.email = email;
        this.password = password;
        this.planId = planId;
        this.paymentId = paymentId;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
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

    public String getPaymentId() {
        return paymentId;
    }

    public void setPaymentId(String paymentId){
        this.paymentId = paymentId;
    }

    public void generateAndSetId() { this.id = UUID.randomUUID().toString(); }

}
