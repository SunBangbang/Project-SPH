/*
Navicat MySQL Data Transfer

Source Server         : root
Source Server Version : 50739
Source Host           : localhost:3306
Source Database       : ecommercemall

Target Server Type    : MYSQL
Target Server Version : 50739
File Encoding         : 65001

Date: 2023-02-04 17:28:30
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `brands`
-- ----------------------------
DROP TABLE IF EXISTS `brands`;
CREATE TABLE `brands` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `brand_name` varchar(255) NOT NULL,
  `desc` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of brands
-- ----------------------------
INSERT INTO `brands` VALUES ('1', '小米', null, '2023-02-04 09:16:48', '2023-02-04 09:16:48');
INSERT INTO `brands` VALUES ('2', '华为', null, '2023-02-04 09:16:48', '2023-02-04 09:16:48');
INSERT INTO `brands` VALUES ('3', '雅诗兰黛', null, '2023-02-04 09:16:48', '2023-02-04 09:16:48');
INSERT INTO `brands` VALUES ('4', '迪奥', null, '2023-02-04 09:16:48', '2023-02-04 09:16:48');
INSERT INTO `brands` VALUES ('5', '格力', null, '2023-02-04 09:16:48', '2023-02-04 09:16:48');
INSERT INTO `brands` VALUES ('6', '联想', null, '2023-02-04 09:16:48', '2023-02-04 09:16:48');

-- ----------------------------
-- Table structure for `carts`
-- ----------------------------
DROP TABLE IF EXISTS `carts`;
CREATE TABLE `carts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `goodId` int(11) NOT NULL,
  `count` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of carts
-- ----------------------------
INSERT INTO `carts` VALUES ('1', '1', '1', '2', '2023-02-04 09:16:48', '2023-02-04 09:16:48');

-- ----------------------------
-- Table structure for `categories`
-- ----------------------------
DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cate_name` varchar(255) NOT NULL,
  `pid` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of categories
-- ----------------------------
INSERT INTO `categories` VALUES ('1', '手机', '0', '2023-02-04 09:16:48', '2023-02-04 09:16:48');
INSERT INTO `categories` VALUES ('2', '家用电器', '0', '2023-02-04 09:16:48', '2023-02-04 09:16:48');
INSERT INTO `categories` VALUES ('3', '电脑办公', '0', '2023-02-04 09:16:48', '2023-02-04 09:16:48');
INSERT INTO `categories` VALUES ('4', '化妆品', '0', '2023-02-04 09:16:48', '2023-02-04 09:16:48');

-- ----------------------------
-- Table structure for `goods`
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `goods_name` varchar(255) NOT NULL,
  `brandId` int(11) NOT NULL,
  `categoryId` int(11) NOT NULL,
  `price` bigint(20) NOT NULL,
  `original` bigint(20) NOT NULL,
  `tags` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `summary` text NOT NULL,
  `is_sale` tinyint(4) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('1', '小米13 (A2634) 128GB 粉色 支持移动联通电信5G 双卡双待手机', '1', '1', '3888', '5888', '智能手机', '智能手机，小米之家', '智能手机，小米之家', '1', '2023-02-04 09:16:48', '2023-02-04 09:16:48');
INSERT INTO `goods` VALUES ('2', '华为nova7(A2634) 128GB 粉色 支持移动联通电信5G 双卡双待手机', '2', '1', '7888', '9888', '智能手机', '智能手机，华为之家', '智能手机，华为之家', '1', '2023-02-04 09:16:48', '2023-02-04 09:16:48');
INSERT INTO `goods` VALUES ('3', '雅诗兰黛口红119', '3', '4', '888', '988', '口红口红', '性感口红', '性感口红', '1', '2023-02-04 09:16:48', '2023-02-04 09:16:48');
INSERT INTO `goods` VALUES ('4', '空调998系列', '5', '2', '1888', '2988', '空调空调', '空调空调', '空调空调', '1', '2023-02-04 09:16:48', '2023-02-04 09:16:48');
INSERT INTO `goods` VALUES ('5', '电磁炉998系列', '5', '2', '88', '99', '电磁炉998系列', '电磁炉998系列', '电磁炉998系列', '1', '2023-02-04 09:16:48', '2023-02-04 09:16:48');
INSERT INTO `goods` VALUES ('6', '联想小新15系列', '6', '3', '4588', '5888', '联想小新15系列', '联想小新15系列', '联想小新15系列', '1', '2023-02-04 09:16:48', '2023-02-04 09:16:48');

-- ----------------------------
-- Table structure for `goods_images`
-- ----------------------------
DROP TABLE IF EXISTS `goods_images`;
CREATE TABLE `goods_images` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `goodId` int(11) NOT NULL,
  `link` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods_images
-- ----------------------------
INSERT INTO `goods_images` VALUES ('1', '1', 'http://localhost:8000/goods/小米手机1.jpg', '2023-02-04 09:16:48', '2023-02-04 09:16:48');
INSERT INTO `goods_images` VALUES ('2', '2', 'http://localhost:8000/goods/华为1.jpg', '2023-02-04 09:16:48', '2023-02-04 09:16:48');
INSERT INTO `goods_images` VALUES ('3', '3', 'http://localhost:8000/goods/雅诗兰黛1.jpg', '2023-02-04 09:16:48', '2023-02-04 09:16:48');
INSERT INTO `goods_images` VALUES ('4', '4', 'http://localhost:8000/goods/格力空调1.jpg', '2023-02-04 09:16:48', '2023-02-04 09:16:48');
INSERT INTO `goods_images` VALUES ('5', '5', 'http://localhost:8000/goods/电磁炉1.jpg', '2023-02-04 09:16:48', '2023-02-04 09:16:48');
INSERT INTO `goods_images` VALUES ('6', '6', 'http://localhost:8000/goods/联想小新1.jpg', '2023-02-04 09:16:48', '2023-02-04 09:16:48');

-- ----------------------------
-- Table structure for `goods_properties`
-- ----------------------------
DROP TABLE IF EXISTS `goods_properties`;
CREATE TABLE `goods_properties` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `goodId` int(11) NOT NULL,
  `propertyNameId` int(11) NOT NULL,
  `propertyValueId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods_properties
-- ----------------------------
INSERT INTO `goods_properties` VALUES ('1', '1', '1', '1', '2023-02-04 09:16:48', '2023-02-04 09:16:48');
INSERT INTO `goods_properties` VALUES ('2', '1', '2', '5', '2023-02-04 09:16:48', '2023-02-04 09:16:48');
INSERT INTO `goods_properties` VALUES ('3', '1', '3', '7', '2023-02-04 09:16:48', '2023-02-04 09:16:48');
INSERT INTO `goods_properties` VALUES ('4', '1', '3', '8', '2023-02-04 09:16:48', '2023-02-04 09:16:48');
INSERT INTO `goods_properties` VALUES ('5', '2', '1', '4', '2023-02-04 09:16:48', '2023-02-04 09:16:48');
INSERT INTO `goods_properties` VALUES ('6', '2', '2', '6', '2023-02-04 09:16:48', '2023-02-04 09:16:48');
INSERT INTO `goods_properties` VALUES ('7', '3', '8', '18', '2023-02-04 09:16:48', '2023-02-04 09:16:48');
INSERT INTO `goods_properties` VALUES ('8', '4', '4', '9', '2023-02-04 09:16:48', '2023-02-04 09:16:48');
INSERT INTO `goods_properties` VALUES ('9', '4', '5', '11', '2023-02-04 09:16:48', '2023-02-04 09:16:48');
INSERT INTO `goods_properties` VALUES ('10', '5', '4', '9', '2023-02-04 09:16:48', '2023-02-04 09:16:48');
INSERT INTO `goods_properties` VALUES ('11', '5', '5', '11', '2023-02-04 09:16:48', '2023-02-04 09:16:48');
INSERT INTO `goods_properties` VALUES ('12', '6', '6', '13', '2023-02-04 09:16:48', '2023-02-04 09:16:48');

-- ----------------------------
-- Table structure for `orders`
-- ----------------------------
DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `goodId` int(11) NOT NULL,
  `traderNo` varchar(255) NOT NULL,
  `consigneeTel` varchar(255) NOT NULL,
  `consignee` varchar(255) NOT NULL,
  `deliveryAddress` varchar(255) NOT NULL,
  `paymentWay` varchar(255) NOT NULL,
  `orderComment` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of orders
-- ----------------------------
INSERT INTO `orders` VALUES ('1', '1', '1', 'xxxx-xxxx-xxxx-xxxx', '130000000', 'coderszt', '广州市', 'ONLINE', '订单备注', '2023-02-04 09:16:48', '2023-02-04 09:16:48');

-- ----------------------------
-- Table structure for `property_names`
-- ----------------------------
DROP TABLE IF EXISTS `property_names`;
CREATE TABLE `property_names` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `categoryId` int(11) NOT NULL,
  `is_allow_alias` tinyint(4) DEFAULT '0',
  `is_color` tinyint(4) DEFAULT '0',
  `is_enum` tinyint(4) DEFAULT '0',
  `is_input` tinyint(4) DEFAULT '0',
  `is_key` tinyint(4) DEFAULT '0',
  `is_sale` tinyint(4) DEFAULT '0',
  `is_search` tinyint(4) DEFAULT '0',
  `is_must` tinyint(4) DEFAULT '0',
  `is_multi` tinyint(4) DEFAULT '0',
  `status` tinyint(4) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of property_names
-- ----------------------------
INSERT INTO `property_names` VALUES ('1', '品牌', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '2023-02-04 09:16:48', '2023-02-04 09:16:48');
INSERT INTO `property_names` VALUES ('2', '手机系统', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '2023-02-04 09:16:48', '2023-02-04 09:16:48');
INSERT INTO `property_names` VALUES ('3', '电池容量', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '2023-02-04 09:16:48', '2023-02-04 09:16:48');
INSERT INTO `property_names` VALUES ('4', '品牌', '2', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '2023-02-04 09:16:48', '2023-02-04 09:16:48');
INSERT INTO `property_names` VALUES ('5', '尺寸', '2', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '2023-02-04 09:16:48', '2023-02-04 09:16:48');
INSERT INTO `property_names` VALUES ('6', '品牌', '3', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '2023-02-04 09:16:48', '2023-02-04 09:16:48');
INSERT INTO `property_names` VALUES ('7', '电脑系统', '3', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '2023-02-04 09:16:48', '2023-02-04 09:16:48');
INSERT INTO `property_names` VALUES ('8', '品牌', '4', '0', '0', '0', '0', '0', '0', '0', '0', '0', '1', '2023-02-04 09:16:48', '2023-02-04 09:16:48');

-- ----------------------------
-- Table structure for `property_values`
-- ----------------------------
DROP TABLE IF EXISTS `property_values`;
CREATE TABLE `property_values` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `propertyNameId` int(11) NOT NULL,
  `status` tinyint(4) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of property_values
-- ----------------------------
INSERT INTO `property_values` VALUES ('1', '小米', '1', '1', '2023-02-04 09:16:48', '2023-02-04 09:16:48');
INSERT INTO `property_values` VALUES ('2', 'VIVO', '1', '1', '2023-02-04 09:16:48', '2023-02-04 09:16:48');
INSERT INTO `property_values` VALUES ('3', '苹果', '1', '1', '2023-02-04 09:16:48', '2023-02-04 09:16:48');
INSERT INTO `property_values` VALUES ('4', '华为', '1', '1', '2023-02-04 09:16:48', '2023-02-04 09:16:48');
INSERT INTO `property_values` VALUES ('5', '安卓系统', '2', '1', '2023-02-04 09:16:48', '2023-02-04 09:16:48');
INSERT INTO `property_values` VALUES ('6', '苹果系统', '2', '1', '2023-02-04 09:16:48', '2023-02-04 09:16:48');
INSERT INTO `property_values` VALUES ('7', '1200mAh到3000mAh', '3', '1', '2023-02-04 09:16:48', '2023-02-04 09:16:48');
INSERT INTO `property_values` VALUES ('8', '4200mAh到6000mAh', '3', '1', '2023-02-04 09:16:48', '2023-02-04 09:16:48');
INSERT INTO `property_values` VALUES ('9', '格力', '4', '1', '2023-02-04 09:16:48', '2023-02-04 09:16:48');
INSERT INTO `property_values` VALUES ('10', '美的', '4', '1', '2023-02-04 09:16:48', '2023-02-04 09:16:48');
INSERT INTO `property_values` VALUES ('11', '6.75英寸-9.2英寸', '5', '1', '2023-02-04 09:16:48', '2023-02-04 09:16:48');
INSERT INTO `property_values` VALUES ('12', '9.75英寸-12.2英寸', '5', '1', '2023-02-04 09:16:48', '2023-02-04 09:16:48');
INSERT INTO `property_values` VALUES ('13', '联想', '6', '1', '2023-02-04 09:16:48', '2023-02-04 09:16:48');
INSERT INTO `property_values` VALUES ('14', '华硕', '6', '1', '2023-02-04 09:16:48', '2023-02-04 09:16:48');
INSERT INTO `property_values` VALUES ('15', '微软', '6', '1', '2023-02-04 09:16:48', '2023-02-04 09:16:48');
INSERT INTO `property_values` VALUES ('16', 'Mac', '7', '1', '2023-02-04 09:16:48', '2023-02-04 09:16:48');
INSERT INTO `property_values` VALUES ('17', 'Window', '7', '1', '2023-02-04 09:16:48', '2023-02-04 09:16:48');
INSERT INTO `property_values` VALUES ('18', '雅诗兰黛', '7', '1', '2023-02-04 09:16:48', '2023-02-04 09:16:48');

-- ----------------------------
-- Table structure for `users`
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `phone` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', '1333333333', '111111', '2023-02-04 09:16:48', '2023-02-04 09:16:48');
INSERT INTO `users` VALUES ('2', '1444444444', '22222', '2023-02-04 09:16:48', '2023-02-04 09:16:48');
