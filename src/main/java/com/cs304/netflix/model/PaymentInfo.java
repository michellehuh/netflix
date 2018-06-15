package com.cs304.netflix.model;

import java.math.BigDecimal;

public class PaymentInfo {
    BigDecimal id, expMonth, expYear;
    String cardName, billingAddress, cardNo;

    public PaymentInfo(){}

    public PaymentInfo(BigDecimal id, String cardName, String cardNo, BigDecimal expMonth, BigDecimal expYear, String billingAddress){
        this.id = id;
        this.cardName = cardName;
        this.cardNo = cardNo;
        this.expMonth = expMonth;
        this.expYear = expYear;
        this.billingAddress = billingAddress;
    }

    public BigDecimal getId() {
        return id;
    }

    public void setId(BigDecimal id) {
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
}
