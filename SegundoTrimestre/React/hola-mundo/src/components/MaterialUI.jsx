import Tabs from '@mui/material/Tabs'
import BorderBottom from "@mui/icons-material/BorderBottom"
import { TextField } from '@mui/material/TextField';
import { useState } from 'react'
const MaterialUI = ()=>{
    const [tabVisible, setTabvisible]=useState(0)
    const manejador= (evento,indice =>{
        
    console.log()
    setTabvisible(indice)
    })

    return(
        <>
            <Box sx={{BorderBottom:1, borderColor: 'divider'}}>
                <Tabs value={0} onChange={manejador} aria-label='ejemplo basico de tabs'>
                    <Tab label='Label 1'></Tab> 
                    <Tab label='Label 2'></Tab>
                </Tabs>
            </Box>
            {tabVisible===0 && <div>item 0</div>}
            {tabVisible===1 && <div>item 1</div>}
            {tabVisible===2 && <div>item 2</div>}
        </>
    )
}
export default MaterialUI