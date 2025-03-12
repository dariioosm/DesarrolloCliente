import React,{useState} from "react";

const FiltradoCorredores = ({corredores})=>{
    const [filtro,setFiltro] = useState("")
    console.log('prueba',corredores)
    const corredoresFiltrados = corredores?.filter((corredor)=>
        corredor.driverRef.toLowerCase().includes(filtro.toLocaleLowerCase())
    )
    return(
        <div>
            <input type="text" name="" id="" 
            value={filtro}
            onChange={(e)=> setFiltro(e.target.value)}/>
            <ul>
                {corredoresFiltrados.map((corredor)=>(
                    <li key={corredor.driverId, corredor.nationality}>{corredor.driverRef}</li>
            ))}
            </ul>
        </div>
    )
}
export default FiltradoCorredores