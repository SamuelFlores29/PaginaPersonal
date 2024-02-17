let listaHTML= document.getElementById("listaValores");
let resultado = document.getElementById("Resultado");
var listaValores = [];

function mostrarValores(){
    listaHTML.innerHTML= listaValores;
}

function anadirValor(){
    let valor = parseFloat(document.querySelector("input").value);
    listaValores.push(valor)
    limpiar();
    mostrarValores();
    console.log(listaValores)
}
function limpiar(){
    document.querySelector("input").value= "";
}

function promedio(){
    var suma = 0;
    for(let i = 0; i <= listaValores.length -1; i++){
     suma += listaValores[i]; 
    }
    resultado.innerHTML = `El promedio es ${suma/listaValores.length}`
}