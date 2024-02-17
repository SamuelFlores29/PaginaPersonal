function calcularFactorial(valor){
let factorial = 1;
    for (let i = 1; i<= valor;i++) {
        factorial *= i;
        }
        return factorial;
    }

function mostrar(etiqueta, texto){
    const contenedor = document.querySelector(etiqueta);
        if(contenedor.firstElementChild){
                contenedor.firstElementChild.textContent = texto;
        }else{
            const p = document.createElement("p");
            p.textContent = texto;
            contenedor.appendChild(p);
        }
}

function validar(){
let numero = parseFloat(document.getElementById("numero").value);
    if(!isNaN(numero)){
        let resultado = calcularFactorial(numero);
        mostrar("div",`El factorial de ${numero} es ${resultado}`)
        limpiar();
    }else{
        alert("Ingresa un valor en el input")
    }
}

function limpiar(){
    document.getElementById('numero').value = ""
}