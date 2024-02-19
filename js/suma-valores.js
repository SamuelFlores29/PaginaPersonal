let listaHTML= document.getElementById("listaValores");
let resultado = document.getElementById("Resultado");
var lista = [];

function anadirValor(){
    let valorInput = parseFloat(document.querySelector('input').value);
    if(!isNaN(valorInput)){
        lista.push(valorInput);
        limpiarInput('numero');
        listaHTML.textContent = lista
    }else{
        alert("Ingresa valores dentro del input")
    }

    return lista
}
function promedio(){
    var suma = 0;
    if(lista.length === 0){
        alert("La lista esta vacia")
    }else{
        for(let i = 0; i <= lista.length -1; i++){
            suma += lista[i]; 
    }    resultado.innerHTML = `La suma de la lista es ${suma}`
    }

}

function resetear(){
    resultado.textContent = ""
    listaHTML.textContent = ""
    listaValores.length = 0
}