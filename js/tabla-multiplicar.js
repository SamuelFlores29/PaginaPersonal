function mostrar(atributo, valor) {
    let a = document.querySelector(atributo);
    a.innerHTML += valor; // Reemplazamos el contenido existente con el nuevo valor
}
function borrar(atributo){
    let a= document.querySelector(atributo);
    a.innerHTML = ""
}

function multiplicar() {
    let numero = parseFloat(document.getElementById('numero').value);
    borrar('p');
    borrar('#resultado')
    mostrar('p', 'Tabla de multiplicar del ' + numero + '<br>'); // Mostramos el encabezado
    for (var i = 1; i < 11; i++) {
        let resultado = numero * i;
        mostrar('#resultado', numero + 'x' + i + ' = ' + resultado + '<br>'); // Agregamos cada resultado a la tabla
    }

}