const Bucles=()=>{
    const personajes=[
        {nombre:'Seong Gi-hun',edad:52},
        {nombre:'Hwang Jun-ho',edad:53},
        {nombre:'Front man',edad:54},
    ]
    return (
        <>
        <ul>
            {
                personajes.map((p)=> <li key={p.nombre}><b>{p.nombre}: {p.edad} años</b></li>)
            }
        </ul>
        </>
    )
}
export default Bucles