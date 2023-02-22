const formulario = document.querySelector("#agregar-nota");
const btnAgregarNota = document.querySelector("#btn-agregar-nota");

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
    alert("Nota guardada");
}

btnAgregarNota.addEventListener("click", btnClick);