import "./ListadoNotas.css"
import {useState,useEffect} from "react"
import { getAllNotas,deleteNota,updateNota,addNota } from "./notasServer"
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
        let mensajeError = "Se ha producido un error al borrar la nota con el identificador",nota
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
}
export default ListadoNotas;