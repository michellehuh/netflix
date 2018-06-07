# Netflix
CS304 project setup guide

## Database Setup
### Oracle client and sqlplus installation for MAC OS
[Go to Oracle's homepage for files and instructions.](http://www.oracle.com/technetwork/topics/intel-macsoft-096467.html, "Oracle client")

### Connecting to UBC Oracle Database via an SSH Tunnel
It's not possible to directly connect to the dbhost.ugrad.cs.ubc.ca so you'd have to create a tunnel first.

At terminal
```
cd ~/instantclient_12_2/network/admin/
sudo touch tnsnames.ora
sudo vim tnsnames.ora
```
oraname.tns
```
ssh =
  (DESCRIPTION =
    (ADDRESS = (PROTOCOL = TCP)(HOST = localhost)(PORT = 1522))
    (CONNECT_DATA =
      (SERVER = DEDICATED)
      (SERVICE_NAME = ug)
    )
  )
```
Create a tunnel 
```
ssh -Y your_cs_id@remote.ugrad.cs.ubc.ca -L1522:dbhost.ugrad.cs.ubc.ca:1522
```
Use sqlplus
```
sqlplus ora_{cs_id}/a{student_number}@ssh
```
### SQL Developer
[Alternative to sqlplus, SQL developer can be used.](http://www.oracle.com/technetwork/developer-tools/sql-developer/overview/index.html, "Sql Developer")

Load TNS file that was created from the above.
Use ora_{cs_id}/a{student_number} as id/pw

## Spring Datasource Setup
src/main/resources/application.properties

```
spring.datasource.username=ora_{cs_id}
spring.datasource.password=a{student_number}
```

## Dependencies
Build gradle to add dependencies to the classpath
```
gradle build
```
