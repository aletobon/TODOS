const formulario = document.querySelector("#agregar-nota");
const btnAgregarNota = document.querySelector("#btn-agregar-nota");

function btnClick(e) {
    console.log(e);
    alert(`${formulario.titulo.value}: ${formulario.descripcion.value}`);
    e.preventDefault();
}

btnAgregarNota.addEventListener("click", btnClick);
