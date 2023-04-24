class SegmentoDecorado {
    constructor(color) {
        this.color = color; 
    }

    obtenerHTML() {
        return `<div class="segmento" style="background-color: ${this.color}"></div>`;
    }
}

function obtenerColor() {
    return "#"+Math.floor(Math.random()*16777215).toString(16).toUpperCase();
}

class Decorado {
    constructor(segmentos) {
        this.segmentos = [];
        for (let i = 0; i < segmentos; i++) {
            const color = obtenerColor();
            const segmento = new SegmentoDecorado(color);
            this.segmentos.push(segmento);
        }
    }

    obtenerHTML() {
        let resultado = "";
        for ( let segmento of this.segmentos ) {
            resultado = resultado + segmento.obtenerHTML();
        }
        return resultado;
    }
}

