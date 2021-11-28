<?php
	require 'conexion.php';
	$pais=$_GET['pais'];

	$query="SELECT nombre FROM Estado WHERE id_pais='$pais'";

	$respuesta=mysqli_query($conectar,$query);
	$dataResult=array();

	while ($row=mysqli_fetch_assoc($respuesta)) {
		$dataResult[]=$row;
	}

	echo json_encode($dataResult);
?>