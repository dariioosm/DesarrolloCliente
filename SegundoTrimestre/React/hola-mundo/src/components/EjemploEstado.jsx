import{useState} from "react";
    const EjemploEstado=()=>{
        const [contador,setContador] = useState(0)
        return(
            <>
                <h1>Estado simple: {contador}</h1>
                <button onClick={()=>setContador(contador+1)}>contador</button>
            </>
        )
    }
    export default EjemploEstado