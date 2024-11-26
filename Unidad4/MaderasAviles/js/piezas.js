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
    
    constructor(numero_pieza,largo,ancho,grosor,color,chapeado,cortado){
        this.numero_pieza=numero_pieza
        this._largo=largo
        this._ancho=ancho
        this._grosor=grosor
        this._color=color
        this._chapeado=chapeado
        this._cortado=cortado
    }
}
    //TODO realizar metodos crud para los objetos pieza
    let piezas=[]

    function annadir_pieza(numero_pieza,largo,ancho,grosor,color,chapeado,cortado){
        const nueva_pieza={
            identificador:numero_pieza,
            largo:largo,
            ancho:ancho,
            grosor:grosor,
            color:color,
            is_chapeado:chapeado,
            is_cortado:cortado
        };
        piezas.push(nueva_pieza)
    }
    
    function borrar_pieza(){
        
    }

    function mod_pieza(){
        prompt('Introduzca numero de pieza que desee modificar')
    }