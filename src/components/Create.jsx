import React, { Component } from 'react'
import ServiceCoches from '../services/ServiceCoches';
import { Navigate } from 'react-router-dom';
export default class Create extends Component {


    servicio=new ServiceCoches();


    cajaId=React.createRef();
    cajaMarca=React.createRef();
    cajaModelo=React.createRef();
    cajaConductor=React.createRef();
    cajaImagen=React.createRef();

    state={
        status:false
    }

    crear(event){
        event.preventDefault();
        let coche={
            idCoche:parseInt(this.cajaId.current.value),
            marca:this.cajaMarca.current.value,
            modelo:this.cajaModelo.current.value,
            conductor:this.cajaConductor.current.value,
            imagen:this.cajaImagen.current.value
        }

        this.servicio.createCoche(coche).then(response=>{
            this.setState({
                status:true
            })
            console.log(response)
        })



    }





  render() {
    if(this.state.status==true){
        return <Navigate to="/"/>
    }else{
    return (
      <div>
            <h1 className="text-2xl font-bold">Crear coche</h1>
            <form className="flex flex-col gap-4" >
                <div  className="flex flex-col gap-2">
                    <label className="font-bold">Id:</label>
                    <input type="text" ref={this.cajaId} className="border border-gray-300 rounded-md p-2" />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-bold">Marca:</label>
                    <input type="text" ref={this.cajaMarca} className="border border-gray-300 rounded-md p-2" />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-bold">Modelo:</label>
                    <input type="text" ref={this.cajaModelo} className="border border-gray-300 rounded-md p-2" />
                </div>
                <div className="flex flex-col gap-2"> 
                    <label className="font-bold">Conductor:</label>
                    <input type="text" ref={this.cajaConductor} className="border border-gray-300 rounded-md p-2" />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-bold">Imagen:</label>
                    <input type="text" ref={this.cajaImagen} className="border border-gray-300 rounded-md p-2" />
                </div>
                <button type="submit" onClick={(event) => this.crear(event)} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                    Crear
                </button>
            </form>
            
      </div>
    )
}
  }
}
