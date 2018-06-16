package com.cs304.netflix.mapper;

import com.cs304.netflix.model.Movie;
import com.cs304.netflix.model.Profile;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface ProfileMovieMapper {

    @Select("SELECT M.*, M.AGERESTRICTION\n" +
            "FROM MOVIE M, PROFILE P, AGERESTRICTION A, (SELECT W3.MOVIEID, COUNT(*) AS NUMWATCH\n" +
            "                                            FROM WATCHES W3\n" +
            "                                            GROUP BY MOVIEID) COUNTWATCH\n" +
            "WHERE M.AGERESTRICTION = A.NAME AND P.AGE >= A.MINAGE AND COUNTWATCH.MOVIEID = M.ID AND P.NAME = 'Jimmy' AND P.ADMINID = 23412353 AND\n" +
            "    COUNTWATCH.NUMWATCH = (SELECT MAX(NUMWATCH)\n" +
            "                        \tFROM (SELECT W3.MOVIEID, COUNT(*) AS NUMWATCH\n" +
            "                                   FROM WATCHES W3, MOVIE M3" +
            "                                    \t, AGERESTRICTION A2" +
            "                                    \t, PROFILE P2\n" +
            "                                \tWHERE W3.MOVIEID = M3.ID " +
            "                                  \tAND M3.AGERESTRICTION = A2.NAME\n" +
            "                                  \tAND A2.MINAGE <= #{age} " +
            "                                  \tAND P2.ADMINID = #{adminId}\n" +
            "                                  \tAND P2.NAME = #{name}\n" +
            "GROUP BY MOVIEID))\n")
    List<Movie> getProfileFavoriteMovies(Profile profile);


    @Select("SELECT m.*\n" +
            "FROM profile p\n" +
            " \t, movie m" +
            " \t, agerestriction a\n" +
            "WHERE p.adminid = #{adminId}\n" +
            "  and p.name = #{name}\n" +
            "  and m.agerestriction = a.name\n" +
            "  and p.age >= a.minage\n" +
            "ORDER BY m.releaseYear DESC")
    List<Movie> getProfileAppropriateMovies(Profile profile);
}