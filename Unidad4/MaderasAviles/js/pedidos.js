class Pedido {
  constructor(numeroPedido, cliente, fechaPedido, procesado = false, servido = false) {
      if (!Number.isInteger(numeroPedido) || numeroPedido < 1) {
          throw new Error("El número de pedido debe ser un entero mayor o igual a 1.");
      }
      if (typeof cliente !== "string" || cliente.length === 0) {
          throw new Error("El cliente debe ser un nombre válido.");
      }
      if (!/^\d{4}-\d{2}-\d{2}$/.test(fechaPedido)) {
          throw new Error("La fecha debe tener el formato YYYY-MM-DD.");
      }
      const fechaActual = new Date();
      const fechaIngresada = new Date(fechaPedido);
      if (fechaIngresada > fechaActual) {
          throw new Error("La fecha del pedido no puede ser posterior al día actual.");
      }
      if (typeof procesado !== "boolean" || typeof servido !== "boolean") {
          throw new Error("Procesado y servido deben ser valores booleanos.");
      }
      this.numeroPedido = numeroPedido;
      this.cliente = cliente;
      this.fechaPedido = fechaPedido;
      this.procesado = procesado;
      this.servido = servido;
  }
}

const pedidos = [];

function agregarPedido(pedido) {
  if (pedidos.some(p => p.numeroPedido === pedido.numeroPedido)) {
      throw new Error(`El pedido con número ${pedido.numeroPedido} ya existe.`);
  }
  pedidos.push(pedido);
}

function eliminarPedido(numeroPedido) {
  const indice = pedidos.findIndex(p => p.numeroPedido === numeroPedido);
  if (indice === -1) {
      throw new Error(`No se encontró un pedido con el número ${numeroPedido}.`);
  }
  pedidos.splice(indice, 1);
}

function modificarPedido(numeroPedido, datos) {
  const pedido = pedidos.find(p => p.numeroPedido === numeroPedido);
  if (!pedido) {
      throw new Error(`No se encontró un pedido con el número ${numeroPedido}.`);
  }
  Object.assign(pedido, datos);
}

function consultarPedido(numeroPedido) {
  const pedido = pedidos.find(p => p.numeroPedido === numeroPedido);
  if (!pedido) {
      throw new Error(`No se encontró un pedido con el número ${numeroPedido}.`);
  }
  return pedido;
}
