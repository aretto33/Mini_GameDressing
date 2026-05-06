// key: value estructura de datos
const items = {
    personaje: [{nombre:'Pink',ruta:'clothes/character/example1.png'}, {nombre:'NONAME', ruta:'clothes/character/example2.png'}] ,
    bottom:[],
    tops:[],
    dress:[],
}
 // Aseguramos que los nombres coincidan exactamente con las llaves de 'items'
 let indices = {personaje: 0,bottom: 0,tops: 0,dress: 0}
  let categoriaActiva = 'personaje';
  

function mostrarJuego(){
   const inicio = document.getElementById('inicio');
    const juego =document.getElementById('screen-juego');
    if (inicio && juego){
        inicio.style.display = 'none';
        juego.style.display= 'block';
    }else{
        console.error("No se encontraron los parámetros");
    }
}

function cambiarCategoria(nueva){
    categoriaActiva = nueva;
    console.log("La categoria seleccionada es:" + categoriaActiva);
    generarbtnOpciones();
    mostrarImagen();
}
function generarbtnOpciones(){
    const contenedor = document.getElementById('contenedor-opciones');
    const lista = items[categoriaActiva];
     contenedor.innerHTML = '';
    
     // generar las opciones de los botnes que muestren las opciones 
    lista.forEach((item, index) => {
        const boton = document.createElement('button');
        boton.innerText = item.nombre;

        boton.onclick= function(){
            indices[categoriaActiva] = index;
            mostrarImagen();
        };
        contenedor.appendChild(boton);

    });
}

function mostrarImagen() {
    // lista y un lenght == 0
    // pedir primero los items de la lista creada con el array

    // itemsactual - lista [] y los indices de cala item , la mayoria está en 0

    // se debe agregar la capa de la imagen (la ruta de la imagen)

// nombre del item

// dos ciclos if para mostrar la imagen item actual y su ruta de hashmap y luego de mostrarla bloquearla y quede estática el otro ciclo debe mostar el nombre de la imagen


}






// Creamos las funciones para que el HTML no de error
function botonSiguiente() {
    console.log("Siguiente en" + categoriaActiva);
    // 1. Localiza la lista de imágenes que corresponde a la 'categoriaActiva'.
    // 2. Mira en el objeto 'indices' cuál es el número actual para esa categoría y súmale 1.
    
    // 3. El truco del límite: Si el nuevo número es igual a la cantidad de imágenes 
    //    que hay en esa lista, significa que te pasaste. Regrésalo a 0.
    
    // 4. (Para después) Busca el elemento <img> en tu HTML y cámbiale el 'src' 
    //    usando la lista y el nuevo número que calculaste.
}

function botonAtras() {
    console.log("Siguiente en" + categoriaActiva);
    // 1. Localiza la lista de imágenes igual que arriba.
    // 2. Réstale 1 al número guardado en 'indices' para la 'categoriaActiva'.
    
    // 3. El truco del límite: Si el número baja de 0, significa que quieres ir 
    //    al final de la fila. Cámbialo por (el total de imágenes en la lista - 1).
}
