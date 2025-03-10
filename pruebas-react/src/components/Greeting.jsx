import React from "react";
import Welcome from "./Welcome";
function Greeting({name}){
    return(
        <div>
        <Welcome/>
        <h2>{name}</h2>
        </div>
    );
}
export default Greeting