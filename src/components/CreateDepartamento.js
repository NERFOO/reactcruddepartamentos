import React, { Component } from 'react';
import axios from 'axios';
import Global from '../Global';
import { Navigate } from 'react-router-dom';

export default class CreateDepartamento extends Component {

    cajaNumeroRef = React.createRef();
    cajaNombreRef = React.createRef();
    cajaLocalidadRef = React.createRef();

    state = {
        mensaje: "" ,
        status: false
    }

    insertDepartamento = (e) => {
        e.preventDefault();

        var request = "/api/departamentos/";
        var url = Global.urlDepartamentos + request;

        var numero = parseInt(this.cajaNumeroRef.current.value);
        var nombre = this.cajaNombreRef.current.value;
        var localidad = this.cajaLocalidadRef.current.value;

        //REACT PERMITE DECLARAR OBJETOS CON FORMATO JSON
        //DECLARAMOS UN AVARIABLE CON LAS PROPIEDADES DEL API JSON
        var departamento = {
            numero : numero ,
            nombre : nombre ,
            localidad : localidad
        };

        //EN AXIOS EÑL METODO POST RECIBE DOS PARAMETROS
        //URL DEL API # OBJETO JSON PARA EL API
        axios.post(url, departamento).then( res => {
            this.setState({
                status : true ,
                mensaje : "Departamento insertado!!!"
            })
        });
    }

    render() {
        if(this.state.status == true) {
            return (<Navigate to="/"/>)
        }
        return (<div>
            <h1>Create Departamento</h1>

            <form>
                <label>Numero: </label>
                <input type="text" className='form-control' ref={this.cajaNumeroRef} required/>
                <label>Nombre: </label>
                <input type="text" className='form-control' ref={this.cajaNombreRef} required/>
                <label>Localidad: </label>
                <input type="text" className='form-control' ref={this.cajaLocalidadRef} required/>

                <button className='btn btn-info' onClick={this.insertDepartamento}>Insertar deprtamento</button>
            </form>

            <h2 style={{color:"blue"}}>{this.state.mensaje}</h2>

        </div>)
    }
}
