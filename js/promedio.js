let listaHTML= document.getElementById("listaValores");
let resultado = document.getElementById("Resultado");
var listaValores = [];

function anadirValor(){
    let valor = parseFloat(document.querySelector("input").value);
    listaValores.push(valor)
    limpiar('listaValores');
    mostrar('#listaValores',listaValores,'numero');
}

function promedio(){
    var suma = 0;
    for(let i = 0; i <= listaValores.length -1; i++){
     suma += listaValores[i]; 
    }
    resultado.innerHTML = `El promedio es ${suma/listaValores.length}`
}