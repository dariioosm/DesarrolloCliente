//TODO hacer funcion que coja fecha de sistema y reste con la de usuario para comprobar si es mayor de 18 años
import React from 'react';
import { useState } from 'react';

const esAdulto=(fecha)=>{
    const nace= new Date(nace);
    const hoy = new Date();

    let edad = hoy.getFullDate()-nace.getFullYear();

    //TODO hacer las comprobaciones de mes y dia para terminar de asegurar mayoria de edad

    if(nace.getMonth() > hoy.getMonth()||(nace.getMonth()==hoy.getMonth() && nace.getDate()>=hoy.getDate())){
        edad--
    }
    return edad>=18
}

export default esAdulto;