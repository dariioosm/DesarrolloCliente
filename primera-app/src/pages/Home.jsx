import React from "react";
import Button from "../components/Button";
function Home(){
    const handleClick =()=> alert('Boton clickeado');
    return(
        <div>
            <h1>Bienvenido a la pagina de inicio</h1>
            <Button label='click aqui' onClick={handleClick}></Button>
        </div>
    )
}
export default Home;