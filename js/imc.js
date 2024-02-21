//Funcion para mostrar el IMC
function mostrarIMC(){
    let IMC = calcularIMC(); //Funcion retorno el resultado
    let texto = interpreta(IMC); //Funcion interpreta el IMC

    mostrar("Div",texto ); //Funcion para mostrar en el HTML
    limpiar(); // Funcion para limpiar el INPUT
}

//Funcion para calcular IMC
function calcularIMC(){
    let altura = parseFloat(document.getElementById('altura').value)
    let peso = parseFloat(document.getElementById('peso').value)
    let resultado;
    return resultado= (peso / Math.pow(altura, 2)).toFixed(2);
    
}

//Funcion interpreta el resultado de acuerdo al parametro ingresado
function interpreta(resultado){
    if (resultado < 18.5){
        return `Usted tiene un IMC de ${resultado}, su nivel de peso es bajo`
    }else if(resultado > 18.5 && resultado <= 24.9){
        return `Usted tiene un IMC de ${resultado}, su nivel de peso es normal`
    }else{
        return resultado >= 25 && resultado <= 29.9 ? 
         `Usted tiene un IMC de ${resultado}, tiene sobrepeso` : 
         resultado >= 30 ? 
         `Usted tiene un IMC de ${resultado}, tiene obecidad`:
         alert("Ingresa valores en altura y peso")
    }
}

//Funcion para mostrar el resultado
function mostrar(etiqueta, valor){
    const contenedor = document.querySelector(etiqueta);

    //Si el contenedor esta lleno, reemplazamos si esta vacio creamos p
    if(contenedor.firstElementChild){
        contenedor.firstElementChild.textContent = valor;
    }else{
        const p = document.createElement("p");
        p.textContent = valor;
        contenedor.appendChild(p);
    }
}

//Limpiamos el input
function limpiar(){
    document.getElementById('altura').value = ""
    document.getElementById('peso').value = ""
}