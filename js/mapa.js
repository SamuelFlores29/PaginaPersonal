let boton = document.getElementById("buscar");
let borrarPuntos = document.getElementById("borraPuntos");
let unir = document.getElementById("unirPuntos");
let crearPoligono = document.getElementById("crearPoligono");
let listaPuntos = [];

//creacion del mapa
const map = L.map('map').setView([-10.2338,-74.3994],4);

//Añadir capa al mapa
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png?',{}).addTo(map);

//funcion para buscar coordenadas
boton.addEventListener("click",(e)=>{
    let lat = document.getElementById("lat").value;
    let long = document.getElementById("long").value;
    e.preventDefault();
    let marcador = L.marker([lat, long]).addTo(map)
    .bindPopup(`Punto ubicado en </br> Latitud:${lat} </br> Longitud ${long}`)
    map.setView([lat,long],5)
    listaPuntos.push(marcador._latlng);
})

//Dar click en mapa para ver coordenadas
map.addEventListener("click" ,(e)=> {
    let popup = L.popup();
    popup.setLatLng(e.latlng);
    popup.setContent(`Latitud: ${e.latlng.lat.toFixed(4)} </br> Logitud: ${e.latlng.lng.toFixed(4)}`).openOn(map);

    setTimeout(() =>{
        map.closePopup(popup)
    },8000)

   
})

//Unir puntos del mapa
unir.addEventListener("click",(e)=>{
    e.preventDefault();
    let linea = L.polyline(listaPuntos,{color:'red'}).addTo(map);

    let distanciaTotal = 0;

    let coordenadas = linea.getLatLngs(); // Obtener las coordenadas de la polilínea

    for (let i = 0; i < coordenadas.length - 1; i++) {
        let puntoActual = coordenadas[i];
        let puntoSiguiente = coordenadas[i + 1];
        distanciaTotal += puntoActual.distanceTo(puntoSiguiente)/1000; // Calcular la distancia entre dos puntos consecutivos
    }

    linea.bindPopup(distanciaTotal.toFixed(2) + " km").addTo(map);
});

//Borrar puntos del mapa
borrarPuntos.addEventListener("click",()=>{
    map.removeLayer(marker);
})

crearPoligono.addEventListener("click",(e)=>{
    let mapContainer = document.getElementById('map'); // Obtener el contenedor del mapa
    mapContainer.style.cursor = 'pointer'; 
    let poligonoCreado = false;
    e.preventDefault();
    alert("De click en el mapa para añadir los puntos y cree el poligono con click derecho")
    let listaPuntos = [];
    var marcador = [];
    map.on("click",(e)=>{
        
        if(!poligonoCreado){
            listaPuntos.push(e.latlng);
            marcador.push(L.marker(e.latlng).addTo(map));
        }
    })

    map.on("contextmenu",()=>{
        if(listaPuntos.length >= 3){
            L.polygon(listaPuntos,{color: "red"}).addTo(map);
            listaPuntos.length = [];
            poligonoCreado = true;
            mapContainer.style.cursor = 'grab'; 
            for (let i = 0; i < marcador.length; i++) {
                map.removeLayer(marcador[i]); 
            }
            
            
            return;
        }
    })
})

