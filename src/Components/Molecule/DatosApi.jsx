import React, {Component} from 'react';

class DatosApi extends Component{

    constructor(props){
        super(props)

        this.state = {
            posts: []
        }
    }

    componentDidMount(){
        fetch('https://my-json-server.typicode.com/Yurny/Javascript/simpsons', {method:'get'})
        .then(response => response.json())
        .then(data => {
            this.setState({
                posts: data
            })
        })
    }

    render(){
        const {posts} = this.state
        return (
            <>
                {
                    posts.map( d => (
                        <>
                        <div className="card col-md-4" >
                        <div className="card-body">
                        <p>{d.id}</p>
                        <p>{d.nombre}</p>
                        <p>{d.edad}</p>
                        <p>{d.genero}</p>
                        <p>{d.aficiones}</p>
                        <img src={d.foto} alt={d.nombre} style={{width: '250px'}} />
                        <hr />
                        </div>
                        </div>
                        </>
                    ))
                }
            </>
        )
    }

}

export default DatosApi;