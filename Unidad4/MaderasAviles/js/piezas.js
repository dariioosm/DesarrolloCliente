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
    let piezas=JSON.parse(localStorage.getItem('piezas'))||[]

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
    
    function borrar_pieza(){
        if(piezas.indexOf(nueva_pieza)){

        }
    }

    function mod_pieza(){
        prompt('Introduzca numero de pieza que desee modificar')
    }