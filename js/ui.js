const formulario = document.querySelector("#agregar-nota");
const btnAgregarNota = document.querySelector("#btn-agregar-nota");
const contenedorNotas = document.querySelector("#lista-notas");
const decorado = document.querySelector("#decorado");

function actualizarListaNotas() {
    let resultado = "";
    for ( let nota of notas ) { // a cada nota del arreglo notas
        resultado = resultado + nota.obtenerHTML(); // debes agregar a contenerdorNotas 
    }
    contenedorNotas.innerHTML = resultado;
}

function limpiarFormulario() {
    formulario.titulo.value = "";
    formulario.descripcion.value = "";
}

function btnClick(e) {
    e.preventDefault();
    const titulo = formulario.titulo.value;
    const descripcion = formulario.descripcion.value;
    const nota = new Nota(titulo, descripcion);
    guardarNota(nota);
    limpiarFormulario();
    actualizarListaNotas();
    alert("Nota guardada");
}

btnAgregarNota.addEventListener("click", btnClick);
actualizarListaNotas();

const miDecorado = new Decorado(7);
decorado.innerHTML = miDecorado.obtenerHTML();
