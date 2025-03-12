import React from "react";

const ListadoCorredores = ({corredores})=>{
    return (
    <table border="1">
        <thead>
            <th>Id Corredor</th>
            <th>Referencia</th>
            <th>Codigo</th>
            <th>Nombre y apellidos</th>
            <th>URL</th>
        </thead>
        <tbody>
            {corredores.map((corredor)=>(
                <tr key={corredor.driverId}>
                    <td>{corredor.driverId}</td>
                    <td>{corredor.driverRef}</td>
                    <td>{corredor.code}</td>
                    <td>{corredor.surname},{corredor.forename}</td>
                    <td>{corredor.url}</td>
                </tr>
            ))}
        </tbody>
    </table>
    )
}
export default ListadoCorredores;