//Funcion para calcular el perimetro
function perimetro(){
    const anchura = parseFloat(document.getElementById('anchura').value);
    const altura = parseFloat(document.getElementById('altura').value);
    
    //Validacion si los campos input se encuentran vacios
    if(!isNaN(anchura && altura)){
        let perimetro = 2*(anchura*altura);
        return mostrar("div","El perimetro es " + perimetro);
    }else{
        return alert("Integrasa valores en altura y ancho")
    }
    
}

//Funcion para calcular el area
function area(){
    const anchura = parseFloat(document.getElementById('anchura').value);
    const altura = parseFloat(document.getElementById('altura').value);

    //Validacion si los campos input se encuentran vacios
    if(!isNaN(anchura && altura)){
        let area = altura*anchura;
        return mostrar("div","El area es " + area);
    }else{
        return alert("Integrasa valores en altura y ancho")
    }
    
}

//Funcion para mostrar el resultado
function mostrar(etiqueta,texto){
    let container = document.querySelector(etiqueta);

    //Validamos la existensi del texto, si existe reemplazamos y si no existe creamos el elemento 'p'
    if(container.firstElementChild){
        limpiar();
        container.firstElementChild.textContent = texto
    }else{
        limpiar();
        let p = document.createElement("p");
        p.textContent = texto;
        container.appendChild(p);
    }
}


//Funcion para limpiar los input
function limpiar(){
    document.getElementById('anchura').value = ""
    document.getElementById('altura').value = "" 

}

