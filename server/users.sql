-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: mysql_db:3306
-- Generation Time: Mar 27, 2025 at 03:33 PM
-- Server version: 5.7.44
-- PHP Version: 8.2.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `webdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstname` varchar(255) CHARACTER SET utf8 NOT NULL,
  `lastname` varchar(255) CHARACTER SET utf8mb4 NOT NULL,
  `age` int(11) NOT NULL,
  `gender` enum('ชาย','หญิง','ไม่ระบุ') CHARACTER SET utf8 NOT NULL,
  `interests` text CHARACTER SET utf8 NOT NULL,
  `discription` text CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstname`, `lastname`, `age`, `gender`, `interests`, `discription`) VALUES
(1, 'ภัทรดนัย', 'เครือพันธ์ศักดิ์', 21, 'ชาย', 'บ้าบอ', 'ไม่รู้'),
(2, 'dd', 'dd', 21, 'หญิง', 'dd', 'dd'),
(4, 'John', 'Doe', 28, 'ชาย', 'aaa,sss, ooo', 'ddd'),
(5, 'ttt', 'eee', 20, 'ชาย', 'ccc,sss, ooo', 'www'),
(6, 'sda', 'dss', 14, 'ชาย', 'cdc,sas, coo', 'saw'),
(7, 'sda', 'dss', 14, 'ชาย', 'cdc,sas, coo', 'saw'),
(8, 'arise', 'sad', 26, 'ชาย', 'cddc,sas, coo', 'sawew'),
(9, 'aaa', 'aaa', 21, 'ชาย', 'อ่านหนังสือ', 'a'),
(10, 'ddd', 'ddd', 12, 'ชาย', 'อ่านหนังสือ', 'd'),
(11, 'dsa', 'dasd', 13, 'หญิง', 'อ่านหนังสือ,ฟังเพลง', 'dd'),
(17, 'sadad', 'ddas', 13, 'ชาย', 'อ่านหนังสือ,ดูหนัง,ฟังเพลง', 'dd');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
