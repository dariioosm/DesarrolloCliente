const Formulario = () => {
    const manejaClick=(e) =>{
        console.log('Boton puldado: ',e)
    }
    return(
        <>
            <input type="text" onChange={manejaClick}
        </>
    )
}
export default Formulario