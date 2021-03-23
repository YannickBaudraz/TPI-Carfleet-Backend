CREATE OR REPLACE USER 'carfleet_user'@'localhost' IDENTIFIED BY 'carfleet_cpnv';
GRANT USAGE ON *.* TO 'carfleet_user'@'localhost';
GRANT SELECT, INSERT, UPDATE, DELETE ON `car_fleet`.* TO 'carfleet_user'@'localhost';
FLUSH PRIVILEGES;
SHOW GRANTS FOR 'carfleet_user'@'localhost';
