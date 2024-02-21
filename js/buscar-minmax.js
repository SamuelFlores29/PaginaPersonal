let lista = [];
let result = document.getElementById("Resultado");
let pHTML = document.getElementById('listaValores')

//Funcion para añadir valor a la lista
function anadirValor(){
    let valorInput = parseFloat(document.querySelector('input').value);

    //Validamos que el input no se encuentre vacio para evitar valores nulos dentro de la lista
    if(!isNaN(valorInput)){
        lista.push(valorInput);
        limpiarInput('numero'); //Funcion del archivo funciones generales.js
        pHTML.textContent = lista //Muesta los valores dentro de la lista
    }else{
        alert("Ingresa valores")
    }
}


//Funcion para buscar el menor numero dentro de la lista
function buscarMenor(){
    let menor = lista[0]; //Variable donde se almacenara el menor numero

    for(let i = 0; i < lista.length ; i++){
        if(lista[i] < menor){
            menor = lista[i];
        }
    } return menor
}

//Funcion para buscar el mayor numero dentro de la lista
function buscarMayor(){
    let mayor = lista[0]; //Variable donde se almacenara el menor numero

    for(let i = 0; i < lista.length ; i++){
        if (lista[i] > mayor){
            mayor = lista[i];
        }
    } return mayor;
}

//Funcion para mostrar el resultado dentro del HTML
function resultado(){
    let p = document.createElement('p') //Se crea el elemento p ya que la funcion mostrar espera un nodo
    let texto = (`El numero menor es ${buscarMenor()} y el mayor es ${buscarMayor()}`)
    p.textContent = texto
    mostrar('#Resultado',p,'numero'); //Funcion llama de archivo funciones generales.js
}

//Funcion para resetar la pagina
function resetear(){
    result.textContent = ""
    pHTML.textContent = ""
    lista.length = 0
}