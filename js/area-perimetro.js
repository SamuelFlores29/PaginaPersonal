
function perimetro(){
    const anchura = parseFloat(document.getElementById('anchura').value);
    const altura = parseFloat(document.getElementById('altura').value);
    
    if(!isNaN(anchura && altura)){
        let perimetro = 2*(anchura*altura);
        return mostrar("div","El perimetro es " + perimetro);
    }else{
        return alert("Integrasa valores en altura y ancho")
    }
    
}

function area(){
    const anchura = parseFloat(document.getElementById('anchura').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if(!isNaN(anchura && altura)){
        let area = altura*anchura;
        return mostrar("div","El area es " + area);
    }else{
        return alert("Integrasa valores en altura y ancho")
    }
    
}

function mostrar(etiqueta,texto){
    let container = document.querySelector(etiqueta);

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

function limpiar(){
    document.getElementById('anchura').value = ""
    document.getElementById('altura').value = "" 

}

