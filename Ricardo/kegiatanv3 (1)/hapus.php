<?php
include_once("config.php");
if(!empty($_GET)) {
	extract($_GET);

	$result = $dbConn->query("DELETE FROM realisasi where id='$id'");

	header("location: fast.php");
}
?>