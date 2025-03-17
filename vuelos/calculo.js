import VueloMuyRentable from "./muyrentable";
import Vuelos from "./vuelos";

const todosVuelos = [];
const rentables = [];

// Cargar vuelos desde localStorage
function loadFlights() {
    const saved = JSON.parse(localStorage.getItem("flights")) || [];
    saved.forEach(v => todosVuelos.push(new Vuelos(v.codigo, v.numPlazas, v.numBillete, v.precioBillete)));
    listaVuelos();
}

// Guardar vuelos en localStorage
function saveFlights() {
    localStorage.setItem("flights", JSON.stringify(todosVuelos));
}

// Añadir vuelo
function annadirVuelo(codigo, numPlazas, numBillete, precioBillete) {
    if (todosVuelos.some(v => v.codigo === codigo)) {
        alert("Error: Código de vuelo duplicado");
        return;
    }
    
    todosVuelos.push(new Vuelos(codigo, numPlazas, numBillete, precioBillete));
    saveFlights();
    listaVuelos();
    console.log("Vuelo añadido correctamente");
}

// Modificar vuelo
function modificarVuelo(codigo, nuevoNumPlazas, nuevoNumBillete, nuevoPrecioBillete) {
    const vuelo = todosVuelos.find(v => v.codigo === codigo);
    if (!vuelo) {
        alert("Error: No se encontró el vuelo con el código " + codigo);
        return;
    }
    
    vuelo.numPlazas = nuevoNumPlazas;
    vuelo.numBillete = nuevoNumBillete;
    vuelo.precioBillete = nuevoPrecioBillete;
    saveFlights();
    listaVuelos();
}

// Listar vuelos
function listaVuelos() {
    console.log("Actualizando la tabla de vuelos...");
    console.log(todosVuelos);  // Para ver si los vuelos están siendo añadidos correctamente

    let tbody = document.querySelector("#tablaVuelos tbody");
    tbody.innerHTML = "";
    todosVuelos.forEach(vuelo => {
        let tr = document.createElement("tr");
        tr.innerHTML = `<td>${vuelo.codigo}</td><td>${vuelo.numPlazas}</td><td>${vuelo.numBillete}</td><td>${vuelo.precioBillete.toFixed(2)}</td>`;
        tbody.appendChild(tr);
    });
}

// Calcular vuelos rentables
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
            trRentable.style.backgroundColor = "lightgreen";
            tbodyRentable.appendChild(trRentable);
        }
    });
}

// Eventos
window.addEventListener("load", loadFlights);
document.getElementById('formAnnadir').addEventListener('submit', (evento) => {
    evento.preventDefault();
    const codigo = document.getElementById("codigo").value.trim();
    const plazas = parseInt(document.getElementById("numPlazas").value);
    const billetes = parseInt(document.getElementById("numBillete").value);
    const precio = parseFloat(document.getElementById("precioBillete").value);
    annadirVuelo(codigo, plazas, billetes, precio);
    evento.target.reset();
});

document.getElementById("formModificar").addEventListener('submit', (evento) => {
    evento.preventDefault();
    const codigo = document.getElementById("modCodigo").value.trim();
    const nuevasPlazas = parseInt(document.getElementById("modNumPlazas").value);
    const nuevosBilletes = parseInt(document.getElementById("modNumBillete").value);
    const nuevoPrecio = parseFloat(document.getElementById("modPrecioBillete").value);
    modificarVuelo(codigo, nuevasPlazas, nuevosBilletes, nuevoPrecio);
    evento.target.reset();
});

document.getElementById('calcular').addEventListener('click', calcularRentable);
