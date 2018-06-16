package com.cs304.netflix.model;

import java.sql.Timestamp;
import java.util.Date;


public class Account {

    String id;
    String name;
    Date dob;

    public Account() {
    }

    public Account(String id, String name, Timestamp dob) {
        this.id = id;
        this.name = name;
        this.dob = new Date(dob.getTime());
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getDob() {
        return dob;
    }

    public void setDob(Timestamp dob) {
        this.dob = dob;
    }
}
