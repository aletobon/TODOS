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

const formulario = document.querySelector("#agregar-nota");
const btnAgregarNota = document.querySelector("#btn-agregar-nota");

function btnClick(e) {
    e.preventDefault();
    const titulo = formulario.titulo.value;
    const descripcion = formulario.descripcion.value;

    const nota = new Nota(titulo, descripcion);
    console.log(e, nota);
    alert(nota.descripcionDePrueba);
}

btnAgregarNota.addEventListener("click", btnClick);
