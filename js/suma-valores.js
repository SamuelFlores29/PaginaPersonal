let listaHTML= document.getElementById("listaValores");
let resultado = document.getElementById("Resultado");
var lista = [];

//Añadimos valor a la lista, retorna la lista
function anadirValor(){
    let valorInput = parseFloat(document.querySelector('input').value);

    //Validamos que la lista no este vacia
    if(!isNaN(valorInput)){
        lista.push(valorInput); //Añadimos el valor a la lista
        limpiarInput('numero'); //Limpiamos el input
        listaHTML.textContent = lista //Mostramos la lista en el html
    }else{
        alert("Ingresa valores dentro del input")
    }

    return lista
}

//Funcion para calcular la suma
function sumar(){
    var suma = 0;

    if(lista.length === 0){
        alert("La lista esta vacia")
    }else{
        for(let i = 0; i <= lista.length -1; i++){
            suma += lista[i]; 
    }    resultado.innerHTML = `La suma de la lista es ${suma}`
    }

}

//Resetemaos la pagina
function resetear(){
    resultado.textContent = ""
    listaHTML.textContent = ""
    lista.length = 0
}