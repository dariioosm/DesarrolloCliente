 export class Vuelos{
    constructor(codigo,numPlazas,numBillete,precioBillete){
        if(!Number.isInteger(codigo)||codigo<1){
            throw new Error('El codigo tiene que ser un numero y ser mayor que cero')
        }if(!Number.isInteger(numPlazas)||numPlazas<1){
            throw new Error('El numero de plazas tiene que ser un numero y ser mayor que cero')
        }if(!Number.isInteger(numBillete)||numBillete>numPlazas0){
            throw new Error('El numero de billetes no puede ser mayor que el numero de plazas')
        }
        if(!Number.isInteger(precioBillete)||precioBillete<1){
            throw new Error('El precio tiene que ser un numero y ser mayor que cero')
        }
        this.codigo=codigo;
        this.numPlazas=numPlazas;
        this.numBillete=numBillete;
        this.precioBillete=precioBillete;
    }
}

