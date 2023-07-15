-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th7 15, 2023 lúc 01:02 PM
-- Phiên bản máy phục vụ: 10.4.28-MariaDB
-- Phiên bản PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `code_practice`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `comment`
--

CREATE TABLE `comment` (
  `id` bigint(20) NOT NULL,
  `content` varchar(45) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `task_id` bigint(20) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `comment`
--

INSERT INTO `comment` (`id`, `content`, `user_id`, `task_id`, `created_at`, `updated_at`) VALUES
(2, 'Ai đó hướng dẫn tôi với', 29, 1, '2023-07-10 02:12:11', '2023-07-10 02:12:11'),
(8, 'Admin ra thêm bài đi ạ', 29, 11, '2023-07-10 02:35:42', '2023-07-10 02:35:42'),
(9, 'Bài tập rất bổ ích', 21, 11, '2023-07-14 15:36:17', '2023-07-14 15:36:17'),
(10, 'Mình đã pass test này', 32, 1, '2023-07-14 15:40:14', '2023-07-14 15:40:14'),
(11, 'Bài toán khá hay', 32, 15, '2023-07-15 03:13:21', '2023-07-15 03:13:21'),
(12, 'Ad ra thêm bài toán với năm nhuận đi ạ', 33, 13, '2023-07-15 03:14:39', '2023-07-15 03:14:39');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `task`
--

CREATE TABLE `task` (
  `id` bigint(20) NOT NULL,
  `name` char(45) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `format` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `task`
--

INSERT INTO `task` (`id`, `name`, `description`, `format`, `created_at`, `updated_at`) VALUES
(1, 'CỘNG HAI SỐ NGUYÊN', 'Viết chương trình tính tổng hai số nguyên', 'Input: Hai số nguyên nằm trên hai dòng \nOutput: Kết quả phép cộng', NULL, '2023-07-12 05:08:27'),
(11, 'NHÂN HAI SỐ NGUYÊN', 'Viết chương trình tính tích hai số nguyên', 'Input: Hai số nguyên nằm trên hai dòng \nOutput: Kết quả phép nhân', '2023-07-10 01:20:43', '2023-07-12 05:09:00'),
(12, 'TÍNH GIÁ TRỊ BIỂU THỨC', 'Viết chương trình tính giá trị biểu thức: S = 1 + 2 + ... + n, với n nhập từ bàn phím', 'Input: Số nguyên n \nOutput: Kết quả của tổng S', '2023-07-12 05:01:12', '2023-07-12 05:01:12'),
(13, 'TÍNH NGÀY TRONG THÁNG', 'Viết chương trình nhập vào số tháng và trả kết quả số ngày trong tháng đó, biết rằng năm đó là năm không nhuận', 'Input: Số tháng \nOutput: Số ngày trong tháng đó', '2023-07-12 05:03:34', '2023-07-12 05:03:34'),
(14, 'SẮP XẾP MẢNG', 'Viết chương trình sắp xếp mảng theo thứ tự tăng dần', 'Input: Dòng đầu tiên chứa số phần tử của mảng - n, n dòng tiếp theo chứa các phần tử của mảng  \nOutput: Mảng sau khi được sắp xếp', '2023-07-12 05:05:48', '2023-07-12 05:05:48'),
(15, 'TÌM PHẦN TỬ LỚN NHẤT', 'Viết chương trình tìm phần tử lớn nhất trong mảng', 'Input: Dòng đầu tiên chứa số phần tử của mảng - n, n dòng tiếp theo chứa các phần tử của mảng  \nOutput: Giá trị phần tử lớn nhất', '2023-07-15 02:25:16', '2023-07-15 02:25:16'),
(16, 'TÌM PHẦN TỬ NHỎ NHẤT', 'Viết chương trình tìm phần tử nhỏ nhất trong mảng', 'Input: Dòng đầu tiên chứa số phần tử của mảng - n, n dòng tiếp theo chứa các phần tử của mảng  \nOutput: Giá trị phần tử nhỏ nhất', '2023-07-15 10:21:47', '2023-07-15 10:21:47'),
(17, 'TÍNH TỔNG CÁC PHẦN TỬ TRONG MẢNG', 'Tính tổng các phần tử trong mảng', 'Input: n - số phần tử của mảng, n dòng tiếp theo mỗi dòng chứa 1 phần tử\nOutput: Tổng của mảng', '2023-07-15 10:40:33', '2023-07-15 10:40:33');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `test`
--

CREATE TABLE `test` (
  `id` bigint(20) NOT NULL,
  `input` varchar(45) DEFAULT NULL,
  `output` varchar(45) DEFAULT NULL,
  `task_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `test`
--

INSERT INTO `test` (`id`, `input`, `output`, `task_id`) VALUES
(5, '1\r\n2', '3', 1),
(6, '1\r\n2', '2', 11),
(7, '8', '31', 13),
(8, '10', '55', 12),
(9, '1 \n5 \n2 \n7', '1', 16),
(10, '3\n1\n2\n3', '6', 17);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user`
--

CREATE TABLE `user` (
  `id` bigint(20) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `email` varchar(45) NOT NULL,
  `password` mediumtext NOT NULL,
  `trophy` int(11) NOT NULL DEFAULT 0,
  `rank` enum('Vô danh','Đồng','Bạc','Vàng','Kim cương','Cao thủ') DEFAULT 'Vô danh',
  `gender` enum('MALE','FEMALE','UNDEFINE') DEFAULT 'UNDEFINE',
  `role_id` bigint(20) DEFAULT 0,
  `token` varchar(45) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `password`, `trophy`, `rank`, `gender`, `role_id`, `token`, `created_at`, `updated_at`) VALUES
(1, 'Admin', 'admin@gmail.com', '$2b$10$LP6LhTy76sJYLHLbGef.suEc9JGKjaO.pxbl/yx3k0HLbcTpwKec.', 0, 'Vô danh', 'MALE', 1, NULL, '2023-07-08 10:32:46', '2023-07-08 10:32:46'),
(21, 'Duc Khiem', 'duckhiem@gmail.com', '$2b$10$FJD0ZlUIsIFvRtI4mpA0huL/dYFSRB3HWv.O36RrdRI7cV.RU2AK.', 40, 'Vô danh', 'MALE', 0, NULL, '2023-07-08 10:16:37', '2023-07-08 10:16:37'),
(25, 'Duc Khiem', 'khiem.dd@gmail.com', '$2b$10$uD4zWZye7AfrVrV5chqYm.vgfj6WKkw7WUDsyV29/gld2uN6drIPu', 0, 'Vô danh', 'MALE', 0, NULL, '2023-07-08 10:31:23', '2023-07-08 10:31:23'),
(26, 'Nguyen Nam', 'namnguyen@gmail.com', '$2b$10$fPwt3e/O6WVtkVJn5I9QqOSODTsi6WkzQ/dLkACjZ2A/UPezHEP46', 0, 'Vô danh', 'FEMALE', 0, NULL, '2023-07-08 10:31:47', '2023-07-08 10:31:47'),
(28, 'Doraemon', 'doraemon@gmail.com', '$2b$10$evra7yJln4rOli6fQ6ekwOsabBkvkdF1V22emgOIrWdGEAoBK95O6', 0, 'Vô danh', 'MALE', 0, NULL, '2023-07-08 10:37:49', '2023-07-08 10:37:49'),
(29, '96 Cơ Khí Bách Khoa', 'hust@gmail.com', '$2b$10$Hh0ZC6dcHT//HEZSy/An9.aJqdEAJ.mCzBnkEyVyBD5VbZeEuaq7q', 10, 'Vô danh', 'MALE', 0, NULL, '2023-07-08 10:38:24', '2023-07-08 10:38:24'),
(30, 'Nguyen Nam', 'nguyennam@gmail.com', '$2b$10$b46jxNDFFA/.2Kqx5ZlVGOeEO5MjSFeQ.1LiOnD20dfBKm5ubPwMS', 0, 'Vô danh', NULL, 0, NULL, '2023-07-13 08:53:17', '2023-07-13 08:53:17'),
(32, 'Xuan Kien', 'xuankien@gmail.com', '$2b$10$G3wf8YfZjVCpd6diQcGLiO.Kzz7VPzBsCnOoMIYMYoKGC4ovkb8yK', 10, 'Vô danh', NULL, 0, NULL, '2023-07-13 09:02:04', '2023-07-13 09:02:04'),
(33, 'Nam BadBoiz', 'khacnam@gmail.com', '$2b$10$/QwhoZbY7L2myfLNgd9gNuM0holV/XXuZAd3yBZcC8fCM99TUAeJu', 20, 'Vô danh', NULL, 0, NULL, '2023-07-15 03:14:01', '2023-07-15 03:14:01');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user_task`
--

CREATE TABLE `user_task` (
  `id` bigint(20) NOT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `task_id` bigint(20) DEFAULT NULL,
  `pass` enum('Yes','No') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `user_task`
--

INSERT INTO `user_task` (`id`, `user_id`, `task_id`, `pass`) VALUES
(8, 21, 1, 'Yes'),
(9, 21, 11, 'Yes'),
(10, 29, 1, 'Yes'),
(11, 21, 13, 'Yes'),
(12, 21, 12, 'Yes'),
(13, 32, 1, 'Yes'),
(14, 33, 1, 'Yes'),
(15, 33, 11, 'Yes');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `task`
--
ALTER TABLE `task`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `test`
--
ALTER TABLE `test`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `user_task`
--
ALTER TABLE `user_task`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `comment`
--
ALTER TABLE `comment`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT cho bảng `task`
--
ALTER TABLE `task`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT cho bảng `test`
--
ALTER TABLE `test`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT cho bảng `user`
--
ALTER TABLE `user`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT cho bảng `user_task`
--
ALTER TABLE `user_task`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
