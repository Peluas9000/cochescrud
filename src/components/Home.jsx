import React, { Component } from 'react'
import ServiceCoches from '../services/ServiceCoches';
import { NavLink } from 'react-router-dom';

export default class Home extends Component {

    servicio=new ServiceCoches();
    state={
      coches:[]
    }

    loadCoches=()=>{
      this.servicio.getCoches().then(response=>{
        this.setState({
          coches:response
        })
      })
      
    }

    componentDidMount=()=>{
      this.loadCoches();
    }
    
  render() {
    return (
      <main className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600">
              Inventario
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Todos los coches
            </h1>
            <p className="mt-2 text-slate-600">
              Consulta los vehículos disponibles en el inventario.
            </p>
          </div>

          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg shadow-slate-200/60">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200">
                <thead className="bg-slate-100">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500"
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500"
                    >
                      Marca
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500"
                    >
                      Modelo
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500"
                    >
                      Conductor
                    </th>
                    <th scope="col"
                      className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500"
                    >  
                      Imagen
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500"
                    >
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {this.state.coches.length > 0 ? (
                    this.state.coches.map(coche => (
                      <tr
                        key={coche.idCoche}
                        className="transition-colors hover:bg-blue-50"
                      >
                        <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-slate-500">
                          {coche.idCoche}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm font-semibold text-slate-900">
                          {coche.marca}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-600">
                          {coche.modelo}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-600">
                          {coche.conductor}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-600">
                          <img src={coche.imagen} alt="Imagen del coche" className="h-16 w-16 object-cover" />
                        </td>

                        <td><NavLink to={"/update/" + coche.idCoche + "/" + coche.marca + "/" + coche.modelo + "/" + coche.conductor +"/"+coche.imagen} className="text-blue-500 hover:text-blue-700">Update</NavLink></td>
                        
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="3"
                        className="px-6 py-12 text-center text-sm text-slate-500"
                      >
                        No hay coches disponibles.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <div className="border-t border-slate-100 bg-slate-50 px-6 py-3 text-right text-sm text-slate-500">
              {this.state.coches.length} vehículos en total
            </div>
          </div>
        </div>
      </main>
    )
  }
}
