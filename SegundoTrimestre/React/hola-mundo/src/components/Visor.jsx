
import './visor.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontaweosme';
import {faPlay, faForward, faBackward} from '@fortawesome/free-solid-svgg-icons'
const Visor={props}=>{
    let indiceActual=0
    const imagenes= props.imagenes
    const mostrarImagen=()=>{
        const path= '/images/'+props.imagenes[indiceActual]
        const visorImagenes= document.getElementById('visorImagenes')
        if(visorImagenes){
            visorImagenes.src=path;
        }
    }
    const primera=()=>{
        indiceActual=0
        mostrarImagen()
    }
    const ultima=()=>{
        indiceActual=imagenes.length-1
        mostrarImagen()
    }
    setTimeout(()=>{mostrarImagen()},0)
    return(
        <div className="Visor">
            <img id='visorImagenes' className='imagen'/>
            <br />
            <div className="botones">
                <button onClick={siguiente}><FontAwesomeIcon icon={faPlay}></FontAwesomeIcon> </button>
                <button onClick={siguiente}><FontAwesomeIcon icon={faForward}></FontAwesomeIcon> </button>
                <button onClick={siguiente}><FontAwesomeIcon icon={faBackward}></FontAwesomeIcon> </button>

            </div>
        </div>
    )
}
export default Visor