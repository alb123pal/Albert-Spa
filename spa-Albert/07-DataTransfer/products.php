<?php
	/* products database simulation */
	header("Content-Type: application/json; charset=UTF-8");
	
	// read product number
	$n = $_GET["n"];

	// open data base and retrieve products list
	$file = "products.json";
	$product = json_decode(file_get_contents($file), true);
	
	echo json_encode($product[$n-1]);
?>