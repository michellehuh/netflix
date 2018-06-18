package com.cs304.netflix.mapper;

import com.cs304.netflix.model.Movie;
import com.cs304.netflix.model.Profile;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface ProfileMovieMapper {

    @Select("SELECT M.*\n" +
            "FROM MOVIE M, PROFILE P, AGERESTRICTION A, (SELECT W3.MOVIEID, COUNT(*) AS NUMWATCH\n" +
            "                                            FROM WATCHES W3\n" +
            "                                            GROUP BY MOVIEID) COUNTWATCH\n" +
            "WHERE M.AGERESTRICTION = A.NAME AND P.AGE >= A.MINAGE AND COUNTWATCH.MOVIEID = M.ID AND P.ID = #{id} AND P.ADMINID = #{adminId} AND\n" +
            "    COUNTWATCH.NUMWATCH = (SELECT MAX(NUMWATCH)\n" +
            "                             FROM (SELECT W3.MOVIEID, COUNT(*) AS NUMWATCH\n" +
            "                                     FROM WATCHES W3\n" +
            "                                        , MOVIE M3" +
            "                                        , AGERESTRICTION A2" +
            "                                        , PROFILE P2\n" +
            "                                    WHERE W3.MOVIEID = M3.ID " +
            "                                      AND M3.AGERESTRICTION = A2.NAME\n" +
            "                                      AND A2.MINAGE <= P2.age " +
            "                                      AND P2.ADMINID = #{adminId}\n" +
            "                                      AND P2.ID = #{id}\n" +
            "GROUP BY MOVIEID))\n")
    List<Movie> getProfileFavoriteMovies(Profile profile);


    @Select("SELECT *\n" +
            "FROM\n" +
            "(SELECT *\n" +
            "FROM\n" +
            "(SELECT m.*\n" +
            "FROM profile p, movie m, agerestriction a\n" +
            "WHERE p.adminId = #{adminId} and p.id = #{id} and m.agerestriction = a.name and p.age >= a.minage\n" +
            "MINUS\n" +
            "SELECT m2.*\n" +
            "FROM profile p2, watches w, movie m2\n" +
            "WHERE p2.adminId = #{adminId} and p2.id = #{id} and p2.id = w.profileId and m2.id = w.movieId)\n" +
            "ORDER BY RELEASEYEAR DESC)\n" +
            "WHERE rownum < 11")
    List<Movie> getProfileAppropriateMovies(Profile profile);

    @Select("SELECT m.*, w.timeIn\n" +
            "FROM profile p, watches w, movie m\n" +
            "WHERE p.adminId = #{adminId} and p.id = #{id} and p.id = w.profileId and w.movieId = m.id")
    List<Movie> getMyHistoryMovies(Profile profile);

    @Select("INSERT INTO watches(movieId, adminId, profileId, timeIn) VALUES (#{movieId}, #{adminId}, #{id}, 0)")
    void addMovieToProfile(Profile profile);

    @Delete("DELETE FROM watches WHERE adminId = #{adminId} and movieId = #{movieId} and profileId = #{id}")
    void deleteMovieFromProfile(Profile profile);
}