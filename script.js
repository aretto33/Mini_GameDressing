
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
