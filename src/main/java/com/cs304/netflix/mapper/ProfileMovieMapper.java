package com.cs304.netflix.mapper;

import com.cs304.netflix.model.Movie;
import com.cs304.netflix.model.Profile;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface ProfileMovieMapper {

    @Select("SELECT m.* \n" +
            "from movie m,\n" +
            "(SELECT M.id, m.title, m.duration, m.agerestriction, m.releaseyear, m.thumbnail, count(*) as watchcount\n" +
            "from movie m, watches w\n" +
            "where w.movieid = m.id\n" +
            "group by M.id, m.title, m.duration, m.agerestriction, m.releaseyear, m.thumbnail\n" +
            "order by watchcount desc) watchcount, \n" +
            "profile p,\n" +
            "agerestriction a\n" +
            "where m.id = watchcount.id and \n" +
            "p.adminId = #{adminId} and \n" +
            "p.id = #{id} and \n" +
            "a.name = m.agerestriction and \n" +
            "p.age >= a.minage and \n" +
            "rownum <= 3\n")
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
            "FROM watches w, movie m\n" +
            "WHERE w.adminId = #{adminId} and w.profileId = #{id} and w.movieId = m.id")
    List<Movie> getMyHistoryMovies(Profile profile);

    @Select("INSERT INTO watches(movieId, adminId, profileId, timeIn) VALUES (#{movieId}, #{adminId}, #{id}, 0)")
    void addMovieToProfile(Profile profile);

    @Delete("DELETE FROM watches WHERE adminId = #{adminId} and movieId = #{movieId} and profileId = #{id}")
    void deleteMovieFromProfile(Profile profile);
}