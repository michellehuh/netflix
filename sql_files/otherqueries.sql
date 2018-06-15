SELECT MOVIE.TITLE, AVGTIME
FROM MOVIE, (SELECT W.MOVIEID, AVG(W.TIMEIN) AS AVGTIME
        FROM WATCHES W
        GROUP BY W.MOVIEID) AVGWATCH

WHERE MOVIE.ID = AVGWATCH.MOVIEID AND AVGTIME = (SELECT max(AVGTIME) FROM (SELECT W.MOVIEID, AVG(W.TIMEIN) AS AVGTIME
                                                                            FROM WATCHES W
                                                                            GROUP BY W.MOVIEID));

SELECT M.TITLE
FROM MOVIE M
WHERE NOT EXISTS
    ((SELECT P.NAME
        FROM PROFILE P
        WHERE P.ADMINID = 11113333)
    MINUS
    (SELECT W.PROFILENAME
        FROM WATCHES W
        WHERE W.MOVIEID = M.ID));

create or replace FUNCTION CHECKDURATION 
(
  CHECKMOVIEID IN NUMBER 
) RETURN NUMBER AS 
MDUR NUMBER := '';
BEGIN
SELECT MOVIE.DURATION INTO MDUR FROM MOVIE WHERE CHECKMOVIEID = MOVIE.ID;
  RETURN MDUR;
END CHECKDURATION;






