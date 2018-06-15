SELECT m.title, g.genre
from movie m, movieisofgenre g
where (m.id = g.movieid) AND (g.genre = 'COMEDY');

SELECT p.name, sum(w.TIMEIN) as totalwatchtime
from watches w, profile p
where w.ADMINID = '18139162' and p.name = w.profilename
GROUP BY p.name
order by sum(w.timein) DESC;

SELECT p.name, m.title
from profile p, movie m, agerestriction a
where p.name = 'Maggie' and m.agerestriction = a.name and p.age >= a.MINAGE;

SELECT m.id, m.title, count(movieid) as watches
from watches w, movie m
where m.id = w.movieid
group by m.id, m.title;

select m.title, numwatches 
from movie m, (select m2.id, count(*) as numwatches 
                from movie m2, watches w
                where m2.id = w.movieid
                group by m2.id) watchcount
where m.id = watchcount.id and 
    numwatches = (select max(numwatches) from (select m2.id, count(*) as numwatches 
                from movie m2, watches w
                where m2.id = w.movieid
                group by m2.id));

select g.genre, m.title, numwatches
from movieisofgenre g, movie m, (select g2.genre, m2.id, count(*) as numwatches
                                    from movie m2, watches w, movieisofgenre g2
                                    where m2.id = w.movieid and m2.id = g2.movieid
                                    group by m2.id, g2.GENRE) watchcount
WHERE m.id = watchcount.id and m.id = g.movieid and g.genre = watchcount.genre and 
    numwatches = (select max(numwatches) from (select g2.genre, m2.id, count(*) as numwatches
                                    from movie m2, watches w, movieisofgenre g2
                                    where m2.id = w.movieid and m2.id = g2.movieid
                                    group by m2.id, g2.genre));
                                    
select genre, max(numwatches) from movie m, (select g2.genre, m2.id, count(*) as numwatches
                                    from movie m2, watches w, movieisofgenre g2
                                    where m2.id = w.movieid and m2.id = g2.movieid
                                    group by m2.id, g2.genre) watchcount
WHERE watchcount.id = m.id
group by genre;

select g.genre, m.title, moviewatchcount.watches
from movieisofgenre g, movie m,(select genre, max(numwatches) as maxwatches from movie m, (select g2.genre, m2.id, count(*) as numwatches
                                    from movie m2, watches w, movieisofgenre g2
                                    where m2.id = w.movieid and m2.id = g2.movieid
                                    group by m2.id, g2.genre) watchcount
                                WHERE watchcount.id = m.id
                                group by genre) genrewatchcount,
                                (SELECT m.id, m.title, count(movieid) as watches
                                from watches w, movie m
                                where m.id = w.movieid
                                group by m.id, m.title) moviewatchcount
WHERE m.id = g.MOVIEID and g.genre = genrewatchcount.genre and m.id = moviewatchcount.id 
and genrewatchcount.maxwatches = moviewatchcount.watches;


SELECT profile.name
from admin, profile
where profile.adminid = admin.id and admin.email = 'patriciaye@email.com' and admin.password = 'pw123';

SELECT * 
from admin
where email = 'michelle.huh@hotmail.com' and password = 'qwer';

