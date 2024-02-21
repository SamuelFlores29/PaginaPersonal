//Calcular factorial, la variable factorial se encarga de almacenar el resultado
function calcularFactorial(valor){
let factorial = 1;
    for (let i = 1; i<= valor;i++) {
        factorial *= i;
        }
        return factorial;
    }

//Funcion para mostrar el resultado
function mostrar(etiqueta, texto){
    const contenedor = document.querySelector(etiqueta);

    //Validamos que el contenedor se encuentre vacio
        if(contenedor.firstElementChild){
                contenedor.firstElementChild.textContent = texto;
        }else{
            const p = document.createElement("p");
            p.textContent = texto;
            contenedor.appendChild(p);
        }
}

//Esta funcion muestra el resultado del factorial
function validar(){
let numero = parseFloat(document.getElementById("numero").value);

//Validamos que el input no este vacio
    if(!isNaN(numero)){
        let resultado = calcularFactorial(numero);
        mostrar("div",`El factorial de ${numero} es ${resultado}`)
        limpiar();
    }else{
        alert("Ingresa un valor en el input")
    }
}

//Limpiamos el input
function limpiar(){
    document.getElementById('numero').value = ""
}