import{Vuelos} from './Vuelos.js';
import{VueloMuyRentable} from './VueloMuyRentable.js';
const todosVuelos=[];
const rentables=[];

function annadirVuelo(codigo,numPlazas,numBillete,precioBillete){

    if(!Number.isInteger(codigo)||codigo<1){
        throw new Error('El codigo tiene que ser un numero y ser mayor que cero')
    }if(!Number.isInteger(numPlazas)||numPlazas<1){
        throw new Error('El numero de plazas tiene que ser un numero y ser mayor que cero')
    }if(!Number.isInteger(numBillete)||numBillete>numPlazas0){
        throw new Error('El numero de billetes no puede ser mayor que el numero de plazas')
    }
    if(!Number.isInteger(precioBillete)||precioBillete<1){
        throw new Error('El precio tiene que ser un numero y ser mayor que cero')
    }
    this.codigo=codigo;
    this.numPlazas=numPlazas;
    this.numBillete=numBillete;
    this.precioBillete=precioBillete;
    todosVuelos.push(new Vuelos(codigo,numPlazas,numBillete,precioBillete));
    listaVuelos();
    console.log('Vuelo añadido correctamente');

}


function modificarVuelo(codigo,nuevoNumPlazas,nuevoNumBillete,nuevoPrecioBillete){
    const vuelo= todosVuelos.find(v=>v.codigo===codigo);
    if(vuelo){
        vuelo.numPlazas=nuevoNumPlazas;
        vuelo.numBillete=nuevoNumBillete;
        vuelo.precioBillete=nuevoPrecioBillete;
        listaVuelos();        
    }else{
        console.log('no se ha podido modificar')
    }
}

function listaVuelos(){
    let tbody= document.querySelector("#tablaVuelos tbody")
    tbody="";
    todosVuelos.forEach(vuelo=>{
        let tr= document.createElement("tr");
        tr.innerHTML=`<td>${vuelo.codigo}</td><td>${vuelo.numPlazas}</td><td>${vuelo.numBillete}</td><td>${vuelo.precioBillete}</td>`
        tbody.appendChild(tr)
    })
    
}
//TODO eventos de añadir y modificacion de personas

document.getElementById('formAnnadir').addEventListener('submit',(evento)=>{
    evento.preventDefault();
    const codigo= document.getElementById("codigo").value;
    const plazas= document.getElementById("numPlazas").value;
    const precio= document.getElementById("precioBillete").value;
    annadirVuelo(codigo,plazas,precio); 
    evento.target.reset();
})


document.getElementById("formModificar").addEventListener('submit',(evento)=>{
    evento.preventDefault()
    const codigo= document.getElementById("modCodigo").value;
    const nuevasPlazas= document.getElementById("modNumPlazas").value;
    const nuevoPrecio= document.getElementById("modPrecioBillete").value;
    modificarVuelo(codigo,nuevasPlazas,nuevoPrecio);
    evento.target.reset();
});

function calcularRentable(){
    rentables.length=0;
    let tbodyVuelos=document.querySelector("#tablaVuelos tbody")
    let tbodyRentable=document.querySelector("#vuelosMuyRentables tbody")
    tbodyVuelos="";
    tbodyRentable="";

    todosVuelos.forEach(vuelo=>{
        const ingreso=vuelo.numBillete*vuelo.precioBillete;
        if(ingreso>20000){
            rentables.push(new VueloMuyRentable(vuelo.codigo, ingreso.toFixed(2)))
            let trRentable=document.createElement("tr")
            trRentable.innerHTML=`<td>${vuelo.codigo}</td> <td>${ingreso.toFixed(2)}</td>`
            tbodyRentable.appendChild(trRentable)
        }
    });
}
document.getElementById('calcular').addEventListener('click',calcularRentable)
