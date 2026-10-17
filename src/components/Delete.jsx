import React, { Component } from 'react'
import ServiceCoches from '../services/ServiceCoches';
import { Navigate } from 'react-router-dom';

export default class Delete extends Component {

    servicio=new ServiceCoches();
    state={

        coche:null,
       status:false
    }

    findCoche(){
        this.servicio.getCocheId(this.props.id).then(response=>{
            this.setState({
                coche:response
            })
        })
    }

   eliminarCoche=()=>{
    this.servicio.eliminarCoche(this.state.coche.idCoche).then(response=>{
       
        this.setState({
            status:true
        })
       
    })
    }

  

   returnInicio=()=>{
    this.setState({
        status:true
    })
    }
    componentDidMount=()=>{
        this.findCoche();
    }



  render() {
    if(this.state.status==true){
        return (<Navigate to="/"/>)
    }
    if(this.state.coche==null){
        return (<h1>No se encontro el coche </h1>)
    }else{
    return (
      <div>
                <h1>Seguro que quieres eliminar este coche con id: {this.state.coche.idCoche}</h1>
            <table className="min-w-full divide-y divide-slate-200 , bg-center" >
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">ID</th>
                        <td className="px-6 py-3 text-left text-sm font-medium text-slate-500">{this.state.coche.idCoche}</td>
                    </tr>
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">Marca</th>
                        <td className="px-6 py-3 text-left text-sm font-medium text-slate-500">{this.state.coche.marca}</td>
                    </tr>
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">Modelo</th>
                        <td className="px-6 py-3 text-left text-sm font-medium text-slate-500">{this.state.coche.modelo}</td>
                    </tr>
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">Conductor</th>
                        <td className="px-6 py-3 text-left text-sm font-medium text-slate-500">{this.state.coche.conductor}</td>
                    </tr>
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">Imagen</th>
                        <td className="px-6 py-3 text-left text-sm font-medium text-slate-500">
                            <img src={this.state.coche.imagen} alt="Imagen del coche" className="w-16 h-16 object-cover" />
                        </td>
                    </tr>
                    

                         <td colSpan="2" className="px-6 py-4">
                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => this.eliminarCoche()}>
                                Eliminar
                            </button>
                        </td>

                        <td colSpan="2" className="px-6 py-4">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => this.returnInicio()}>
                                Cancelar
                            </button>
                        </td>

                        {
                            this.state.status &&
                            <Navigate to="/"/>
                            
                        }
                   
                       
                    

                </table>
      </div>
    )
}
  }
}
