function mostrarIMC(){
    let IMC = calcularIMC();
    let texto = interpreta(IMC);

    mostrar("Div",texto );
    limpiar();
}

function calcularIMC(){
    let altura = parseFloat(document.getElementById('altura').value)
    let peso = parseFloat(document.getElementById('peso').value)
    let resultado = document.querySelector('#Resultado');
    return resultado= (peso / Math.pow(altura, 2)).toFixed(2);
    
}

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

function mostrar(etiqueta, valor){
    const contenedor = document.querySelector(etiqueta);
    if(contenedor.firstElementChild){
        contenedor.firstElementChild.textContent = valor;
    }else{
        const p = document.createElement("p");
        p.textContent = valor;
        contenedor.appendChild(p);
    }
}

function limpiar(){
    document.getElementById('altura').value = ""
    document.getElementById('peso').value = ""
}