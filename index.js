
function encriptar(){


    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    let textoCifrado = texto
        .replace(/a/gi, "qwrfsf")
        .replace(/e/gi, "qweqd")
        .replace(/i/gi, "afwqr")
        .replace(/o/gi, "gagawg")
        .replace(/u/gi, "uniwq");

    if(texto.length != 0 ){
        document.getElementById("texto").value = textoCifrado;  
        tituloMensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent = "";
        muñeco.src = "./img/Encriptar.jpg";
    } else{
        muñeco.src = "./img/Muñeco.png";
        tituloMensaje.textContent = "Ningun mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal("Ops!", "Debes de ingresar un texto","warning");
    }    
}

function desencriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    let textoCifrado = texto
        .replace(/qwrfsf/gi, "a")
        .replace(/qweqd/gi, "e")
        .replace(/afwqr/gi, "i")
        .replace(/gagawg/gi, "o")
        .replace(/uniwq/gi, "u");

        if(texto.length != 0 ){
            document.getElementById("texto").value = textoCifrado;  
            tituloMensaje.textContent = "Texto desencriptado con éxito";
            parrafo.textContent = "";
            muñeco.src = "./img/Desencriptar.jpg";
        }else{
            muñeco.src = "./img/Muñeco.png";
            tituloMensaje.textContent = "Ningun mensaje fue encontrado";
            parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
            swal("Ops!", "Debes de ingresar un texto","warning");
        }           
}