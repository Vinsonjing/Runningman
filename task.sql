/*
 Navicat MySQL Data Transfer

 Source Server         : mysqll
 Source Server Type    : MySQL
 Source Server Version : 50524
 Source Host           : localhost:3306
 Source Schema         : my_student

 Target Server Type    : MySQL
 Target Server Version : 50524
 File Encoding         : 65001

 Date: 09/01/2020 10:04:45
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for task
-- ----------------------------
DROP TABLE IF EXISTS `task`;
CREATE TABLE `task`  (
  `task_id` int(20) NOT NULL AUTO_INCREMENT,
  `task_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `task_content` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `address_from` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `address_to` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `task_reward` int(5) NOT NULL,
  `publisher_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `accepter_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `date` date NOT NULL,
  `coverpath` varchar(1024) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `tempertel` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `state` tinyint(1) UNSIGNED ZEROFILL NOT NULL DEFAULT 0,
  `cityIndex` int(1) NOT NULL,
  `proviIndex` int(1) NOT NULL,
  PRIMARY KEY (`task_id`) USING BTREE,
  INDEX `publisher`(`publisher_id`) USING BTREE,
  INDEX `receiver`(`accepter_id`) USING BTREE,
  CONSTRAINT `publisher` FOREIGN KEY (`publisher_id`) REFERENCES `user` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `receiver` FOREIGN KEY (`accepter_id`) REFERENCES `user` (`user_id`) ON DELETE SET NULL ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 39 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of task
-- ----------------------------
INSERT INTO `task` VALUES (1, '电影票', ' 起源于60年代末美国政府资助的一个分组交换网络研究项目，到90年代已发展成为计算机之间最常应用的组网形式。它是一个真正的开放系统，因为协议族的定义及其多种实现可以不用花钱或花很少的钱', '上师大', '上师大', 180, '13820860428', '19234566789', '2020-01-01', '/images/post/2.png', NULL, 1, 2, 1);
INSERT INTO `task` VALUES (2, '代课一节', '很多不同的厂家生产各种型号的计算机，它们运行完全不同的操作系统，但TCP/IP协议族允许它们互相进行通信。这一点很让人感到吃惊，因为它的作用已远远超出了起初的设想。TCP/IP起源于60年代末美国政府资助的一个分组交换网络研究项目，到90年代已发展成为计算机之间', '上海应用技术大学', '上海应用技术大学', 20, '14427362736', NULL, '2020-01-06', '', NULL, 0, 1, 1);
INSERT INTO `task` VALUES (3, '公园遛狗', ' 导航栏标题颜色QQ邮箱无法设置Cookie，可能由于以下原因：你的浏览器不支持或已经禁止使用Cookie，导致无法正常登录。请启用Cookie后重试。Cookie 异常，你可以尝试删除Cookie，然后重新登入', '静安寺长青公园', '平安花园三栋403', 30, '17712637346', '17712637346', '2020-01-08', NULL, '12312341234', 1, 3, 1);
INSERT INTO `task` VALUES (33, '拍照', '写真', '上海应用技术大学', '上海应用技术大学', 100, '19234566789', '17712637246', '2020-01-08', NULL, '', 1, 3, 1);

SET FOREIGN_KEY_CHECKS = 1;
