package com.cs304.netflix.mapper;

import com.cs304.netflix.model.Genre;
import com.cs304.netflix.model.Movie;
import com.cs304.netflix.model.Profile;

import java.math.BigDecimal;
import java.util.List;

import com.sun.tools.javac.comp.Todo;
import org.apache.ibatis.annotations.*;

@Mapper
public interface MovieMapper {

    @Select({"SELECT  G.genre as genre, M.*\n" +
            "FROM Movie M, MovieIsOfGenre G\n" +
            "WHERE M.id = G.movieId AND M.releaseYear >= (SELECT TO_CHAR(SYSDATE, 'YYYY') FROM DUAL) - #{pastNoYears}\n" +
            "ORDER BY G.genre, M.releaseYear DESC\n"})
    List<Movie> getNewMovies(Integer pastNoYears);

    @Select("SELECT  G.genre, M.*\n" +
            "FROM MOVIE M, MovieIsOfGenre G\n" +
            "WHERE M.id = G.movieId AND M.releaseYear = #{releaseYear}\n" +
            "ORDER BY G.genre, M.releaseYear DESC\n")
    List<Movie> getMoviesInYear(BigDecimal releaseYear);

    @Select("SELECT M.*\n" +
            "FROM MOVIE M\n" +
            "WHERE LOWER(M.title) LIKE CONCAT(CONCAT('%',#{string}), '%')")
    List<Movie> getMoviesContaining(String string);

    @Select("SELECT G.genre, M.title, MOVIEWATCHCOUNT.WATCHES\n" +
            "FROM MovieIsOfGenre G, Movie M,(SELECT genre, MAX(NUMWATCHES) AS MAXWATCHES FROM Movie M, (SELECT G2.genre, M2.id, COUNT(*) AS NUMWATCHES\n" +
            "                                \tFROM Movie M2, Watches W, MovieIsOfGenre G2\n" +
            "                                \tWHERE M2.id = W.movieId AND M2.id = G2.movieId\n" +
            "                                \tGROUP BY M2.id, G2.genre) WATCHCOUNT\n" +
            "                            \tWHERE WATCHCOUNT.id = M.id\n" +
            "                            \tGROUP BY GENRE) GENREWATCHCOUNT,\n" +
            "                       \t     (SELECT M.id, M.title, COUNT(movieId) AS WATCHES\n" +
            "                            \tFROM Watches W, Movie M\n" +
            "                            \tWHERE M.id = W.movieId\n" +
            "                            \tGROUP BY M.id, M.title) MOVIEWATCHCOUNT\n" +
            "WHERE M.id = G.movieId AND G.GENRE = GENREWATCHCOUNT.genre AND M.id = MOVIEWATCHCOUNT.id\n" +
            "AND GENREWATCHCOUNT.MAXWATCHES = MOVIEWATCHCOUNT.WATCHES\n")
    List<Movie> getTopMoviesinGenres();


    @Select("SELECT TITLE,WATCHES \n" +
            "FROM\n" +
            "(SELECT M.TITLE, M.ID, WATCHCOUNT.WATCHES\n" +
            "    \n" +
            "FROM MOVIE M, (SELECT MOVIEID, COUNT(*) AS WATCHES\n" +
            "                FROM WATCHES\n" +
            "                GROUP BY MOVIEID) WATCHCOUNT,\n" +
            "    MOVIEISOFGENRE G\n" +
            "\n" +
            "\n" +
            "WHERE M.ID = WATCHCOUNT.MOVIEID AND M.ID = G.MOVIEID AND G.GENRE = #{givenGenre} \n" +
            "\n" +
            "ORDER BY WATCHCOUNT.WATCHES DESC)\n" +
            "\n" +
            "WHERE ROWNUM <= 3")
    List<Movie> getTopMoviesInGivenGenre(String givenGenre);

    @Select("SELECT MOVIE.title, AVGTIME\n" +
            "FROM MOVIE, (SELECT W.movieId, AVG(W.timeIn) AS AVGTIME\n" +
            "        FROM WATCHES W\n" +
            "        GROUP BY W.movieId) AVGWATCH\n" +
            "\n" +
            "WHERE MOVIE.id = AVGWATCH.movieId AND AVGTIME = (SELECT MAX(AVGTIME) FROM (SELECT W.movieId, AVG(W.timeIn) AS AVGTIME\n" +
            "                                                                            FROM WATCHES W\n" +
            "                                                                            GROUP BY W.movieId))\n")
    List<Movie> getMaxAverageTimeIn();
}