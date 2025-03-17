export class Vuelos {
    constructor(codigo, numPlazas, numBillete, precioBillete) {
        if (!Number.isInteger(codigo) || codigo < 1) {
            throw new Error('El código debe ser un número mayor que cero');
        }
        if (!Number.isInteger(numPlazas) || numPlazas < 1) {
            throw new Error('El número de plazas debe ser un número mayor que cero');
        }
        if (!Number.isInteger(numBillete) || numBillete > numPlazas) {
            throw new Error('El número de billetes no puede ser mayor que el número de plazas');
        }
        if (!Number.isInteger(precioBillete) || precioBillete < 1) {
            throw new Error('El precio debe ser un número mayor que cero');
        }
        this.codigo = codigo;
        this.numPlazas = numPlazas;
        this.numBillete = numBillete;
        this.precioBillete = precioBillete;
    }
}