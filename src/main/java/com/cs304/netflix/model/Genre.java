package com.cs304.netflix.model;

public class Genre {
    String name;

    public Genre (){
    }

    public Genre (String name){
        this.name = name;
    }

    public String getName(){
        return this.name;
    }

    public void setName(String name){
        this.name = name;
    }
}
