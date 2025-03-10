import { Persona } from './Persona.js';
import { IMC } from './IMC.js';

// Arreglos para almacenar personas y personas fuera del rango normal.
const personas = [];
const personasFueraDeRango = [];

// Función para añadir una persona al arreglo.
function añadirPersona(nombre, peso, altura) {
    if (!nombre || peso <= 0 || altura <= 0) {
        alert("Datos inválidos.");
        return;
    }
    personas.push(new Persona(nombre, peso, altura));
    mostrarPersonas();
}

// Función para modificar los datos de una persona existente.
function modificarPersona(nombre, nuevoPeso, nuevaAltura) {
    const persona = personas.find(p => p.nombre === nombre);
    if (persona) {
        persona.peso = nuevoPeso;
        persona.altura = nuevaAltura;
        mostrarPersonas();
    } else {
        alert("Persona no encontrada.");
    }
}

// Función para calcular el IMC de todas las personas y clasificarlas.
function calcularIMC() {
    personasFueraDeRango.length = 0; // Reinicia la lista de fuera de rango.
    let tbodyPersonas = document.querySelector("#tablaPersonas tbody");
    let tbodyFueraDeRango = document.querySelector("#tablaFueraDeRango tbody");
    
    tbodyPersonas.innerHTML = "";
    tbodyFueraDeRango.innerHTML = "";

    personas.forEach(persona => {
        const imc = persona.peso / (persona.altura ** 2);
        let categoria;
        if (imc <= 18.48) categoria = "Demasiado delgada";
        else if (imc <= 24.99) categoria = "Peso normal";
        else categoria = "Demasiado obesa";

        // Mostrar persona en la tabla general.
        let tr = document.createElement("tr");
        tr.innerHTML = `<td>${persona.nombre}</td><td>${persona.peso}</td><td>${persona.altura}</td><td>${imc.toFixed(2)}</td><td>${categoria}</td>`;
        tbodyPersonas.appendChild(tr);

        // Agregar a la lista de fuera de rango si no está en peso normal.
        if (categoria !== "Peso normal") {
            personasFueraDeRango.push(new IMC(persona.nombre, imc.toFixed(2)));
            let trFueraDeRango = document.createElement("tr");
            trFueraDeRango.innerHTML = `<td>${persona.nombre}</td><td>${imc.toFixed(2)}</td>`;
            tbodyFueraDeRango.appendChild(trFueraDeRango);
        }
    });
}

// Función para mostrar todas las personas en la tabla.
function mostrarPersonas() {
    let tbody = document.querySelector("#tablaPersonas tbody");
    tbody.innerHTML = "";
    personas.forEach(persona => {
        let tr = document.createElement("tr");
        tr.innerHTML = `<td>${persona.nombre}</td><td>${persona.peso}</td><td>${persona.altura}</td>`;
        tbody.appendChild(tr);
    });
}

// Eventos de los formularios para añadir y modificar personas.
document.getElementById("formAñadir").addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    añadirPersona(nombre, peso, altura);
    e.target.reset();
});

document.getElementById("formModificar").addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("modNombre").value;
    const nuevoPeso = parseFloat(document.getElementById("modPeso").value);
    const nuevaAltura = parseFloat(document.getElementById("modAltura").value);
    modificarPersona(nombre, nuevoPeso, nuevaAltura);
    e.target.reset();
});

// Evento para calcular IMC al hacer clic en el botón.
document.getElementById("calcularIMC").addEventListener("click", calcularIMC);
