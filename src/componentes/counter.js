import React from "react";
import '../css/counter.css'

function Contador({ numClics }) {
    return(
        <div className="contador">
            { numClics }
        </div>
    );
}

export default Contador;