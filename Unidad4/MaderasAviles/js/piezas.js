// TODO Inicialización de lista de piezas desde LocalStorage
let piezas = JSON.parse(localStorage.getItem("piezas")) || [];


function guardarPiezas() {
    try {
        localStorage.setItem("piezas", JSON.stringify(piezas));
    } catch (error) {
        console.error("Error al guardar en LocalStorage:", error);
    }
}


function agregarPieza(nuevaPieza) {
    const { numeroPieza } = nuevaPieza;

    //TODO Validar que no exista el número de pieza
    if (piezas.some(pieza => pieza.numeroPieza === numeroPieza)) {
        console.error("El número de pieza ya existe.");
        return false;
    }

    try {
        const pieza = new Pieza(
            nuevaPieza.numeroPieza,
            nuevaPieza.numeroPedido,
            nuevaPieza.largo,
            nuevaPieza.ancho,
            nuevaPieza.grosor,
            nuevaPieza.color,
            nuevaPieza.ambasCaras,
            nuevaPieza.cortada
        );

        piezas.push(pieza);
        guardarPiezas();
        console.log("Pieza agregada con éxito:", pieza);
        return true;
    } catch (error) {
        console.error("Error al agregar la pieza:", error.message);
        return false;
    }
}


function obtenerPiezasPorPedido(numeroPedido) {
    return piezas.filter(pieza => pieza.numeroPedido === numeroPedido);
}


function listarPiezas() {
    console.table(piezas);
}

function eliminarPieza(numeroPieza) {
    const index = piezas.findIndex(pieza => pieza.numeroPieza === numeroPieza);
    if (index !== -1) {
        piezas.splice(index, 1);
        guardarPiezas();
        console.log(`Pieza ${numeroPieza} eliminada con éxito.`);
    } else {
        console.error(`No se encontró la pieza con el número ${numeroPieza}.`);
    }
}


function modificarPieza(numeroPieza, datosActualizados) {
    const pieza = piezas.find(pieza => pieza.numeroPieza === numeroPieza);
    if (pieza) {
        Object.assign(pieza, datosActualizados);
        guardarPiezas();
        console.log(`Pieza ${numeroPieza} modificada con éxito.`, pieza);
    } else {
        console.error(`No se encontró la pieza con el número ${numeroPieza}.`);
    }
}

class Pieza {
    constructor(numeroPieza, numeroPedido, largo, ancho, grosor, color = "Natural", ambasCaras = false, cortada = false) {
        if (!Number.isInteger(numeroPieza) || numeroPieza < 1) {
            throw new Error("El número de pieza debe ser un entero mayor o igual a 1.");
        }
        if (!Number.isInteger(numeroPedido) || numeroPedido < 1) {
            throw new Error("El número de pedido debe ser un entero mayor o igual a 1.");
        }
        if (largo <= 0 || ancho <= 0 || grosor <= 0) {
            throw new Error("Largo, ancho y grosor deben ser mayores a 0.");
        }
        if (typeof color !== "string" || color.length === 0) {
            throw new Error("El color debe ser una cadena de texto válida.");
        }
        if(color=='natural'&& ambasCaras===true){
            throw new Error("Si el color de la pieza es natural no tiene chapeado.");
        }
        if (typeof ambasCaras !== "boolean") {
            throw new Error("El valor de 'ambasCaras' debe ser booleano.");
        }
        if (typeof cortada !== "boolean") {
            throw new Error("El valor de 'cortada' debe ser booleano.");
        }

        this.numeroPieza = numeroPieza;
        this.numeroPedido = numeroPedido;
        this.largo = largo;
        this.ancho = ancho;
        this.grosor = grosor;
        this.color = color;
        this.ambasCaras = ambasCaras;
        this.cortada = cortada;
    }


    calcularSuperficie() {
        return this.largo * this.ancho;
    }

    calcularVolumen() {
        return this.largo * this.ancho * this.grosor;
    }

    mostrarDetalles() {
        return `
            Número de Pieza: ${this.numeroPieza}
            Número de Pedido: ${this.numeroPedido}
            Largo: ${this.largo} cm
            Ancho: ${this.ancho} cm
            Grosor: ${this.grosor} cm
            Color: ${this.color}
            Ambas Caras Chapeadas: ${this.ambasCaras ? "Sí" : "No"}
            Cortada: ${this.cortada ? "Sí" : "No"}
            Superficie: ${this.calcularSuperficie()} cm²
            Volumen: ${this.calcularVolumen()} cm³
        `;
    }
}

