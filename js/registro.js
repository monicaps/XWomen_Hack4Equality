function revisar() {
	var seleccion=document.getElementById('selectPais').value;
	if (seleccion !=='MEX') {
		$("#estado").hide();
		$('#estadoText').show();
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
            }
        },
        error: function() {
            console.log("No se ha podido obtener la información");
        }
    });
}