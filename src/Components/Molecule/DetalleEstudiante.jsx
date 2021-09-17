import React from "react";
import { Link } from "react-router-dom";

const estudiantes = [
    {   
        "id": 1,
        "nombre" : "Skinner",
        "edad" : 45,
        "genero" : "M",
        "aficiones" : "Comer donas, beber cerveza, el color amarillo",
        "foto" : "https://media.revistagq.com/photos/5ea2aa5855a9b00008b6c07a/master/w_1600%2Cc_limit/skinner.jpg"
    },
    {
        
        "id": 2,
        "nombre" : "Krusty (El payaso)",
        "edad" : 47,
        "genero" : "M",
        "aficiones" : "Comer donas, beber cerveza, el color amarillo",
        "foto" : "https://media.revistagq.com/photos/5ea2aa5655a9b00008b6c073/master/w_1600%2Cc_limit/krusty-simpson.jpg"
    },
    {
        
        "id": 3,
        "nombre" : "MILHOUSE VAN HOUTEN",
        "edad" : 13,
        "genero" : "M",
        "aficiones" : "Comer donas, beber cerveza, el color amarillo",
        "foto" : "https://media.revistagq.com/photos/5ea2aa570df2200008cc9383/master/w_1600%2Cc_limit/millhouse.jpg"
    },
    {
        
        "id": 4,
        "nombre" : "EDNA KRABAPPEL",
        "edad" : 50,
        "genero" : "F",
        "aficiones" : "Comer donas, beber cerveza, el color amarillo",
        "foto" : "https://media.revistagq.com/photos/5ea2aa550df2200008cc937f/master/w_1600%2Cc_limit/edna-krabappel.jpg"
    },
    {
        
        "id": 5,
        "nombre" : "KODOS Y KANG",
        "edad" : "?",
        "genero" : "?",
        "aficiones" : "Comer donas, beber cerveza, el color amarillo",
        "foto" : "https://media.revistagq.com/photos/5ea2aa5655a9b00008b6c074/master/w_1600%2Cc_limit/kang-kodos.jpg"
    },
    {
        
        "id": 6,
        "nombre" : "APU NAHASAPEEMAPETILON",
        "edad" : 43,
        "genero" : "M",
        "aficiones" : "Comer donas, beber cerveza, el color amarillo",
        "foto" : "https://media.revistagq.com/photos/5ea2aa598368a10008af332b/master/w_1600%2Cc_limit/apu-simpsons.png"
    },
    
]

const DetalleEstudiante= ({match}) => {

    let estudiante = estudiantes.filter(c => c.id === parseInt(match.params.id))[0]

    return (
        <>
            {
                estudiante ? (
                    <div className="card col-md-4" >
                        <div className="card-body">
                            <h5 className="card-title">{ estudiante.nombre }</h5>
                            <p className="card-text">Edad: { estudiante.edad }</p>
                            <p className="card-text">Genero: { estudiante.genero }</p>
                            <p className="card-text">Aficiones: { estudiante.aficiones }</p>
                            <img src={estudiante.foto} alt=""  style={{width: '210px'}}/>
                        </div>
                    </div>
                ):
                <h1>Estudiante no encontrado</h1>
            }

            <Link to={`/estudiantes`}>Ver Todos</Link>
        </>
    )
};

export default DetalleEstudiante;