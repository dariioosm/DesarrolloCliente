import "./ListadoNotas.css"
import {useState,useEffect} from "react"
import { getAllNotas,deleteNota,updateNota,addNota } from "../notasServer"
const ListadoNotas = () =>{
    const[notas,setNotas]= useState([]);
    const[notaActual,setNotaActual] = useState(null)
    const[formvisibile,setFormVisible] = useState(false)

    const loadNotas = async ()=>{
        try{
            const notasServer = await getAllNotas()
            setNotas(notasServer)
        }catch(error){
            console.error('Error al cargar las notas: ',error)
        }
    }

    const showForm = (nota)=>{
        setNotaActual(nota)
        setFormVisible(true)
    }
   
    const updateNotaEvt = (nota) => showForm(nota);
    const deleteNotaEvt = async(idNota) =>{
        let mensajeError = `Se ha producido un error al borrar la nota con el identificador ${idNota}`
        try{
            const exito = await deleteNota(idNota)
            if(!exito) alert(mensajeError)
                else{
                    alert(`La nota con id ${idNota} se ha borrado correctamente`)
            }
        }
        catch(error){
            alert(mensajeError,error)
        }
    }
    const saveNotaEvt = async(nota) => {
        try{
            if(nota.id){
                await updateNota(nota)
                alert(`La nota se ha modificado correctamente con id ${nota.id}`)
            }
            else{
                const nuevaNota = await addNota(nota)
                alert(`La nota se ha añadido correctamente con id ${nuevaNota.id}`)
            }
            loadNotas();
            setFormVisible(false);
        }
        catch(error){
            alert('Se ha producido un nuevo error', error)
        }
    }
    useEffect(
        ()=> {loadNotas()},[]
    )

    return(
        <>
            <button onClick={()=> showForm()}>Añadir nota</button>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Texto</th>
                        <th>Importancia</th>
                    </tr>
                </thead>
                <tbody>
                    {notas?.map(
                        (nota) =>(
                            <tr key={nota.id} className="fila">
                                <td className="celda-id">{nota.id}</td>
                                <td className="celda-texto">{nota.tecto}</td>
                                <td className="celda-imortancia">{nota.importancia}</td>
                                <td>
                                    <button onClick={()=>updateNotaEvt(nota)}>Actualizar</button>
                                    <button onClick={()=>deleteNotaEvt(nota)}>Eliminar</button>
                                </td>
                            </tr>

                        )
                    )}
                </tbody>
            </table>
            {
                formvisibile && (
                    <FormNota nota={notaActual} 
                                onSave = {saveNotaEvt}
                                onCancel={()=>setFormVisible(false)}/>
                )
            }
        </>
    )

    
}
export default ListadoNotas;