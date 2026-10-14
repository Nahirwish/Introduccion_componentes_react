import { useState } from "react";

function Contador(){
    const[cantidad, setCantidad] = useState(0)

    function incrementar(){
        setCantidad(cantidad +1) 
    }
    return(
        <div>
            <p>Cliks: {cantidad}</p>
            <button onClick={incrementar}> 
                Hacer Click
            </button>
        </div>

    )
}

export default Contador;