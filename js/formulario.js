class Formulario {
    constructor(controlador) {
        this.controlador = controlador;
        this.crearVista();
        this.establecerNota(null);
    }

    atar(padre) {
       padre.append(this.view);            
    }

    establecerNota(nota) {
        this.creacion = !nota;
        this.notaOriginal = nota || new Nota("", "");
        this.nota = new Nota(this.notaOriginal.titulo, this.notaOriginal.descripcion);
        this.actualizarVista();
    }

    validar() {
        const valido = this.nota.titulo.length > 0 && this.nota.descripcion.length > 0;
        this.btnGuardar.disabled = !valido;
    }

    crearVista() {
        const parser = new DOMParser();
        const shadowDOM = parser.parseFromString(`
            <div class="modal">
                <div class="modal-dialog">
                    <header class="modal-header">
                        <h1></h1>
                        <button id="btn-cerrar-modal"> X </button>  
                    </header>
                    <section class="modal-content">
                        <form id="agregar-nota">
                            <input type="text" id="titulo" name="titulo" placeholder="Escribe titulo" />
                            <textarea cols="50" rows="10" id="descripcion" name="descripcion" placeholder="Que debes hacer... "></textarea>
                        </form>
                    </section>
                    <footer class="modal-footer">
                        <button id="btn-agregar-nota" class="btn-estilo"> Guardar nota </button>
                    </footer>
                </div>
            </div>
        `, "text/html");

        this.view = shadowDOM.querySelector(".modal");
        console.log(shadowDOM, this.view);

        this.tituloModal = this.view.querySelector(".modal-header h1");        
        
        this.inputTitulo = this.view.querySelector("#titulo");
        this.inputTitulo.addEventListener("change", this.inputTituloChange.bind(this));
        this.inputTitulo.addEventListener("input", this.inputTituloChange.bind(this));
        this.inputTitulo.addEventListener("textInput", this.inputTituloChange.bind(this));

        this.inputDescripcion = this.view.querySelector("#descripcion");
        this.inputDescripcion.addEventListener("change", this.inputDescripcionChange.bind(this));
        this.inputDescripcion.addEventListener("input", this.inputDescripcionChange.bind(this));
        this.inputDescripcion.addEventListener("textInput", this.inputDescripcionChange.bind(this));
        
        this.btnGuardar = this.view.querySelector("#btn-agregar-nota");
        this.btnGuardar.addEventListener("click", this.btnGuardarClick.bind(this))

        this.btnCerrar = this.view.querySelector("#btn-cerrar-modal");
        this.btnCerrar.addEventListener("click", this.btnCerrarClick.bind(this));
    }

    actualizarVista() {
        this.tituloModal.innerHTML = this.creacion ? "Agregar nota" : "Editar nota";
        this.inputTitulo.value = this.nota.titulo;
        this.inputDescripcion.value = this.nota.descripcion;
    }

    mostrar(mostrar) {
        if(mostrar){
            this.view.classList.add("open");
        } else {
            this.view.classList.remove("open");
        }        
    }

    //#region Eventos

    btnGuardarClick(e) {
        e.preventDefault();
        this.controlador.guardarNota(this.nota, this.notaOriginal);
        this.mostrar(false);
    }

    inputTituloChange(e) {
        console.log(this, e);
        this.nota.titulo = this.inputTitulo.value;
        this.validar();
    }

    inputDescripcionChange(e) {
        console.log(this, e);
        this.nota.descripcion = this.inputDescripcion.value;
        this.validar();
    }

    btnCerrarClick(e) {
        this.mostrar(false);
    }

    //#endregion
}