const msgConfirmarEliminar = `¿Deseas eliminar la nota?
Esta acción es irreversible`;
const msgNotaEliminada =  `Nota eliminada`;

const formulario = document.querySelector("#agregar-nota");
const btnAgregarNota = document.querySelector("#btn-agregar-nota");
const contenedorNotas = document.querySelector("#lista-notas");
const decorado = document.querySelector("#decorado");

function actualizarListaNotas() {
    let resultado = "";
    for (let i = 0; i < notas.length; i++) {
         // a cada nota del arreglo notas
        const nota = notas[i];
        resultado = resultado + nota.obtenerHTML(i); // debes agregar al resultado
    }
    // y asignar todo el resultado al html de contenedorNotas
    contenedorNotas.innerHTML = resultado;

    const notasHTML = document.querySelectorAll(".nota");
    for (const notaHTML of notasHTML) {
        const btnEliminar = notaHTML.querySelector("#eliminar-nota");
        btnEliminar.addEventListener("click", btnEliminarClick);
    }
}

function limpiarFormulario() {
    formulario.titulo.value = "";
    formulario.descripcion.value = "";
}

function btnEliminarClick(e) {
    e.preventDefault();
    const btnEliminar = e.target;
    const notaHTML = btnEliminar.parentElement;
    const n = parseInt(notaHTML.dataset.n);

    const confirmacion = confirm(msgConfirmarEliminar);
    if (confirmacion)
    {
        eliminarNota(n);
        actualizarListaNotas();
        setTimeout(() => {
            alert(msgNotaEliminada);
        }, 100);
    }
    console.log("btnEliminarClick", e, n, notaHTML, btnEliminar, confirmacion);
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

function generarNotas(n = 10) {
    for (let i = 0; i < n; i++) {
        const nota = new Nota(
            "Nota " + i,
            "Esta es la nota n°" + i
        );
        notas.push(nota);
    }
    guardarListaNotas(notas);
    actualizarListaNotas();
}
