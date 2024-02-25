-- phpMyAdmin SQL Dump
-- version 5.1.1deb5ubuntu1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Feb 25, 2024 at 06:09 AM
-- Server version: 10.6.12-MariaDB-0ubuntu0.22.04.1
-- PHP Version: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pandora_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `created_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `title`, `content`, `created_at`, `updated_at`, `user_id`) VALUES
(2, 'Hello world2', 'Content (updated)', '2024-02-24 18:36:09.651275', '2024-02-25 00:43:04.000000', 1),
(4, 'Hello world6', 'Content ', '2024-02-24 23:38:54.267473', '2024-02-24 23:38:54.267473', 1),
(5, 'Hello world6', 'Content ', '2024-02-24 23:38:58.117671', '2024-02-24 23:38:58.117671', 1),
(9, 'Hello world6', 'Content ', '2024-02-24 23:39:00.058187', '2024-02-24 23:39:00.058187', 1),
(11, 'Hello world6', 'Content ', '2024-02-24 23:39:00.783579', '2024-02-24 23:39:00.783579', 1),
(12, 'Hello world6', 'Content ', '2024-02-24 23:39:00.999567', '2024-02-24 23:39:00.999567', 1),
(13, 'Hello world6', 'Content ', '2024-02-24 23:39:01.181700', '2024-02-24 23:39:01.181700', 1),
(15, 'Hello world6', 'Content ', '2024-02-24 23:39:01.514947', '2024-02-24 23:39:01.514947', 1),
(16, 'Hello world6', 'Content ', '2024-02-24 23:39:01.682591', '2024-02-24 23:39:01.682591', 1),
(17, 'Hello world6', 'Content ', '2024-02-24 23:39:01.864298', '2024-02-24 23:39:01.864298', 1),
(18, 'Hello world6', 'Content ', '2024-02-24 23:39:01.987315', '2024-02-24 23:39:01.987315', 1),
(19, 'Hello world6', 'Content ', '2024-02-24 23:44:06.340971', '2024-02-24 23:44:06.340971', 1),
(20, 'Hello world6', 'Content ', '2024-02-24 23:44:07.153708', '2024-02-24 23:44:07.153708', 1),
(21, 'Hello world6', 'Content ', '2024-02-24 23:44:07.816293', '2024-02-24 23:44:07.816293', 1),
(25, 'New Post', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dolore dolores saepe odio quae optio nam reprehenderit eum asperiores commodi officia sapiente libero, voluptas placeat blanditiis quidem earum quas doloremque.', '2024-02-25 01:19:44.916759', '2024-02-25 01:19:44.916759', 1),
(26, 'Hello Form Other user', 'Content ', '2024-02-25 01:20:48.690251', '2024-02-25 01:20:48.690251', 1),
(27, 'Hello Form MMM', 'sdjfksdjfksdf ', '2024-02-25 01:22:06.220842', '2024-02-25 01:22:06.220842', 1),
(28, 'Hello Form MMM', 'sdjfksdjfksdf ', '2024-02-25 01:26:20.707380', '2024-02-25 01:26:20.707380', 1),
(29, 'Hello Form MMM', 'sdjfksdjfksdf ', '2024-02-25 01:26:51.398351', '2024-02-25 01:26:51.398351', 1),
(30, 'Hello Form MMM', 'sdjfksdjfksdf ', '2024-02-25 01:27:31.210046', '2024-02-25 01:27:31.210046', 1),
(31, 'Hello Form MMM', 'sdjfksdjfksdf ', '2024-02-25 01:27:33.172778', '2024-02-25 01:27:33.172778', 1),
(32, 'Hello Form MMM', 'sdjfksdjfksdf ', '2024-02-25 01:28:44.174412', '2024-02-25 01:28:44.174412', 1),
(33, 'Hello Form MMM', 'sdjfksdjfksdf ', '2024-02-25 01:30:56.510481', '2024-02-25 01:30:56.510481', 1),
(34, 'Hello Form MMM', 'sdjfksdjfksdf ', '2024-02-25 01:31:36.343696', '2024-02-25 01:31:36.343696', 1),
(35, 'Hello Form MMM', 'sdjfksdjfksdf ', '2024-02-25 01:33:10.685805', '2024-02-25 01:33:10.685805', 1),
(36, 'Hello Form MMM', 'sdjfksdjfksdf ', '2024-02-25 01:34:58.074352', '2024-02-25 01:34:58.074352', 1),
(37, 'Hello Form MMM', 'sdjfksdjfksdf ', '2024-02-25 01:37:48.872748', '2024-02-25 01:37:48.872748', 1),
(38, 'Hello Form MMM', 'sdjfksdjfksdf ', '2024-02-25 01:39:11.574986', '2024-02-25 01:39:11.574986', NULL),
(39, 'Hello Form MMM', 'sdjfksdjfksdf ', '2024-02-25 01:41:14.009075', '2024-02-25 01:41:14.009075', NULL),
(40, 'Hello Form MMM', 'sdjfksdjfksdf updated', '2024-02-25 01:44:11.169717', '2024-02-25 05:59:43.000000', 1),
(41, 'Hello Form MMM', 'sdjfksdjfksdf ', '2024-02-25 01:46:32.020696', '2024-02-25 01:46:32.020696', 8);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `created_at`, `updated_at`) VALUES
(1, 'test', 'test@test.com', '$2b$12$S0GlSIiN40V4lFBVgz.FJupoa9pWdPSO.0I2wpuPIN1ld6lHbKggu', '2024-02-24 17:50:22.387695', '2024-02-24 23:19:39.000000'),
(2, 'myomaung', 'myomaung@gmail.com', '$2b$12$tff/XG1BoouBxvQiGS7Qx.g28JFa2B9Y5HRB6BVTmKD3Ot2ZAmP62', '2024-02-24 17:52:15.814623', '2024-02-24 17:52:15.814623'),
(3, 'myomaung(updated)', 'myomaung@gmail.com', '$2b$12$nbTmYwAAJ.FrW/R/.JKJOOO6m0UZJiYMXUs3Ym/qDd5TulD2Lopce', '2024-02-24 17:53:41.221931', '2024-02-24 17:53:41.221931'),
(4, 'myomaung', 'myomaung2@gmail.com', '$2b$12$wzf1OHBaqx4VisvyLYilmuQVMlG0u8d.6rcGiyHerj2KItW/KCVUm', '2024-02-24 17:54:13.382164', '2024-02-24 17:54:13.382164'),
(5, 'myomaung(updated)', 'myomaung@gmail.com', '$2b$12$abDYsGLZLv81kfmDbZsuQeo5HNZ7U0Xd2Y0fJ3Q9IgARaRCUXk1Fe', '2024-02-24 18:38:46.621121', '2024-02-24 18:38:46.621121'),
(6, 'test', 'test@test.com', '$2b$12$PuNYe1mDjI4nqhTBWmd4XO9lusrwoHRI18VX.TvNbpBfQI0R8IS4a', '2024-02-24 21:52:29.233423', '2024-02-24 21:52:29.233423'),
(7, 'test', 'test1@test.com', '$2b$12$lWcuCZm2MmVpCWYGzPT7me7vWMlPF4DvBLgvUQnC2G2oI5dy7eYBC', '2024-02-24 21:59:18.805426', '2024-02-24 21:59:18.805426'),
(8, 'myomaung', 'myomaung5@gmail.com', '$2b$12$YHKvTPkk.7KAXKS1Cs6ITuVNUbsxEW4k3hWI0w1E18zmnj93GnzFy', '2024-02-25 01:46:10.718831', '2024-02-25 01:46:10.718831');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_c4f9a7bd77b489e711277ee5986` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `FK_c4f9a7bd77b489e711277ee5986` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
