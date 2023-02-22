 const formulario = document.querySelector("#agregar-nota") ;
 function even(evento) {
    alert(
        evento.target.titulo.value + ":" +" " +
        evento.target.descripcion.value
        );
 };  
 formulario.addEventListener("submit", even);
