const claveListaNotas = "notas";

function guardarListaNotas(notas) {
    const valorNotas = JSON.stringify(notas);
    localStorage.setItem(claveListaNotas, valorNotas);
}

function transformarNota(nota) {
    return new Nota(nota.titulo, nota.descripcion);
}

function cargarListaNotas() {
    const valorNotas = localStorage.getItem(claveListaNotas);
    let notas = [];
    if (valorNotas) {
        const datosNotas = JSON.parse(valorNotas);
        for (const nota of datosNotas) {
            notas.push(transformarNota(nota));
        }
    }
    return notas;
}

let notas = cargarListaNotas();

function guardarNota(nota) {
    notas.push(nota);
    guardarListaNotas(notas);
    console.log(notas);
}
