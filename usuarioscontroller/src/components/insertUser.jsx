import React,{useState} from "react";
import {campoRegex } from "../utils/validaciones/regexpresions";
import esAdulto from "../utils/validaciones/fechaValida";
const FormInsert = ()=>{

    const[formulario,setFormulario]=useState({
        nombre:"",
        apellidos:"",
        edad:"",
        usuario:"",
        pass:"",
    })

    const[error,setError]=useState({})
    const ingreso=(evento)=>{
        const{name,value}=evento.target
        //TODO diferenciar si el campo no es edad y pasarlo por la expresion regular pertinente
        if(name !== "edad" && campoRegex(name,value)===false){
            setError(anterior=>({...anterior,[name]:`${name} no tiene el formato correcto`}))
        }else{
            setError(anterior=>({...anterior,[name]:""}))
        }
        //TODO si el campo es el de edad, llamar al metodo fechaValida para que se introduzca el usuario +18

        if(name==='edad' && esAdulto(value)){
            setError(anterior=>({...anterior, edad:""}))
        }else{
            setError(anterior=>({...anterior,edad: "Tienes que ser mayor de 18 años"}))
        }
        setFormulario(anterior=>({...anterior,[name]:error[name]?"":value}))
    }
    const enviaForm =(evento)=>{
        evento.preventDefault();
        if(Object.values(error).some(err =>err !== "")){
            alert('Corrige los errores antes de enviar el formulario')
        }
        console.log(`Formulario del ${formulario.usuario} enviado correctamente`)

    }

    return( 
        <form onSubmit={enviaForm}>
            <label>Nombre
                <input type="text" name="nombre" id=""value={formulario.nombre} onChange={ingreso} />
            </label>
            <label>Apellidos
                <input type="text" name="apellidos" id=""value={formulario.apellidos} onChange={ingreso} />
            </label>
            <label >Edad
                <input type="date" name="edad" id="" value={formulario.edad} onChange={ingreso} />
            </label>
            <label>Usuario
                <input type="text" name="usuario" id="" value={formulario.usuario} onChange={ingreso} />
            </label>
            <label>Contraseña
                <input type="password" name="pass" id="" value={formulario.password} onChange={ingreso} />
            </label>
            <button type="submit">Enviar</button>
        </form>
    )
}
export default FormInsert