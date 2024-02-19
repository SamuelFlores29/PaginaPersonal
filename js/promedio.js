let listaHTML= document.getElementById("listaValores");
let resultado = document.getElementById("Resultado");
var listaValores = [];

function anadirValor(){
    let valor = parseFloat(document.querySelector("input").value);
    if(!isNaN(valor)){
        listaValores.push(valor)
        listaHTML.textContent = listaValores;
        limpiarInput('numero');
        console.log(listaValores)
    }else{
        alert("Porfavor ingrese valor al input")
    }
}

function promedio(){
    var suma = 0;
    if(listaValores.length === 0){
        alert("Añada valores a lista")
    }else{
        for(let i = 0; i <= listaValores.length -1; i++){
            suma += listaValores[i]; 
           }
           resultado.innerHTML = `El promedio es ${suma/listaValores.length}`
    }
    
}

function resetear(){
    resultado.textContent = ""
    listaHTML.textContent = ""
    listaValores.length = 0
}