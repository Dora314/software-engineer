CREATE DATABASE  IF NOT EXISTS `crm` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `crm`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: crm
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `datasanpham`
--

DROP TABLE IF EXISTS `datasanpham`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `datasanpham` (
  `_productID` varchar(32) NOT NULL,
  `_productCategory` varchar(64) NOT NULL,
  `_productName` varchar(64) NOT NULL,
  `_price` float NOT NULL,
  PRIMARY KEY (`_productID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `datasanpham`
--

LOCK TABLES `datasanpham` WRITE;
/*!40000 ALTER TABLE `datasanpham` DISABLE KEYS */;
INSERT INTO `datasanpham` VALUES ('ACCESS001','accessories','Phone Case - Impact Resistant',29.99),('ACCESS002','accessories','Wireless Charging Pad',34.99),('ACCESS003','accessories','Screen Protector - Tempered Glass',14.99),('EARBUDS001','earbuds','Wireless Noise-Cancelling Earbuds',199.99),('EARBUDS002','earbuds','True Wireless Earbuds with Long Playtime',79.99),('EARBUDS003','earbuds','Wireless Earbuds with Excellent Sound Quality',24.99),('LAPTOP001','laptop','High Performance Gaming Laptop',1299.99),('LAPTOP002','laptop','Ultra Thin Productivity Laptop',899.99),('LAPTOP003','laptop','Chromebook for Students and Everyday Use',499.99),('PCHW001','pc hardware','High-Performance Graphics Card',499.99),('PCHW002','pc hardware','Core I9 Intel Gen 15',899.99),('SMARTPH001','smartphone','Flagship Smartphone with Pro Camera',749.99),('SMARTPH002','smartphone','Iphone  Smartphone with Great Battery Life',1500.99),('SMARTPH003','smartphone','Budget-Friendly Smartphone with Great Value',199.99),('SMARTWCH001','smartwatch','Fitness Tracker Smartwatch',149.99),('SMARTWCH002','smartwatch','Smartwatch with Calling and Messaging',299.99),('TABLET001','tab','Android Tablet for Entertainment',249.99),('TABLET002','tab','Windows Tablet for Productivity',399.99);
/*!40000 ALTER TABLE `datasanpham` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-18 21:49:14
