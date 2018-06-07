# Netflix
CS304 project setup guide

## Database Setup
### Oracle client installation for MAC OS
[Go to Oracle's homepage for files and instructions.](http://www.oracle.com/technetwork/topics/intel-macsoft-096467.html)
Every step must be followed but sqlplus is optional.
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
## Spring Datasource Setup
src/main/resources/application.properties

```
spring.datasource.username=ora_{cs_id}
spring.datasource.password=a{student_number}
```
