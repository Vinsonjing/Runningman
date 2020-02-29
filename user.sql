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

 Date: 09/01/2020 10:04:38
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `user_id` char(11) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `nick_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `user_name` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `identification` char(18) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `gender` char(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `avatar` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `payee` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `birthdate` datetime NULL DEFAULT NULL,
  PRIMARY KEY (`user_id`) USING BTREE,
  INDEX `user_id`(`user_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('13820860428', 'abc123', '看颠覆', '李静', '123423123412311234', '女', '/images/avatar/1.png', '13820860424', '2009-02-01 00:00:00');
INSERT INTO `user` VALUES ('14427362736', '12', '可是大家', '林立', '123423123412311234', '男', '/images/avatar/2.png', '', '1995-01-07 00:00:00');
INSERT INTO `user` VALUES ('17712637246', 'bce23', '开始', '文文', '123456789123456789', '女', '', '12312341234', '2019-12-11 00:00:00');
INSERT INTO `user` VALUES ('17712637346', 'asdf123', '尽快', '刘强', '12342312341231124', '男', '/images/avatar/3.png', '', '2019-12-10 00:00:00');
INSERT INTO `user` VALUES ('19234566789', '123433', '玲玲', '文静', '343434343434343434', NULL, NULL, '17717171717', NULL);

SET FOREIGN_KEY_CHECKS = 1;
