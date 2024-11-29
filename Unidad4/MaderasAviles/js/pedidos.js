let pedidos=JSON.parse(localStorage.getItem('pedidos'))||[]
class Pedido {
  constructor(numero_pedido,cliente, procesado = false, servido = false) {
    if(!Number.isInteger(numero_pedido)|| numero_pedido<1){
      throw new Error('El numero del pedido tiene que ser un numero entero (1 o mayor)')
    }if(typeof cliente !== String || cliente.length===0){
      throw new Error('El cliente tiene que ser un string y no estar vacio')
    }if(typeof procesado !==Boolean || typeof servido !==Boolean){
      throw new Error('El pedido tiene que ser un boolean')
    }
    this._numero_pedido=++Pedido.autoincremental
    this._cliente = cliente;
    this._procesado = procesado;
    this._servido = servido;
    this._fecha_peido=Pedido.fechaActual()
    localStorage.setItem('autoincremental',Pedido.autoincremental)
  }
  //TODO funcion para coger la fecha actual del sistema
  static fechaActual(){
  const hoy = new Date();
  const anno = String(hoy.getFullYear());
  const mes = String(hoy.getMonth() + 1).padStart(2, "0");
  const dia = String(hoy.getDate()).padStart(2, "0");
  return [dia, mes, anno].join("-");
  }
}



//TODO funcion para hacer autoincremental del nº de pedido

function annadir_pedido(nuevo_pedido){
  const{_numero_pedido,_cliente,_procesado,_servido}=nuevo_pedido
  if(!Number.isInteger(_numero_pedido)||_numero_pedido<1){
    console.error('El id del pedido debe ser mayor que cero')
    return false
  }if(pedidos.some(pedidos=>pedidos._numero_pedido===_numero_pedido)){
    console.error('Este id de pedido ya existe')
  }if(typeof cliente !=='string'||_cliente.length===0||_cliente.length>50){
    console.error('El cliente debe ser una cadena de caracteres entre 1 y 50')
  }if(typeof _procesado !== 'boolean'){
    console.error('Procesado debe ser boleano')
  }if(typeof _enviado !== 'boleano'){
    console.error('Enviado debe ser un boleano')
  }
  pedidos.push(nuevo_pedido)
  localStorage('pedidos',JSON.stringify(pedidos))
  console.log('pedido añadido correctamente')
}

function borrar_pedido(_numero_pedido){ //? el consulta_id es la etiqueta del formulario
    const indice=inventario.findIndex(pedido=>pedido._numero_pedido===_numero_pedido)
    if(indice!== -1){
        pedidos.splice(indice,1)
        localStorage.setItem('pedidos',JSON.stringify(pedidos))
    }else{
        alert('Este id es inexistente')
    }
}

function update_pedido(nuevo_pedido,mod_valor){
  const indice=pedidos.findIndex(pedido=> pedido._numero_pedido===numero_pedido)
  if(indice===-1){
    throw new error('Este pedido no se encuentra en el inventario')
  }
  const pedido=pedidos[indice]
  if(mod_valor.cliente<=50 && typeof mod_valor.cliente==='string'){
    pedido.cliente=mod_valor.cliente
  }if(typeof mod_valor.procesado==='boolean'){
    pedido.procesado=mod_valor.procesado
  }if(typeof mod_valor.enviado==='boolean'){
    pedido.enviado=mod_valor.enviado
  }
  localStorage.setItem('pedidos',JSON.stringify(pedidos))
}

//TODO recoger los datos del formulario de pedidos
const formulario = document.getElementById('pedido');
formulario.addEventListener('submit', function(event) { 
    event.preventDefault();

    const nombre = document.getElementById('cliente').value.trim();
    const is_procesado = document.getElementById('procesado').checked;
    const is_servido = document.getElementById('servido').checked;
    annadir_pedido(cliente,procesado,servido)
    if(!nombre){
      alert('El campo de cliente es obligatorio')
    }
    alert('Pedido agregado correctamente')
    console.log(nombre.value, fecha.value, is_procesado.checked, is_servido.checked);
});
