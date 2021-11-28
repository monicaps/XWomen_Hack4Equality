<?php
	require 'conexion.php';

	$nombre=$_POST['nombres'];
	$apellidos=$_POST['apellidos'];
	$edad=$_POST['edad'];
	$paisOrigen=$_POST['paisOrigen'];
	$estadoOrigen=$_POST['estadoOrigen'];
	$genero=$_POST['genero'];
	$sexo=$_POST['sexo'];
	$pronombre=$_POST['pronombre'];
	$usuario=$_POST['user'];
	$password=$_POST['password'];
	$fecha=$_POST['fecha'];

	$query="INSERT INTO Usuario(username,pasword,nombres,apellidos,id_pronombre,edad,id_genero,id_sexo,id_pais,id_estado,fecha) VALUES ('$usuario','$password','$nombre','$apellido','$pronombre','$edad','$genero','$sexo','$paisOrigen','$estadoOrigen','$fecha')";

	$respuesta=mysqli_query($conectar,$query);

	if(!respuesta){
		die('Query Failed.');
	}

	echo 1;

?>