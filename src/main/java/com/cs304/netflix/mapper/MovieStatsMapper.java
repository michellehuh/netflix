package com.cs304.netflix.mapper;

import com.cs304.netflix.model.Admin;
import com.cs304.netflix.model.MovieStats;
import com.cs304.netflix.model.ProfileAndWatchTime;
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


    @Select("SELECT p.id as profileId, p.age as age, p.name as name, avgwatchtime as watchTime \n" +
            "from profile p, \n" +
            "    (SELECT profileid, avgwatchtime\n" +
            "    from (SELECT profileid, ROUND(avg(w.TIMEIN)) as avgwatchtime   \n" +
            "        FROM watches w\n" +
            "        WHERE w.adminid = #{id}\n" +
            "        GROUP BY profileid\n" +
            "        order by avgwatchtime DESC) avgtime\n" +
            "    where avgwatchtime = (SELECT max(avgwatchtime) from (SELECT profileid, ROUND(avg(w.TIMEIN)) as avgwatchtime\n" +
            "                                                        FROM watches w\n" +
            "                                                        WHERE w.adminid = #{id}\n" +
            "                                                        GROUP BY profileid)))\n" +
            "where p.id = profileid and p.adminid = #{id}")
    List<ProfileAndWatchTime> movieStatsMax(Admin admin);

    @Select("SELECT p.id as profileId, p.age as age, p.name as name, avgwatchtime as watchTime \n" +
            "from profile p, \n" +
            "    (SELECT profileid, avgwatchtime\n" +
            "    from (SELECT profileid, ROUND(avg(w.TIMEIN)) as avgwatchtime   \n" +
            "        FROM watches w\n" +
            "        WHERE w.adminid = #{id}\n" +
            "        GROUP BY profileid\n" +
            "        order by avgwatchtime DESC) avgtime\n" +
            "    where avgwatchtime = (SELECT min(avgwatchtime) from (SELECT profileid, ROUND(avg(w.TIMEIN)) as avgwatchtime\n" +
            "                                                        FROM watches w\n" +
            "                                                        WHERE w.adminid = #{id}\n" +
            "                                                        GROUP BY profileid)))\n" +
            "where p.id = profileid and p.adminid = #{id}\n")
    List<ProfileAndWatchTime> movieStatsMin(Admin admin);
}