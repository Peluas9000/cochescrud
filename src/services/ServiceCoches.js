import axios from 'axios';
import Global from '../Global';

export default class ServiceCoches {

    getCoches(){
        return axios.get(`${Global.urlCoches}api/Coches`)
            .then(response => response.data);
    }

    getCocheId(id){
        return axios.get(`${Global.urlCoches}api/Coches/FindCoche/${id}`)
            .then(response => response.data);
    }

    updateCoche(coche){
        
        return axios.put(`${Global.urlCoches}api/Coches/UpdateCoche`, coche)
            .then(response => response.data);
    }
    createCoche(coche){
        return new Promise(function(resolve){
            let url=Global.urlCoches
            let request="api/Coches/InsertCoche"
            axios.post(url+request,coche).then(response=>{
                resolve(response.data);

            })
        })
    }

}
