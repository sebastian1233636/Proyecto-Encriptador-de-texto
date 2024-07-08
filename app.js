
function mostrarResultado(id, textoNuevo){
    let texto = textoNuevo;
    let parrafo = document.getElementById(id);
    parrafo.textContent = textoNuevo;
    parrafo.style.display = 'block';

}



//Funciones de encriptacion y desencriptacion

function encriptarTexto(){
    let inputT = document.getElementById("entrada_de_texto").value;
    let textoResultado = "";
    for(let i = 0; i < inputT.length; i++){
        let caracterInvalido = inputT[i];


        if(/^[a-z ]$/.test(caracterInvalido)){
            switch(inputT[i]){

                case "e":
                    textoResultado = textoResultado + "enter";
                    break;

                case "i": 
                    textoResultado = textoResultado + "imes";
                    break;

                case "a":
                textoResultado = textoResultado +"ai";
                    break;
                
                case "o":
                    textoResultado = textoResultado +"ober";
                    break;

                case "u":
                    textoResultado = textoResultado +"ufat";

                default:
                    textoResultado = textoResultado + inputT[i];

              }
            }else{
                let aviso = `caracter no valido ${caracterInvalido}`
                return mostrarResultado("resultado",aviso);
            }
    
         }
    return mostrarResultado("resultado",textoResultado);
}

function desencriptarTexto(){
    let inputT = document.getElementById("entrada_de_texto").value;
    let textoResultado = inputT;
    textoResultado = textoResultado.replace(/enter/g, "e");
    textoResultado = textoResultado.replace(/imes/g, "i");
    textoResultado = textoResultado.replace(/ai/g, "a");
    textoResultado = textoResultado.replace(/ober/g, "o");
    textoResultado = textoResultado.replace(/ufat/g, "u");
    return mostrarResultado("resultado",textoResultado);
}


