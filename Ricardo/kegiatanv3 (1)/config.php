<?php
$dbHost = 'localhost';
$dbName = 'dinkes';
$dbUser = 'root';
$dbPasw = '';
try {
    $dbConn = new PDO("mysql:host={$dbHost};dbname={$dbName}", $dbUser, $dbPasw);
    $dbConn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    echo $e->getMessage();
}

function buatRupiah($angka){
    $hasil = "Rp " . number_format((float)$angka,0,',','.');
    return $hasil;
}