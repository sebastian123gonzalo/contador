import React from "react";
import '../css/button.css'

function Boton({ texto, esBotonClic, manejarClic }) {
    return(
        <button
            className={ esBotonClic ? "botonClic" : "botonReiniciar" }
            onClick={manejarClic}>
            {texto}
        </button>
    );
}

export default Boton;