# This file needs to be run in a terminal with a root connection to the mariaDB server.

CREATE OR REPLACE USER 'admin'@'localhost' IDENTIFIED BY 'cpnv';
GRANT USAGE ON *.* TO 'admin'@'localhost';
GRANT ALL PRIVILEGES ON *.* TO 'admin'@'localhost';
FLUSH PRIVILEGES;
SHOW GRANTS FOR 'admin'@'localhost';
