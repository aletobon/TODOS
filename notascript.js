class Nota {
    constructor(titulo, descripcion) {
        this.titulo = titulo;
        this.descripcion = descripcion;
    }

    get descripcionDePrueba() {
        return `Titulo: ${this.titulo}
Descripción: ${this.descripcion}`;
    }
}

let notas = [];

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
    notas.push(nota);
    console.log(notas);
    limpiarFormulario();
    alert("Nota guardada");
}

btnAgregarNota.addEventListener("click", btnClick);
