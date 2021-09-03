import React, {Component} from "react";

class Formulario extends Component{

    constructor(props){
        super(props)

        this.state = {
            nombre: "nombre state"
        }
        this.cambiarNombre = this.cambiarNombre.bind(this);
    }
    cambiarNombre(e){
        this.setState({
            nombre: e.target.value
        });
        
    }

    render(){
        return(
            <div>
                <h1>
                    <form action="">
                        <label htmlFor="">Nombre</label>
                        <input type="text" 
                        onChange={ this.cambiarNombre }
                          
                        /><br/>
                        <input type="submit" value="Enviar"/>
                    </form>
                </h1>

                <h3>{ `Hola ${this.state.nombre}` }</h3>

            </div>     
        )
    }
}

export default Formulario;