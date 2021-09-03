import React from 'react';
import PropTypes from 'prop-types';

const Estudiante = ({nombre, edad, genero,foto}) => (
    <>
        <div className="card col-md-4" >
            <div className="card-body">
                <h5 className="card-title">{ nombre }</h5>
                <p className="card-text">Edad: { edad }</p>
                <p className="card-text">Genero: { genero }</p>
                <img src={foto} alt="" style={{width: '250px'}}/>
            </div>
        </div>
    </>
);

Estudiante.propTypes = {
    nombre: PropTypes.string,
    edad: PropTypes.number,
    genero: PropTypes.string
    
}

Estudiante.defaultProps = {
    nombre: "nombre no asignado",
    edad: 0,
    genero: "Genero no asignado"
}

export default Estudiante;