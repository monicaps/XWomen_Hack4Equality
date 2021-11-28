<?php
	$host = "serv-hack4equality.mysql.database.azure.com";
    $user = "admin_team@serv-hack4equality";
    $clave = "Hack4Equality";
    $bd = "bd_handup";

    $conectar = mysqli_connect($host,$user,$clave,$bd);
    //mysqli_set_charset($conectar,'utf8');
    /*$conn = mysqli_init();

    //necesaria para local, si se despliega en Azure App Service no es necesaria
	mysqli_ssl_set($conn,NULL,NULL, "../document/DigiCertGlobalRootG2.crt.pem", NULL, NULL);

	// Establish the connection
	mysqli_real_connect($conn, $host,$user, $clave, $bd, 3306, NULL, MYSQLI_CLIENT_SSL);*/

	//If connection failed, show the error
	if (mysqli_connect_errno())
	{
    	die('Failed to connect to MySQL: '.mysqli_connect_error());
	}
?>