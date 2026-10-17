import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import ServiceCoches from '../services/ServiceCoches';

export default class Detalles extends Component {
    servicio=new ServiceCoches();


    state={
        
        coche:this.props.objeto

    }


    

  render() {
    if(this.state.coche==null){
        return (<div><h1>No hay coche seleccionado</h1>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <NavLink to="/">Volver al inicio</NavLink>
            </button>
        </div>);
        
    }else{
        return (
            <div>
                <h1>DETALLE DEL COCHE CON ID: {this.state.coche.idCoche}</h1>
            <table className="min-w-full divide-y divide-slate-200">
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
                    <tr>
                        <td colSpan="2" className="px-6 py-4">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={this.props.volver}>
                                Volver al inicio
                            </button>
                        </td>

                    </tr>

                </table>
                    
            </div>
            )
    }
   
  }
}
