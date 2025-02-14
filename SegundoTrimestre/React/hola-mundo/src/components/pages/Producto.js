import { useParams } from "react-router-dom"

import { use } from "react"

const Producto=()=>{
    const {id}=useParams()
    return(
        <section id='producto'>
            Estas consultando el producto con identificador{id}
        </section>
    )
}
export default Producto