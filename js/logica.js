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

const claveListaNotas = "notas";
function guardarListaNotas(notas) {
    const valorNotas = JSON.stringify(notas);
    localStorage.setItem(claveListaNotas, valorNotas);
}

function cargarListaNotas() {
    const valorNotas = localStorage.getItem(claveListaNotas);
    let notas = [];
    if (valorNotas) {
        notas = JSON.parse(valorNotas).map(nota => new Nota(nota.titulo, nota.descripcion));
    }
    return notas;
}

let notas = cargarListaNotas();

function guardarNota(nota) {
    notas.push(nota);
    guardarListaNotas(notas);
    console.log(notas);
}

