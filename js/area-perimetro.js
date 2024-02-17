function perimetro(){
    let anchura = parseFloat(document.getElementById('anchura').value)
    let altura = parseFloat(document.getElementById('altura').value)
    let p = document.querySelector('p');
    let perimetro = 2*(anchura*altura);
    return p.innerHTML = "El perimetro es " + perimetro;
}

function area(){
    let anchura = parseFloat(document.getElementById('anchura').value)
    let altura = parseFloat(document.getElementById('altura').value)
    let p = document.querySelector('p');
    let area = altura*anchura;
    
    return p.innerHTML = "El area es " + area;
}

