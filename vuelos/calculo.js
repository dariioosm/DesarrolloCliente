import { VueloMuyRentable } from "./muyrentable";
import { Vuelos } from "./vuelos";
const todosVuelos = [];
const rentables = [];

function annadirVuelo(codigo, numPlazas, numBillete, precioBillete) {
    todosVuelos.push(new Vuelos(codigo, numPlazas, numBillete, precioBillete));
    listaVuelos();
    console.log('Vuelo añadido correctamente');
}

function modificarVuelo(codigo, nuevoNumPlazas, nuevoNumBillete, nuevoPrecioBillete) {
    const vuelo = todosVuelos.find(v => v.codigo === codigo);
    if (vuelo) {
        vuelo.numPlazas = nuevoNumPlazas;
        vuelo.numBillete = nuevoNumBillete;
        vuelo.precioBillete = nuevoPrecioBillete;
        listaVuelos();
    } else {
        console.log('No se ha podido modificar');
    }
}

function listaVuelos() {
    let tbody = document.querySelector("#tablaVuelos tbody");
    tbody.innerHTML = "";
    todosVuelos.forEach(vuelo => {
        let tr = document.createElement("tr");
        tr.innerHTML = `<td>${vuelo.codigo}</td><td>${vuelo.numPlazas}</td><td>${vuelo.numBillete}</td><td>${vuelo.precioBillete}</td>`;
        tbody.appendChild(tr);
    });
}

function calcularRentable() {
    rentables.length = 0;
    let tbodyRentable = document.querySelector("#vuelosMuyRentables tbody");
    tbodyRentable.innerHTML = "";

    todosVuelos.forEach(vuelo => {
        const ingreso = vuelo.numBillete * vuelo.precioBillete;
        if (ingreso > 20000) {
            rentables.push(new VueloMuyRentable(vuelo.codigo, ingreso.toFixed(2)));
            let trRentable = document.createElement("tr");
            trRentable.innerHTML = `<td>${vuelo.codigo}</td> <td>${ingreso.toFixed(2)}</td>`;
            tbodyRentable.appendChild(trRentable);
        }
    });
}

document.getElementById('formAnnadir').addEventListener('submit', (evento) => {
    evento.preventDefault();
    const codigo = parseInt(document.getElementById("codigo").value);
    const plazas = parseInt(document.getElementById("numPlazas").value);
    const billetes = parseInt(document.getElementById("numBillete").value);
    const precio = parseInt(document.getElementById("precioBillete").value);
    annadirVuelo(codigo, plazas, billetes, precio);
    evento.target.reset();
});

document.getElementById("formModificar").addEventListener('submit', (evento) => {
    evento.preventDefault();
    const codigo = parseInt(document.getElementById("modCodigo").value);
    const nuevasPlazas = parseInt(document.getElementById("modNumPlazas").value);
    const nuevosBilletes = parseInt(document.getElementById("modNumBillete").value);
    const nuevoPrecio = parseInt(document.getElementById("modPrecioBillete").value);
    modificarVuelo(codigo, nuevasPlazas, nuevosBilletes, nuevoPrecio);
    evento.target.reset();
});

document.getElementById('calcular').addEventListener('click', calcularRentable);
