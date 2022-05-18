-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1:3306
-- Thời gian đã tạo: Th5 18, 2022 lúc 03:54 AM
-- Phiên bản máy phục vụ: 8.0.29
-- Phiên bản PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `shopping`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `blogs`
--

DROP TABLE IF EXISTS `blogs`;
CREATE TABLE IF NOT EXISTS `blogs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `releaseDate` datetime DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `summary` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `blogs`
--

INSERT INTO `blogs` (`id`, `title`, `content`, `releaseDate`, `image`, `summary`, `createdAt`, `updatedAt`) VALUES
(2, 'Giày vintage Sneaker & secondhand ,giày cũ phong cách cổ điển', '<p style=\"text-align:start;\"><span style=\"color: rgb(40,40,40);background-color: rgb(255,255,255);font-size: 18.4;font-family: times new roman\", times, serif;\">Những dòng giày vintage là loại giày sang trọng có hơi hướng quý tộc. Giày sneaker vintage thườ', NULL, 'https://res.cloudinary.com/dueyjeqd5/image/upload/v1651548674/v-network/uu2cufkynhopxdxuhtqn.jpg', 'Những dòng giày vintage là loại giày sang trọng có hơi hướng quý tộc. Giày sneaker vintage thường là các thương hiệu giày lớn, có lịch sử lâu đời như: Nike, adidas, vans, converse. Việc lựa chọn những đôi sneaker cổ điển và lâu đời như: các dòng Converse ', '2022-05-03 03:31:14', '2022-05-03 03:31:14'),
(4, 'Top 8 đôi giày Sneaker cho mùa hè năng động', '<p style=\"text-align:start;\"><span style=\"color: rgb(40,40,40);background-color: rgb(255,255,255);font-size: 18.4;font-family: times new roman\", times, serif;\">Những đôi giày sneaker là sản phẩm thời trang không thể thiếu của trong tủ đồ của các bạn trẻ. ', NULL, 'https://res.cloudinary.com/dueyjeqd5/image/upload/v1651549016/v-network/yzdqmvelei2hlcjjavhy.jpg', 'Những đôi giày sneaker là sản phẩm thời trang không thể thiếu của trong tủ đồ của các bạn trẻ. Khi mùa hè đầy nhiệt huyết sắp tới việc chọn một đôi giày sneaker khiến cho bạn chở nên năng động hơn trong mùa hè nóng bức. Hãy cùng TrungSneaker điểm danh 10 ', '2022-05-03 03:36:56', '2022-05-03 03:36:56'),
(5, 'Top 8 đôi giày Sneaker cho mùa hè năng động', '<p style=\"text-align:start;\"><span style=\"color: rgb(40,40,40);background-color: rgb(255,255,255);font-size: 18.4;font-family: times new roman\", times, serif;\">Những đôi giày sneaker là sản phẩm thời trang không thể thiếu của trong tủ đồ của các bạn trẻ. ', NULL, 'https://res.cloudinary.com/dueyjeqd5/image/upload/v1651549057/v-network/q6so7lzutrzdlftkbjjf.jpg', 'Những đôi giày sneaker là sản phẩm thời trang không thể thiếu của trong tủ đồ của các bạn trẻ. Khi mùa hè đầy nhiệt huyết sắp tới việc chọn một đôi giày sneaker khiến cho bạn chở nên năng động hơn trong mùa hè nóng bức. Hãy cùng TrungSneaker điểm danh 10 ', '2022-05-03 03:37:38', '2022-05-03 03:37:38'),
(6, 'Top 8 đôi giày Sneaker cho mùa hè năng động', '<p style=\"text-align:start;\"><span style=\"color: rgb(40,40,40);background-color: rgb(255,255,255);font-size: 18.4;font-family: times new roman\", times, serif;\">Những đôi giày sneaker là sản phẩm thời trang không thể thiếu của trong tủ đồ của các bạn trẻ. ', NULL, 'https://res.cloudinary.com/dueyjeqd5/image/upload/v1651549176/v-network/mqslu5tnuddfwjscogzi.jpg', 'Những đôi giày sneaker là sản phẩm thời trang không thể thiếu của trong tủ đồ của các bạn trẻ. Khi mùa hè đầy nhiệt huyết sắp tới việc chọn một đôi giày sneaker khiến cho bạn chở nên năng động hơn trong mùa hè nóng bức. Hãy cùng TrungSneaker điểm danh 10 ', '2022-05-03 03:39:37', '2022-05-03 03:39:37'),
(7, 'Những đôi Jordan 1 mới chất lượng cần có trong tủ giày của bạn', '<p style=\"text-align:start;\"><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 19.2;font-family: times new roman\", times, serif;\">1.Air Jordan 1 low ‘Shattered Backboard’</span></p>\n<p style=\"text-align:start;\"><span style=\"colo', NULL, 'https://res.cloudinary.com/dueyjeqd5/image/upload/v1651549257/v-network/w1ue1kqqzhjxppds9fxu.jpg', 'Nike Jordan 1 ra đời năm 1985 là 1 dòng Giày Bóng Rổ cực kỳ thành công, bán chạy nhất, lên chân cực đẹp và có nhiều phiên bản cực đắt tiền để người mua sưu tầm. Năm 2020 Jordan 1 ra mắt phiên bản Low (thấp', '2022-05-03 03:40:57', '2022-05-03 03:40:57'),
(8, 'Vệ sinh giày Sneaker- Dịch vụ giặt hấp giày giá rẻ ở Gò Vấp', '<p style=\"text-align:start;\"><span style=\"color: rgb(40,40,40);background-color: rgb(255,255,255);font-size: 18.4;font-family: times new roman\", times, serif;\">Giày running second hand (running 2 hand) là loại giày dành riêng cho chạy bộ. Và việc lựa chọn', NULL, 'https://res.cloudinary.com/dueyjeqd5/image/upload/v1651549471/v-network/coibsgo48jbeg7hwacb0.jpg', 'Dịch vụ vê sinh giày giá rẻ ở hẻm 220 Nguyễn Oanh, Gò Vấp là nơi có dịch vụ giá hạt dẻ chỉ 70k /1 đôi. Ngoài ra còn có các dịch vụ tân trang cho đôi giày của bạn trở nên như mới, bằng các dịch vụ như repair, tẩy ố, nhuôm đen vải hoặc da lộn. Không những v', '2022-05-03 03:44:31', '2022-05-03 03:44:31'),
(9, 'Gìay cũ', '<p>đồ tốt siêu tốt siêu đẹp</p>\n', NULL, 'https://res.cloudinary.com/dueyjeqd5/image/upload/v1652842908/v-network/bbkvgrrxghdgblsc39pt.jpg', 'Giày đẹp', '2022-05-18 03:01:49', '2022-05-18 03:01:49');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `brands`
--

DROP TABLE IF EXISTS `brands`;
CREATE TABLE IF NOT EXISTS `brands` (
  `id` int NOT NULL AUTO_INCREMENT,
  `brandName` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `brands`
--

INSERT INTO `brands` (`id`, `brandName`, `slug`, `image`, `createdAt`, `updatedAt`) VALUES
(1, 'Vans', '/vans', 'https://drake.vn/image/catalog/H%C3%ACnh%20content/logo-vans/vans-logo_2.jpg', '2022-05-02 05:04:29', '2022-05-02 05:04:29'),
(2, 'Converse', '/converse', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Converse_logo.svg/2560px-Converse_logo.svg.png', '2022-05-02 05:05:38', '2022-05-02 05:05:38'),
(3, 'Nike', '/nike', 'https://inkythuatso.com/uploads/images/2021/11/logo-nike-inkythuatso-2-01-04-15-42-44.jpg', '2022-05-02 05:06:28', '2022-05-02 05:06:28'),
(4, 'Puma', '/puma', 'https://www.elleman.vn/wp-content/uploads/2018/08/08/logo-thuong-hieu-puma-elle-man-7.jpg', '2022-05-02 05:06:54', '2022-05-02 05:06:54'),
(5, 'Adidas', '/adidas', 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/1200px-Adidas_Logo.svg.png', '2022-05-02 15:13:24', '2022-05-02 15:13:24');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `comments`
--

DROP TABLE IF EXISTS `comments`;
CREATE TABLE IF NOT EXISTS `comments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` varchar(255) DEFAULT NULL,
  `rating` int DEFAULT NULL,
  `userId` int DEFAULT NULL,
  `productId` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `comments`
--

INSERT INTO `comments` (`id`, `content`, `rating`, `userId`, `productId`, `createdAt`, `updatedAt`) VALUES
(1, 'sản phẩm tốt', 5, 2, 19, '2022-05-15 09:24:30', '2022-05-15 09:24:30'),
(2, 'sản phẩm tệ', 2, 2, 19, '2022-05-15 09:25:56', '2022-05-15 09:25:56'),
(3, 'sản phẩm tốt', 5, 2, NULL, '2022-05-15 09:48:00', '2022-05-15 09:48:00'),
(4, 'ahuasl;dkasl;dkasl;', 5, 2, 19, '2022-05-15 09:54:24', '2022-05-15 09:54:24'),
(5, 'sản phẩm rất tệ', 1, 2, 19, '2022-05-15 09:59:17', '2022-05-15 09:59:17');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `invoicedetails`
--

DROP TABLE IF EXISTS `invoicedetails`;
CREATE TABLE IF NOT EXISTS `invoicedetails` (
  `id` int NOT NULL AUTO_INCREMENT,
  `productId` int DEFAULT NULL,
  `invoiceId` int DEFAULT NULL,
  `amount` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `invoicedetails`
--

INSERT INTO `invoicedetails` (`id`, `productId`, `invoiceId`, `amount`, `createdAt`, `updatedAt`) VALUES
(1, 19, 1, 1550000, '2022-05-15 09:58:03', '2022-05-15 09:58:03'),
(2, 10, 2, 1750000, '2022-05-15 12:35:14', '2022-05-15 12:35:14'),
(3, 10, 2, 875000, '2022-05-15 12:35:14', '2022-05-15 12:35:14'),
(4, 19, 3, 1550000, '2022-05-15 13:42:23', '2022-05-15 13:42:23'),
(5, 19, 4, 1550000, '2022-05-15 13:44:44', '2022-05-15 13:44:44'),
(6, 19, 5, 1550000, '2022-05-15 13:45:19', '2022-05-15 13:45:19'),
(7, 19, 6, 1550000, '2022-05-15 13:51:26', '2022-05-15 13:51:26');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `invoices`
--

DROP TABLE IF EXISTS `invoices`;
CREATE TABLE IF NOT EXISTS `invoices` (
  `id` int NOT NULL AUTO_INCREMENT,
  `voucherId` int DEFAULT NULL,
  `userId` int DEFAULT NULL,
  `total` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `invoices`
--

INSERT INTO `invoices` (`id`, `voucherId`, `userId`, `total`, `createdAt`, `updatedAt`) VALUES
(1, 1, 2, 1395000, '2022-05-15 09:58:03', '2022-05-15 09:58:03'),
(2, 1, 2, 2625000, '2022-05-15 12:35:14', '2022-05-15 12:35:14'),
(3, 1, 2, 1395000, '2022-05-15 13:42:23', '2022-05-15 13:42:23'),
(4, NULL, 2, 1395000, '2022-05-15 13:44:44', '2022-05-15 13:44:44'),
(5, 2, 2, 837000, '2022-05-15 13:45:19', '2022-05-15 13:45:19'),
(6, 1, 2, 348750, '2022-05-15 13:51:26', '2022-05-15 13:51:26');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `typeId` int DEFAULT NULL,
  `productName` varchar(255) DEFAULT NULL,
  `productPrice` int DEFAULT NULL,
  `discount` int DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `summary` text,
  `image` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `products`
--

INSERT INTO `products` (`id`, `typeId`, `productName`, `productPrice`, `discount`, `slug`, `summary`, `image`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'Vans Old Skool Pig Suede', 110000, 10, '/vans-old-skool-pig-suede', 'Vans Old Skool Pig Suede cùng phối màu vàng hoa hướng dương tạo điểm nhấn đặc biệt cho đôi giày', 'https://bizweb.dktcdn.net/thumb/1024x1024/100/347/923/products/vn0a4bv5v77-3.png?v=1584794015220,https://bizweb.dktcdn.net/100/347/923/products/vn0a4bv5v77-2.png?v=1584794027323,https://bizweb.dktcdn.net/100/347/923/products/vn0a4bv5v77.png?v=1584794020327', '2022-05-02 23:18:52', '2022-05-02 23:18:52'),
(2, 1, 'Vans Old Skool Pro Black White', 800000, 15, '/vans-old-skool-pro-black-white', 'Phiên bản pro nâng cấp của bản Giày Vans old skool này được thiết kế với bộ đệm bên trong giày vô cùng êm ái, những miếng gia cố ở những vị trí quan trọng và đệm cao su Duracap để hỗ trợ cho mọi hoạt động của bạn.', 'https://bizweb.dktcdn.net/thumb/1024x1024/100/347/923/products/vn000zd4y28-1.jpg?v=1584448630043,https://bizweb.dktcdn.net/100/347/923/products/vn000zd4y28-5.jpg?v=1584448636093,https://bizweb.dktcdn.net/100/347/923/products/vn000zd4y28-6.jpg?v=1584448632977', '2022-05-02 23:19:10', '2022-05-02 23:19:10'),
(3, 1, 'Vans Old Skool V Sport', 100000, 0, '/vans-old-skool-v-sport', 'Dòng sản phẩm này hướng tới sự đơn giản nhưng vẫn có điểm nhấn, dải logo Flying V được đặt bên hông giày vừa mang dấu ấn thương hiệu vừa giúp cho những chiếc giày thêm sức hút. Ngoài ra, phần thân Vans Sport hiện nay cũng được bao bọc bởi chất liệu da lộn – chất liệu chủ đạo hay được sử dụng của thời trang những năm 90.', 'https://bizweb.dktcdn.net/thumb/1024x1024/100/347/923/products/vn0a4bu6xw3-8.jpg?v=1581744749813,https://bizweb.dktcdn.net/100/347/923/products/vn0a4bu6xw3-1.jpg?v=1581744764200,https://bizweb.dktcdn.net/100/347/923/products/vn0a4bu6xw3-7.jpg?v=1581744760707', '2022-05-02 23:19:12', '2022-05-02 23:19:12'),
(4, 1, 'Vans Old Skool Alien Ghosts', 925000, 0, '/vans-old-skool-alien-ghosts', 'Vans Old Skool Alien Ghosts đột phá với chi tiết phản quang trendy, sử dụng kết hợp chất liệu vải Canvas truyền thống, thoáng mát, kết hợp với da lộn được phối ở mũi giày và đế giày mang đến cho bạn sự thoải mái khi di chuyển.Vans old skool được thiết kế cho những môn thể thao mạo hiểm như trượt ván, xe đạp BMX, mô tô đua v.v... đảm bảo độ bền chắc và có độ bám tốt.', 'https://bizweb.dktcdn.net/thumb/1024x1024/100/347/923/products/vn0a4bv5tb1-2.jpg?v=1584451714430,https://bizweb.dktcdn.net/100/347/923/products/vn0a4bv5tb1-5.jpg?v=1584451726123,https://bizweb.dktcdn.net/100/347/923/products/vn0a4bv5tb1-6.jpg?v=1584451728797', '2022-05-02 23:19:13', '2022-05-02 23:19:13'),
(5, 1, 'Vans Old Skool Off The Wall Sidewall True Navy', 875000, 0, '/vans-old-skool-off-the-wall-sidewall-true-navy', 'Thiết kế Vans Old Skook quen thuộc với đường lượn sóng trắng 2 bên thân giày. Nay sản phẩm được biến tấu lạ mắt hơn với tone xanh navy tươi trẻ, năng động. Đế giày được làm từ chất liệu cao su cao cấp với họa tiết chữ OFF THE WALL được cách điệu ở sau đế giày giúp item càng trở nên lạ mắt và nổi bật hơn.', 'https://bizweb.dktcdn.net/thumb/1024x1024/100/347/923/products/vn0a38g1vri-5.png?v=1553578462360,https://bizweb.dktcdn.net/100/347/923/products/vn0a38g1vri-4.png?v=1553578462360,https://bizweb.dktcdn.net/100/347/923/products/vn0a38g1vri-3.png?v=1553578462360', '2022-05-02 23:19:14', '2022-05-02 23:19:14'),
(6, 1, 'Vans Old Skool 36 DX Anaheim Factory', 220000, 0, '/vans-old-skool-36-dx-anaheim-factory', 'Kiểu dáng Old Skool cổ điển với lót giày được nâng cấp công nghệ Đệm lót UltraCush mang đến một cảm nhận khác biệt với dòng giày cao cấp này của nhà Vans mang lại sự thoải mái & êm ái cho đôi chân. Anaheim Factory 36DX Vintage với chất liệu kết hợp giữa Suede và Canvas. Đặc biệt tông đen classic được nhiều người tìm kiếm với khả năng phối đồ cực đỉnh. Đệm lót UltraCush mang đến một cảm nhận khác biệt với dòng giày cao cấp này của nhà Vans', 'https://bizweb.dktcdn.net/thumb/1024x1024/100/347/923/products/vn0a38g2pxc-6.jpg?v=1584801503800,https://bizweb.dktcdn.net/100/347/923/products/vn0a38g2pxc-1.jpg?v=1584801511610,https://bizweb.dktcdn.net/100/347/923/products/vn0a38g2pxc-5.jpg?v=1584801522547', '2022-05-02 23:19:14', '2022-05-02 23:19:14'),
(7, 1, 'Vans Old Skool All White', 875000, 0, '/vans-old-skool-all-white', 'Oldskool trắng là một trong những sản phẩm bán chạy, chất lượng nhất của Vans. \r\n\r\nVới chất liệu vải canvas dễ giặt, cùng với phối màu trắng siêu dễ phối dù là vest lịch lãm, váy bánh bèo hay sexy cho đến những bộ đồng phục nghiêm túc, ... đều giúp bạn nổi bật hơn hết.\r\n\r\nMột gợi ý đáng lựa chọn cho các cặp đôi.', 'https://bizweb.dktcdn.net/thumb/1024x1024/100/347/923/products/vn000d3hw00-2.png?v=1586416623660,https://bizweb.dktcdn.net/100/347/923/products/vn000d3hw00-4.png?v=1586416628053,https://bizweb.dktcdn.net/100/347/923/products/vn000d3hw00-1.png?v=1586416632790', '2022-05-02 23:19:15', '2022-05-02 23:19:15'),
(8, 1, 'Vans OG Old Skool Primary Check', 875000, 0, '/vans-og-old-skool-primary-check', 'Hoạ tiết checkerboard không bao giờ là chán với fan VANS, đó là chủ đề sáng tạo vô tận trường tồn năm nay qua năm khác mà không lỗi mốt.\r\n\r\nSự kết hợp giữa os thường và checkerboard đã tạo nên 1 đôi giày không chỉ basic mà vẫn nổi bật sự cá tính.', 'https://bizweb.dktcdn.net/thumb/1024x1024/100/347/923/products/vn0a38g1p0s-2.png?v=1620919677627,https://bizweb.dktcdn.net/100/347/923/products/vn0a38g1p0s-5-24bd16de-5013-4649-9329-acb89063b9bc.png?v=1620919718060,https://bizweb.dktcdn.net/100/347/923/products/vn0a38g1p0s-1.png?v=1620919739597', '2022-05-02 23:19:15', '2022-05-02 23:19:15'),
(9, 1, 'Vans Old Skool Navy White', 875000, 0, '/vans-old-skool-navy-white', 'Oldskool xanh navy là 1 trong các sản phẩm bán chạy, không thể thiếu của tín đồ Vans.\r\n\r\nVới chất liệu da lộn mài mix vải, cùng với phối màu đen - xanh navy: màu sắc của đồng phục, cực kì basic. Rất hợp để mang đến trường, cùng bạn qua những ngày thanh xuân vườn trường. Hay kết hợp với tee, chân váy bò siêu năng động.\r\n\r\nMột gợi ý đáng lựa chọn cho các cặp đôi.', 'https://bizweb.dktcdn.net/thumb/1024x1024/100/347/923/products/vn000d3hnvy-2.png?v=1586436691707,https://bizweb.dktcdn.net/100/347/923/products/vn000d3hnvy-1.png?v=1586436694460,https://bizweb.dktcdn.net/100/347/923/products/vn000d3hnvy-5.png?v=1586436699227', '2022-05-02 23:19:16', '2022-05-02 23:19:16'),
(10, 1, 'Vans Old Skool Checkerboard Black / White', 875000, 0, '/vans-old-skool-checkerboard-black-white', 'Họa tiết checker luôn luôn được săn đón. Không bao giờ lỗi mốt, tồn tại với thời gian.\r\n\r\nBản oldskool này được thiết kế dành riêng cho các bạn nam.', 'https://bizweb.dktcdn.net/thumb/1024x1024/100/347/923/products/vn0a38g127k-4.png?v=1552116811233,https://bizweb.dktcdn.net/100/347/923/products/vn0a38g127k-3.png?v=1552116811233,https://bizweb.dktcdn.net/100/347/923/products/vn0a38g127k-1.png?v=1552116811233', '2022-05-02 23:19:17', '2022-05-02 23:19:17'),
(11, 1, 'Vans Check Bess NI Shoes', 950000, 15, '/vans-check-bess-ni-shoes', 'Vans Check Bess Ni với thiết kế khỏe khoắn, sự thoải mái của lót Ultra Cush cùng màu sắc trẻ trung mang lại cho khách hàng sự lựa chọn tuyệt vời\r\n\r\nVans Check Bess Ni với chất liệu là sự kết hợp của vải & da lộn nhưng với lót Ultra Cush mà mức giá như vậy thì thật sự rất hợp lý cho người mua hàng', 'https://bizweb.dktcdn.net/thumb/1024x1024/100/347/923/products/vn0a4btht80-7.jpg?v=1584680568883,https://bizweb.dktcdn.net/thumb/1024x1024/100/347/923/products/vn0a4btht80-7.jpg?v=1584680568883,https://bizweb.dktcdn.net/100/347/923/products/vn0a4btht80-6.jpg?v=1584680580610', '2022-05-02 23:19:29', '2022-05-02 23:19:29'),
(12, 1, 'Vans Old Skool Forgotten Bones', 1850000, 5, '/vans-old-skool-forgotten-bones', 'BST Vans Forgotten Bones lần này được ra mắt với 3 mẫu gồm: Vans Sk8, Vans Old Skool và Vans Era.\r\n\r\nVới kiểu dáng classic quen thuộc của Vans Old Skool và được làm từ chất liệu da lộn mềm mại ở phần mũi giày mang đến sự thông thoáng dễ chịu cho những ngón chân khi sử dụng Vans Forgotten Bones.', 'https://bizweb.dktcdn.net/thumb/1024x1024/100/347/923/products/vn0a4bv5v8v-1.png?v=1586594442463,https://bizweb.dktcdn.net/100/347/923/products/vn0a4bv5v8v-3.png?v=1586594448480,https://bizweb.dktcdn.net/100/347/923/products/vn0a4bv5v8v-5.png?v=1586594454923', '2022-05-02 23:19:30', '2022-05-02 23:19:30'),
(13, 2, 'Vans Authentic All White', 2500000, 5, '/vans-authentic-all-white', 'Vans Authentic chính thức được cho ra mắt vào năm 1966 tại California và nằm trong bộ 5 huyền thoại của nhà Vans. Nếu bạn quá ngại thắt nhiều dây như oldskool, cũng không thích dáng slipon, mà chỉ thích thấp cổ thì hãy chọn authentic. ', 'https://bizweb.dktcdn.net/thumb/1024x1024/100/347/923/products/vn000ee3w00-5.png?v=1586255856563,https://bizweb.dktcdn.net/100/347/923/products/vn000ee3w00-1.png?v=1586255871250,https://bizweb.dktcdn.net/100/347/923/products/vn000ee3w00-1.png?v=1586255871250', '2022-05-02 23:19:34', '2022-05-02 23:19:34'),
(14, 2, 'Vans Authentic Mix Checker Chili', 725000, 0, '/vans-authentic-mix-checker-chili', 'Vans Authentic lại cho ra 1 BST hoàn toàn bắt mắt với họa tiết Mix Checker Chili Pepper gồm: Old Skool, Authentic & Slip-on', 'https://bizweb.dktcdn.net/thumb/1024x1024/100/347/923/products/vn0a38emvk5-4.png?v=1552037670283,https://bizweb.dktcdn.net/100/347/923/products/vn0a38emvk5-5.png?v=1552037670283,https://bizweb.dktcdn.net/100/347/923/products/vn0a38emvk5-1.png?v=1552037670283', '2022-05-02 23:19:35', '2022-05-02 23:19:35'),
(15, 2, 'Vans Authentic Red White', 725000, 0, '/vans-authentic-red-white', 'Vans Authentic chính thức được cho ra mắt vào năm 1966 tại California và nằm trong bộ 5 huyền thoại của nhà Vans. Nếu bạn quá ngại thắt nhiều dây như oldskool, cũng không thích dáng slipon, mà chỉ thích thấp cổ thì hãy chọn authentic. ', 'https://bizweb.dktcdn.net/thumb/1024x1024/100/347/923/products/vn000ee3red-4.png?v=1620912562787,https://bizweb.dktcdn.net/100/347/923/products/vn000ee3red-2.png?v=1620912562787,https://bizweb.dktcdn.net/100/347/923/products/vn000ee3red-1.png?v=1620912562787', '2022-05-02 23:19:38', '2022-05-02 23:19:38'),
(16, 3, 'Converse Chuck Taylor All Star Classic - White', 1550000, 25, '/converse-chuck-taylor-all-star-classic-white', 'Giày Converse classic là dòng bán chạy số 1 của thương hiệu Converse. Được xem là mẫu giày huyền thoại gắn liền với tuổi trẻ, thanh xuân của biết bao thế hệ trẻ của hơn 100 năm qua\r\n\r\nĐặc biệt là phối màu trắng làm bạn phải hài lòng về độ mix & match cực chuẩn, hơn hết là Chuck Taylor Classic White cao cổ sẽ mang lại cảm giác năng động cùng khả năng làm bật lên sự cá tính dù bạn ở đâu hay làm gì.', 'https://bizweb.dktcdn.net/thumb/1024x1024/100/347/923/products/121184-2.png?v=1586089629703,https://bizweb.dktcdn.net/100/347/923/products/121184-4.jpg?v=1586089633427,https://bizweb.dktcdn.net/100/347/923/products/121184-3.png?v=1586089646557', '2022-05-02 23:19:39', '2022-05-02 23:19:39'),
(17, 3, 'Converse Chuck Taylor All Star Classic', 1450000, 10, '/converse-chuck-taylor-all-star-classic', 'giày Converse classic thấp cổ với thiết kế cổ điển được ưa chuộng qua bao thế hệ đi kèm với chất liệu vải Canvas cùng với phần đế cao su bền chắc có đường viền đỏ - xanh vô cùng nổi bật. Phiên bản màu trắng của Converse Classic cổ thấp chắc chắn là item đơn giản phù hợp với các bạn trẻ. Mang lại sự cá tính, năng động, trẻ trung', 'https://bizweb.dktcdn.net/thumb/1024x1024/100/347/923/products/121176-3.png?v=1586089777993,https://bizweb.dktcdn.net/100/347/923/products/121176-2.png?v=1586089782013,https://bizweb.dktcdn.net/100/347/923/products/121176-5.jpg?v=1600313330280', '2022-05-02 23:19:40', '2022-05-02 23:19:40'),
(18, 3, 'Converse Chuck Taylor All Star Classic - Navy', 1550000, 5, '/converse-chuck-taylor-all-star-classic-navy', 'Giày Converse classic là dòng bán chạy số 1 của Converse. Với 6 sắc màu cơ bản thì đen trắng là màu dễ phối được nhiều bạn tin chọn. Đôi giày mà ai cũng nên có vì độ bền, độ đẹp và siêu dễ phối đồ, hợp với tất cả thể loại trang phục', 'https://bizweb.dktcdn.net/thumb/1024x1024/100/347/923/products/127440-2.png?v=1586243335253,https://bizweb.dktcdn.net/100/347/923/products/127440-3.png?v=1586243614990,https://bizweb.dktcdn.net/100/347/923/products/121185-6.jpg?v=1586597376227', '2022-05-02 23:19:45', '2022-05-02 23:19:45'),
(19, 3, 'Converse Chuck Taylor All Star Classic - Cream White', 1550000, 10, '/converse-chuck-taylor-all-star-classic-cream-white', 'Giày Converse classic có màu sắc đơn giản nhưng không gây ra sự đơn điệu, các tông màu từ đen, đỏ, trắng, be, hồng… đều không quá lố mà với tông cực trẻ trung, hợp thời trang và hợp với nhiều phong cách thời trang khác nhau. Dù bạn là những người cá tính hay những người có phong cách thời trang đơn giản, tinh tế đề sử dụng được.', 'https://bizweb.dktcdn.net/thumb/1024x1024/100/347/923/products/121185-1.jpg?v=1586595386973,https://bizweb.dktcdn.net/100/347/923/products/121185-2.jpg?v=1586595368403,https://bizweb.dktcdn.net/100/347/923/products/121185-5.jpg?v=1586595368403', '2022-05-02 23:19:46', '2022-05-02 23:19:46'),
(20, 3, 'Converse Chuck Taylor All Star Classic - Red', 1550000, 0, '/converse-chuck-taylor-all-star-classic-red', 'Giày Converse classic là dòng bán chạy số 1 của Converse, là dòng giày truyền thống của Converse được giữ đúng nguyên với bản ban đầu.  Mẫu giày biểu tượng hơn 100 năm & bán chạy nhất mọi thời đại của. Classic Red cao cổ mang lại cảm giác năng động, trẻ trung và nổi bật.', 'https://bizweb.dktcdn.net/thumb/1024x1024/100/347/923/products/127441c-8.jpg?v=1600356878377,https://bizweb.dktcdn.net/thumb/1024x1024/100/347/923/products/127441c-8.jpg?v=1600356878377,https://bizweb.dktcdn.net/100/347/923/products/127441c-4.jpg?v=1600356878377', '2022-05-02 23:19:46', '2022-05-02 23:19:46'),
(21, 4, 'Converse Chuck 70 Mission-V Hi - Black', 2000000, 0, '/converse-chuck-70-mission-v-hi-black', 'Converse Chuck 70 Mission-V thiết kế trên silhouette Chuck 70 và Chuck Classic, được định vị thuộc dòng dõi Basketball Lifestyle hay nói nôm na chúng là đứa con lai giữa thời trang và bóng rổ.', 'https://bizweb.dktcdn.net/thumb/1024x1024/100/347/923/products/564969c-9.png?v=1585050665313,https://bizweb.dktcdn.net/100/347/923/products/564969c-3.png?v=1585050668490,https://bizweb.dktcdn.net/100/347/923/products/564969c-8.png?v=1585050678427', '2022-05-02 23:19:50', '2022-05-02 23:19:50'),
(22, 4, 'Converse Chuck Taylor All Star 1970s Sunflower - Hi', 2000000, 0, '/converse-chuck-taylor-all-star-1970s-sunflower-hi', 'Converse 1970s là 1 trong những dòng sản phẩm bán chạy nhất của Converse. Sunflower là một trong những phối màu hot nhất của dòng Converse 1970s, rất đẹp và dễ phối đồ, đồng thời có 2 bản là cao cổ và thấp cổ,', 'https://bizweb.dktcdn.net/thumb/1024x1024/100/347/923/products/162054-4.png?v=1586587808673,https://bizweb.dktcdn.net/100/347/923/products/162054-1.png?v=1586587814473,https://bizweb.dktcdn.net/100/347/923/products/162054-2.png?v=1586587821130', '2022-05-02 23:19:51', '2022-05-02 23:19:51');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `productsizes`
--

DROP TABLE IF EXISTS `productsizes`;
CREATE TABLE IF NOT EXISTS `productsizes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `productId` varchar(255) DEFAULT NULL,
  `sizeId` int DEFAULT NULL,
  `amount` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `productsizes`
--

INSERT INTO `productsizes` (`id`, `productId`, `sizeId`, `amount`, `createdAt`, `updatedAt`) VALUES
(1, '1', 1, 10, '2022-05-03 06:26:06', '2022-05-03 06:26:06'),
(2, '1', 2, 10, '2022-05-03 06:26:12', '2022-05-03 06:26:12'),
(3, '1', 5, 10, '2022-05-03 06:26:16', '2022-05-03 06:26:16'),
(4, '1', 6, 10, '2022-05-03 06:26:20', '2022-05-03 06:26:20'),
(5, '1', 7, 10, '2022-05-03 06:26:24', '2022-05-03 06:26:24'),
(6, '2', 7, 10, '2022-05-03 06:26:29', '2022-05-03 06:26:29'),
(7, '2', 10, 10, '2022-05-03 06:26:32', '2022-05-03 06:26:32'),
(8, '2', 8, 10, '2022-05-03 06:26:35', '2022-05-03 06:26:35'),
(9, '2', 6, 30, '2022-05-03 06:26:43', '2022-05-03 06:26:43'),
(10, '2', 5, 30, '2022-05-03 06:26:48', '2022-05-03 06:26:48'),
(11, '3', 8, 30, '2022-05-03 06:26:53', '2022-05-03 06:26:53'),
(12, '3', 7, 30, '2022-05-03 06:26:56', '2022-05-03 06:26:56'),
(13, '3', 9, 30, '2022-05-03 06:27:00', '2022-05-03 06:27:00'),
(14, '3', 1, 30, '2022-05-03 06:27:03', '2022-05-03 06:27:03'),
(15, '4', 4, 20, '2022-05-03 06:27:12', '2022-05-03 06:27:12'),
(16, '4', 10, 15, '2022-05-03 06:27:18', '2022-05-03 06:27:18'),
(17, '5', 10, 15, '2022-05-03 06:27:22', '2022-05-03 06:27:22'),
(18, '6', 10, 15, '2022-05-03 06:27:26', '2022-05-03 06:27:26'),
(19, '6', 7, 35, '2022-05-03 06:27:32', '2022-05-03 06:27:32'),
(20, '7', 5, 35, '2022-05-03 06:27:39', '2022-05-03 06:27:39'),
(21, '8', 6, 35, '2022-05-03 06:28:34', '2022-05-03 06:28:34'),
(22, '9', 6, 35, '2022-05-03 06:28:38', '2022-05-03 06:28:38'),
(23, '10', 2, 35, '2022-05-03 06:28:45', '2022-05-03 06:28:45'),
(24, '10', 3, 35, '2022-05-03 06:28:48', '2022-05-03 06:28:48'),
(25, '11', 3, 35, '2022-05-03 06:28:51', '2022-05-03 06:28:51'),
(26, '19', 3, 35, '2022-05-03 06:47:01', '2022-05-03 06:47:01'),
(27, '11', 7, 10, '2022-05-17 17:06:20', '2022-05-17 17:06:20'),
(28, '7', 7, 10, '2022-05-17 17:19:39', '2022-05-17 17:19:39'),
(29, '9', 4, 10, '2022-05-17 17:20:37', '2022-05-17 17:20:37'),
(30, '22', 7, 20, '2022-05-17 22:40:15', '2022-05-17 22:40:15');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
CREATE TABLE IF NOT EXISTS `sequelizemeta` (
  `name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20220424102641-create-user.js'),
('20220424103231-create-brand.js'),
('20220424104718-create-type.js'),
('20220424110521-create-product-size.js'),
('20220424110633-create-product.js'),
('20220424111220-create-sizes.js'),
('20220424111355-create-comment.js'),
('20220424111551-create-invoice-detail.js'),
('20220424112246-create-invoice.js'),
('20220424112526-create-voucher.js'),
('20220424112630-create-blog.js');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sizes`
--

DROP TABLE IF EXISTS `sizes`;
CREATE TABLE IF NOT EXISTS `sizes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `sizeNumber` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `sizes`
--

INSERT INTO `sizes` (`id`, `sizeNumber`, `createdAt`, `updatedAt`) VALUES
(1, 36, '2022-05-03 06:22:16', '2022-05-17 14:50:40'),
(2, 37, '2022-05-03 06:22:24', '2022-05-03 06:22:24'),
(3, 38, '2022-05-03 06:22:28', '2022-05-03 06:22:28'),
(4, 39, '2022-05-03 06:22:33', '2022-05-03 06:22:33'),
(5, 40, '2022-05-03 06:22:37', '2022-05-03 06:22:37'),
(6, 41, '2022-05-03 06:22:40', '2022-05-03 06:22:40'),
(7, 42, '2022-05-03 06:22:44', '2022-05-03 06:22:44'),
(8, 43, '2022-05-03 06:22:47', '2022-05-03 06:22:47'),
(9, 44, '2022-05-03 06:22:51', '2022-05-03 06:22:51'),
(10, 45, '2022-05-03 06:22:55', '2022-05-03 06:22:55');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `types`
--

DROP TABLE IF EXISTS `types`;
CREATE TABLE IF NOT EXISTS `types` (
  `id` int NOT NULL AUTO_INCREMENT,
  `typeName` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `brandId` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `types`
--

INSERT INTO `types` (`id`, `typeName`, `slug`, `brandId`, `createdAt`, `updatedAt`) VALUES
(1, 'Vans OLD SKOOL', '/vans-old-skool', 1, '2022-05-02 05:21:28', '2022-05-02 05:21:28'),
(2, 'Vans AUTHENTIC', '/vans-authentic', 1, '2022-05-02 05:22:04', '2022-05-02 05:22:04'),
(3, 'Converse Classic', '/converse-classic', 2, '2022-05-02 05:22:04', '2022-05-02 05:22:04'),
(4, 'Converse Chuck 70s', '/converse-chuck-70s', 2, '2022-05-02 05:22:04', '2022-05-02 05:22:04'),
(5, 'Nike Air Force', '/nike-air-force', 3, '2022-05-02 05:22:04', '2022-05-02 05:22:04'),
(6, 'Nike Blazer', '/nike-blazer', 3, '2022-05-02 05:22:04', '2022-05-02 05:22:04'),
(7, 'Puma Suede', '/puma-suede', 4, '2022-05-02 05:22:04', '2022-05-02 05:22:04'),
(8, 'Adidas Superstar', '/adidas-superstar', 5, '2022-05-02 05:22:04', '2022-05-02 05:22:04'),
(9, 'Adidas Ultraboost', '/adidas-ultraboost', 5, '2022-05-02 05:22:04', '2022-05-02 05:22:04');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fullName` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phoneNumber` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `active` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `fullName`, `email`, `password`, `phoneNumber`, `address`, `role`, `active`, `createdAt`, `updatedAt`) VALUES
(1, 'Phạm Duy Hưng', 'admin@gmail.com', '$2b$10$4MF2agm/ZvJCfEQAbrJhp.dJmBMaWSHYHY6GmfLhHijitPBDM0G.K', '0327106865', 'Bắc Từ Liêm, Hà Nội', 'Admin', 1, '2022-05-02 04:57:46', '2022-05-02 04:57:46'),
(2, 'Phạm Duy Hưng', 'pham.hung.061020@gmail.com', '$2b$10$YHxQXqMbb9nVwyYZVkwTYu84xy/7s/lxyNsHxVzJ5diaxWmIArweq', '0327106865', 'Hà Nội', 'user', 1, '2022-05-02 05:09:52', '2022-05-15 13:54:20'),
(3, 'PH 123', 'test@gmail.com', '$2b$10$OmS63wNn.st3JUhWhfjPVevZHOZgTk/fb6GN.59Mwn8BqdKjm5BUe', '0327106869', 'Hà Nội', 'user', 1, '2022-05-02 23:47:04', '2022-05-02 23:47:04');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `vouchers`
--

DROP TABLE IF EXISTS `vouchers`;
CREATE TABLE IF NOT EXISTS `vouchers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `voucherName` varchar(255) DEFAULT NULL,
  `voucherPercent` int DEFAULT NULL,
  `amount` int DEFAULT NULL,
  `startDate` datetime DEFAULT NULL,
  `endDate` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `vouchers`
--

INSERT INTO `vouchers` (`id`, `voucherName`, `voucherPercent`, `amount`, `startDate`, `endDate`, `createdAt`, `updatedAt`) VALUES
(1, 'VOUCHER50', 50, 10, '2022-05-03 23:19:46', '2022-06-04 06:19:46', '2022-05-03 23:19:46', '2022-05-03 23:19:46'),
(2, 'VOUCHER40', 40, 15, '2022-05-03 23:19:46', '2022-06-04 06:19:46', '2022-05-03 23:19:46', '2022-05-03 23:19:46'),
(3, 'VOUCHER30', 30, 35, '2022-05-03 23:19:46', '2022-06-24 06:19:46', '2022-05-03 23:19:46', '2022-05-03 23:19:46'),
(4, 'VOUCHER20', 20, 25, '2022-05-20 23:19:46', '2022-06-21 06:19:46', '2022-05-03 23:19:46', '2022-05-03 23:19:46'),
(5, 'VOUCHER10', 10, 45, '2022-05-20 23:19:46', '2022-06-30 06:19:46', '2022-05-03 23:19:46', '2022-05-03 23:19:46');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
