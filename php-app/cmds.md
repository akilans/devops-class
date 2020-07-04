
### Mysql

* docker container run -d --name mysql-server -e MYSQL_ROOT_PASSWORD=admin123 mysql:5.7
* docker container exec -it mysql-server bash
* mysql -u root -p
* show databases;
* create database infosys;
* use infosys
* CREATE TABLE employees (
id INT(6) AUTO_INCREMENT PRIMARY KEY,
firstname VARCHAR(30) NOT NULL,
lastname VARCHAR(30) NOT NULL,
email VARCHAR(50)
)
* INSERT INTO employees (firstname, lastname, email)
VALUES ('Akilan', 'Subramanian', 'akilan@exaample.com'),('Durga','katta','durga@example.com');

### PHP

* docker image build -t my-php .
* docker container run -d --name my-php-server --link mysql-server:db-server -p 8080:80 my-php
