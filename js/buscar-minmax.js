let lista = [];
let mostrar = document.querySelector("#Resultado")
function anadirValor(){
    let numeros = parseFloat(document.querySelector("input").value);
        if (numeros != ""){
            lista.push(numeros)
            limpiar();
        }else{
            alert("Ingresa un valor valido")
        }
    console.log(lista)
};

function limpiar(){
    document.querySelector("input").value = ""
}

function suma  (){
    let numero = lista[0]
        for(let i = 1; i<= lista.length - 1; i++){
            numero += lista[i]
        }
    mostrar.innerHTML = numero;
}