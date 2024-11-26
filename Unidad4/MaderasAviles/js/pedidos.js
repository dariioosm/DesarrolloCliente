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
const cont = 0;
function autoincremental() {
  Pedido.cont++; //? y si no poner Pedido.cont = cont++
  return cont;
}
const inventario = [];
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

function borrar_pedido(consulta_id){ //? el consulta_id es la etiqueta del formulario
    const indice=inventario.findIndex(pedido=>pedido.id===consulta_id)
    if(indice!= -1){
        inventario.pop(indice)
    }else{
        alert('Este id es inexistente')
    }
}

function update_pedido(){
  const indice=inventario.findIndex
}

//TODO recoger los datos del formulario de pedidos
const formulario = document.getElementById('pedido');
formulario.addEventListener('submit', function(event) { 
    event.preventDefault();

    const nombre = document.getElementById('cliente').value.trim;
    const fecha = document.getElementById('fecha').value;
    const is_procesado = document.getElementById('procesado').checked;
    const is_servido = document.getElementById('servido').checked;
    annadir_pedido(cliente,procesado,servido)
    if(!cliente){
      alert('El campo de cliente es obligatorio')
    }
    alert('Pedido agregado correctamente')
    console.log(nombre.value, fecha.value, is_procesado.checked, is_servido.checked);
});
