import React from 'react';
import {RViewerTrigger, Rviewer} from 'react-viewerjs';

function Visualizador() {
let imagenes = [
    require ("./img/Melo.jpg"),
    require ("./img/Melo.jpg"),
    require ("./img/Melo.jpg"),
    require ("./img/Melo.jpg"),
    require ("./img/Melo.jpg"),
];

return (
    <div>

        <Rviewer imageUrls={imagenes}>
        <div style={{display: 'flex', marginTop: '40PX'}}>
        {imagenes.map((imagen, index)=>{
         return(    
            <RViewerTrigger index={index}>
               <img src={imagen} style={{width: '150px', height: '150px', marginLeft: '20px', border: '2px solid black'}}/> 
            </RViewerTrigger>
            )
        })}
        </div>
        </Rviewer>
    </div>
);
    }


export default Visualizador;