function validar_correo(string1)   {
    var regex1 = /[\w]+@[\w]+[.com|.co|.org|.es]{3,4}$/;
    var string1 = document.getElementById("campoCorreo");
        if (string1.value.match(regex1)) { return true; } 
            else { alert ("Correo no válido"); return false;}    }

function validar_contrasena_usuario(string2)   {
    var regex2 = /^[A-Z]+[a-zA-Z0-9 +-._]{5,11}$/; 
    var string2 = document.getElementById("campoContrasena");
        if (string2.value.match(regex2)) { return true; }
            else {alert ("Contraseña no válida"); return false;}   }   

module.exports.validar_correo = validar_correo;
module.exports.validar_contrasena_usuario = validar_contrasena_usuario;