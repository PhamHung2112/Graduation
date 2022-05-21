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
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` text COLLATE utf16_unicode_ci DEFAULT NULL,
  `content` text COLLATE utf16_unicode_ci DEFAULT NULL,
  `releaseDate` datetime DEFAULT NULL,
  `image` text COLLATE utf16_unicode_ci DEFAULT NULL,
  `summary` text COLLATE utf16_unicode_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf16 COLLATE=utf16_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `blogs`
--

INSERT INTO `blogs` (`id`, `title`, `content`, `releaseDate`, `image`, `summary`, `createdAt`, `updatedAt`) VALUES
(2, 'Giày vintage Sneaker & secondhand ,giày cũ phong cách cổ điển', '<p style=\"text-align:start;\"><span style=\"color: rgb(40,40,40);background-color: rgb(255,255,255);font-size: 18.4;font-family: times new roman\", times, serif;\">Những dòng giày vintage là loại giày sang trọng có hơi hướng quý tộc. Giày sneaker vintage thường là các thương hiệu giày lớn, có lịch sử lâu đời như: Nike, adidas, vans, converse. Việc lựa chọn những đôi sneaker cổ điển và lâu đời như: các dòng Converse Chuck Taylor, Vans Era Checkerboard,Adidas Samba… Được mua cũ (2hand) là việc khá hay, vì có nhiều đôi không thể kiếm được ở store. Với mức giá rẻ và đa dạng về kiểu mẫu, nó sẽ là một lựa chọn tốt cho bạn.</span></p>\n<p style=\"text-align:start;\"><span style=\"color: rgb(40,40,40);background-color: rgb(255,255,255);font-size: 18.4;font-family: times new roman\", times, serif;\">Dưới đây TrungSneaker sẽ giới thiệu cho bạn những thương hiệu sneaker được ưa chuộng nhất mọi thời đại.</span></p>\n<ul>\n<li style=\"margin-left:1.3em;\"><span style=\"color: rgb(119,119,119);background-color: rgb(255,255,255);font-size: 18.4;font-family: times new roman\", times, serif;\"><strong>Adidas</strong></span><br><span style=\"color: rgb(40,40,40);background-color: rgb(255,255,255);font-size: 18.4;font-family: times new roman\", times, serif;\">   Adidas có lẽ là thương hiệu lâu đời nhất, trong thời hoàng kim của mình sản phẩm của adidas đạt được doanh thu khá lớn. Những sản phẩm như: Samba, StanSmith hay SuperStar vẫn luôn là sản bán chạy nhất cho đến ngày nay sức hút ấy vẫn không giảm.</span><br></li>\n</ul>\n<img src=\"https://trungsneaker.com/wp-content/uploads/2020/06/giay-vintage-sneaker-secondhand-giay-cu-phong-cach-co-dien-711x400.jpg\" alt=\"\" style=\"height: auto;width: \"/>\n<div style=\"text-align:right;\"><img src=\"https://trungsneaker.com/wp-content/uploads/2020/06/giay-vintage-sneaker-secondhand-giay-cu-phong-cach-co-dien-2-533x400.jpg\" alt=\"\" style=\"height: auto;width: \"/></div>\n<ul>\n<li style=\"margin-left:1.3em;\"><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: medium;font-family: times new roman\", times, serif;\"><strong>Nike</strong></span><br><span style=\"color: rgb(40,40,40);background-color: rgb(255,255,255);font-size: medium;font-family: times new roman\", times, serif;\">   Nike là thương hiệu đến sau, nhưng hiện tại Nike đang là ông lớn nhất. Sản phẩm đặt nền móng cho sự thịnh vượng của thương hiệu này là Nike Air Force 1. Và sau này là Nike SB ban đầu là thiết kế này sử dụng để trượt ván,và nhiều sự kết hợp đình đám với các VDV trượt ván nổi tiếng như Janoski Cork hay Eric Koston,…</span><br></li>\n</ul>\n<div style=\"text-align:right;\"><img src=\"https://trungsneaker.com/wp-content/uploads/2020/06/giay-vintage-sneaker-secondhand-giay-cu-phong-cach-co-dien-3-711x400.jpg\" alt=\"\" style=\"height: auto;width: \"/></div>\n<img src=\"https://trungsneaker.com/wp-content/uploads/2020/06/giay-vintage-sneaker-secondhand-giay-cu-phong-cach-co-dien-4-711x400.jpg\" alt=\"\" style=\"height: auto;width: \"/>\n<ul>\n<li style=\"margin-left:1.3em;\"><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: medium;font-family: times new roman\", times, serif;\"><strong>Vans</strong></span><br><span style=\"color: rgb(40,40,40);background-color: rgb(255,255,255);font-size: medium;font-family: times new roman\", times, serif;\">Xuất phát điểm là giày trượt ván với phong cách đường phố. Những thiết kế của Vans sau đó đã có pha trộn sự vintage trong đó. Những dòng điển hình như: Vans Era Checkerboard, Vans Old Skool… Những sản phẩm của Vans rất thích hợp cho bạn trẻ, đặc biệt trong dịp back-to-school.</span><br></li>\n</ul>\n<img src=\"https://trungsneaker.com/wp-content/uploads/2020/06/giay-vintage-sneaker-secondhand-giay-cu-phong-cach-co-dien-5-533x400.jpg\" alt=\"\" style=\"height: auto;width: \"/>\n<div style=\"text-align:right;\"><img src=\"https://trungsneaker.com/wp-content/uploads/2020/06/giay-vintage-sneaker-secondhand-giay-cu-phong-cach-co-dien-6-533x400.jpg\" alt=\"\" style=\"height: auto;width: \"/></div>\n<ul>\n<li style=\"margin-left:1.3em;\"><span style=\"color: rgb(119,119,119);background-color: rgb(255,255,255);font-size: medium;font-family: times new roman\", times, serif;\"><strong>Converse</strong></span><br><span style=\"color: rgb(119,119,119);background-color: rgb(255,255,255);font-size: medium;font-family: times new roman\", times, serif;\">  Converse có lẽ không có gì phải nói về thiết kế, đặc biệt là Converse Chuck Taylor. Đây có lẽ là mẫu giày sneaker “huyền thoại” vì qua một thời gian khá dài nhưng nó vẫn hài hòa và nét đặc trưng của nó vẫn không hề phai đi.Cũng không thể thiếu Converse One Star từng một thời là mẫu giày bóng rổ thương hiệu tin dùng của các cầu thủ NBA.</span><br></li>\n</ul>\n<img src=\"https://trungsneaker.com/wp-content/uploads/2020/06/giay-vintage-sneaker-secondhand-giay-cu-phong-cach-co-dien-7-734x400.jpg\" alt=\"\" style=\"height: auto;width: \"/>\n<div style=\"text-align:right;\"><img src=\"https://trungsneaker.com/wp-content/uploads/2020/06/giay-vintage-sneaker-secondhand-giay-cu-phong-cach-co-dien-8-711x400.jpg\" alt=\"\" style=\"height: auto;width: \"/></div>\n<p style=\"text-align:start;\"><span style=\"color: rgb(40,40,40);background-color: rgb(255,255,255);font-size: 18.4;font-family: times new roman\", times, serif;\">Ngoài ra còn có rất nhiều mẫu giày 2hand của Air force 1, SuperStar hay StanSmith cho các bạn tham</span>&nbsp;</p>\n', NULL, 'https://res.cloudinary.com/dueyjeqd5/image/upload/v1651548674/v-network/uu2cufkynhopxdxuhtqn.jpg', 'Những dòng giày vintage là loại giày sang trọng có hơi hướng quý tộc. Giày sneaker vintage thường là các thương hiệu giày lớn, có lịch sử lâu đời như: Nike, adidas, vans, converse. Việc lựa chọn những đôi sneaker cổ điển và lâu đời như: các dòng Converse Chuck Taylor, Vans Era Checkerboard,Adidas Samba… Được mua cũ (2hand) là việc khá hay, vì có nhiều đôi không thể kiếm được ở store. Với mức giá rẻ và đa dạng về kiểu mẫu, nó sẽ là một lựa chọn tốt cho bạn.', '2022-05-03 03:31:14', '2022-05-03 03:31:14'),
(4, 'Top 8 đôi giày Sneaker cho mùa hè năng động', '<p style=\"text-align:start;\"><span style=\"color: rgb(40,40,40);background-color: rgb(255,255,255);font-size: 18.4;font-family: times new roman\", times, serif;\">Những đôi giày sneaker là sản phẩm thời trang không thể thiếu của trong tủ đồ của các bạn trẻ. Khi mùa hè đầy nhiệt huyết sắp tới việc chọn một đôi giày sneaker khiến cho bạn chở nên năng động hơn trong mùa hè nóng bức. Hãy cùng TrungSneaker điểm danh 10 đôi giày sneaker thời trang năng động trong màu hè.</span></p>\n<p style=\"text-align:start;\">&nbsp;</p>\n<ol>\n<li style=\"margin-left:1.3em;\"><span style=\"color: rgb(119,119,119);background-color: rgb(255,255,255);font-size: medium;font-family: times new roman\", times, serif;\">Jordan 1 low</span><br><span style=\"color: rgb(40,40,40);background-color: rgb(255,255,255);font-size: medium;font-family: times new roman\", times, serif;\">Jordan 1 từ lâu đã là một con sốt cho các tín đồ giày sneaker. Với việc xuất phát điểm là giày bóng rổ nên thiết kế của AJ1 luôn cho thấy sự năng động, cũng như cái chất đường phố rất ‘cool’ của Jordan 1. Những bản phối màu của Jordan 1 luôn được đánh giá cao về phong cách thời trang.</span><br></li>\n</ol>\n<img src=\"https://trungsneaker.com/wp-content/uploads/2020/07/top-8-doi-giay-sneaker-cho-mua-he-nang-dong-5-572x400.jpg\" alt=\"\" style=\"height: auto;width: \"/>\n<ol>\n<li style=\"margin-left:1.3em;\"><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: medium;font-family: times new roman\", times, serif;\">Air Force 1</span><br><span style=\"color: rgb(40,40,40);background-color: rgb(255,255,255);font-size: medium;font-family: times new roman\", times, serif;\">Air Force 1 luôn là sản phẩm bán chạy nhất của Nike, cứ mỗi năm thì Nike lại tung ra một bản phối, và doanh thu của AF1 luôn rất cao. Điều đó cho thấy sức hút của Air Force 1 là rất lớn, với thiết kế năng động, đa dụng có thể mang đi học, chơi, trong mùa nóng lạnh đều rất ổn. Air Force thực sự là một lựa chọn đáng dùng.</span><br></li>\n</ol>\n<img src=\"https://trungsneaker.com/wp-content/uploads/2020/04/giay-nike-af1-shadow-atmosphere-grey-cq3317-002-519x400.jpg\" alt=\"\" style=\"height: auto;width: \"/>\n<ol>\n<li style=\"margin-left:1.3em;\"><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: medium;font-family: times new roman\", times, serif;\">Falcon</span><br><span style=\"color: rgb(40,40,40);background-color: rgb(255,255,255);font-size: medium;font-family: times new roman\", times, serif;\">Là dòng sản phẩm mới được ra mắt trong những năm gần đây, Falcon được thiết kế được thiết kế theo xu hướng giày hiện đại, đó là trend Chunky. Adidas Falcon mang đến sự thoải mái và phù hợp với mọi loại khi mang đúng size, với thiết kế xu hướng Chunky sẽ làm bạn nổi bật hơn với thiết kế có phần hầm hố và phối màu không quá bắt nắng. Nó mang lại sự êm ái và mát mẻ khi mang chúng.</span><br></li>\n</ol>\n<img src=\"https://trungsneaker.com/wp-content/uploads/2019/10/falcon-white-gold-2-533x400.jpg\" alt=\"\" style=\"height: auto;width: \"/>\n<ol>\n<li style=\"text-align:left;\"><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: medium;font-family: times new roman\", times, serif;\">UltraBoost</span><br><span style=\"color: rgb(40,40,40);background-color: rgb(255,255,255);font-size: medium;font-family: times new roman\", times, serif;\">Boost vẫn là công nghệ bán chạy nhất của adidas, với xuất phát điểm là đôi giày chạy bộ (chủ yếu trong phòng tập gym), nên thiết kế của ultra boost sẽ gọn gàng, nhưng cũng rất khỏe khoắn năng động. UltraBoost là một đôi giày thích hợp cho mùa hè vì sự đa dụng (dễ phối đồ, phong cách đa dạng,..)</span><br></li>\n</ol>\n<img src=\"https://trungsneaker.com/wp-content/uploads/2020/04/giay-adidas-ultraboost-20-grey-eg0695-711x400.jpg\" alt=\"\" style=\"height: auto;width: \"/>\n<ol>\n<li style=\"margin-left:1.3em;\"><span style=\"color: rgb(119,119,119);background-color: rgb(255,255,255);font-size: medium;font-family: Roboto Condensed;\">Air Max</span><br><span style=\"color: rgb(40,40,40);background-color: rgb(255,255,255);font-size: medium;font-family: Roboto Condensed;\">Tháng 3 vừa qua Nike đã cho ra mắt sản phẩm Nike Air Max 2090 kỹ niệm 30 năm của dòng sản phẩm Air Max 90. Điềi đó cho thấy Air Max có sức hút khá vượt trội ở các tín đồ giày sneaker. Sản phẩm của Air Max rất đa dạng theo từng số như :Air Max 1, Air Max 90, Air Max 97, …mỗi số của air max mang một chất riêng. Thiết kế nhỏ nhắn, gọn gàng và trẻ trung những thiết kế của Air max luôn cho thấy sự năng động , cá tính.</span><br></li>\n</ol>\n<img src=\"https://trungsneaker.com/wp-content/uploads/2020/04/giay-nike-air-max-720-rainbow-ao2924-011-5-641x400.jpg\" alt=\"\" style=\"height: auto;width: \"/>\n<ol>\n<li style=\"margin-left:1.3em;\"><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 19.2;font-family: times new roman\", times, serif;\">Adidas Cloudfoam</span><br><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 19.2;font-family: times new roman\", times, serif;\">Cloudfoam là công nghệ mang đến sự nhẹ nhàng, êm ái, thoải mái khi mang vào, đúng với cáci tên của nó cloudfoam- bọt mấy. Adidas cloudfoam sẽ mang đến sự năng động, mà vẫn tạo sự thoải đặc biệt  với các nóng của mùa hè.</span><br></li>\n</ol>\n<img src=\"https://trungsneaker.com/wp-content/uploads/2020/07/top-8-doi-giay-sneaker-cho-mua-he-nang-dong-2-711x400.jpg\" alt=\"\" style=\"height: auto;width: \"/>\n<ol>\n<li style=\"margin-left:1.3em;\"><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: medium;font-family: times new roman\", times, serif;\">SuperStar</span><br><span style=\"color: rgb(40,40,40);background-color: rgb(255,255,255);font-size: medium;font-family: times new roman\", times, serif;\">Là một trong những sản phẩm có lâu đời của adidas, SuperStar rất đa dạng khi từng là giày bóng rổ, street style, dễ dàng phối đồ. Qua khứ huy hoàng của SuperStar đã đi qua được 7 thập kỷ, những nó vẫn là sản phẩm bán chạy nhất của adidas cho thấy được sự tin yêu của các tin đồ sneaker với SuperStar.</span><br></li>\n</ol>\n<img src=\"https://trungsneaker.com/wp-content/uploads/2020/07/top-8-doi-giay-sneaker-cho-mua-he-nang-dong-4-524x400.jpg\" alt=\"\" style=\"height: auto;width: \"/>\n<ol>\n<li style=\"margin-left:1.3em;\"><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: medium;font-family: times new roman\", times, serif;\">Stan Smith</span><br><span style=\"color: rgb(40,40,40);background-color: rgb(255,255,255);font-size: medium;font-family: times new roman\", times, serif;\">adidas Stan Smith là sản phẩm kết hợp của adidas và vận động viên tennis huyền thoại Stan Smith, và cũng như Superstar trải qua nhiều thập kỷ StanSmith vẫn có cho mình sự yêu thương từ sneakerhead. Thiết kế đế bằng, form giày rộng giúp chân cảm thấy mát, không bị hầm. Và sản này rất thích hợp để mang vào mùa hè nóng nực cũng như trong các bữa tiệc sang trọng.</span><br>&nbsp;</li>\n</ol>\n<img src=\"https://trungsneaker.com/wp-content/uploads/2020/07/top-8-doi-giay-sneaker-cho-mua-he-nang-dong-3-711x400.jpg\" alt=\"\" style=\"height: auto;width: \"/>\n<p style=\"text-align:start;\"><span style=\"color: rgb(40,40,40);background-color: rgb(255,255,255);font-size: 18.4;font-family: times new roman\", times, serif;\">Nếu các bạn còn đang phân vân không biết nên chọn gì, thì hãy đến TrungSneaker tọa lạc ở:</span>&nbsp;&nbsp;</p>\n', NULL, 'https://res.cloudinary.com/dueyjeqd5/image/upload/v1651549016/v-network/yzdqmvelei2hlcjjavhy.jpg', 'Những đôi giày sneaker là sản phẩm thời trang không thể thiếu của trong tủ đồ của các bạn trẻ. Khi mùa hè đầy nhiệt huyết sắp tới việc chọn một đôi giày sneaker khiến cho bạn chở nên năng động hơn trong mùa hè nóng bức. Hãy cùng TrungSneaker điểm danh 10 đôi giày sneaker thời trang năng động trong màu hè.', '2022-05-03 03:36:56', '2022-05-03 03:36:56'),
(5, 'Top 8 đôi giày Sneaker cho mùa hè năng động', '<p style=\"text-align:start;\"><span style=\"color: rgb(40,40,40);background-color: rgb(255,255,255);font-size: 18.4;font-family: times new roman\", times, serif;\">Những đôi giày sneaker là sản phẩm thời trang không thể thiếu của trong tủ đồ của các bạn trẻ. Khi mùa hè đầy nhiệt huyết sắp tới việc chọn một đôi giày sneaker khiến cho bạn chở nên năng động hơn trong mùa hè nóng bức. Hãy cùng TrungSneaker điểm danh 10 đôi giày sneaker thời trang năng động trong màu hè.</span></p>\n<p style=\"text-align:start;\">&nbsp;</p>\n<ol>\n<li style=\"margin-left:1.3em;\"><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: medium;font-family: times new roman\", times, serif;\">Jordan 1 low</span><br><span style=\"color: rgb(40,40,40);background-color: rgb(255,255,255);font-size: medium;font-family: times new roman\", times, serif;\">Jordan 1 từ lâu đã là một con sốt cho các tín đồ giày sneaker. Với việc xuất phát điểm là giày bóng rổ nên thiết kế của AJ1 luôn cho thấy sự năng động, cũng như cái chất đường phố rất ‘cool’ của Jordan 1. Những bản phối màu của Jordan 1 luôn được đánh giá cao về phong cách thời trang.</span><br></li>\n</ol>\n<img src=\"https://trungsneaker.com/wp-content/uploads/2020/07/top-8-doi-giay-sneaker-cho-mua-he-nang-dong-5-572x400.jpg\" alt=\"\" style=\"height: auto;width: \"/>\n<ol>\n<li style=\"margin-left:1.3em;\"><span style=\"color: rgb(119,119,119);background-color: rgb(255,255,255);font-size: 19.2;font-family: Roboto Condensed;\">Air Force 1</span><br><span style=\"color: rgb(40,40,40);background-color: rgb(255,255,255);font-size: 18.4;font-family: Roboto Condensed;\">Air Force 1 luôn là sản phẩm bán chạy nhất của Nike, cứ mỗi năm thì Nike lại tung ra một bản phối, và doanh thu của AF1 luôn rất cao. Điều đó cho thấy sức hút của Air Force 1 là rất lớn, với thiết kế năng động, đa dụng có thể mang đi học, chơi, trong mùa nóng lạnh đều rất ổn. Air Force thực sự là một lựa chọn đáng dùng.</span><br></li>\n</ol>\n<img src=\"https://trungsneaker.com/wp-content/uploads/2020/04/giay-nike-af1-shadow-atmosphere-grey-cq3317-002-519x400.jpg\" alt=\"\" style=\"height: auto;width: \"/>\n<ol>\n<li style=\"margin-left:1.3em;\"><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: medium;font-family: times new roman\", times, serif;\">Falcon</span><br><span style=\"color: rgb(40,40,40);background-color: rgb(255,255,255);font-size: medium;font-family: times new roman\", times, serif;\">Là dòng sản phẩm mới được ra mắt trong những năm gần đây, Falcon được thiết kế được thiết kế theo xu hướng giày hiện đại, đó là trend Chunky. Adidas Falcon mang đến sự thoải mái và phù hợp với mọi loại khi mang đúng size, với thiết kế xu hướng Chunky sẽ làm bạn nổi bật hơn với thiết kế có phần hầm hố và phối màu không quá bắt nắng. Nó mang lại sự êm ái và mát mẻ khi mang chúng.</span><br></li>\n</ol>\n<img src=\"https://trungsneaker.com/wp-content/uploads/2019/10/falcon-white-gold-2-533x400.jpg\" alt=\"\" style=\"height: auto;width: \"/>\n<ol>\n<li style=\"text-align:left;\"><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: medium;font-family: times new roman\", times, serif;\">UltraBoost</span><br><span style=\"color: rgb(40,40,40);background-color: rgb(255,255,255);font-size: medium;font-family: times new roman\", times, serif;\">Boost vẫn là công nghệ bán chạy nhất của adidas, với xuất phát điểm là đôi giày chạy bộ (chủ yếu trong phòng tập gym), nên thiết kế của ultra boost sẽ gọn gàng, nhưng cũng rất khỏe khoắn năng động. UltraBoost là một đôi giày thích hợp cho mùa hè vì sự đa dụng (dễ phối đồ, phong cách đa dạng,..)</span><br></li>\n</ol>\n<img src=\"https://trungsneaker.com/wp-content/uploads/2020/04/giay-adidas-ultraboost-20-grey-eg0695-711x400.jpg\" alt=\"\" style=\"height: auto;width: \"/>\n<ol>\n<li style=\"margin-left:1.3em;\"><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: medium;font-family: times new roman\", times, serif;\">Air Max</span><br><span style=\"color: rgb(40,40,40);background-color: rgb(255,255,255);font-size: medium;font-family: times new roman\", times, serif;\">Tháng 3 vừa qua Nike đã cho ra mắt sản phẩm Nike Air Max 2090 kỹ niệm 30 năm của dòng sản phẩm Air Max 90. Điềi đó cho thấy Air Max có sức hút khá vượt trội ở các tín đồ giày sneaker. Sản phẩm của Air Max rất đa dạng theo từng số như :Air Max 1, Air Max 90, Air Max 97, …mỗi số của air max mang một chất riêng. Thiết kế nhỏ nhắn, gọn gàng và trẻ trung những thiết kế của Air max luôn cho thấy sự năng động , cá tính.</span><br></li>\n</ol>\n<img src=\"https://trungsneaker.com/wp-content/uploads/2020/04/giay-nike-air-max-720-rainbow-ao2924-011-5-641x400.jpg\" alt=\"\" style=\"height: auto;width: \"/>\n<ol>\n<li style=\"margin-left:1.3em;\"><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 19.2;font-family: times new roman\", times, serif;\">Adidas Cloudfoam</span><br><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 19.2;font-family: times new roman\", times, serif;\">Cloudfoam là công nghệ mang đến sự nhẹ nhàng, êm ái, thoải mái khi mang vào, đúng với cáci tên của nó cloudfoam- bọt mấy. Adidas cloudfoam sẽ mang đến sự năng động, mà vẫn tạo sự thoải đặc biệt  với các nóng của mùa hè.</span><br></li>\n</ol>\n<img src=\"https://trungsneaker.com/wp-content/uploads/2020/07/top-8-doi-giay-sneaker-cho-mua-he-nang-dong-2-711x400.jpg\" alt=\"\" style=\"height: auto;width: \"/>\n<ol>\n<li style=\"margin-left:1.3em;\"><span style=\"color: rgb(119,119,119);background-color: rgb(255,255,255);font-size: medium;font-family: times new roman\", times, serif;\">SuperStar</span><br><span style=\"color: rgb(119,119,119);background-color: rgb(255,255,255);font-size: medium;font-family: times new roman\", times, serif;\">Là một trong những sản phẩm có lâu đời của adidas, SuperStar rất đa dạng khi từng là giày bóng rổ, street style, dễ dàng phối đồ. Qua khứ huy hoàng của SuperStar đã đi qua được 7 thập kỷ, những nó vẫn là sản phẩm bán chạy nhất của adidas cho thấy được sự tin yêu của các tin đồ sneaker với SuperStar.</span><br></li>\n</ol>\n<img src=\"https://trungsneaker.com/wp-content/uploads/2020/07/top-8-doi-giay-sneaker-cho-mua-he-nang-dong-4-524x400.jpg\" alt=\"\" style=\"height: auto;width: \"/>\n<ol>\n<li style=\"margin-left:1.3em;\"><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: medium;font-family: times new roman\", times, serif;\">Stan Smith</span><br><span style=\"color: rgb(40,40,40);background-color: rgb(255,255,255);font-size: medium;font-family: times new roman\", times, serif;\">adidas Stan Smith là sản phẩm kết hợp của adidas và vận động viên tennis huyền thoại Stan Smith, và cũng như Superstar trải qua nhiều thập kỷ StanSmith vẫn có cho mình sự yêu thương từ sneakerhead. Thiết kế đế bằng, form giày rộng giúp chân cảm thấy mát, không bị hầm. Và sản này rất thích hợp để mang vào mùa hè nóng nực cũng như trong các bữa tiệc sang trọng.</span><br>&nbsp;</li>\n</ol>\n<img src=\"https://trungsneaker.com/wp-content/uploads/2020/07/top-8-doi-giay-sneaker-cho-mua-he-nang-dong-3-711x400.jpg\" alt=\"\" style=\"height: auto;width: \"/>\n<p style=\"text-align:start;\"><span style=\"color: rgb(40,40,40);background-color: rgb(255,255,255);font-size: 18.4;font-family: times new roman\", times, serif;\">Nếu các bạn còn đang phân vân không biết nên chọn gì, thì hãy đến TrungSneaker tọa lạc ở:</span>&nbsp;&nbsp;</p>\n', NULL, 'https://res.cloudinary.com/dueyjeqd5/image/upload/v1651549057/v-network/q6so7lzutrzdlftkbjjf.jpg', 'Những đôi giày sneaker là sản phẩm thời trang không thể thiếu của trong tủ đồ của các bạn trẻ. Khi mùa hè đầy nhiệt huyết sắp tới việc chọn một đôi giày sneaker khiến cho bạn chở nên năng động hơn trong mùa hè nóng bức. Hãy cùng TrungSneaker điểm danh 10 đôi giày sneaker thời trang năng động trong màu hè.', '2022-05-03 03:37:38', '2022-05-03 03:37:38'),
(6, 'Top 8 đôi giày Sneaker cho mùa hè năng động', '<p style=\"text-align:start;\"><span style=\"color: rgb(40,40,40);background-color: rgb(255,255,255);font-size: 18.4;font-family: times new roman\", times, serif;\">Những đôi giày sneaker là sản phẩm thời trang không thể thiếu của trong tủ đồ của các bạn trẻ. Khi mùa hè đầy nhiệt huyết sắp tới việc chọn một đôi giày sneaker khiến cho bạn chở nên năng động hơn trong mùa hè nóng bức. Hãy cùng TrungSneaker điểm danh 10 đôi giày sneaker thời trang năng động trong màu hè.</span></p>\n<p style=\"text-align:start;\">&nbsp;</p>\n<ol>\n<li style=\"margin-left:1.3em;\"><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: medium;font-family: times new roman\", times, serif;\">Jordan 1 low</span><br><span style=\"color: rgb(40,40,40);background-color: rgb(255,255,255);font-size: medium;font-family: times new roman\", times, serif;\">Jordan 1 từ lâu đã là một con sốt cho các tín đồ giày sneaker. Với việc xuất phát điểm là giày bóng rổ nên thiết kế của AJ1 luôn cho thấy sự năng động, cũng như cái chất đường phố rất ‘cool’ của Jordan 1. Những bản phối màu của Jordan 1 luôn được đánh giá cao về phong cách thời trang.</span><br></li>\n</ol>\n<img src=\"https://trungsneaker.com/wp-content/uploads/2020/07/top-8-doi-giay-sneaker-cho-mua-he-nang-dong-5-572x400.jpg\" alt=\"\" style=\"height: auto;width: \"/>\n<ol>\n<li style=\"margin-left:1.3em;\"><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: medium;font-family: times new roman\", times, serif;\">Air Force 1</span><br><span style=\"color: rgb(40,40,40);background-color: rgb(255,255,255);font-size: medium;font-family: times new roman\", times, serif;\">Air Force 1 luôn là sản phẩm bán chạy nhất của Nike, cứ mỗi năm thì Nike lại tung ra một bản phối, và doanh thu của AF1 luôn rất cao. Điều đó cho thấy sức hút của Air Force 1 là rất lớn, với thiết kế năng động, đa dụng có thể mang đi học, chơi, trong mùa nóng lạnh đều rất ổn. Air Force thực sự là một lựa chọn đáng dùng.</span><br></li>\n</ol>\n<img src=\"https://trungsneaker.com/wp-content/uploads/2020/04/giay-nike-af1-shadow-atmosphere-grey-cq3317-002-519x400.jpg\" alt=\"\" style=\"height: auto;width: \"/>\n<ol>\n<li style=\"margin-left:1.3em;\"><span style=\"color: rgb(119,119,119);background-color: rgb(255,255,255);font-size: medium;font-family: Roboto Condensed;\">Falcon</span><br><span style=\"color: rgb(40,40,40);background-color: rgb(255,255,255);font-size: medium;font-family: Roboto Condensed;\">Là dòng sản phẩm mới được ra mắt trong những năm gần đây, Falcon được thiết kế được thiết kế theo xu hướng giày hiện đại, đó là trend Chunky. Adidas Falcon mang đến sự thoải mái và phù hợp với mọi loại khi mang đúng size, với thiết kế xu hướng Chunky sẽ làm bạn nổi bật hơn với thiết kế có phần hầm hố và phối màu không quá bắt nắng. Nó mang lại sự êm ái và mát mẻ khi mang chúng.</span><br></li>\n</ol>\n<img src=\"https://trungsneaker.com/wp-content/uploads/2019/10/falcon-white-gold-2-533x400.jpg\" alt=\"\" style=\"height: auto;width: \"/>\n<ol>\n<li style=\"text-align:left;\"><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: medium;font-family: times new roman\", times, serif;\">UltraBoost</span><br><span style=\"color: rgb(40,40,40);background-color: rgb(255,255,255);font-size: medium;font-family: times new roman\", times, serif;\">Boost vẫn là công nghệ bán chạy nhất của adidas, với xuất phát điểm là đôi giày chạy bộ (chủ yếu trong phòng tập gym), nên thiết kế của ultra boost sẽ gọn gàng, nhưng cũng rất khỏe khoắn năng động. UltraBoost là một đôi giày thích hợp cho mùa hè vì sự đa dụng (dễ phối đồ, phong cách đa dạng,..)</span><br></li>\n</ol>\n<img src=\"https://trungsneaker.com/wp-content/uploads/2020/04/giay-adidas-ultraboost-20-grey-eg0695-711x400.jpg\" alt=\"\" style=\"height: auto;width: \"/>\n<ol>\n<li style=\"margin-left:1.3em;\"><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: medium;font-family: times new roman\", times, serif;\">Air Max</span><br><span style=\"color: rgb(40,40,40);background-color: rgb(255,255,255);font-size: medium;font-family: times new roman\", times, serif;\">Tháng 3 vừa qua Nike đã cho ra mắt sản phẩm Nike Air Max 2090 kỹ niệm 30 năm của dòng sản phẩm Air Max 90. Điềi đó cho thấy Air Max có sức hút khá vượt trội ở các tín đồ giày sneaker. Sản phẩm của Air Max rất đa dạng theo từng số như :Air Max 1, Air Max 90, Air Max 97, …mỗi số của air max mang một chất riêng. Thiết kế nhỏ nhắn, gọn gàng và trẻ trung những thiết kế của Air max luôn cho thấy sự năng động , cá tính.</span><br></li>\n</ol>\n<img src=\"https://trungsneaker.com/wp-content/uploads/2020/04/giay-nike-air-max-720-rainbow-ao2924-011-5-641x400.jpg\" alt=\"\" style=\"height: auto;width: \"/>\n<ol>\n<li style=\"margin-left:1.3em;\"><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 19.2;font-family: times new roman\", times, serif;\">Adidas Cloudfoam</span><br><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 19.2;font-family: times new roman\", times, serif;\">Cloudfoam là công nghệ mang đến sự nhẹ nhàng, êm ái, thoải mái khi mang vào, đúng với cáci tên của nó cloudfoam- bọt mấy. Adidas cloudfoam sẽ mang đến sự năng động, mà vẫn tạo sự thoải đặc biệt  với các nóng của mùa hè.</span><br></li>\n</ol>\n<img src=\"https://trungsneaker.com/wp-content/uploads/2020/07/top-8-doi-giay-sneaker-cho-mua-he-nang-dong-2-711x400.jpg\" alt=\"\" style=\"height: auto;width: \"/>\n<ol>\n<li style=\"margin-left:1.3em;\"><span style=\"color: rgb(119,119,119);background-color: rgb(255,255,255);font-size: medium;font-family: times new roman\", times, serif;\">SuperStar</span><br><span style=\"color: rgb(40,40,40);background-color: rgb(255,255,255);font-size: medium;font-family: times new roman\", times, serif;\">Là một trong những sản phẩm có lâu đời của adidas, SuperStar rất đa dạng khi từng là giày bóng rổ, street style, dễ dàng phối đồ. Qua khứ huy hoàng của SuperStar đã đi qua được 7 thập kỷ, những nó vẫn là sản phẩm bán chạy nhất của adidas cho thấy được sự tin yêu của các tin đồ sneaker với SuperStar.</span><br></li>\n</ol>\n<img src=\"https://trungsneaker.com/wp-content/uploads/2020/07/top-8-doi-giay-sneaker-cho-mua-he-nang-dong-4-524x400.jpg\" alt=\"\" style=\"height: auto;width: \"/>\n<ol>\n<li style=\"margin-left:1.3em;\"><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: medium;font-family: times new roman\", times, serif;\">Stan Smith</span><br><span style=\"color: rgb(40,40,40);background-color: rgb(255,255,255);font-size: medium;font-family: times new roman\", times, serif;\">adidas Stan Smith là sản phẩm kết hợp của adidas và vận động viên tennis huyền thoại Stan Smith, và cũng như Superstar trải qua nhiều thập kỷ StanSmith vẫn có cho mình sự yêu thương từ sneakerhead. Thiết kế đế bằng, form giày rộng giúp chân cảm thấy mát, không bị hầm. Và sản này rất thích hợp để mang vào mùa hè nóng nực cũng như trong các bữa tiệc sang trọng.</span><br>&nbsp;</li>\n</ol>\n<img src=\"https://trungsneaker.com/wp-content/uploads/2020/07/top-8-doi-giay-sneaker-cho-mua-he-nang-dong-3-711x400.jpg\" alt=\"\" style=\"height: auto;width: \"/>\n<p style=\"text-align:start;\"><span style=\"color: rgb(40,40,40);background-color: rgb(255,255,255);font-size: 18.4;font-family: times new roman\", times, serif;\">Nếu các bạn còn đang phân vân không biết nên chọn gì, thì hãy đến TrungSneaker tọa lạc ở: hẻm 220/14 Nguyễn Oanh, phường 17, Gò Vấp, để chúng tôi có thể tư vấn hỗ trợ bạn. Tại đây các bạn có thể mua giày tại nhà, khi TrungSneaker có dịch vụ giao hàng đến tận nhà. Mọi thông tin các bạn có thể liên hệ trực tiếp tại Fanpage</span> <a href=\"https://www.facebook.com/sneakertrung\" target=\"_blank\"><span style=\"color: rgb(40,40,40);background-color: transparent;font-size: 18.4;font-family: times new roman\", times, serif;\">TrungSneaker.com</span></a> <span style=\"color: rgb(40,40,40);background-color: rgb(255,255,255);font-size: 18.4;font-family: times new roman\", times, serif;\">hoặc truy cập website</span> <a href=\"https://trungsneaker.com/\" target=\"_self\"><span style=\"color: rgb(40,40,40);background-color: transparent;font-size: 18.4;font-family: times new roman\", times, serif;\">trungsneaker.com </span></a><span style=\"color: rgb(40,40,40);background-color: rgb(255,255,255);font-size: 18.4;font-family: times new roman\", times, serif;\">.</span></p>\n<p style=\"text-align:center;\"><br>&nbsp;</p>\n', NULL, 'https://res.cloudinary.com/dueyjeqd5/image/upload/v1651549176/v-network/mqslu5tnuddfwjscogzi.jpg', 'Những đôi giày sneaker là sản phẩm thời trang không thể thiếu của trong tủ đồ của các bạn trẻ. Khi mùa hè đầy nhiệt huyết sắp tới việc chọn một đôi giày sneaker khiến cho bạn chở nên năng động hơn trong mùa hè nóng bức. Hãy cùng TrungSneaker điểm danh 10 đôi giày sneaker thời trang năng động trong màu hè.', '2022-05-03 03:39:37', '2022-05-03 03:39:37'),
(7, 'Những đôi Jordan 1 mới chất lượng cần có trong tủ giày của bạn', '<p style=\"text-align:start;\"><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 19.2;font-family: times new roman\", times, serif;\">1.Air Jordan 1 low ‘Shattered Backboard’</span></p>\n<p style=\"text-align:start;\"><span style=\"color: rgb(40,40,40);background-color: rgb(255,255,255);font-size: 18.4;font-family: times new roman\", times, serif;\">Jordan 1 low ‘Shattered Backboard’ đã cháy hàng  khi mới ra mắt, và được đẩy giá lên khá cao. Và đặc biệt trong MV ‘BigCityBoy’ đã khiến cho các tín đồ sneaker sốt sắn khi nam rapper triệu view Binz mang đôi AJ1 ‘Shattered Backboard’ trên chân.</span></p>\n<p style=\"text-align:start;\"></p>\n<img src=\"https://trungsneaker.com/wp-content/uploads/2020/10/nhung-doi-jordan-1-moi-chat-luong-can-co-trong-tu-giay-cua-ban-2.jpg\" alt=\"\" style=\"height: auto;width: \"/>\n<p style=\"text-align:start;\"><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 19.2;font-family: times new roman\", times, serif;\">2.Air Jordan 1 mid ‘Pine Green’</span></p>\n<p style=\"text-align:start;\"><span style=\"color: rgb(40,40,40);background-color: rgb(255,255,255);font-size: 18.4;font-family: times new roman\", times, serif;\">Được ra mắt đầu năm nay độ hot của nó không khác gì độ hoành hành của dịch Covid-19. Pine Green là thiết kế retro cổ điển được đánh giá khá cao.</span></p>\n<p style=\"text-align:start;\"></p>\n<img src=\"https://trungsneaker.com/wp-content/uploads/2020/09/nhung-doi-jordan-1-moi-chat-luong-can-co-trong-tu-giay-cua-ban-711x400.jpg\" alt=\"jordan-1-mid-pine-green\" style=\"height: auto;width: \"/>\n<p style=\"text-align:start;\"><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 19.2;font-family: times new roman\", times, serif;\">3.Air Jordan 1 low ‘Royal Yellow’</span></p>\n<p style=\"text-align:start;\"><span style=\"color: rgb(40,40,40);background-color: rgb(255,255,255);font-size: 18.4;font-family: times new roman\", times, serif;\">Jordan quý tộc cho ra mắt bản ‘vàng hoàng gia’. Với cách phối màu vô cùng hoàng gia độc đáo tạo và tính tế, jordan royal nên sự khác biệt so với những sản phẩm khác.</span></p>\n<p style=\"text-align:start;\"></p>\n<img src=\"https://trungsneaker.com/wp-content/uploads/2020/09/giay-jordan-1-low-royal-yellow-553558-123-4-711x400.jpg\" alt=\"jordan-1-low-royal-yellow\" style=\"height: auto;width: \"/>\n<p style=\"text-align:start;\">&nbsp;</p>\n<p style=\"text-align:start;\"><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 19.2;font-family: times new roman\", times, serif;\">4 Air Jordan 1 ‘Nothing But Net’</span></p>\n<p style=\"text-align:start;\"><span style=\"color: rgb(40,40,40);background-color: rgb(255,255,255);font-size: 18.4;font-family: times new roman\", times, serif;\">Các bạn thích màu sắc tươi sáng với nhiều màu sắc thì ‘Nothing But Net’ bản low sẽ đáp ứng điều đó cho bạn. Từ sự thành công của Jordan 7 retro ‘Nothing but net’, Jordan 1 mang trở lại phối màu đã ngủ quên trong những năm gần đây.</span></p>\n<p style=\"text-align:start;\"></p>\n<img src=\"https://trungsneaker.com/wp-content/uploads/2020/09/nhung-doi-jordan-1-moi-chat-luong-can-co-trong-tu-giay-cua-ban-2-711x400.jpg\" alt=\"\" style=\"height: auto;width: \"/>\n<p style=\"text-align:start;\"><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 19.2;font-family: times new roman\", times, serif;\">5.Air Jordan 1 low ‘Brushstroke’</span></p>\n<p style=\"text-align:start;\"><span style=\"color: rgb(40,40,40);background-color: rgb(255,255,255);font-size: 18.4;font-family: times new roman\", times, serif;\">Sau sự thành công với Brushstroke của Nike air Force 1 trong khoảng thời gian gần đây,  Nike cùng với Jordan Brand không để sức nóng của nó giảm nhiệt. Jordan 1 low ‘Brushstroke’ được ra mắt, với swoosh đặc trưng của dòng brushstroke cùng phối màu đen gót đỏ swoosh trắng, Jordan 1’Brushstroke’ đang là đôi ‘nét vẽ’ cao cấp của dòng giày sneaker.</span></p>\n<p style=\"text-align:start;\"></p>\n<img src=\"https://trungsneaker.com/wp-content/uploads/2020/10/giay-jordan-1-low-brushstroke-da4659-001-5-711x400.jpg\" alt=\"\" style=\"height: auto;width: \"/>\n<p style=\"text-align:start;\"><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 19.2;font-family: times new roman\", times, serif;\">6.Air Jordan 1 low ‘Triple White’</span></p>\n<p style=\"text-align:start;\"><span style=\"color: rgb(40,40,40);background-color: rgb(255,255,255);font-size: 18.4;font-family: times new roman\", times, serif;\">Dành cho các tín đồ mang giày trắng, với màu trắng chủ đạo AJ1 ‘Triple white’ là một trong số ít sản phẩm của Jordan1 mà Jordan brand chỉ sử dụng một màu duy nhất.</span></p>\n<p style=\"text-align:start;\"></p>\n<img src=\"https://trungsneaker.com/wp-content/uploads/2020/08/giay-nike-jordan-1-low-triple-white-553558-130-3-711x400.jpg\" alt=\"\" style=\"height: auto;width: \"/>\n<p style=\"text-align:start;\"><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 19.2;font-family: times new roman\", times, serif;\">7. Air Jordan 1 Bred</span></p>\n<p style=\"text-align:start;\"><span style=\"color: rgb(40,40,40);background-color: rgb(255,255,255);font-size: 18.4;font-family: times new roman\", times, serif;\">Kể từ khi Michael Jordan bước chân vào NBA cùng với đôi Jordan 1 bred năm 1984, từ đó lịch sử về giày bóng rổ đã thay đổi.  Đến nay sức hút của Jordan 1 ‘Bred’ vẫn còn đó, cũng qua nhiều nhiều thay đổi về form giày và kiểu dáng hiện tại của Jordan 1 chỉ</span></p>\n<p style=\"text-align:start;\"></p>\n<img src=\"https://trungsneaker.com/wp-content/uploads/2020/10/giay-jordan-1-low-bred-553558-606-711x400.jpg\" alt=\"\" style=\"height: auto;width: \"/>\n<p style=\"text-align:start;\"><span style=\"color: rgb(119,119,119);background-color: rgb(255,255,255);font-size: medium;font-family: times new roman\", times, serif;\">Ngoài ra còn có rất nhiều đôi Jordan 1 với giá vô cùng hợp túi tiền, hãy liên hệ fanpage</span> <a href=\"https://www.facebook.com/sneakertrung\" target=\"_blank\"><span style=\"color: rgb(0,51,102);background-color: transparent;font-size: medium;font-family: times new roman\", times, serif;\">TrungSneaker.com</span></a> <span style=\"color: rgb(119,119,119);background-color: rgb(255,255,255);font-size: medium;font-family: times new roman\", times, serif;\">hoặc bấm tại</span> <a href=\"https://trungsneaker.com/giay/giay-new/air-jordan/jordan-1/\" target=\"_self\"><span style=\"color: rgb(51,72,98);background-color: transparent;font-size: medium;font-family: times new roman\", times, serif;\"><strong>đây</strong></span></a> <span style=\"color: rgb(119,119,119);background-color: rgb(255,255,255);font-size: medium;font-family: times new roman\", times, serif;\">. Để chọn cho mình những đôi Jordan mình thích.</span>&nbsp;</p>\n', NULL, 'https://res.cloudinary.com/dueyjeqd5/image/upload/v1651549257/v-network/w1ue1kqqzhjxppds9fxu.jpg', 'Nike Jordan 1 ra đời năm 1985 là 1 dòng Giày Bóng Rổ cực kỳ thành công, bán chạy nhất, lên chân cực đẹp và có nhiều phiên bản cực đắt tiền để người mua sưu tầm. Năm 2020 Jordan 1 ra mắt phiên bản Low (thấp cổ), đang cực hot với rất nhiều phối màu đẹp, sự tiện dụng, giá thành hợp lí và được ca sĩ, diễn viên mang rất nhiều, đặc biệt là chương trình Rap Việt đình đám hiện nay. Hãy cùng điểm lại những đôi Jordan 1 mới mà bạn cần có trong tủ.', '2022-05-03 03:40:57', '2022-05-03 03:40:57'),
(8, 'Vệ sinh giày Sneaker- Dịch vụ giặt hấp giày giá rẻ ở Gò Vấp', '<p style=\"text-align:start;\"><span style=\"color: rgb(40,40,40);background-color: rgb(255,255,255);font-size: 18.4;font-family: times new roman\", times, serif;\">Giày running second hand (running 2 hand) là loại giày dành riêng cho chạy bộ. Và việc lựa chọn 1 đôi giày running cần phải có các yếu tố như: địa hình chạy, cự ly chạy , hợp với chân, độ bền của giày còn đảm bảo.</span></p>\n<ol>\n<li style=\"margin-left:1.3em;\"><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: medium;font-family: times new roman\", times, serif;\">Địa hình</span><br><span style=\"color: rgb(40,40,40);background-color: rgb(255,255,255);font-size: medium;font-family: times new roman\", times, serif;\">  ♠ Giày chạy đường bằng phẳng(road-running): Những đôi giày nhẹ, linh hoạt đôi chân, có độ bám cao sẽ làm cho đôi chân thoải mái hơn. Những dòng Nike Pegasus, Nike React hay Nike Free hoặc các dòng boost của adidas</span><br></li>\n</ol>\n<img src=\"https://trungsneaker.com/wp-content/uploads/2020/06/cach-mua-giay-running-second-hand-chat-luong-tot-va-phu-hop-2-711x400.jpg\" alt=\"\" style=\"height: auto;width: \"/>\n<div style=\"text-align:right;\"><img src=\"https://trungsneaker.com/wp-content/uploads/2020/06/cach-mua-giay-running-second-hand-chat-luong-tot-va-phu-hop-3-711x400.jpg\" alt=\"\" style=\"height: auto;width: \"/></div>\n<img src=\"https://trungsneaker.com/wp-content/uploads/2020/06/cach-mua-giay-running-second-hand-chat-luong-tot-va-phu-hop-4-711x400.jpg\" alt=\"\" style=\"height: auto;width: \"/>\n<div style=\"text-align:right;\"><img src=\"https://trungsneaker.com/wp-content/uploads/2020/06/cach-mua-giay-running-second-hand-chat-luong-tot-va-phu-hop-5-711x400.jpg\" alt=\"\" style=\"height: auto;width: \"/></div>\n<ol>\n<li style=\"margin-left:1.3em;\"><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: medium;font-family: times new roman\", times, serif;\">Cự ly</span><br><span style=\"color: rgb(40,40,40);background-color: rgb(255,255,255);font-size: medium;font-family: times new roman\", times, serif;\">  ♣ Cự ly ngắn: Với cự ly ngắn thì bạn chị cần chọn những đôi giày nhẹ, hỗ trợ cân bằng trong các bước chạy là sự lựa chọn tốt cho bạn. Những dòng đáp ứng được điều đó như: Nike Lunar Racer, Nike Free Rn.</span><br></li>\n</ol>\n<img src=\"https://trungsneaker.com/wp-content/uploads/2020/06/cach-mua-giay-running-second-hand-chat-luong-tot-va-phu-hop-6-711x400.jpg\" alt=\"\" style=\"height: auto;width: \"/>\n<div style=\"text-align:right;\"><img src=\"https://trungsneaker.com/wp-content/uploads/2020/06/cach-mua-giay-running-second-hand-chat-luong-tot-va-phu-hop-7-711x400.jpg\" alt=\"\" style=\"height: auto;width: \"/></div>\n<img src=\"https://trungsneaker.com/wp-content/uploads/2020/06/cach-mua-giay-running-second-hand-chat-luong-tot-va-phu-hop-8-711x400.jpg\" alt=\"\" style=\"height: auto;width: \"/>\n<ol>\n<li style=\"margin-left:1.3em;\"><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: medium;font-family: times new roman\", times, serif;\">Lọai chân</span><br><span style=\"color: rgb(40,40,40);background-color: rgb(255,255,255);font-size: medium;font-family: times new roman\", times, serif;\">  ♦ Địa hình, cự ly là các yếu tố bên ngoài, bạn cần phải hiểu rõ kết cấu của bàn chân và cổ chân để chọn đôi giày chạy bộ cho mình </span><br><span style=\"color: rgb(40,40,40);background-color: rgb(255,255,255);font-size: medium;font-family: times new roman\", times, serif;\">  ♦ Có 3 loại chân thường thấy: Chân phẳng, chân bình thường và chân cong.</span><br></li>\n</ol>\n<img src=\"https://trungsneaker.com/wp-content/uploads/2020/06/foot-shapes-711x400.jpg\" alt=\"\" style=\"height: auto;width: \"/>\n<ol>\n<li style=\"margin-left:1.3em;\"><span style=\"color: rgb(0,0,0);background-color: rgb(255,255,255);font-size: 22.08;font-family: times new roman\", times, serif;\">Độ bền</span> <br><span style=\"color: rgb(40,40,40);background-color: rgb(255,255,255);font-size: medium;font-family: times new roman\", times, serif;\">♥ Điều cuối cùng khi mua một đôi giày chạy bộ 2 hand đó là hạn sử dụng của đôi giày, một đôi giày chạy bộ cũ thường các bạn sẽ kiểm tra mũi giày và kiểm tra độ mòn các cạnh giày tùy theo cách chạy của bạn.</span><br></li>\n</ol>\n<img src=\"https://trungsneaker.com/wp-content/uploads/2020/06/cach-mua-giay-running-second-hand-chat-luong-tot-va-phu-hop-9-726x400.jpg\" alt=\"\" style=\"height: auto;width: \"/>\n<p style=\"text-align:start;\"><span style=\"color: rgb(40,40,40);background-color: rgb(255,255,255);font-size: 18.4;font-family: times new roman\", times, serif;\">Nếu các bạn muốn sắm cho mình một đôi giày chạy bộ cũ thì các bán hãy ghé ngay TrungSneaker để chọn cho mình một đôi giày running chất lượng với giá thành khá rẻ.</span>&nbsp;</p>\n', NULL, 'https://res.cloudinary.com/dueyjeqd5/image/upload/v1651549471/v-network/coibsgo48jbeg7hwacb0.jpg', 'Dịch vụ vê sinh giày giá rẻ ở hẻm 220 Nguyễn Oanh, Gò Vấp là nơi có dịch vụ giá hạt dẻ chỉ 70k /1 đôi. Ngoài ra còn có các dịch vụ tân trang cho đôi giày của bạn trở nên như mới, bằng các dịch vụ như repair, tẩy ố, nhuôm đen vải hoặc da lộn. Không những vậy tại Vệ sinh giày Sneaker còn có các dịch vụ bảo vệ giày như: Dán sole bảo vệ đế, phủ Nano chống thấm. Bạn đau đầu không biết phải vệ sinh những đôi sneaker của mình sao cho đúng cách, lo sợ bị ố vàng thì hay đem ngay đến Trung Sneaker. Nằm trên con hẻm 220 Nguyễn Oanh, Gò Vấp, chúng tôi không chỉ là một cửa hàng bán giày uy tín mà còn nổi tiếng với dịch vụ vệ sinh giày.', '2022-05-03 03:44:31', '2022-05-03 03:44:31');

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
  `content` text NULL,
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
