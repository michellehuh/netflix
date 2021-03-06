package com.cs304.netflix.model;

import java.math.BigDecimal;
import java.util.UUID;

public class PaymentInfo {
    BigDecimal expMonth, expYear;
    String id, cardName, billingAddress, cardNo, adminId;

    public PaymentInfo(){}

    public PaymentInfo(String id, String cardName, String cardNo, BigDecimal expMonth, BigDecimal expYear, String billingAddress){
        this.id = id;
        this.cardName = cardName;
        this.cardNo = cardNo;
        this.expMonth = expMonth;
        this.expYear = expYear;
        this.billingAddress = billingAddress;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getCardName() {
        return cardName;
    }

    public void setCardName(String cardName) {
        this.cardName = cardName;
    }

    public String getCardNo() {
        return cardNo;
    }

    public void setCardNo(String cardNo) {
        this.cardNo = cardNo;
    }

    public BigDecimal getExpMonth() {
        return expMonth;
    }

    public void setExpMonth(BigDecimal expMonth) {
        this.expMonth = expMonth;
    }

    public BigDecimal getExpYear() {
        return expYear;
    }

    public void setExpYear(BigDecimal expYear) {
        this.expYear = expYear;
    }

    public String getBillingAddress() {
        return billingAddress;
    }

    public void setBillingAddress(String billingAddress) {
        this.billingAddress = billingAddress;
    }

    public String getAdminId() {
        return adminId;
    }

    public void setAdminId(String adminId) {
        this.adminId = adminId;
    }

    public void generateAndSetId() { this.id = UUID.randomUUID().toString(); }
}
