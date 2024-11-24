class Pedido {
  //TODO getter y setter de los atributos del pedido

  set cliente(cliente) {
    this._cliente = cliente;
  }
  get cliente() {
    return this._cliente;
  }

  set procesado(procesado) {
    this._procesado =procesado;
  }
  get procesado() {
    return this._procesado;
  }

  set servido(servido) {
    this._servido = servido;
  }
  get servido() {
    return this._servido;
  }

  constructor(cliente, procesado, servido) {
    this._cliente = cliente;
    this._procesado = procesado;
    this._servido = servido;
  }
}
//TODO funcion para coger la fecha actual del sistema
function fechaActual() {
  const hoy = new Date();
  const anno = hoy.getFullYear();
  const mes = String(hoy.getMonth() + 1).padStart(2, "0");
  const dia = String(hoy.getDay()).padStart(2, "0");
  return [dia, mes, anno].join("-");
}

//TODO funcion para hacer autoincremental del nº de pedido
let cont = 0;
function autoincremental() {
  cont++;
  return cont;
}
let inventario = [];
function annadir_pedido(cliente, procesado=false, servido=false) {
  const nuevo_pedido = {
    id: autoincremental(),
    cliente: cliente,
    fecha: fechaActual(),
    esProcesado: procesado,
    esServido: servido,
  };
  inventario.push(nuevo_pedido);
}

function borrar_pedido(){
    const indice=inventario.findIndex()
    let consulta_id=0;
    if(consulta_id==autoincremental()){
        inventario.pop(inventario.indexOf(consulta_id))
    }else{
        alert('Este id es inexistente')
    }
}