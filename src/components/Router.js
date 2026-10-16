import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import Menu from './Menu'
import Home from './Home'
import Update from './Update'
export default class Router extends Component {
  render() {
      function UpdateElement(){
         let { id, marca, modelo, conductor } = useParams();
        return <Update id={id} marca={marca} modelo={modelo} conductor={conductor} />
      }

    return (
        
      <BrowserRouter>
        <Menu/>
        <Routes>
            <Route path="/" element={<Home/>}/> 
            <Route path="/update/:id/:marca/:modelo/:conductor" element={<UpdateElement/>}/>
        </Routes>
      </BrowserRouter>
    
    )
  }
}
