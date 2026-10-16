import React, { Component } from 'react'
import ServiceCoches from '../services/ServiceCoches';
export default class Update extends Component {
    servicio= new ServiceCoches();
    cajaId=React.createRef();
    cajaMarca=React.createRef();
    cajaModelo=React.createRef();
    cajaConductor=React.createRef();
    cajaImagen=React.createRef();
    state={
        status:false
    }

    loadCocheUpdate=()=>{
        let coche={
            id:parseInt(this.cajaId.current.value),
            marca:this.cajaMarca.current.value,
            modelo:this.cajaModelo.current.value,
            conductor:this.cajaConductor.current.value,
            imagen:this.cajaImagen.current.value
        }
        this.servicio.updateCoche(coche).then(response=>{
            this.setState({
                status:true
            })
        })
        

    }

   


    
    render() {
    const inputClass = "w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100";

    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50 p-4">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            this.loadCocheUpdate();
          }}
          className="w-full max-w-md space-y-4 rounded-xl bg-white p-6 shadow-lg"
        >
          <h1 className="mb-6 text-center text-2xl font-bold text-slate-800">
            Actualizar coche
          </h1>

          <div>
            <label htmlFor="id" className="mb-1 block text-sm font-medium text-slate-600">ID</label>
            <input
              id="id"
              type="text"
              ref={this.cajaId}
              defaultValue={this.props.id}
              readOnly
              className={`${inputClass} cursor-not-allowed bg-slate-100`}
            />
          </div>

          <div>
            <label htmlFor="marca" className="mb-1 block text-sm font-medium text-slate-600">Marca</label>
            <input id="marca" type="text" ref={this.cajaMarca} defaultValue={this.props.marca} className={inputClass} />
          </div>

          <div>
            <label htmlFor="modelo" className="mb-1 block text-sm font-medium text-slate-600">Modelo</label>
            <input id="modelo" type="text" ref={this.cajaModelo} defaultValue={this.props.modelo} className={inputClass} />
          </div>

          <div>
            <label htmlFor="conductor" className="mb-1 block text-sm font-medium text-slate-600">Conductor</label>
            <input id="conductor" type="text" ref={this.cajaConductor} defaultValue={this.props.conductor} className={inputClass} />
          </div>

          <div>
            <label htmlFor="imagen" className="mb-1 block text-sm font-medium text-slate-600">Imagen</label>
            <input id="imagen" type="text" ref={this.cajaImagen} defaultValue={this.props.imagen} className={inputClass} />
          </div>

          <button type="submit" className="w-full rounded-lg bg-blue-600 py-2.5 font-semibold text-white transition hover:bg-blue-700">
            Actualizar
          </button>
        </form>
      </main>
    )
  }
}
