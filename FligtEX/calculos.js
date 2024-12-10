import{Vuelos} from './Vuelos.js';
import{VueloMuyRentable} from './VueloMuyRentable.js';
const todosVuelos=[];
const gangas=[];

function annadirVuelo(codigo,numPlazas,numBillete,precioBillete){
    const{codigo,numPlazas,numBillete,precioBillete}= nuevoVuelo;

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
    todosVuelos.push(new Vuelos (codigo,numPlazas,numBillete,precioBillete));
    listaVuelos();
    alert('Vuelo añadido correctamente');
}


function modificarVuelo(codigo,numPlazas,numBillete,precioBillete){
    const vuelos= todosVuelos.find(v=>v.codigo===codigo);
    if(todosVuelos){
        this.codigo=codigo;
        this.numPlazas=numPlazas;
        this.numBillete=numBillete;
        this.precioBillete=precioBillete;
        listaVuelos();        
    }
}

function listaVuelos(){
    let tbody=document.querySelector('#tablaVuelos');
    tbody.innerHTML="";
    todosVuelos.forEach(vuelo=>{
        let tr=document.createElement('tr');
        tr.innerHTML= `<td>${vuelo.codigo}</td><td>${vuelo.numPlazas}</td><td>${vuelo.numBillete}</td><td>${vuelo.precioBillete}</td>`;
        tbody.appendChild(tr);    
        }
    );
}

document.getElementById('formAnnadir').addEventListener('submit',(evento)=>{
    evento.preventDefault();
    const codigo= document.getElementById('Codigo').value;
    const plazas= document.getElementById('NumPlazas').value;
    const precio= document.getElementById('PrecioBillete').value;
    annadirVuelo(codigo,plazas,precio); 
    evento.target.reset();
})


document.getElementById('formModificar').addEventListener('submit',(evento)=>{
    evento.preventDefault()
    const codigo= document.getElementById('modCodigo').value;
    const nuevasPlazas= document.getElementById('modNumPlazas').value;
    const nuevoPrecio= document.getElementById('modPrecioBillete').value;
    modificarVuelo(nuevasPlazas,nuevoPrecio);
})

function calcularRentable(){
    gangas.length=0;
    let tbodyVuelos=document.querySelector('vuelosMuyRentables')
    todosVuelos.forEach(v=>{
        const ingreso=numBillete*precioBillete;
        if(ingreso>20000){
            gangas.push(new VueloMuyRentable(v.codigo, ingreso.toFixed(2)))
            let trGanga=document.createElement('tr')
            trGanga.innerHTML=`<td>${v.codigo}</td> <td>${ingreso.toFixed(2)}</td>`
            tbodyGanga.appendChild(trGanga)
        }
    })
}
document.getElementById('calcular').addEventListener('click',calcularRentable)
