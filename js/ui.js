const msgConfirmarEliminar = `¿Deseas eliminar la nota?
Esta acción es irreversible`;
const msgNotaEliminada =  `Nota eliminada`;
const msgConfirmarEditar = `¿deseas editar la nota?
Una vez editado no se podra recuperar la información anterior`;

const btnAgregarNota = document.querySelector("#btn-agregar-nota");
const contenedorNotas = document.querySelector("#lista-notas");
const decorado = document.querySelector("#decorado");
const btnNota = document.querySelector("#btn-nota");
const btnCerrarModal = document.querySelector("#btn-cerrar-modal");

const formulario = new Formulario({
    guardarNota: (nota, notaOriginal) => {
        const i = notas.indexOf(notaOriginal);
        if(i == -1){
            guardarNota(nota);
        } else {
            notas[i] = nota;
        }
        actualizarListaNotas();
    }
});
formulario.atar(document.body);

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

        const btnEditar = notaHTML.querySelector("#editar-nota");
        btnEditar.addEventListener("click", btnEditarClick);
    }
}

//#region Eventos

function btnEditarClick(e) {
    e.preventDefault();
    const btnEditar = e.target;
    const notaHTML = btnEditar.parentElement;
    const n = parseInt(notaHTML.dataset.n);
    const nota = notas[n];
    formulario.establecerNota(nota);
    formulario.mostrar(true);
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

function btnNotaClick(e) {
    e.preventDefault(e);
    formulario.establecerNota(null);
    formulario.mostrar(true);
}

//#endregion

btnNota.addEventListener("click", btnNotaClick);
actualizarListaNotas();

const miDecorado = new Decorado(10);
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
