let piezas=JSON.parse(localStorage.getItem('piezas'))||[]
//? llamar a pedido para obtener el id del pedido en el que se ecuentra la pieza
import Pedido from './pedidos.js'
class Piezas{

    //TODO creacion de getter y setter del objeto
    set largo(largo){
        this._largo=largo
    }

    get largo(){
        return this._largo
    }

    set ancho(ancho){
        this._ancho=ancho
    }
    get ancho(){
        return this._ancho
    }

    set grosor(grosor){
        this._grosor=grosor
    }
    get grosor(){
        return this._ancho
    }

    set color(color){
        this._color=color
    }
    get color(){
        return this._color
    }

    set chapeado(chapeado){
        this._chapeado=chapeado
    }
    get chapeado(){
        return this._chapeado
    }

    set cortado(cortado){
        this._cortado=cortado
    }
    get cortado(){
        return this._cortado
    }
    //TODO creacion del constructor de la pieza
    //?isnan en la toma de datos
    //?si uso typeof se lanzan excepciones
    
    constructor(numero_pieza,numero_pedido,largo,ancho,grosor,color,chapeado,cortado){
        if(!Number.isInteger(numero_pieza||numero_pieza<1)){
            throw new error('El numero de pieza debe ser mayor que 0')
        }
        if(!Number.isInteger(numero_pedido)||numero_pedido<1){
            throw new error('El numero de pedido debe ser mayor que 0')
        }if(largo<=0||ancho<=0||grosor<=0){
            throw new error('Largo ancho y grosor deben ser mayores que 0')
        }if(typeof color!=='string'||color.length===0){
            throw new error('El color debe ser una cadena de caracteres')
        }if(typeof ambas_caras!==Boolean){
            throw new error('El valor debe ser un boleano')
        }if(typeof cortada!==Boolean){
            throw new error('El valor debe ser un boleano')
        }
        this.numero_pieza=numero_pieza
        this._largo=largo
        this._ancho=ancho
        this._grosor=grosor
        this._color=color
        this._chapeado=chapeado
        this._cortado=cortado
    }
    //TODO calcular superficies y volumenes
    calculaSuperficie(){
        return this._ancho*this._largo
    }
    calcularVolumen(){
        return this._ancho*this._largo*this._grosor
    }
}
    //TODO realizar metodos crud para los objetos pieza
    

    function annadir_pieza(nueva_pieza){
        const {numero_pieza,numero_pedido,largo,ancho,grosor,color,chapeado,cortado}=nueva_pieza
        if(!Number.isInteger(numero_pieza||numero_pieza<1)){
            console.error('El numero de pieza debe ser mayor que 0')
            return false
        }if(piezas.some(piezas=>piezas.numero_pieza===numero_pieza)){
            console.error('El id de esa pieza ya existe')
            return false
        }if(!Number.isInteger(numero_pedido)||numero_pedido<1){
            console.error('El numero de pedido debe ser mayor que 0')
        }if(largo<=0||ancho<=0||grosor<=0){
            throw new error('Largo ancho y grosor deben ser mayores que 0')
            return false
        }if(typeof color!=='string'||color.length===0){
            console.error('El color debe ser una cadena de caracteres')
            return false
        }if(typeof ambas_caras!==Boolean){
            console.error('El valor debe ser un boleano')
            return false
        }if(typeof cortada!==Boolean){
            console.error('El valor debe ser un boleano')
            return false
        }
        piezas.push(nueva_pieza)
        localStorage('piezas',JSON.stringify(piezas))
        console.log('Pieza añadida correctamente')

    }
    
    function borrar_pieza(numero_pieza){
        const indice=piezas.findIndex( p=>  p.numero_pieza=== numero_pieza)
        if(indice=== -1){
            throw new error('Esta pieza no se encuentra en el pedido')
        }
        piezas.splice(indice,1)
        localStorage.setItem('piezas',JSON.stringify(piezas))
    }

    function mod_pieza(nueva_pieza,mod_valor){
        const indice=piezas.findIndex(p=> p.numero_pieza===numero_pieza)
        if(indice===-1){
            throw new error('Esta pieza no se encuentra en el pedido')
        }
        const pieza= piezas[indice]
        if(mod_valor.largo>0){
            pieza.largo=mod_valor.largo
        }
        if(mod_valor.ancho>0){
            pieza.ancho=mod_pieza.ancho
        }
        if(mod_pieza.grosor>0){
            pieza.grosor=mod_valor.grosor
        }if (typeof mod_valor.color === 'string' && mod_valor.color.length > 0) {
            pieza.color = mod_valor.color;
        }
        if (typeof mod_valor.chapeado === 'boolean') {
            pieza.chapeado = mod_valor.chapeado;
        }
        if (typeof mod_valor.cortado === 'boolean') {
            pieza.cortado = mod_pieza.cortado;
        }   
        localStorage.setItem('piezas',JSON.stringify(piezas))

    }