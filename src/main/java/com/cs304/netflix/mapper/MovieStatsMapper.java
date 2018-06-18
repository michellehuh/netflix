package com.cs304.netflix.mapper;

import com.cs304.netflix.model.Admin;
import com.cs304.netflix.model.MovieStats;
import org.apache.ibatis.annotations.Select;

import java.util.List;

public interface MovieStatsMapper {
    @Select("SELECT ALLWATCHED.TITLE    as title" +
            "     , MAX(TIMEIN)         as maxTime" +
            "     , ROUND(AVG(TIMEIN))  avgTime" +
            "     , MIN(TIMEIN)         as minTime\n" +
            "FROM (SELECT M.*\n" +
            "        FROM MOVIE M\n" +
            "       WHERE NOT EXISTS\n" +
            "            ((SELECT P.ID\n" +
            "               FROM PROFILE P\n" +
            "              WHERE P.ADMINID = #{id})\n" +
            "        MINUS\n" +
            "              (SELECT W.PROFILEID\n" +
            "                 FROM WATCHES W\n" +
            "                WHERE W.MOVIEID = M.ID))) ALLWATCHED, \n" +
            "      WATCHES W\n" +
            "WHERE ALLWATCHED.ID = W.MOVIEID " +
            "AND   W.ADMINID = #{id}\n" +
            "GROUP BY ALLWATCHED.TITLE  ")
    List<MovieStats> movieStats(Admin admin);
}