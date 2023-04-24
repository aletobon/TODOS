class Nota {
    constructor(titulo, descripcion) {
        this.titulo = titulo;
        this.descripcion = descripcion;
    }

    get descripcionDePrueba() {
        return `Titulo: ${this.titulo}
Descripción: ${this.descripcion}`;
    }

    obtenerHTML() {
        return `
        <article class="nota">
            <input type="checkbox" />
            <h1>${this.titulo}</h1>
            <p> ${this.descripcion} </p>
        </article>
        `;
    }

}
