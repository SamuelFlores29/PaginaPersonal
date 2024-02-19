let lista = [];
let result = document.getElementById("Resultado");
let pHTML = document.getElementById('listaValores')


function anadirValor(){
    let valorInput = parseFloat(document.querySelector('input').value);
    if(!isNaN(valorInput)){
        lista.push(valorInput);
        limpiarInput('numero');
        pHTML.textContent = lista
    }else{
        alert("Ingresa valores")
    }
}

function buscarMenor(){
    let menor = lista[0];
    for(let i = 0; i < lista.length ; i++){
        if(lista[i] < menor){
            menor = lista[i];
        }
    } return menor
}

function buscarMayor(){
    let mayor = lista[0];
    for(let i = 0; i < lista.length ; i++){
        if (lista[i] > mayor){
            mayor = lista[i];
        }
    } return mayor;
}

function resultado(){
    let p = document.createElement('p')
    let texto = (`El numero menor es ${buscarMenor()} y el mayor es ${buscarMayor()}`)
    p.textContent = texto
    mostrar('#Resultado',p,'numero');
}

function resetear(){
    result.textContent = ""
    pHTML.textContent = ""
    listaValores.length = 0
}