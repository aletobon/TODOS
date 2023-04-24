class Nota {
    constructor(titulo, descripcion) {
        this.titulo = titulo;
        this.descripcion = descripcion;
    }

    obtenerHTML(n) {
        return `
        <article class="nota" data-n="${n}">
            <input type="checkbox" />
            <h1>${this.titulo}</h1>
            <p>${this.descripcion}</p>
            <i id="editar-nota" class="action fa-solid fa-pencil"></i>
            <i id="eliminar-nota" class="action fa-solid fa-trash-can"></i>
        </article>
        `;
    }

}

