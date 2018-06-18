package com.cs304.netflix.util;

import java.lang.reflect.Field;

public class Parser {

    public static String parse(Object o) {
        Field fields[] = o.getClass().getDeclaredFields();
        StringBuilder sb = new StringBuilder(" (" + o.getClass().getCanonicalName() + ")\t");
        for (Field f:fields) {
            f.setAccessible(true);
            try {
                sb.append(f.getName());
                sb.append(": ");
                sb.append(f.get(o));
                sb.append(", ");
            } catch (IllegalAccessException e) {
                e.printStackTrace();
            }
        }

        return sb.toString();
    }
}
