-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 17 Nov 2022 pada 02.08
-- Versi server: 10.4.13-MariaDB
-- Versi PHP: 7.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dinkes`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `menu_kegiatan`
--

CREATE TABLE `menu_kegiatan` (
  `id` int(50) NOT NULL,
  `spm` text NOT NULL,
  `menu` text NOT NULL,
  `jenis_belanja` text NOT NULL,
  `nama_belanja` text NOT NULL,
  `harga_sat` varchar(256) NOT NULL,
  `ket_sat` varchar(256) NOT NULL,
  `qty1` varchar(256) NOT NULL,
  `ket1` varchar(256) NOT NULL,
  `qty2` varchar(256) NOT NULL,
  `ket2` varchar(256) NOT NULL,
  `qty3` varchar(256) NOT NULL,
  `ket3` varchar(256) NOT NULL,
  `qty4` varchar(256) NOT NULL,
  `ket4` varchar(256) NOT NULL,
  `qty5` varchar(256) NOT NULL,
  `ket5` varchar(256) NOT NULL,
  `qty6` varchar(256) NOT NULL,
  `ket6` varchar(256) NOT NULL,
  `qty7` varchar(256) NOT NULL,
  `ket7` varchar(256) NOT NULL,
  `qty8` varchar(256) NOT NULL,
  `ket8` varchar(256) NOT NULL,
  `qty9` varchar(256) NOT NULL,
  `ket9` varchar(256) NOT NULL,
  `qty10` varchar(256) NOT NULL,
  `ket10` varchar(256) NOT NULL,
  `total` varchar(256) NOT NULL,
  `tahun` varchar(125) NOT NULL,
  `level` varchar(125) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `menu_kegiatan`
--

INSERT INTO `menu_kegiatan` (`id`, `spm`, `menu`, `jenis_belanja`, `nama_belanja`, `harga_sat`, `ket_sat`, `qty1`, `ket1`, `qty2`, `ket2`, `qty3`, `ket3`, `qty4`, `ket4`, `qty5`, `ket5`, `qty6`, `ket6`, `qty7`, `ket7`, `qty8`, `ket8`, `qty9`, `ket9`, `qty10`, `ket10`, `total`, `tahun`, `level`) VALUES
(53, 'Pelayanan Kesehatan pada Usia Pendidikan Dasar', 'Kegiatan Bias (MR) - Uang Harian', 'Uang Transport', '   Belanja Ruti Bulanan', '170000', '', '5', 'Desa', '1', 'Kali', '2', 'Orang', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1700000', '2022', 'admin');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `menu_kegiatan`
--
ALTER TABLE `menu_kegiatan`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `menu_kegiatan`
--
ALTER TABLE `menu_kegiatan`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
