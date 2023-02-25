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
