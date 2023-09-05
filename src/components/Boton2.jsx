import React from 'react'
import '../style/Boton.css'

const Boton2 = ({ texto, esBotonDeClic, manejarClic }) => {
    return (
        <button className={esBotonDeClic ? 'btn-atras' : 'btn-automatico'}
            onClick={manejarClic}
        >
            {texto}
        </button>
    )
}

export default Boton2
