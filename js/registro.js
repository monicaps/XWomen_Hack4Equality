var estado;

function revisar() {
	var seleccion=document.getElementById('selectPais').value;
	if (seleccion !=='MEX') {
		$("#estado").hide();
		$('#estadoText').show();
		estado=document.getElementById('estadoText').value;
	}
}

function cargarData(){
	$('#estadoText').hide();
	var paisOrigen="MEX";

	 $.ajax({
        url: 'php/data.php',
        type: 'GET',
        data: {"pais": paisOrigen},
        success: function(response) {
            console.log(response);
            console.log(JSON.parse(response));
            if(response != "-1") {
                window.localStorage.setItem("estados", response);
                var estados=JSON.parse(response);
                var div=document.getElementById('divEstado');
                var select=document.createElement('select');
                select.setAttribute('id','estado');
                select.setAttribute('class','form-select');

                for (var i = 0; i < estados.length; i++) {
                	var option=document.createElement('option');
                	option.setAttribute('value',i+1);
                	var textOption=document.createTextNode(estados[i].nombre);
                	option.appendChild(textOption);
                	select.appendChild(option);
                }

                div.appendChild(select);
                estado=document.getElementById('estado').value;
            }
        },
        error: function() {
            console.log("No se ha podido obtener la información");
        }
    });
}

function registrar(){
	var nombre,apellidos,edad;
	var pais;
	var genero, sexo, pronombre;
	var username,password;

	nombre=document.getElementById('nombre').value;
	apellidos=document.getElementById('apellidos').value;
	edad=document.getElementById('edad').value;
	pais=document.getElementById('selectPais').value;
	genero=document.getElementById('selectGenero').value;
	sexo=document.getElementById('selectSexo').value;
	pronombre=document.getElementById('selectPronombre').value;
	username=document.getElementById('user').value;
	password=document.getElementById('password').value;

	console.log(nombre);
	console.log(apellidos);
	console.log(edad);
	console.log(pais);
	console.log(estado);
	console.log(genero);
	console.log(sexo);
	console.log(pronombre);
	console.log(username);
	console.log(password);

	//Fecha
	var f = new Date();
	var fecha_corta=f.getFullYear()+ "-"+ f.getMonth()+"-"+f.getDate();
	console.log("Fecha actual: "+fecha_corta);

	if (nombre!==''||apellidos!==''||edad!==''||username!==''||password!=='') {
		$.ajax({
        	url: 'php/prueba.php',
        	type: 'POST',
        	data: {'nombres':nombre, 'apellidos':apellidos,'edad':edad,'paisOrigen':pais,'estadoOrigen':estado,'genero':genero,'sexo':sexo,'pronombre':pronombre,'user':username,'password':password,'fecha':fecha_corta},
        	success: function(response) {
            	console.log(response);
            	console.log(JSON.parse(response));
            	if(response != -1) {
                	location.href='principal.html';
            	}
        	},
        	error: function() {
            	console.log("No se ha podido obtener la información");
        	}
    	});
	}else{
		alert("Has dejado campos vacíos, revisa por favor.");
	}

}