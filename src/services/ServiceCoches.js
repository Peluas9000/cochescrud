import React, { Component } from 'react'
import axios from 'axios';
import Global from '../Global';

export default class ServiceCoches {

    getCoches(){
        return new Promise(function(resolve){
            let url=Global.urlCoches;
            let request="api/coches";

            axios.get(url+request).then(response=>{
                console.log(response.data);
                resolve(response.data);
            })

        })

    }

    updateCoche(coche){
        return new Promise(function(resolve){
            let url=Global.urlCoches;
            let request="api/Coches/UpdateCoche"+coche.id+"/"+coche.marca+"/"+coche.modelo+"/"+coche.conductor;
            axios.put(url+request).then(response=>{
                console.log(response.data);
                resolve(response.data);
            })
        })
    }
    




}
