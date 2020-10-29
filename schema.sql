CREATE SCHEMA `compensation` ;
USE `compensation`;
CREATE TABLE `PayPeriod` (
  `id` int NOT NULL AUTO_INCREMENT,
  `startDate` date DEFAULT NULL,
  `endDate` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=289 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `EmployeeTimeReport` (
  `employeeId` int NOT NULL,
  `jobGroup` varchar(45) DEFAULT NULL,
  `date` datetime NOT NULL,
  `hoursWorked` float DEFAULT NULL,
  `payPeriodId` int DEFAULT NULL,
  PRIMARY KEY (`employeeId`,`date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


