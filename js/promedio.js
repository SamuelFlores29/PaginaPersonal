let listaHTML= document.getElementById("listaValores");
let resultado = document.getElementById("Resultado");
var listaValores = [];

//Funcion para añadir valores a la lista
function anadirValor(){
    let valor = parseFloat(document.querySelector("input").value);

    //Validamos que el input no este vacio
    if(!isNaN(valor)){
        listaValores.push(valor) //Añadimos el valor a la lista
        listaHTML.textContent = listaValores; //Mostramos el contenido de la lista
        limpiarInput('numero'); //Limpiamos el input
    }else{
        alert("Porfavor ingrese valor al input")
    }
}

//Funcion para calcular el promedio
function promedio(){
    var suma = 0;

    //Validamos que la lista no este vacia
    if(listaValores.length === 0){
        alert("Añada valores a lista")
    }else{
        //Recorremos la lista y almacenamos la suma en la variable suma
        for(let i = 0; i <= listaValores.length -1; i++){
            suma += listaValores[i]; 
           }
           resultado.innerHTML = `El promedio es ${(suma/listaValores.length).toFixed(2)}`
    }
    
}

//Resetamos la pagina
function resetear(){
    resultado.textContent = ""
    listaHTML.textContent = ""
    listaValores.length = 0
}

