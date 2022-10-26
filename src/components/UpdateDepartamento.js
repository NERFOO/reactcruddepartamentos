import React, { Component } from 'react';
import axios from 'axios';
import Global from '../Global';
import { Navigate } from 'react-router-dom';
import loading from './../assets/images/img1.jpg';

export default class UpdateDepartamento extends Component {

    state = {
        status : false ,
        statusPut : false ,
        departamento : {}
    }

    cajaNumeroRef = React.createRef();
    cajaNombreRef = React.createRef();
    cajaLocalidadRef = React.createRef();

    buscarDepartamento = () => {
        var id = this.props.id;
        var request = "/api/departamentos/" + id;
        var url = Global.urlDepartamentos + request;

        axios.get(url).then(res => {
            this.setState({
                departamento : res.data ,
                status : true
            });
        });
    }
    componentDidMount = () => {
        this.buscarDepartamento();
    }

    updateDepartamento = (e) => {
        e.preventDefault();

        var num = parseInt(this.cajaNumeroRef.current.value);
        var nom = this.cajaNombreRef.current.value;
        var loc = this.cajaLocalidadRef.current.value;

        var data = {
            numero : num ,
            nombre : nom ,
            localidad : loc
        };

        var request = "/api/departamentos/";
        var url = Global.urlDepartamentos + request;

        axios.put(url, data).then(res => {
            this.setState({
                statusPut : true
            })
        });

    }

    render() {
        if(this.state.status == false) {
            return (<div>
                <img src={loading} />
            </div>)
        } else {
            return (<div>
                <h1>Update Departamento</h1>

                {
                    this.state.statusPut == true &&
                    (<Navigate to="/" />)
                }

                <form style={{width:"60vw", margin:"auto"}}>
                    <input type="hidden" defaultValue={this.state.departamento.numero} ref={this.cajaNumeroRef}/>
                    <label>Nombre: </label>
                    <input type="text" defaultValue={this.state.departamento.nombre} className='form-control' ref={this.cajaNombreRef}/>
                    <label>Localidad: </label>
                    <input type="text" defaultValue={this.state.departamento.localidad} className='form-control' ref={this.cajaLocalidadRef}/> <br/>
                    <button className='btn btn-info' onClick={this.updateDepartamento}>Modificar departamento</button>
                </form>

            </div>)
        }
    }
}
