/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 100417
 Source Host           : localhost:3306
 Source Schema         : kegiatan

 Target Server Type    : MySQL
 Target Server Version : 100417
 File Encoding         : 65001

 Date: 17/11/2022 20:36:05
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for menu_kegiatan
-- ----------------------------
DROP TABLE IF EXISTS `menu_kegiatan`;
CREATE TABLE `menu_kegiatan`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `spm` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `menu` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `jenis_belanja` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `nama_belanja` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `harga_sat` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `ket_sat` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `qty1` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `ket1` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `qty2` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `ket2` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `qty3` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `ket3` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `qty4` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `ket4` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `qty5` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `ket5` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `qty6` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `ket6` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `qty7` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `ket7` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `qty8` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `ket8` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `qty9` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `ket9` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `qty10` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `ket10` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `total` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `tahun` varchar(125) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `level` varchar(125) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 64 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of menu_kegiatan
-- ----------------------------
INSERT INTO `menu_kegiatan` VALUES (53, 'Pelayanan Kesehatan pada Usia Pendidikan Dasar', 'Kegiatan Bias (MR) - Uang Harian', 'Uang Transport', '   Belanja Ruti Bulanan', '170000', '', '5', 'Desa', '1', 'Kali', '2', 'Orang', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1700000', '2022', 'admin');
INSERT INTO `menu_kegiatan` VALUES (63, 'Pelayanan Kesehatan pada Usia Pendidikan Dasar', 'Kegiatan Bias (MR) - Uang Harian', 'Uang Transport', '   Belanja Ruti Bulanan', '170000', '', '5', 'Desa', '1', 'Kali', '2', 'Orang', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1700000', '2022', 'admin');

-- ----------------------------
-- Table structure for realisasi
-- ----------------------------
DROP TABLE IF EXISTS `realisasi`;
CREATE TABLE `realisasi`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_kegiatan` int NULL DEFAULT NULL,
  `tahap1` int NULL DEFAULT NULL,
  `tahap2` int NULL DEFAULT NULL,
  `tahap3` int NULL DEFAULT NULL,
  `tahap4` int NULL DEFAULT NULL,
  `sisa` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of realisasi
-- ----------------------------
INSERT INTO `realisasi` VALUES (1, 53, 10000, 20000, 30000, 40000, 1600000);

SET FOREIGN_KEY_CHECKS = 1;
