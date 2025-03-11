const url= "http://localhost:8080/notas.php"
export const getAllNotas = async()=>{
    try{
        const respuesta = await fetch(url)
        if(!respuesta.ok) throw new Error(mensajeError);
            return await respuesta.json()
        
    }catch(error){
        console.error(mensajeError,error)
        return null
    }


}

export const addNota = async (nuevaNota) =>{
        const initObject = {
            method:"POST",
            
        }
}