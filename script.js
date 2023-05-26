function encriptar(){
    var frase = document.getElementById("cifrado").value.toLowerCase();


    var textoCifrado = frase.replace(/e/img, "enter");
    var textoCifrado = textoCifrado.replace(/o/img, "ober");
    var textoCifrado = textoCifrado.replace(/i/img, "imes");
    var textoCifrado = textoCifrado.replace(/a/img, "ai");
    var textoCifrado = textoCifrado.replace(/u/img, "ufat");

    document.getElementById("decifrado").innerHTML = textoCifrado;

    document.getElementById("botonCopiar").style.display = "show";
    document.getElementById("botonCopiar").style.display = "inherit";

}

function desencriptar(){
    var frase = document.getElementById("cifrado").value.toLowerCase();


    var textoCifrado = frase.replace(/enter/img, "e");
    var textoCifrado = textoCifrado.replace(/ober/img, "o");
    var textoCifrado = textoCifrado.replace(/imes/img, "i");
    var textoCifrado = textoCifrado.replace(/ai/img, "a");
    var textoCifrado = textoCifrado.replace(/ufat/img, "u");

    document.getElementById("decifrado").innerHTML = textoCifrado;

}

function copiar(){

    var contenido = document.querySelector("#decifrado");
    contenido.select();
    document.execCommand("copy")

}