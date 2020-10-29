CREATE SCHEMA `compensation` ;

CREATE TABLE `compensation`.`PayPeriod` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `startDate` DATE NULL,
  `endDate` DATE NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `compensation`.`EmployeeTimeReport`(
`employeeId` INT NOT NULL ,
`jobGroup` VARCHAR(45) NOT NULL ,
`date` DATETIME NOT NULL ,
PRIMARY KEY (`date`, `employeeId`));

