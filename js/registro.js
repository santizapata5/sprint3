function almacenarRegistros(){
    var campo1 = document.getElementById("campoNombre");
    var campo2 = document.getElementById("campoContrasena");
    var campo3 = document.getElementById("campoCorreo");
    var campo4 = document.getElementById("campoConfirmacion");
    var campo5 = document.getElementById("campoTelefono");
    var arreglo = campo1.split('.');
    arreglo.push(campo2);
    arreglo.push(campo3);
    arreglo.push(campo4);
    arreglo.push(campo5);
    console.log(arreglo);
}

function ordenarRegistros(){
    almacenarRegistros();
    var arreglo_ordenador = arreglo.sort();
    console.log(arreglo_ordenador);
}
module.exports.almacenarRegistros = almacenarRegistros();
module.exports.ordenarRegistros = ordenarRegistros();