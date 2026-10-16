import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import Menu from './Menu'
import Home from './Home'
import Update from './Update'
import Create from './Create'
export default class Router extends Component {
  render() {
      function UpdateElement(){
        let { id} = useParams();
        return <Update id={id}/>
      }

    return (
        
      <BrowserRouter>
        <Menu/>
        <Routes>
            <Route path="/" element={<Home/>}/> 
            <Route path="/update/:id" element={<UpdateElement/>}/>
            <Route path="/create" element={<Create/>}/>
        </Routes>
      </BrowserRouter>
    
    )
  }
}
