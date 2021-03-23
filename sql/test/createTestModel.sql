-- THIS DATABASE NEED TO BE IDENTICAL TO THE REAL DB EXCEPT WITH HIS NAME.

SET @OLD_UNIQUE_CHECKS = @@UNIQUE_CHECKS, UNIQUE_CHECKS = 0;
SET @OLD_FOREIGN_KEY_CHECKS = @@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS = 0;
SET @OLD_SQL_MODE = @@SQL_MODE, SQL_MODE = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,' ||
                                           'ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema car_fleet_test
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema car_fleet_test
-- -----------------------------------------------------
DROP DATABASE IF EXISTS `car_fleet_test`;
CREATE SCHEMA IF NOT EXISTS `car_fleet_test` DEFAULT CHARACTER SET utf8;

-- -----------------------------------------------------
-- Table `car_fleet_test`.`Companies`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `car_fleet_test`.`Companies`
(
    `idCompanies`  INT          NOT NULL AUTO_INCREMENT,
    `Name`         VARCHAR(45)  NULL,
    `Address`      VARCHAR(45)  NULL,
    `Zip`          VARCHAR(45)  NULL,
    `City`         VARCHAR(45)  NULL,
    `Phone`        VARCHAR(45)  NULL,
    `Email`        VARCHAR(256) NULL,
    `WebSiteUrl`   VARCHAR(256) NULL,
    `Companiescol` VARCHAR(45)  NULL,
    PRIMARY KEY (`idCompanies`)
) ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `car_fleet_test`.`Drivers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `car_fleet_test`.`Drivers`
(
    `idDrivers`             INT         NOT NULL AUTO_INCREMENT,
    `Gender`                VARCHAR(45) NULL,
    `Firstname`             VARCHAR(45) NULL,
    `Lastname`              VARCHAR(45) NULL,
    `JobTitle`              VARCHAR(45) NULL,
    `Email`                 VARCHAR(45) NULL,
    `PhoneNumber`           VARCHAR(45) NULL,
    `Companies_idCompanies` INT         NOT NULL,
    PRIMARY KEY (`idDrivers`),
    INDEX `fk_Drivers_Companies1_idx` (`Companies_idCompanies` ASC) VISIBLE,
    CONSTRAINT `fk_Drivers_Companies1`
        FOREIGN KEY (`Companies_idCompanies`)
            REFERENCES `car_fleet_test`.`Companies` (`idCompanies`)
            ON DELETE NO ACTION
            ON UPDATE NO ACTION
) ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `car_fleet_test`.`Vehicles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `car_fleet_test`.`Vehicles`
(
    `idVehicles`        INT          NOT NULL AUTO_INCREMENT,
    `Drivers_idDrivers` INT          NOT NULL,
    `licensePlate`      VARCHAR(45)  NULL,
    `manufacturer`      VARCHAR(45)  NULL,
    `model`             VARCHAR(45)  NULL,
    `vin`               VARCHAR(45)  NULL,
    `exteriorColor`     VARCHAR(45)  NULL,
    `registration`      VARCHAR(45)  NULL,
    `type`              VARCHAR(45)  NULL,
    `introductionl`     DATE         NULL,
    `insurance`         VARCHAR(45)  NULL,
    `fuel`              VARCHAR(45)  NULL,
    `transmission`      VARCHAR(45)  NULL,
    `priority`          VARCHAR(45)  NULL,
    `diagnosis`         VARCHAR(45)  NULL,
    `support`           VARCHAR(45)  NULL,
    `notes`             VARCHAR(45)  NULL,
    `Vehiclescol`       VARCHAR(256) NULL,
    PRIMARY KEY (`idVehicles`),
    INDEX `fk_Vehicles_Drivers1_idx` (`Drivers_idDrivers` ASC) VISIBLE,
    CONSTRAINT `fk_Vehicles_Drivers1`
        FOREIGN KEY (`Drivers_idDrivers`)
            REFERENCES `car_fleet_test`.`Drivers` (`idDrivers`)
            ON DELETE NO ACTION
            ON UPDATE NO ACTION
) ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `car_fleet_test`.`Budgets`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `car_fleet_test`.`Budgets`
(
    `idBudgets`           INT         NOT NULL AUTO_INCREMENT,
    `status`              VARCHAR(45) NULL,
    `Vehicles_idVehicles` INT         NOT NULL,
    `tagName`             VARCHAR(45) NULL,
    `startDate`           DATE        NULL,
    `endDate`             DATE        NULL,
    `durationInMonth`     INT         NULL,
    `kilometers`          INT         NULL,
    `ocn`                 INT         NULL,
    `damageInsurance`     INT         NULL,
    `damagesNotCovered`   VARCHAR(45) NULL,
    `leasing`             INT         NULL,
    `fuel`                INT         NULL,
    `tires`               INT         NULL,
    `maintenance`         INT         NULL,
    `fleetManagement`     INT         NULL,
    `replacementVehicle`  INT         NULL,
    PRIMARY KEY (`idBudgets`),
    INDEX `fk_Budgets_Vehicles_idx` (`Vehicles_idVehicles` ASC) VISIBLE,
    CONSTRAINT `fk_Budgets_Vehicles`
        FOREIGN KEY (`Vehicles_idVehicles`)
            REFERENCES `car_fleet_test`.`Vehicles` (`idVehicles`)
            ON DELETE NO ACTION
            ON UPDATE NO ACTION
) ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `car_fleet_test`.`Creditors`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `car_fleet_test`.`Creditors`
(
    `idCreditors` INT         NOT NULL,
    `Name`        VARCHAR(45) NULL,
    PRIMARY KEY (`idCreditors`)
) ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `car_fleet_test`.`Invoices`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `car_fleet_test`.`Invoices`
(
    `idInvoices`            INT         NOT NULL AUTO_INCREMENT,
    `Total`                 VARCHAR(45) NULL,
    `Invoicescol`           VARCHAR(45) NULL,
    `Budgets_idBudgets`     INT         NOT NULL,
    `Creditors_idCreditors` INT         NOT NULL,
    PRIMARY KEY (`idInvoices`, `Budgets_idBudgets`, `Creditors_idCreditors`),
    INDEX `fk_Invoices_Budgets1_idx` (`Budgets_idBudgets` ASC) VISIBLE,
    INDEX `fk_Invoices_Creditors1_idx` (`Creditors_idCreditors` ASC) VISIBLE,
    CONSTRAINT `fk_Invoices_Budgets1`
        FOREIGN KEY (`Budgets_idBudgets`)
            REFERENCES `car_fleet_test`.`Budgets` (`idBudgets`)
            ON DELETE NO ACTION
            ON UPDATE NO ACTION,
    CONSTRAINT `fk_Invoices_Creditors1`
        FOREIGN KEY (`Creditors_idCreditors`)
            REFERENCES `car_fleet_test`.`Creditors` (`idCreditors`)
            ON DELETE NO ACTION
            ON UPDATE NO ACTION
) ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `car_fleet_test`.`InvoiceItems`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `car_fleet_test`.`InvoiceItems`
(
    `Position`                       VARCHAR(45) NULL,
    `Amount`                         INT         NULL,
    `Cost`                           FLOAT       NULL,
    `Invoices_idInvoices`            INT         NOT NULL,
    `Invoices_Budgets_idBudgets`     INT         NOT NULL,
    `Invoices_Creditors_idCreditors` INT         NOT NULL,
    PRIMARY KEY (`Invoices_idInvoices`, `Invoices_Budgets_idBudgets`, `Invoices_Creditors_idCreditors`),
    CONSTRAINT `fk_InvoiceItems_Invoices1`
        FOREIGN KEY (`Invoices_idInvoices`, `Invoices_Budgets_idBudgets`, `Invoices_Creditors_idCreditors`)
            REFERENCES `car_fleet_test`.`Invoices` (`idInvoices`, `Budgets_idBudgets`, `Creditors_idCreditors`)
            ON DELETE NO ACTION
            ON UPDATE NO ACTION
) ENGINE = InnoDB;


SET SQL_MODE = @OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS = @OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS = @OLD_UNIQUE_CHECKS;
