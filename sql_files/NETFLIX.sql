CREATE TABLE ADMIN(
    ID INT NOT NULL PRIMARY KEY,
    EMAIL VARCHAR(30) NOT NULL,
    PASSWORD VARCHAR(30) NOT NULL,
    PLANID INT DEFAULT 0 NOT NULL,
    PAYMENTID INT NOT NULL,
    FOREIGN KEY ("PLANID") REFERENCES PLANTYPE("ID"),
    FOREIGN KEY ("PAYMENTID") REFERENCES PAYMENTINFO("ID")
    )

INSERT INTO ADMIN 
VALUES (67453068, 
        'michelle.huh@hotmail.com',
        'qwer',
        3,
        1
        )

INSERT INTO ADMIN
VALUES (540404167, 
        'joon.hur@alumni.ubc.ca',
        'qwer'
        1,
        2
        )
        