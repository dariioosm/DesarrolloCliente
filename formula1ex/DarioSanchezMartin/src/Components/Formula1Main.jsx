import React, { useEffect, useState } from "react";
import ListadoCorredores from "./ListadoCorredores";
import FiltradoCorredores from "./FiltradoCorredores";


const Formula1Main =()=>{
    const[corredores,setCorredores] = useState([]);
    useEffect( ()=>{
        const fetchCorrredores = async()=>{
            try{
                const response = await fetch("/json/Formula1.json")
                const data = await response.json();
                console.log('prueba',data)
            setCorredores(data);
            }
            catch(error){
                console.error('error al cargar los pilotos',error)
            }
        };
        fetchCorrredores();
    },[]);

    return (
        <div>
            <h1>Formula1Ex</h1>
            
            <ListadoCorredores corredores={corredores}/>    
            <FiltradoCorredores corredores = {corredores}/>
        </div>
    )
}
export default Formula1Main;