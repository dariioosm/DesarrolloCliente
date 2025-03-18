const submenuBtns=document.querySelector('.submenu-btn');
submenuBtns.forEach(btn=>{
    btn.addEventListener('click',()=>{
        const submenu= btn.nextElementSibling;
        if(submenu){
            submenu.classList.togle('open')
        }
    })
})


class Contenedor{
    constructor(referencia,peso,volumen){
        this.referencia=referencia;
        this.peso=peso;
        this.volumen=volumen;
    }
}
class AltaDensidad{
    constructor(referencia,densidad){
        this.referencia=referencia;
        this.densidad=densidad;
    }
}

const contenedores=[];
const contenedoresdensos=[];

function anadircontenedor(referencia,peso,volumen){
    if(!referencia||peso<0||volumen<0){
        alert('Datos invalidos')
        return
    }
    contenedores.push({referencia,peso,volumen})
    muestracontenedor();
}

function modificarcontenedor(referencia,pesonuevo,volumennuevo){
    const contenedor= contenedores.find(c=>c.referencia === referencia);
    if(contenedor){
        contenedor.peso=pesonuevo;
        contenedor.volumen=volumennuevo;
        muestracontenedor();
    }
    else{
        alert('No se ha escontrado esa referencia')
    }
}

function calculadensidad(){
    contenedoresdensos.length=0;
    $('#tablacontenedores tbody').empty();
    $('#tablacontenedoresdensos tbody').empty();
    contenedores.forEach(contenedor=>{
        const densidad = (contenedor.peso/contenedor.volumen);
        let tipo;
        if(densidad<1){
            densidad = 'Baja densidad'
        }else if(densidad>=1 && densidad<=2.5){
            tipo='Densidad normal';
        }else{
            tipo='Alta densidad';
        }

        $('tablacontenedores tbody').append(`
            <tr>
                <td>${contenedor.referencia}</td>
                <td>${contenedor.peso}</td>
                <td>${contenedor.volumen}</td>
                <td>${contenedor.densidad.toFixed(1)}</td>
                <td>${contenedor.tipo}</td>
            </tr>
            `);
            if(tipo =='Alta densidad'){
                contenedoresdensos.push({referencia:contenedor.referencia, densidad:densidad.toFixed(1)})
                $('#tabladensos tbody').append(`
                    <tr>
                        <td>${contenedor.referencia}</td>
                        <td>${contenedor.densidad.toFixed(1)}</td>
                    </tr>
                    `)
            }
    }

    )
}

function mostrarcontenedores(){
    $('#tablacontenedores tbody').empty();
    contenedores.forEach(contenedor=>{
        $('#tablacontenedores tbody').append(`
          <tr>
            <td>${contenedor.referencia}</td>
            <td>${contenedor.peso}</td>
            <td>${contenedor.volumen}</td>
          </tr>  
        `);
    });
}

$('#formAnnade').submit(function(e){
    const ref =$('#referencia').val()
    const peso=$('#peso').val()
    const volumen=$('#volumen').val()
    anadircontenedor(ref,peso,volumen);
    $(this).trigger('reset')
});

$('#formMod').submit(function(e){
    e.preventDefault();
    const ref =$('#modNombre').val();
    const pesonuevo= parseInt($('#modPeso').val())
    const volumennuevo=parseFloat($('#modVolumen').val())
    modificarcontenedor(ref,pesonuevo,volumennuevo);
    $(this).trigger('reset');
})

$('#calcula').click(function(){
    calculadensidad();
})