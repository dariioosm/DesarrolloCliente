
class pieza{

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

