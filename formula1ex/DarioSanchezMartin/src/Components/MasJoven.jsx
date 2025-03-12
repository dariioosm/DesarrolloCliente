import React from "react";
const MasJoven = ({corredores})=>{

    const corredorJoven = corredores.reduce((menor,corredor)=>
    menor.dob < corredor.dob? menor:corredor
    )
    return(
        <div>
            <h2>Corredor mas joven</h2>
            <p>{corredorJoven.driverRef}</p>
        </div>
    )
}
export default MasJoven