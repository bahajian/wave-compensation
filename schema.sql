CREATE SCHEMA `compensation` ;

CREATE TABLE `compensation`.`PayPeriod` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `startDate` DATE NULL,
  `endDate` DATE NULL,
  PRIMARY KEY (`id`));

SELECT * FROM compensation.EmployeeTimeReport;CREATE TABLE `EmployeeTimeReport` (
  `employeeId` int DEFAULT NULL,
  `jobGroup` varchar(45) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `hoursWorked` float DEFAULT NULL,
  `payPeriodId` int DEFAULT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

