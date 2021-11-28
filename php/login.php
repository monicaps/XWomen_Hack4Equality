<?php
	require 'conexion.php';
	$user=$_GET['user'];
	$pass=$_GET['password'];

	$query="SELECT username,pasword FROM Usuario WHERE username='$user' AND pasword='$pass'";

	$respuesta=mysqli_query($conectar,$query);
	$dataResult=array();

	while ($row=mysqli_fetch_assoc($respuesta)) {
		$dataResult[]=$row;
	}

	echo json_encode($dataResult);
?>