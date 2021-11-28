
function inicializarEventos()
{
    document.getElementById('user').value = '';
    document.getElementById('password').value = '';
}


function iniciarSesion() {
    // Evita el refresh de la página
    event.preventDefault();
    var user = document.getElementById('user').value;
    var password = document.getElementById('password').value;
    console.log(user);
    console.log(password);

    $.ajax({
        url: 'php/login.php',
        type: 'GET',
        data: {"user": user, "password": password},
        success: function(response) {
            console.log(response);
            console.log(JSON.parse(response));
            if(response != "-1") {
                window.localStorage.setItem("usuario", response);
                location.href = "principal.html";
            } else {
                /*document.getElementById('user').value = '';
                document.getElementById('password').value = '';*/
                console.log("Usuario no registrado!");
                var formulario = document.getElementsByClassName("formulario");
                var alerta = document.createElement("div");
                alerta.setAttribute("class", "alert alert-warning");
                alerta.setAttribute("role", "alert");
                var texto = document.createTextNode("Usuario inválido");
                alerta.appendChild(texto);
                formulario[0].appendChild(alerta);
            }
        },
        error: function() {
            console.log("No se ha podido obtener la información");
        }
    });
}