<?php
include_once("config.php");
if(!empty($_POST)) {
	extract($_POST);

	$result = $dbConn->query("INSERT INTO realisasi VALUES ('',$id,$tahap1,$tahap2,$tahap3,$tahap4,$sisa)");

	header("location: fast.php");
}
?>