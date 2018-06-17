package com.cs304.netflix.model;

public class Response {

    Object data;
    Throwable error;

    public Response() {
    }

    public Response(Object data) {
        this.data = data;
    }

    public Response(Throwable error) {
        this.error = error;
    }

    public Response(Object data, Throwable error) {
        this.data = data;
        this.error = error;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }

    public Throwable getError() {
        return error;
    }

    public void setError(Throwable error) {
        this.error = error;
    }
}
