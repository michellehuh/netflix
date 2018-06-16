package com.cs304.netflix.mapper;

import com.cs304.netflix.model.Movie;
import com.cs304.netflix.model.Profile;

import java.math.BigDecimal;
import java.util.List;
import org.apache.ibatis.annotations.*;

@Mapper
public interface MovieMapper {

    @Select("SELECT  G.genre as genre, M.*\n" +
            "FROM Movie M, MovieIsOfGenre G\n" +
            "WHERE M.id = G.movieId AND M.releaseYear >= (SELECT TO_CHAR(SYSDATE, 'YYYY') FROM DUAL) - #{pastNoYears}\n" +
            "ORDER BY G.genre, M.releaseYear DESC\n")
    List<Movie> getNewMovies(Integer pastNoYears);

    @Select("SELECT  G.genre, M.*\n" +
            "FROM MOVIE M, MOVIEISOFGENRE G\n" +
            "WHERE M.id = G.movieId AND M.releaseYear = #{releaseYear}\n" +
            "ORDER BY G.genre, M.releaseYear DESC\n")
    List<Movie> getMoviesInYear(BigDecimal releaseYear);



}
