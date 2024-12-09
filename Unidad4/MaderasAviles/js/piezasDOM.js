//import { annadir_pieza, Piezas } from './piezas.js';

document.getElementById('form_annadir_pieza').addEventListener('submit', function(escucha) {
    escucha.preventDefault();
    const nueva_pieza = {
        numero_pieza: parseInt(document.getElementById('numero_pieza').value),
        numero_pedido: parseInt(document.getElementById('numero_pedido').value),
        largo: parseFloat(document.getElementById('largo').value),
        ancho: parseFloat(document.getElementById('ancho').value),
        grosor: parseFloat(document.getElementById('grosor').value),
        color: document.getElementById('color').value,
        chapeado: document.getElementById('chapeado').checked,
        cortado: document.getElementById('cortado').checked
    };
    console.log("Datos de nueva pieza:", nueva_pieza);
    annadir_pieza(nueva_pieza);
}); 