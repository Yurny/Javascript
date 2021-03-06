import React from 'react';
import Estudiante from '../Molecule/Estudiante';




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

const Contenedor = () =>(
    <>
        {
            estudiantes.map( c => <Estudiante  id = {c.id} nombre={ c.nombre } edad={c.edad} genero={ c.genero} aficiones={c.aficiones} foto={c.foto} /> )

        }
        
    </>
);

export default Contenedor;