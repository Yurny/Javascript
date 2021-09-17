import React from 'react';
import PropTypes from 'prop-types';

const Estudiante = ({id, nombre, edad, genero,aficiones,foto}) => (
    <>
        <div className="card col-md-4" >
            <div className="card-body">
                <h5 className="card-title">{ nombre }</h5>
                <p className="card-text">ID: { id }</p>
                <p className="card-text">Edad: { edad }</p>
                <p className="card-text">Genero: { genero }</p>
                <p className="card-text">Aficiones: { aficiones }</p>
                <img src={foto} alt="" style={{width: '250px'}}/>
                <p><a href={`/estudiantes/${id}`}>Detalle</a></p>
            </div>
        </div>
    </>
);

Estudiante.propTypes = {
    nombre: PropTypes.string,
    edad: PropTypes.number,
    genero: PropTypes.string,
    aficiones : PropTypes.string
    
}

Estudiante.defaultProps = {
    nombre: "nombre no asignado",
    edad: 0,
    genero: "Genero no asignado"
}

export default Estudiante;