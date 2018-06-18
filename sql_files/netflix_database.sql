--------------------------------------------------------
--  File created - Monday-June-18-2018   
--------------------------------------------------------
--------------------------------------------------------
--  DDL for Table ADMIN
--------------------------------------------------------

  CREATE TABLE "ADMIN" 
   (	"ID" VARCHAR2(72 BYTE) PRIMARY KEY, 
	"EMAIL" VARCHAR2(72 BYTE) NOT NULL UNIQUE, 
	"PASSWORD" VARCHAR2(30 BYTE) NOT NULL, 
	"PLANID" NUMBER(*,0) DEFAULT 0, 
	"PAYMENTID" VARCHAR2(72 BYTE) DEFAULT NULL
    
   ) ;

--------------------------------------------------------
--  DDL for Table AGERESTRICTION
--------------------------------------------------------

  CREATE TABLE "AGERESTRICTION" 
   (	"NAME" VARCHAR2(10 BYTE) PRIMARY KEY, 
	"MINAGE" NUMBER(*,0) DEFAULT 0
   )
--------------------------------------------------------
--  DDL for Table GENRE
--------------------------------------------------------

  CREATE TABLE "GENRE" 
   (	"NAME" CHAR(30 BYTE) PRIMARY KEY
   )
--------------------------------------------------------
--  DDL for Table MOVIE
--------------------------------------------------------

  CREATE TABLE "MOVIE" 
   (	"ID" NUMBER(*,0) PRIMARY KEY, 
	"TITLE" VARCHAR2(30 BYTE) NOT NULL, 
	"DURATION" NUMBER(*,0) NOT NULL, 
	"AGERESTRICTION" VARCHAR2(10 BYTE) DEFAULT 'NR', 
	"RELEASEYEAR" NUMBER(*,0), 
	"THUMBNAIL" VARCHAR2(1000 BYTE),
   
   );
--------------------------------------------------------
--  DDL for Table MOVIEISOFGENRE
--------------------------------------------------------

  CREATE TABLE "MOVIEISOFGENRE" 
   (	"MOVIEID" NUMBER(*,0), 
	"GENRE" VARCHAR2(30 BYTE),
    PRIMARY KEY(MOVIEID, GENRE),
    
   );
--------------------------------------------------------
--  DDL for Table PAYMENTINFO
--------------------------------------------------------

  CREATE TABLE "PAYMENTINFO" 
   (	"ID" VARCHAR2(72 BYTE) DEFAULT 0 PRIMARY KEY, 
	"CARDNAME" VARCHAR2(30 BYTE) NOT NULL, 
	"CARDNO" VARCHAR2(20 BYTE) UNIQUE NOT NULL, 
	"EXPMONTH" NUMBER(*,0) NOT NULL, 
	"EXPYEAR" NUMBER(*,0) NOT NULL, 
	"BILLINGADDRESS" VARCHAR2(50 BYTE) NOT NULL
   );
--------------------------------------------------------
--  DDL for Table PLANTYPE
--------------------------------------------------------

  CREATE TABLE "PLANTYPE" 
   (	"ID" NUMBER(*,0) DEFAULT 0 PRIMARY KEY, 
	"NAME" VARCHAR2(30 BYTE), 
	"MONTHLYPAYMENT" FLOAT(126) DEFAULT 0.00
   );
--------------------------------------------------------
--  DDL for Table PROFILE
--------------------------------------------------------

  CREATE TABLE "PROFILE" 
   (	"ID" NUMBER, 
	"NAME" VARCHAR2(30 BYTE) NOT NULL, 
	"ADMINID" VARCHAR2(72 BYTE), 
	"AGE" NUMBER(*,0) DEFAULT 100,
    PRIMARY KEY(ID, ADMINID),
    
   );
--------------------------------------------------------
--  DDL for Table WATCHES
--------------------------------------------------------

  CREATE TABLE "WATCHES" 
   (	"MOVIEID" NUMBER(*,0), 
	"ADMINID" VARCHAR2(72 BYTE), 
	"PROFILEID" NUMBER(*,0), 
	"TIMEIN" NUMBER DEFAULT 0,
    PRIMARY KEY(MOVIEID, ADMINID, PROFILEID),
    
   );
   
REM INSERTING into ADMIN
Insert into ADMIN (ID,EMAIL,PASSWORD,PLANID,PAYMENTID) values ('78694201','example@email.com','something',3,'4');
Insert into ADMIN (ID,EMAIL,PASSWORD,PLANID,PAYMENTID) values ('31234455','boy@email.com','12345',3,'2');
Insert into ADMIN (ID,EMAIL,PASSWORD,PLANID,PAYMENTID) values ('11133344','girl@email.com','30213',1,'0');
Insert into ADMIN (ID,EMAIL,PASSWORD,PLANID,PAYMENTID) values ('23412353','gary@email.com','passwo',0,'3');
Insert into ADMIN (ID,EMAIL,PASSWORD,PLANID,PAYMENTID) values ('11113333','cpsc304@email.com','231355',4,'2');
Insert into ADMIN (ID,EMAIL,PASSWORD,PLANID,PAYMENTID) values ('55543333','kendrick.lamar@email.com','damn',4,'4');
Insert into ADMIN (ID,EMAIL,PASSWORD,PLANID,PAYMENTID) values ('22334432','adam.levine@email.com','133455',2,'2');
Insert into ADMIN (ID,EMAIL,PASSWORD,PLANID,PAYMENTID) values ('23332222','starbucks@email.com','caramelfrap',2,'0');
Insert into ADMIN (ID,EMAIL,PASSWORD,PLANID,PAYMENTID) values ('88888888','eighteight@email.com','eight',2,'1');
Insert into ADMIN (ID,EMAIL,PASSWORD,PLANID,PAYMENTID) values ('99999999','ninenine@email.com','nine',4,'3');
Insert into ADMIN (ID,EMAIL,PASSWORD,PLANID,PAYMENTID) values ('77773333','charles.barkley@email.com','buckets',3,'2');
Insert into ADMIN (ID,EMAIL,PASSWORD,PLANID,PAYMENTID) values ('29932332','lebronsucks@email.com','goat',0,'0');
Insert into ADMIN (ID,EMAIL,PASSWORD,PLANID,PAYMENTID) values ('12341234','trusttheprocess@email.com','embiid',3,'4');
Insert into ADMIN (ID,EMAIL,PASSWORD,PLANID,PAYMENTID) values ('67453068','michelle.huh@hotmail.com','1',3,'1');
Insert into ADMIN (ID,EMAIL,PASSWORD,PLANID,PAYMENTID) values ('54040167','joon.hur@alumni.ubc.ca','qwer',1,'2');
Insert into ADMIN (ID,EMAIL,PASSWORD,PLANID,PAYMENTID) values ('55214126','j.aparkk@alumni.ubc.ca','qwer',1,'3');
Insert into ADMIN (ID,EMAIL,PASSWORD,PLANID,PAYMENTID) values ('19302012','john.smith@email.com','password123',4,'2');
Insert into ADMIN (ID,EMAIL,PASSWORD,PLANID,PAYMENTID) values ('18139162','patriciaye@email.com','pw123',2,'0');
Insert into ADMIN (ID,EMAIL,PASSWORD,PLANID,PAYMENTID) values ('d0f1ad1e-00b6-4a38-9c65-568ddaef4504','e5@e.com','qwer',3,null);
Insert into ADMIN (ID,EMAIL,PASSWORD,PLANID,PAYMENTID) values ('6dcabb83-69ef-4504-88e7-e0b7e54a6d00','e6@e.com','qwer',4,null);
Insert into ADMIN (ID,EMAIL,PASSWORD,PLANID,PAYMENTID) values ('fa8e010d-2112-47a1-938b-fe6058d24731','e7@e.com','qwer',2,'bd41e5f4-8535-41dd-8f26-8cba79fcf2a3');
Insert into ADMIN (ID,EMAIL,PASSWORD,PLANID,PAYMENTID) values ('1419486f-49fb-4503-b5a7-7c9923df46a1','e12@e.com','qwer',1,'b3db3ffb-9c78-4d36-80bb-51a7c43915bb');
Insert into ADMIN (ID,EMAIL,PASSWORD,PLANID,PAYMENTID) values ('de7dce99-b1b7-4628-a6c3-073617d335e1','e14@e.com','qwer',2,'ffadfa49-376d-4f5a-a23d-187c220b3784');
Insert into ADMIN (ID,EMAIL,PASSWORD,PLANID,PAYMENTID) values ('e8a13d0d-17b1-44d8-8ce7-5002be77d27b','1@mail.com.com','1',0,null);
Insert into ADMIN (ID,EMAIL,PASSWORD,PLANID,PAYMENTID) values ('e7e2fc47-6154-4d5f-ab6e-e4a606b930fa','example1@example.com','qwer',0,null);
Insert into ADMIN (ID,EMAIL,PASSWORD,PLANID,PAYMENTID) values ('443adcae-64d3-4be2-bc5b-f978a43d16d3','e2@e.com','qwer',2,null);
Insert into ADMIN (ID,EMAIL,PASSWORD,PLANID,PAYMENTID) values ('80419c22-d419-4037-81e8-8c89ca0989da','e3@e.com','qwer',0,null);
Insert into ADMIN (ID,EMAIL,PASSWORD,PLANID,PAYMENTID) values ('dcf3e6b3-4c0e-4097-8768-1d565aea48a2','test@mail.com','1',0,null);
Insert into ADMIN (ID,EMAIL,PASSWORD,PLANID,PAYMENTID) values ('62de8182-17f5-447e-980f-de2830ee08e7','michelle.huh1@hotmail.com','1',0,null);
Insert into ADMIN (ID,EMAIL,PASSWORD,PLANID,PAYMENTID) values ('6cc21434-6ef0-4b85-8213-d9b4039199ad','1@mail.com','1',4,null);
Insert into ADMIN (ID,EMAIL,PASSWORD,PLANID,PAYMENTID) values ('30e66457-2c4d-4058-94af-51e4733d8e63','gayoon.huh@gmail.com','1',0,'63957c9b-1559-41cb-99fc-9f68c92b8471');
Insert into ADMIN (ID,EMAIL,PASSWORD,PLANID,PAYMENTID) values ('594e5298-f6c2-4292-9b42-445dc349bd7c','y6s1bb@ugrad.cs.ubc.ca','1',0,'96329b30-b393-4f03-b63f-729f0b0bb415');
Insert into ADMIN (ID,EMAIL,PASSWORD,PLANID,PAYMENTID) values ('637b9211-f196-44b1-80b8-902198619f3b','example3333@mail.com','1',0,'7af9b0d1-b8d0-42ab-83d6-56c957cfcfc1');
Insert into ADMIN (ID,EMAIL,PASSWORD,PLANID,PAYMENTID) values ('5e65f2b5-c726-41aa-afb7-f7196e07b6e1','gayoon.huh11111@gmail.com','1',0,'087513dd-7dab-48e2-9cfc-379f9b743797');
Insert into ADMIN (ID,EMAIL,PASSWORD,PLANID,PAYMENTID) values ('c997c039-de30-4ff6-a079-452e6088cf30','michelle.huh1111@hotmail.com','1',4,null);
Insert into ADMIN (ID,EMAIL,PASSWORD,PLANID,PAYMENTID) values ('d4337542-24ea-481f-abfa-2e0c73f0a236','alice@e.com','qwer',4,'f251718b-bd25-4947-b242-a11c70d6b307');
Insert into ADMIN (ID,EMAIL,PASSWORD,PLANID,PAYMENTID) values ('12f69149-1968-4cdf-914e-6fdab5c78247','e8@e.com','qwer',3,null);
Insert into ADMIN (ID,EMAIL,PASSWORD,PLANID,PAYMENTID) values ('af6ef649-00fb-49d1-9fc4-8a3b3f0525c1','e9@e.com','qwer',3,'b081d7a4-c0f8-45a0-8067-8c8f1058cd08');
Insert into ADMIN (ID,EMAIL,PASSWORD,PLANID,PAYMENTID) values ('48e6489a-aabe-466d-bb97-bf54da987a49','e10@e.com','qwer',2,'b1bd5765-145b-4600-903c-46793ec09fa0');
Insert into ADMIN (ID,EMAIL,PASSWORD,PLANID,PAYMENTID) values ('abec09c8-817c-4cd3-a1a3-2b301d8893af','e11@e.com','qwer',2,'65469337-b62a-4b29-9584-250c00092ca0');
Insert into ADMIN (ID,EMAIL,PASSWORD,PLANID,PAYMENTID) values ('ce722cda-2fa8-4cdd-b54e-edbc61e130e1','pye@email.com','password',0,null);
Insert into ADMIN (ID,EMAIL,PASSWORD,PLANID,PAYMENTID) values ('21a97bc7-7338-4bd1-bb8b-6edae247bba0','e4@e.com','qwer',3,'161e4fdc-57dd-4356-9405-5619e2731f25');
Insert into ADMIN (ID,EMAIL,PASSWORD,PLANID,PAYMENTID) values ('45c2fe7c-4a2d-4660-b33b-ffbd49dd831f','y6s1b@ugrad.cs.ubc.ca','1',0,null);
Insert into ADMIN (ID,EMAIL,PASSWORD,PLANID,PAYMENTID) values ('ecca75cf-02f6-4832-9411-7b7aed4b1976','asdf@mail.com','1',0,'2b2c0e41-20f2-4a81-9038-ce4b0b8e002e');
Insert into ADMIN (ID,EMAIL,PASSWORD,PLANID,PAYMENTID) values ('ae30bb46-5f94-4dbb-b367-652ba55d57d2','test@mail.com1','1',2,null);
Insert into ADMIN (ID,EMAIL,PASSWORD,PLANID,PAYMENTID) values ('a7e731dd-1d6b-4c78-b391-22a75fda0273','testemail1@mail.com','1234',0,null);
REM INSERTING into AGERESTRICTION
Insert into AGERESTRICTION (NAME,MINAGE) values ('18A',18);
Insert into AGERESTRICTION (NAME,MINAGE) values ('R',18);
Insert into AGERESTRICTION (NAME,MINAGE) values ('PG',0);
Insert into AGERESTRICTION (NAME,MINAGE) values ('PG13',13);
Insert into AGERESTRICTION (NAME,MINAGE) values ('G',0);
Insert into AGERESTRICTION (NAME,MINAGE) values ('NR',0);
Insert into AGERESTRICTION (NAME,MINAGE) values ('14A',14);
REM INSERTING into GENRE
Insert into GENRE (NAME) values ('ACTION                        ');
Insert into GENRE (NAME) values ('ADVENTURE                     ');
Insert into GENRE (NAME) values ('COMEDY                        ');
Insert into GENRE (NAME) values ('CRIME                         ');
Insert into GENRE (NAME) values ('DOCUMENTARY                   ');
Insert into GENRE (NAME) values ('DRAMA                         ');
Insert into GENRE (NAME) values ('FAMILY                        ');
Insert into GENRE (NAME) values ('ROMANCE                       ');
Insert into GENRE (NAME) values ('SCARY                         ');
Insert into GENRE (NAME) values ('SCI-FI                        ');
Insert into GENRE (NAME) values ('THRILLER                      ');
Insert into GENRE (NAME) values ('UNKNOWN                       ');
REM INSERTING into MOVIE
Insert into MOVIE (ID,TITLE,DURATION,AGERESTRICTION,RELEASEYEAR,THUMBNAIL) values (27,'Ocean''s Thirteen',113,'PG13',2007,'https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/Oceans13Poster1.jpg/220px-Oceans13Poster1.jpg');
Insert into MOVIE (ID,TITLE,DURATION,AGERESTRICTION,RELEASEYEAR,THUMBNAIL) values (28,'Ocean''s 8',110,'PG13',2018,'https://resizing.flixster.com/txcF-rDDu2JWeMVx9XhlibRpSPg=/206x305/v1.bTsxMjczNTYzMDtqOzE3NzQyOzEyMDA7NDA1MDs2MDAw');
Insert into MOVIE (ID,TITLE,DURATION,AGERESTRICTION,RELEASEYEAR,THUMBNAIL) values (17,'Black Panther',125,'PG13',2018,'https://upload.wikimedia.org/wikipedia/en/0/0c/Black_Panther_film_poster.jpg');
Insert into MOVIE (ID,TITLE,DURATION,AGERESTRICTION,RELEASEYEAR,THUMBNAIL) values (18,'Thor Rangorak',130,'PG13',2017,'https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_UX182_CR0,0,182,268_AL_.jpg');
Insert into MOVIE (ID,TITLE,DURATION,AGERESTRICTION,RELEASEYEAR,THUMBNAIL) values (19,'Coco',105,'PG',2017,'https://i.ytimg.com/vi/UVFVtJcxXWE/movieposter.jpg');
Insert into MOVIE (ID,TITLE,DURATION,AGERESTRICTION,RELEASEYEAR,THUMBNAIL) values (20,'Doctor Strange',115,'PG13',2016,'https://upload.wikimedia.org/wikipedia/en/c/c7/Doctor_Strange_poster.jpg');
Insert into MOVIE (ID,TITLE,DURATION,AGERESTRICTION,RELEASEYEAR,THUMBNAIL) values (21,'Logan',137,'R',2017,'https://upload.wikimedia.org/wikipedia/en/3/37/Logan_2017_poster.jpg');
Insert into MOVIE (ID,TITLE,DURATION,AGERESTRICTION,RELEASEYEAR,THUMBNAIL) values (22,'Gaurdians of the Galaxy',121,'PG13',2014,'https://upload.wikimedia.org/wikipedia/en/b/b5/Guardians_of_the_Galaxy_poster.jpg');
Insert into MOVIE (ID,TITLE,DURATION,AGERESTRICTION,RELEASEYEAR,THUMBNAIL) values (23,'Inception',148,'PG13',2010,'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg');
Insert into MOVIE (ID,TITLE,DURATION,AGERESTRICTION,RELEASEYEAR,THUMBNAIL) values (24,'21 Jump Street',109,'R',2012,'https://upload.wikimedia.org/wikipedia/en/thumb/9/93/21JumpStreetfilm.jpg/220px-21JumpStreetfilm.jpg');
Insert into MOVIE (ID,TITLE,DURATION,AGERESTRICTION,RELEASEYEAR,THUMBNAIL) values (25,'Django Unchained',165,'R',2012,'https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_UY1200_CR90,0,630,1200_AL_.jpg');
Insert into MOVIE (ID,TITLE,DURATION,AGERESTRICTION,RELEASEYEAR,THUMBNAIL) values (26,'Straight Outta Compton',146,'R',2015,'https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Straight_Outta_Compton_poster.jpg/220px-Straight_Outta_Compton_poster.jpg');
Insert into MOVIE (ID,TITLE,DURATION,AGERESTRICTION,RELEASEYEAR,THUMBNAIL) values (0,'Solo: A Star Wars Story',135,'PG13',2018,'https://upload.wikimedia.org/wikipedia/en/5/54/Solo_A_Star_Wars_Story_poster.jpg');
Insert into MOVIE (ID,TITLE,DURATION,AGERESTRICTION,RELEASEYEAR,THUMBNAIL) values (1,'Friends With Benefits',109,'14A',2011,'http://www.sonypictures.com/movies/friendswithbenefits/assets/images/onesheet.jpg');
Insert into MOVIE (ID,TITLE,DURATION,AGERESTRICTION,RELEASEYEAR,THUMBNAIL) values (7,'The Social Network',120,'PG',2010,'https://m.media-amazon.com/images/M/MV5BMTM2ODk0NDAwMF5BMl5BanBnXkFtZTcwNTM1MDc2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg');
Insert into MOVIE (ID,TITLE,DURATION,AGERESTRICTION,RELEASEYEAR,THUMBNAIL) values (8,'Good Will Hunting',126,'14A',1997,'https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Good_Will_Hunting.png/220px-Good_Will_Hunting.png');
Insert into MOVIE (ID,TITLE,DURATION,AGERESTRICTION,RELEASEYEAR,THUMBNAIL) values (9,'Shawshank Redemption',142,'R',1994,'https://images-na.ssl-images-amazon.com/images/I/51zUbui%2BgbL._SY445_.jpg');
Insert into MOVIE (ID,TITLE,DURATION,AGERESTRICTION,RELEASEYEAR,THUMBNAIL) values (10,'Airplane!',87,'PG',1980,'https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Airplane%21.jpg/220px-Airplane%21.jpg');
Insert into MOVIE (ID,TITLE,DURATION,AGERESTRICTION,RELEASEYEAR,THUMBNAIL) values (11,'The Prestige',130,'PG',2006,'https://image.tmdb.org/t/p/w300_and_h450_bestv2/5MXyQfz8xUP3dIFPTubhTsbFY6N.jpg');
Insert into MOVIE (ID,TITLE,DURATION,AGERESTRICTION,RELEASEYEAR,THUMBNAIL) values (12,'Nightcrawler',117,'14A',2014,'https://upload.wikimedia.org/wikipedia/en/d/d4/Nightcrawlerfilm.jpg');
Insert into MOVIE (ID,TITLE,DURATION,AGERESTRICTION,RELEASEYEAR,THUMBNAIL) values (13,'Kill Bill: Vol. 1',111,'R',2003,'https://upload.wikimedia.org/wikipedia/en/thumb/2/2c/Kill_Bill_Volume_1.png/220px-Kill_Bill_Volume_1.png');
Insert into MOVIE (ID,TITLE,DURATION,AGERESTRICTION,RELEASEYEAR,THUMBNAIL) values (14,'Little Rascals',82,'PG',1994,'https://upload.wikimedia.org/wikipedia/en/thumb/6/6f/Little_rascals_ver2.jpg/215px-Little_rascals_ver2.jpg');
Insert into MOVIE (ID,TITLE,DURATION,AGERESTRICTION,RELEASEYEAR,THUMBNAIL) values (16,'Catfish',87,'PG',2010,'https://m.media-amazon.com/images/M/MV5BMmMzNWY4ZGEtZmY4Mi00NWVlLWIwMWUtMjBkNzZlMzljN2U5XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX182_CR0,0,182,268_AL_.jpg');
Insert into MOVIE (ID,TITLE,DURATION,AGERESTRICTION,RELEASEYEAR,THUMBNAIL) values (15,'Iverson',88,'NR',2014,'https://i.ytimg.com/vi/ACEswkYYUXU/movieposter.jpg');
Insert into MOVIE (ID,TITLE,DURATION,AGERESTRICTION,RELEASEYEAR,THUMBNAIL) values (2,'LadyBird',93,'R',2017,'https://upload.wikimedia.org/wikipedia/en/6/61/Lady_Bird_poster.jpeg');
Insert into MOVIE (ID,TITLE,DURATION,AGERESTRICTION,RELEASEYEAR,THUMBNAIL) values (3,'The Disaster Artist',103,'14A',2017,'https://upload.wikimedia.org/wikipedia/en/c/c9/TheDisastorArtistTeaserPoster.jpg');
Insert into MOVIE (ID,TITLE,DURATION,AGERESTRICTION,RELEASEYEAR,THUMBNAIL) values (4,'Catch Me If You Can',141,'PG',2002,'https://i.ytimg.com/vi/jE7-h7mwfPs/movieposter.jpg');
Insert into MOVIE (ID,TITLE,DURATION,AGERESTRICTION,RELEASEYEAR,THUMBNAIL) values (5,'Paris Is Burning',76,'R',1990,'https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Paris_is_Burning_%28DVD_box_art%29.jpg/220px-Paris_is_Burning_%28DVD_box_art%29.jpg');
Insert into MOVIE (ID,TITLE,DURATION,AGERESTRICTION,RELEASEYEAR,THUMBNAIL) values (6,'Moana',107,'PG',2016,'https://i.ytimg.com/vi/_h5qmAiTnV8/movieposter.jpg');
Insert into MOVIE (ID,TITLE,DURATION,AGERESTRICTION,RELEASEYEAR,THUMBNAIL) values (29,'Jurassic World',124,'PG13',2015,'https://upload.wikimedia.org/wikipedia/en/6/6e/Jurassic_World_poster.jpg');
Insert into MOVIE (ID,TITLE,DURATION,AGERESTRICTION,RELEASEYEAR,THUMBNAIL) values (30,'The Foreigner',113,'R',2017,'https://upload.wikimedia.org/wikipedia/en/0/05/The_Foreigner_%282017_film%29.jpg');
Insert into MOVIE (ID,TITLE,DURATION,AGERESTRICTION,RELEASEYEAR,THUMBNAIL) values (31,'The Legend of Tarzan',109,'PG13',2016,'https://upload.wikimedia.org/wikipedia/en/thumb/e/e5/The_Legend_of_Tarzan_poster.jpg/220px-The_Legend_of_Tarzan_poster.jpg');
Insert into MOVIE (ID,TITLE,DURATION,AGERESTRICTION,RELEASEYEAR,THUMBNAIL) values (32,'The Shallows',86,'PG13',2016,'https://i.ytimg.com/vi/oQrNOh-KMuE/movieposter.jpg');
Insert into MOVIE (ID,TITLE,DURATION,AGERESTRICTION,RELEASEYEAR,THUMBNAIL) values (33,'Savages',130,'R',2012,'https://resizing.flixster.com/5JC70qDOGrI85Wk45x8BjOcYciM=/206x305/v1.bTsxMTE2NzQwNTtqOzE3ODE0OzEyMDA7ODAwOzEyMDA');
Insert into MOVIE (ID,TITLE,DURATION,AGERESTRICTION,RELEASEYEAR,THUMBNAIL) values (34,'Ghost in the Shell',107,'PG13',2017,'https://media.services.cinergy.ch/media/box1600/9dcce39007edd59c01b6246814864dc5f698de90.jpg');
Insert into MOVIE (ID,TITLE,DURATION,AGERESTRICTION,RELEASEYEAR,THUMBNAIL) values (35,'The Matrix',136,'R',1999,'https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/The_Matrix_Poster.jpg/220px-The_Matrix_Poster.jpg');
Insert into MOVIE (ID,TITLE,DURATION,AGERESTRICTION,RELEASEYEAR,THUMBNAIL) values (36,'Limitless',105,'PG13',2011,'https://images-na.ssl-images-amazon.com/images/I/91EeWyh1GzL._SY445_.jpg');
Insert into MOVIE (ID,TITLE,DURATION,AGERESTRICTION,RELEASEYEAR,THUMBNAIL) values (37,'Batman v Superman',151,'PG13',2016,'https://upload.wikimedia.org/wikipedia/en/thumb/2/20/Batman_v_Superman_poster.jpg/220px-Batman_v_Superman_poster.jpg');
Insert into MOVIE (ID,TITLE,DURATION,AGERESTRICTION,RELEASEYEAR,THUMBNAIL) values (38,'Pineapple Express',112,'R',2008,'https://www.movieposter.com/posters/archive/main/69/MPW-34574');
Insert into MOVIE (ID,TITLE,DURATION,AGERESTRICTION,RELEASEYEAR,THUMBNAIL) values (39,'Superbad',113,'14A',2007,'https://images-na.ssl-images-amazon.com/images/I/51gr0eN7X0L.jpg');
Insert into MOVIE (ID,TITLE,DURATION,AGERESTRICTION,RELEASEYEAR,THUMBNAIL) values (40,'Lights Out',80,'PG13',2016,'https://upload.wikimedia.org/wikipedia/en/d/dc/Lights_Out_2016_poster.jpg');
Insert into MOVIE (ID,TITLE,DURATION,AGERESTRICTION,RELEASEYEAR,THUMBNAIL) values (41,'Minions',90,'PG',2015,'https://i.ytimg.com/vi/bEwl_-EPtM4/movieposter.jpg');
Insert into MOVIE (ID,TITLE,DURATION,AGERESTRICTION,RELEASEYEAR,THUMBNAIL) values (42,'The Lord of the Rings 3',263,'PG13',2003,'https://upload.wikimedia.org/wikipedia/en/9/9d/Lord_of_the_Rings_-_The_Return_of_the_King.jpg');
Insert into MOVIE (ID,TITLE,DURATION,AGERESTRICTION,RELEASEYEAR,THUMBNAIL) values (43,'alex strangelove',99,'14A',2018,'https://m.media-amazon.com/images/M/MV5BMjQ4MjIxOTYyNF5BMl5BanBnXkFtZTgwMTc3MDg0NTM@._V1_UX182_CR0,0,182,268_AL_.jpg');
Insert into MOVIE (ID,TITLE,DURATION,AGERESTRICTION,RELEASEYEAR,THUMBNAIL) values (44,'Goon',91,'R',2011,'https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Goonfinalposter.jpg/220px-Goonfinalposter.jpg');
Insert into MOVIE (ID,TITLE,DURATION,AGERESTRICTION,RELEASEYEAR,THUMBNAIL) values (45,'To Kill a Mockingbird',129,'14A',1962,'https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/To_Kill_a_Mockingbird_poster.jpg/220px-To_Kill_a_Mockingbird_poster.jpg');
Insert into MOVIE (ID,TITLE,DURATION,AGERESTRICTION,RELEASEYEAR,THUMBNAIL) values (46,'The Whole Truth',93,'PG',2016,'https://www.dvdsreleasedates.com/posters/800/T/The-Whole-Truth-2016-movie-poster.jpg');
Insert into MOVIE (ID,TITLE,DURATION,AGERESTRICTION,RELEASEYEAR,THUMBNAIL) values (47,'How to Train Your Dragon',99,'PG',2010,'https://www.howtotrainyourdragon.com/images/uploads/properties/prop_httyd_poster.jpg');
Insert into MOVIE (ID,TITLE,DURATION,AGERESTRICTION,RELEASEYEAR,THUMBNAIL) values (48,'Money Monster',99,'R',2016,'https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Money_Monster_poster.png/220px-Money_Monster_poster.png');
Insert into MOVIE (ID,TITLE,DURATION,AGERESTRICTION,RELEASEYEAR,THUMBNAIL) values (49,'Baby Mama',98,'PG',2008,'https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Baby_mama.jpg/220px-Baby_mama.jpg');
REM INSERTING into MOVIEISOFGENRE
Insert into MOVIEISOFGENRE (MOVIEID,GENRE) values (0,'ACTION');
Insert into MOVIEISOFGENRE (MOVIEID,GENRE) values (0,'ADVENTURE');
Insert into MOVIEISOFGENRE (MOVIEID,GENRE) values (0,'SCI-FI');
Insert into MOVIEISOFGENRE (MOVIEID,GENRE) values (1,'COMEDY');
Insert into MOVIEISOFGENRE (MOVIEID,GENRE) values (1,'ROMANCE');
Insert into MOVIEISOFGENRE (MOVIEID,GENRE) values (2,'COMEDY');
Insert into MOVIEISOFGENRE (MOVIEID,GENRE) values (2,'DRAMA');
Insert into MOVIEISOFGENRE (MOVIEID,GENRE) values (3,'COMEDY');
Insert into MOVIEISOFGENRE (MOVIEID,GENRE) values (3,'DRAMA');
Insert into MOVIEISOFGENRE (MOVIEID,GENRE) values (4,'COMEDY');
Insert into MOVIEISOFGENRE (MOVIEID,GENRE) values (4,'CRIME');
Insert into MOVIEISOFGENRE (MOVIEID,GENRE) values (4,'DRAMA');
Insert into MOVIEISOFGENRE (MOVIEID,GENRE) values (5,'DOCUMENTARY');
Insert into MOVIEISOFGENRE (MOVIEID,GENRE) values (6,'FAMILY');
Insert into MOVIEISOFGENRE (MOVIEID,GENRE) values (7,'DRAMA');
Insert into MOVIEISOFGENRE (MOVIEID,GENRE) values (8,'DRAMA');
Insert into MOVIEISOFGENRE (MOVIEID,GENRE) values (9,'CRIME');
Insert into MOVIEISOFGENRE (MOVIEID,GENRE) values (9,'DRAMA');
Insert into MOVIEISOFGENRE (MOVIEID,GENRE) values (10,'COMEDY');
Insert into MOVIEISOFGENRE (MOVIEID,GENRE) values (11,'DRAMA');
Insert into MOVIEISOFGENRE (MOVIEID,GENRE) values (12,'CRIME');
Insert into MOVIEISOFGENRE (MOVIEID,GENRE) values (12,'DRAMA');
Insert into MOVIEISOFGENRE (MOVIEID,GENRE) values (13,'ACTION');
Insert into MOVIEISOFGENRE (MOVIEID,GENRE) values (13,'ADVENTURE');
Insert into MOVIEISOFGENRE (MOVIEID,GENRE) values (14,'COMEDY');
Insert into MOVIEISOFGENRE (MOVIEID,GENRE) values (14,'FAMILY');
Insert into MOVIEISOFGENRE (MOVIEID,GENRE) values (15,'DOCUMENTARY');
Insert into MOVIEISOFGENRE (MOVIEID,GENRE) values (16,'DOCUMENTARY');
Insert into MOVIEISOFGENRE (MOVIEID,GENRE) values (17,'ACTION');
Insert into MOVIEISOFGENRE (MOVIEID,GENRE) values (18,'ACTION');
Insert into MOVIEISOFGENRE (MOVIEID,GENRE) values (19,'ADVENTURE');
Insert into MOVIEISOFGENRE (MOVIEID,GENRE) values (19,'FAMILY');
Insert into MOVIEISOFGENRE (MOVIEID,GENRE) values (20,'ACTION');
Insert into MOVIEISOFGENRE (MOVIEID,GENRE) values (21,'ACTION');
Insert into MOVIEISOFGENRE (MOVIEID,GENRE) values (21,'DRAMA');
Insert into MOVIEISOFGENRE (MOVIEID,GENRE) values (22,'ACTION');
Insert into MOVIEISOFGENRE (MOVIEID,GENRE) values (22,'FAMILY');
Insert into MOVIEISOFGENRE (MOVIEID,GENRE) values (23,'ACTION');
Insert into MOVIEISOFGENRE (MOVIEID,GENRE) values (23,'DRAMA');
Insert into MOVIEISOFGENRE (MOVIEID,GENRE) values (24,'ACTION');
Insert into MOVIEISOFGENRE (MOVIEID,GENRE) values (24,'COMEDY');
Insert into MOVIEISOFGENRE (MOVIEID,GENRE) values (24,'CRIME');
Insert into MOVIEISOFGENRE (MOVIEID,GENRE) values (25,'ACTION');
Insert into MOVIEISOFGENRE (MOVIEID,GENRE) values (25,'COMEDY');
Insert into MOVIEISOFGENRE (MOVIEID,GENRE) values (25,'DRAMA');
Insert into MOVIEISOFGENRE (MOVIEID,GENRE) values (26,'ACTION');
Insert into MOVIEISOFGENRE (MOVIEID,GENRE) values (26,'COMEDY');
Insert into MOVIEISOFGENRE (MOVIEID,GENRE) values (26,'CRIME');
Insert into MOVIEISOFGENRE (MOVIEID,GENRE) values (26,'DOCUMENTARY');
Insert into MOVIEISOFGENRE (MOVIEID,GENRE) values (29,'ACTION');
Insert into MOVIEISOFGENRE (MOVIEID,GENRE) values (29,'ADVENTURE');
Insert into MOVIEISOFGENRE (MOVIEID,GENRE) values (30,'ACTION');
Insert into MOVIEISOFGENRE (MOVIEID,GENRE) values (30,'ADVENTURE');
Insert into MOVIEISOFGENRE (MOVIEID,GENRE) values (31,'ACTION');
Insert into MOVIEISOFGENRE (MOVIEID,GENRE) values (31,'DRAMA');
Insert into MOVIEISOFGENRE (MOVIEID,GENRE) values (32,'THRILLER');
Insert into MOVIEISOFGENRE (MOVIEID,GENRE) values (33,'THRILLER');
Insert into MOVIEISOFGENRE (MOVIEID,GENRE) values (34,'ACTION');
Insert into MOVIEISOFGENRE (MOVIEID,GENRE) values (34,'SCI-FI');
Insert into MOVIEISOFGENRE (MOVIEID,GENRE) values (35,'ACTION');
Insert into MOVIEISOFGENRE (MOVIEID,GENRE) values (35,'SCI-FI');
Insert into MOVIEISOFGENRE (MOVIEID,GENRE) values (36,'ACTION');
Insert into MOVIEISOFGENRE (MOVIEID,GENRE) values (36,'DRAMA');
Insert into MOVIEISOFGENRE (MOVIEID,GENRE) values (36,'SCI-FI');
Insert into MOVIEISOFGENRE (MOVIEID,GENRE) values (37,'ACTION');
Insert into MOVIEISOFGENRE (MOVIEID,GENRE) values (38,'COMEDY');
Insert into MOVIEISOFGENRE (MOVIEID,GENRE) values (39,'COMEDY');
Insert into MOVIEISOFGENRE (MOVIEID,GENRE) values (40,'SCARY');
Insert into MOVIEISOFGENRE (MOVIEID,GENRE) values (40,'THRILLER');
Insert into MOVIEISOFGENRE (MOVIEID,GENRE) values (41,'FAMILY');
Insert into MOVIEISOFGENRE (MOVIEID,GENRE) values (42,'ACTION');
Insert into MOVIEISOFGENRE (MOVIEID,GENRE) values (42,'DRAMA');
Insert into MOVIEISOFGENRE (MOVIEID,GENRE) values (43,'DRAMA');
Insert into MOVIEISOFGENRE (MOVIEID,GENRE) values (43,'ROMANCE');
Insert into MOVIEISOFGENRE (MOVIEID,GENRE) values (44,'COMEDY');
Insert into MOVIEISOFGENRE (MOVIEID,GENRE) values (45,'DRAMA');
Insert into MOVIEISOFGENRE (MOVIEID,GENRE) values (46,'DRAMA');
Insert into MOVIEISOFGENRE (MOVIEID,GENRE) values (47,'ACTION');
Insert into MOVIEISOFGENRE (MOVIEID,GENRE) values (47,'FAMILY');
Insert into MOVIEISOFGENRE (MOVIEID,GENRE) values (48,'DRAMA');
Insert into MOVIEISOFGENRE (MOVIEID,GENRE) values (49,'COMEDY');
REM INSERTING into PAYMENTINFO
Insert into ORA_Y6S1B.PAYMENTINFO (ID,CARDNAME,CARDNO,EXPMONTH,EXPYEAR,BILLINGADDRESS) values ('2','Joon Hur','4520199903012222',4,2024,'110 Granville St, Vancouver, BC');
Insert into ORA_Y6S1B.PAYMENTINFO (ID,CARDNAME,CARDNO,EXPMONTH,EXPYEAR,BILLINGADDRESS) values ('3','Austin Park','2200123443214123',3,2023,'888 Homer St, Vancouver, BC');
Insert into ORA_Y6S1B.PAYMENTINFO (ID,CARDNAME,CARDNO,EXPMONTH,EXPYEAR,BILLINGADDRESS) values ('4','Example Example','0000011122223333',10,2020,'899 Hornby St, Vancouver, BC');
Insert into ORA_Y6S1B.PAYMENTINFO (ID,CARDNAME,CARDNO,EXPMONTH,EXPYEAR,BILLINGADDRESS) values ('5','John Smith','1234123412341234',5,2023,'4552 Arbutus St, Vancouver, BC');
Insert into ORA_Y6S1B.PAYMENTINFO (ID,CARDNAME,CARDNO,EXPMONTH,EXPYEAR,BILLINGADDRESS) values ('0','Patricia Ye','6655443322119900',3,2020,'8262 West 5th Avenue, Vancouver, BC');
Insert into ORA_Y6S1B.PAYMENTINFO (ID,CARDNAME,CARDNO,EXPMONTH,EXPYEAR,BILLINGADDRESS) values ('1','Michelle Huh','5656123456781234',12,2018,'123 West 8th Avenue, Vancouver, BC');
Insert into ORA_Y6S1B.PAYMENTINFO (ID,CARDNAME,CARDNO,EXPMONTH,EXPYEAR,BILLINGADDRESS) values ('161e4fdc-57dd-4356-9405-5619e2731f25','Joon Hur','1234567898765432',7,2021,'5855 Ormidale St., Vancouver, BC, Canada');
Insert into ORA_Y6S1B.PAYMENTINFO (ID,CARDNAME,CARDNO,EXPMONTH,EXPYEAR,BILLINGADDRESS) values ('bd41e5f4-8535-41dd-8f26-8cba79fcf2a3','James Smith','1111222233334444',7,2021,'5855 Ormidale st, Vancouver, BC, Canada');
Insert into ORA_Y6S1B.PAYMENTINFO (ID,CARDNAME,CARDNO,EXPMONTH,EXPYEAR,BILLINGADDRESS) values ('b3db3ffb-9c78-4d36-80bb-51a7c43915bb','Joon Hur','2131123224567890',1,1241,'5855 Ormidale st, Vancouver, BC, Canada');
Insert into ORA_Y6S1B.PAYMENTINFO (ID,CARDNAME,CARDNO,EXPMONTH,EXPYEAR,BILLINGADDRESS) values ('ffadfa49-376d-4f5a-a23d-187c220b3784','asdv','1212224444444959',2,2121,'asdv, asdv, asdv, asdv');
Insert into ORA_Y6S1B.PAYMENTINFO (ID,CARDNAME,CARDNO,EXPMONTH,EXPYEAR,BILLINGADDRESS) values ('a1983402-83e8-470d-abe8-c8d4dc547d41','Kayden McDonald','1111224445667222',7,2021,'5855 Ormidale St., Vancouver, BC, Canada');
Insert into ORA_Y6S1B.PAYMENTINFO (ID,CARDNAME,CARDNO,EXPMONTH,EXPYEAR,BILLINGADDRESS) values ('b6bc32d1-869a-4651-a248-ec55e267167b','Joon Hur','1111234563333222',7,2021,'5855 Ormidale St., Vancouver, BC, Canada');
Insert into ORA_Y6S1B.PAYMENTINFO (ID,CARDNAME,CARDNO,EXPMONTH,EXPYEAR,BILLINGADDRESS) values ('0236d441-a05c-4d94-b065-5d052b5c2f7a','J Hur','4445676433434456',7,2021,'5855 Ormidale St., Vancouver, BC, Canada');
Insert into ORA_Y6S1B.PAYMENTINFO (ID,CARDNAME,CARDNO,EXPMONTH,EXPYEAR,BILLINGADDRESS) values ('63957c9b-1559-41cb-99fc-9f68c92b8471','ES Lee','1234567226543213',4,2022,'60 Windrow Rd, Vancouver, BC, Canada');
Insert into ORA_Y6S1B.PAYMENTINFO (ID,CARDNAME,CARDNO,EXPMONTH,EXPYEAR,BILLINGADDRESS) values ('96329b30-b393-4f03-b63f-729f0b0bb415','Michelle','1253456532134444',2,2033,'asfsadfasdfasfsaf, asfasfasf, asdfsadf, asfsadfdf');
Insert into ORA_Y6S1B.PAYMENTINFO (ID,CARDNAME,CARDNO,EXPMONTH,EXPYEAR,BILLINGADDRESS) values ('7af9b0d1-b8d0-42ab-83d6-56c957cfcfc1','GAYOON HUH','1234562222787654',2,2044,'16262 E Whittier Blvd, Vancouver, BC, Canada');
Insert into ORA_Y6S1B.PAYMENTINFO (ID,CARDNAME,CARDNO,EXPMONTH,EXPYEAR,BILLINGADDRESS) values ('087513dd-7dab-48e2-9cfc-379f9b743797','Michelle','1111111111111111',10,2022,'My Address, Vancouver, BC, Canada');
Insert into ORA_Y6S1B.PAYMENTINFO (ID,CARDNAME,CARDNO,EXPMONTH,EXPYEAR,BILLINGADDRESS) values ('f251718b-bd25-4947-b242-a11c70d6b307','Alice Lee','1111222233334444',12,2021,'hello, Vancouver, BC, Canada');
Insert into ORA_Y6S1B.PAYMENTINFO (ID,CARDNAME,CARDNO,EXPMONTH,EXPYEAR,BILLINGADDRESS) values ('b081d7a4-c0f8-45a0-8067-8c8f1058cd08','Joon Hur','1111222233334444',2,2092,'5855 Ormidale st, Alberta, CA, Canada');
Insert into ORA_Y6S1B.PAYMENTINFO (ID,CARDNAME,CARDNO,EXPMONTH,EXPYEAR,BILLINGADDRESS) values ('b1bd5765-145b-4600-903c-46793ec09fa0','Joon Hur','1111222233334444',2,2012,'5855 Ormidale st, Vancouver, BC, Canada');
Insert into ORA_Y6S1B.PAYMENTINFO (ID,CARDNAME,CARDNO,EXPMONTH,EXPYEAR,BILLINGADDRESS) values ('65469337-b62a-4b29-9584-250c00092ca0','aaa','1111222233334444',1,2021,'5855 Ormidale st, Vancouver, BC, Canada');
Insert into ORA_Y6S1B.PAYMENTINFO (ID,CARDNAME,CARDNO,EXPMONTH,EXPYEAR,BILLINGADDRESS) values ('asd','Joon Hur','1111222222334455',7,2021,'5855 Ormidale St., Vancouver, BC, Canada');
Insert into ORA_Y6S1B.PAYMENTINFO (ID,CARDNAME,CARDNO,EXPMONTH,EXPYEAR,BILLINGADDRESS) values ('2b2c0e41-20f2-4a81-9038-ce4b0b8e002e','Julia','1234567890123456',7,2021,'60 Windrow Rd, Tustin, CA, United States');
REM INSERTING into PLANTYPE
Insert into PLANTYPE (ID,NAME,MONTHLYPAYMENT) values (0,'trial                         ',0);
Insert into PLANTYPE (ID,NAME,MONTHLYPAYMENT) values (1,'basic                         ',10);
Insert into PLANTYPE (ID,NAME,MONTHLYPAYMENT) values (2,'basicPlus                     ',20);
Insert into PLANTYPE (ID,NAME,MONTHLYPAYMENT) values (3,'premium                       ',30);
Insert into PLANTYPE (ID,NAME,MONTHLYPAYMENT) values (4,'premiumHD                     ',40);
REM INSERTING into PROFILE
Insert into PROFILE (ID,NAME,ADMINID,AGE) values (5,'Dad','67453068',51);
Insert into PROFILE (ID,NAME,ADMINID,AGE) values (3,'Cinda','67453068',2);
Insert into PROFILE (ID,NAME,ADMINID,AGE) values (1,'testing','6dcabb83-69ef-4504-88e7-e0b7e54a6d00',10);
Insert into PROFILE (ID,NAME,ADMINID,AGE) values (0,'Taylor','11113333',24);
Insert into PROFILE (ID,NAME,ADMINID,AGE) values (1,'Kobe','11113333',40);
Insert into PROFILE (ID,NAME,ADMINID,AGE) values (0,'Pattie','18139162',19);
Insert into PROFILE (ID,NAME,ADMINID,AGE) values (1,'Maggie','18139162',15);
Insert into PROFILE (ID,NAME,ADMINID,AGE) values (2,'Wendy','18139162',35);
Insert into PROFILE (ID,NAME,ADMINID,AGE) values (0,'Joon','54040167',23);
Insert into PROFILE (ID,NAME,ADMINID,AGE) values (1,'George','54040167',21);
Insert into PROFILE (ID,NAME,ADMINID,AGE) values (2,'Steve','54040167',13);
Insert into PROFILE (ID,NAME,ADMINID,AGE) values (1,'John','19302012',14);
Insert into PROFILE (ID,NAME,ADMINID,AGE) values (0,'Example','78694201',25);
Insert into PROFILE (ID,NAME,ADMINID,AGE) values (1,'Example1','78694201',5);
Insert into PROFILE (ID,NAME,ADMINID,AGE) values (2,'Example2','78694201',12);
Insert into PROFILE (ID,NAME,ADMINID,AGE) values (3,'Example3','78694201',13);
Insert into PROFILE (ID,NAME,ADMINID,AGE) values (4,'Example4','78694201',14);
Insert into PROFILE (ID,NAME,ADMINID,AGE) values (5,'Example5','78694201',17);
Insert into PROFILE (ID,NAME,ADMINID,AGE) values (6,'Example6','78694201',18);
Insert into PROFILE (ID,NAME,ADMINID,AGE) values (0,'Austin','55214126',24);
Insert into PROFILE (ID,NAME,ADMINID,AGE) values (1,'Chad','55214126',24);
Insert into PROFILE (ID,NAME,ADMINID,AGE) values (0,'Joel','12341234',21);
Insert into PROFILE (ID,NAME,ADMINID,AGE) values (1,'Ben','12341234',19);
Insert into PROFILE (ID,NAME,ADMINID,AGE) values (0,'Kendrick','55543333',25);
Insert into PROFILE (ID,NAME,ADMINID,AGE) values (1,'Compton','55543333',20);
Insert into PROFILE (ID,NAME,ADMINID,AGE) values (0,'Adam','22334432',30);
Insert into PROFILE (ID,NAME,ADMINID,AGE) values (1,'Cardi','22334432',26);
Insert into PROFILE (ID,NAME,ADMINID,AGE) values (0,'Caramel','23332222',53);
Insert into PROFILE (ID,NAME,ADMINID,AGE) values (0,'Derek','88888888',8);
Insert into PROFILE (ID,NAME,ADMINID,AGE) values (1,'Ariana','88888888',23);
Insert into PROFILE (ID,NAME,ADMINID,AGE) values (0,'Sasha','99999999',9);
Insert into PROFILE (ID,NAME,ADMINID,AGE) values (1,'Nicki','99999999',60);
Insert into PROFILE (ID,NAME,ADMINID,AGE) values (2,'J.Cole','99999999',32);
Insert into PROFILE (ID,NAME,ADMINID,AGE) values (0,'James','77773333',73);
Insert into PROFILE (ID,NAME,ADMINID,AGE) values (1,'Kenny','77773333',52);
Insert into PROFILE (ID,NAME,ADMINID,AGE) values (0,'Jimmy','23412353',10);
Insert into PROFILE (ID,NAME,ADMINID,AGE) values (1,'Gary','23412353',23);
Insert into PROFILE (ID,NAME,ADMINID,AGE) values (6,'Mom','67453068',50);
Insert into PROFILE (ID,NAME,ADMINID,AGE) values (4,'Teenager','45c2fe7c-4a2d-4660-b33b-ffbd49dd831f',15);
Insert into PROFILE (ID,NAME,ADMINID,AGE) values (6,'Adult','45c2fe7c-4a2d-4660-b33b-ffbd49dd831f',19);
Insert into PROFILE (ID,NAME,ADMINID,AGE) values (7,'Child','45c2fe7c-4a2d-4660-b33b-ffbd49dd831f',8);
Insert into PROFILE (ID,NAME,ADMINID,AGE) values (8,'Older Adult','45c2fe7c-4a2d-4660-b33b-ffbd49dd831f',30);
Insert into PROFILE (ID,NAME,ADMINID,AGE) values (1,'MichelleHuh','30e66457-2c4d-4058-94af-51e4733d8e63',22);
Insert into PROFILE (ID,NAME,ADMINID,AGE) values (4,'Michelle','67453068',27);
Insert into PROFILE (ID,NAME,ADMINID,AGE) values (5,'Toddler','45c2fe7c-4a2d-4660-b33b-ffbd49dd831f',2);
Insert into PROFILE (ID,NAME,ADMINID,AGE) values (11,'testing','6dcabb83-69ef-4504-88e7-e0b7e54a6d00',10);
Insert into PROFILE (ID,NAME,ADMINID,AGE) values (111,'testing','6dcabb83-69ef-4504-88e7-e0b7e54a6d00',10);
Insert into PROFILE (ID,NAME,ADMINID,AGE) values (1111,'testifffffffffng','6dcabb83-69ef-4504-88e7-e0b7e54a6d00',10);
Insert into PROFILE (ID,NAME,ADMINID,AGE) values (11111,'testifffffffffng','6dcabb83-69ef-4504-88e7-e0b7e54a6d00',10);
Insert into PROFILE (ID,NAME,ADMINID,AGE) values (111111,'testifffffffffng','6dcabb83-69ef-4504-88e7-e0b7e54a6d00',10);
Insert into PROFILE (ID,NAME,ADMINID,AGE) values (1111111,'testifffffffffng','6dcabb83-69ef-4504-88e7-e0b7e54a6d00',10);
Insert into PROFILE (ID,NAME,ADMINID,AGE) values (11111111,'testifffffffffng','6dcabb83-69ef-4504-88e7-e0b7e54a6d00',10);
REM INSERTING into WATCHES
Insert into WATCHES (MOVIEID,ADMINID,PROFILEID,TIMEIN) values (24,'55214126',0,51);
Insert into WATCHES (MOVIEID,ADMINID,PROFILEID,TIMEIN) values (21,'55214126',1,35);
Insert into WATCHES (MOVIEID,ADMINID,PROFILEID,TIMEIN) values (13,'55214126',1,35);
Insert into WATCHES (MOVIEID,ADMINID,PROFILEID,TIMEIN) values (12,'19302012',1,62);
Insert into WATCHES (MOVIEID,ADMINID,PROFILEID,TIMEIN) values (23,'88888888',1,32);
Insert into WATCHES (MOVIEID,ADMINID,PROFILEID,TIMEIN) values (24,'88888888',1,42);
Insert into WATCHES (MOVIEID,ADMINID,PROFILEID,TIMEIN) values (15,'88888888',1,21);
Insert into WATCHES (MOVIEID,ADMINID,PROFILEID,TIMEIN) values (17,'88888888',1,65);
Insert into WATCHES (MOVIEID,ADMINID,PROFILEID,TIMEIN) values (6,'88888888',1,32);
Insert into WATCHES (MOVIEID,ADMINID,PROFILEID,TIMEIN) values (4,'88888888',0,12);
Insert into WATCHES (MOVIEID,ADMINID,PROFILEID,TIMEIN) values (6,'88888888',0,64);
Insert into WATCHES (MOVIEID,ADMINID,PROFILEID,TIMEIN) values (7,'88888888',0,62);
Insert into WATCHES (MOVIEID,ADMINID,PROFILEID,TIMEIN) values (10,'88888888',0,12);
Insert into WATCHES (MOVIEID,ADMINID,PROFILEID,TIMEIN) values (11,'88888888',0,130);
Insert into WATCHES (MOVIEID,ADMINID,PROFILEID,TIMEIN) values (14,'88888888',0,80);
Insert into WATCHES (MOVIEID,ADMINID,PROFILEID,TIMEIN) values (4,'78694201',0,12);
Insert into WATCHES (MOVIEID,ADMINID,PROFILEID,TIMEIN) values (13,'78694201',0,24);
Insert into WATCHES (MOVIEID,ADMINID,PROFILEID,TIMEIN) values (2,'78694201',0,90);
Insert into WATCHES (MOVIEID,ADMINID,PROFILEID,TIMEIN) values (5,'78694201',0,12);
Insert into WATCHES (MOVIEID,ADMINID,PROFILEID,TIMEIN) values (7,'78694201',0,52);
Insert into WATCHES (MOVIEID,ADMINID,PROFILEID,TIMEIN) values (10,'78694201',0,12);
Insert into WATCHES (MOVIEID,ADMINID,PROFILEID,TIMEIN) values (7,'78694201',1,12);
Insert into WATCHES (MOVIEID,ADMINID,PROFILEID,TIMEIN) values (10,'78694201',1,12);
Insert into WATCHES (MOVIEID,ADMINID,PROFILEID,TIMEIN) values (4,'78694201',1,11);
Insert into WATCHES (MOVIEID,ADMINID,PROFILEID,TIMEIN) values (4,'78694201',2,35);
Insert into WATCHES (MOVIEID,ADMINID,PROFILEID,TIMEIN) values (10,'78694201',2,14);
Insert into WATCHES (MOVIEID,ADMINID,PROFILEID,TIMEIN) values (7,'78694201',2,15);
Insert into WATCHES (MOVIEID,ADMINID,PROFILEID,TIMEIN) values (14,'78694201',2,12);
Insert into WATCHES (MOVIEID,ADMINID,PROFILEID,TIMEIN) values (4,'78694201',3,12);
Insert into WATCHES (MOVIEID,ADMINID,PROFILEID,TIMEIN) values (7,'78694201',3,25);
Insert into WATCHES (MOVIEID,ADMINID,PROFILEID,TIMEIN) values (10,'78694201',3,87);
Insert into WATCHES (MOVIEID,ADMINID,PROFILEID,TIMEIN) values (22,'78694201',3,121);
Insert into WATCHES (MOVIEID,ADMINID,PROFILEID,TIMEIN) values (23,'78694201',3,120);
Insert into WATCHES (MOVIEID,ADMINID,PROFILEID,TIMEIN) values (4,'78694201',4,12);
Insert into WATCHES (MOVIEID,ADMINID,PROFILEID,TIMEIN) values (7,'78694201',4,25);
Insert into WATCHES (MOVIEID,ADMINID,PROFILEID,TIMEIN) values (10,'78694201',4,87);
Insert into WATCHES (MOVIEID,ADMINID,PROFILEID,TIMEIN) values (4,'78694201',5,12);
Insert into WATCHES (MOVIEID,ADMINID,PROFILEID,TIMEIN) values (7,'78694201',5,120);
Insert into WATCHES (MOVIEID,ADMINID,PROFILEID,TIMEIN) values (10,'78694201',5,87);
Insert into WATCHES (MOVIEID,ADMINID,PROFILEID,TIMEIN) values (23,'78694201',5,87);
Insert into WATCHES (MOVIEID,ADMINID,PROFILEID,TIMEIN) values (20,'78694201',5,111);
Insert into WATCHES (MOVIEID,ADMINID,PROFILEID,TIMEIN) values (4,'78694201',6,103);
Insert into WATCHES (MOVIEID,ADMINID,PROFILEID,TIMEIN) values (7,'78694201',6,120);
Insert into WATCHES (MOVIEID,ADMINID,PROFILEID,TIMEIN) values (10,'78694201',6,87);
Insert into WATCHES (MOVIEID,ADMINID,PROFILEID,TIMEIN) values (13,'78694201',6,25);
Insert into WATCHES (MOVIEID,ADMINID,PROFILEID,TIMEIN) values (12,'78694201',6,45);
Insert into WATCHES (MOVIEID,ADMINID,PROFILEID,TIMEIN) values (0,'88888888',0,15);
Insert into WATCHES (MOVIEID,ADMINID,PROFILEID,TIMEIN) values (1,'11113333',0,32);
Insert into WATCHES (MOVIEID,ADMINID,PROFILEID,TIMEIN) values (0,'11113333',0,45);
Insert into WATCHES (MOVIEID,ADMINID,PROFILEID,TIMEIN) values (12,'11113333',0,64);
Insert into WATCHES (MOVIEID,ADMINID,PROFILEID,TIMEIN) values (23,'11113333',0,75);
Insert into WATCHES (MOVIEID,ADMINID,PROFILEID,TIMEIN) values (12,'11113333',1,32);
Insert into WATCHES (MOVIEID,ADMINID,PROFILEID,TIMEIN) values (25,'11113333',1,65);
Insert into WATCHES (MOVIEID,ADMINID,PROFILEID,TIMEIN) values (12,'18139162',1,12);
Insert into WATCHES (MOVIEID,ADMINID,PROFILEID,TIMEIN) values (19,'23412353',0,35);
Insert into WATCHES (MOVIEID,ADMINID,PROFILEID,TIMEIN) values (13,'22334432',1,35);
Insert into WATCHES (MOVIEID,ADMINID,PROFILEID,TIMEIN) values (13,'55543333',1,12);
Insert into WATCHES (MOVIEID,ADMINID,PROFILEID,TIMEIN) values (13,'77773333',1,42);
Insert into WATCHES (MOVIEID,ADMINID,PROFILEID,TIMEIN) values (0,'19302012',1,45);
Insert into WATCHES (MOVIEID,ADMINID,PROFILEID,TIMEIN) values (0,'88888888',1,23);
Insert into WATCHES (MOVIEID,ADMINID,PROFILEID,TIMEIN) values (26,'99999999',1,35);
Insert into WATCHES (MOVIEID,ADMINID,PROFILEID,TIMEIN) values (17,'18139162',1,12);
Insert into WATCHES (MOVIEID,ADMINID,PROFILEID,TIMEIN) values (21,'54040167',0,23);
Insert into WATCHES (MOVIEID,ADMINID,PROFILEID,TIMEIN) values (21,'55214126',0,35);
Insert into WATCHES (MOVIEID,ADMINID,PROFILEID,TIMEIN) values (0,'22334432',0,23);
Insert into WATCHES (MOVIEID,ADMINID,PROFILEID,TIMEIN) values (2,'11113333',0,12);
Insert into WATCHES (MOVIEID,ADMINID,PROFILEID,TIMEIN) values (2,'11113333',1,16);
Insert into WATCHES (MOVIEID,ADMINID,PROFILEID,TIMEIN) values (26,'11113333',1,25);

--------------------------------------------------------
--  Constraints for Table ADMIN
--------------------------------------------------------

  ALTER TABLE "ADMIN" ADD FOREIGN KEY ("PAYMENTID")
	  REFERENCES "PAYMENTINFO" ("ID") ON DELETE SET NULL ENABLE;
      
  ALTER TABLE "ADMIN" ADD FOREIGN KEY ("PLANID") 
    REFERENCES "PLANTYPE"("ID") ON DELETE SET NULL ENABLE;
--------------------------------------------------------
--  Constraints for Table PROFILE
--------------------------------------------------------

  ALTER TABLE "PROFILE" ADD CONSTRAINT "CHECK_AGE" 
    CHECK ("AGE" >= 0);
    
  ALTER TABLE "PROFILE" ADD CONSTRAINT "PROFILE_FK1" FOREIGN KEY ("ADMINID")
	  REFERENCES "ADMIN" ("ID") ON DELETE CASCADE ENABLE;
--------------------------------------------------------
--  Constraints for Table WATCHES
--------------------------------------------------------

  ALTER TABLE "WATCHES" ADD CONSTRAINT "CHECK_TIMEIN"
    CHECK ("TIMEIN" >= 0);
    
  ALTER TABLE "WATCHES" ADD CONSTRAINT "WATCHES_FK1" FOREIGN KEY ("PROFILEID", "ADMINID")
	  REFERENCES "PROFILE" ("ID", "ADMINID") ON DELETE CASCADE ENABLE;
 
  ALTER TABLE "WATCHES" ADD CONSTRAINT "WATCHES_FK2" FOREIGN KEY ("MOVIEID")
	  REFERENCES "MOVIE" ("ID") ON DELETE CASCADE ENABLE;
      
--------------------------------------------------------
-- Constraints for Table MOVIEISOFGENRE
--------------------------------------------------------
  ALTER TABLE "MOVIEISOFGENRE" ADD CONSTRAINT "MOVIEISOFGENRE_FK1" FOREIGN KEY ("MOVIEID")
    REFERENCES "MOVIE" ("ID") ON DELETE CASCADE ENABLE;
    
  ALTER TABLE "MOVIEISOFGENRE" ADD CONSTRAINT "MOVIEISOFGENRE_FK2" FOREIGN KEY ("GENRE")
    REFERENCES "GENRE"("NAME") ON DELETE CASCADE ENABLE;
    
--------------------------------------------------------
-- Constraints for Table MOVIE
--------------------------------------------------------

  ALTER TABLE "MOVIE" ADD CONSTRAINT "CHECK_DURATION" 
    CHECK ("DURATION" > 0);
    
  ALTER TABLE "MOVIE" ADD CONSTRAINT "MOVIE_FK1" FOREIGN KEY ("AGERESTRICTION")
    REFERENCES "AGERESTRICTION"("NAME") ON DELETE SET NULL ENABLE;
    
--------------------------------------------------------
-- Constraints for Table PAYMENTINFO
--------------------------------------------------------
  ALTER TABLE "PAYMENTINFO" ADD CONSTRAINT "CHECK_CARD_NUMBER"
    CHECK (LENGTH("CARDNO") = 16);
    
  ALTER TABLE "PAYMENTINFO" ADD CONSTRAINT "CHECK_CARD_YEAR"
    CHECK ("EXPYEAR" >= 2018);

  ALTER TABLE "PAYMENTINFO" ADD CONSTRAINT "CHECK_CARD_MONTH"
    CHECK ("EXPMONTH" >= 1 AND "EXPMONTH" <= 12);